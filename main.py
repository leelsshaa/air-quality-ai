from fastapi import FastAPI

from routers.dashboard import router as dashboard_router
from routers.forecast import router as forecast_router
from routers.health import router as health_router

app = FastAPI()

app.include_router(dashboard_router)
app.include_router(forecast_router)
app.include_router(health_router)