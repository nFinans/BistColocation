from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from supabase import create_client, Client
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (Orijinal status_checks için)
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'privyalgo')]

# Supabase connection (Ödemeler ve Siparişler için)
supabase_url: str = os.environ.get("SUPABASE_URL", "")
supabase_key: str = os.environ.get("SUPABASE_KEY", "")
supabase: Client = create_client(supabase_url, supabase_key)

app = FastAPI()
api_router = APIRouter(prefix="/api")

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ColocationOrderRequest(BaseModel):
    planId: str
    planName: str
    price: str
    name: str
    surname: str
    email: str
    gsmNumber: str
    identityNumber: str
    address: str
    district: str
    city: str
    username: str
    password: str

@api_router.get("/")
async def root():
    return {"message": "Colocation API Online"}

@api_router.post("/payment/initialize-link")
async def initialize_link_payment(data: ColocationOrderRequest):
    try:
        # Form verilerini doğrudan SUPABASE'e 'orders' tablosuna kaydediyoruz
        order_data = {
            "order_id": f"COLO-{uuid.uuid4().hex[:8]}",
            "name": data.name,
            "surname": data.surname,
            "email": data.email,
            "gsmNumber": data.gsmNumber,
            "planId": data.planId,
            "planName": data.planName,
            "price": data.price,
            "terminal_username": data.username,
            "terminal_password": data.password,
            "payment_status": "Ödeme Bekleniyor (Link)",
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        
        # Supabase kayıt işlemi
        supabase.table("orders").insert(order_data).execute()
        
        # Kullanıcıyı statik İyzico linkine yönlendiriyoruz
        return {
            "status": "success",
            "paymentPageUrl": "https://iyzi.link/AKubUw"
        }
    except Exception as e:
        logger.error(f"Supabase Order Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Sipariş kaydedilemedi, lütfen tekrar deneyin.")

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
