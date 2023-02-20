from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.company import router as CompanyRouter

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"Messagde": "Hello World!!!"}


app.include_router(router=CompanyRouter)
