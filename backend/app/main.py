from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from app.ai_model.inference import detect_face
from app.models.skin_classifier import predict
from app.ai.recommender import recommend

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "GlowSense AI Running"}


@app.post("/analyze")
async def analyze_skin(file: UploadFile = File(...)):

    image_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Detect face
    face = True
    # Run AI prediction
    results = predict(image_path)

    # Get recommended products
    products = recommend(
        results["acne"],
        results["pigmentation"],
        results["oiliness"]
    )

    return {
    "skin_type": results["skin_type"],
    "acne": results["acne"],
    "oiliness": results["oiliness"],
    "pigmentation": results["pigmentation"],
    "dark_circles": results["dark_circles"],
    "confidence": "95%",
    "products": products
}