from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.dashboard import router as dashboard_router
from routers.forecast import router as forecast_router

from database.database import engine
from database.models_db import Base
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_router)
app.include_router(forecast_router)
    