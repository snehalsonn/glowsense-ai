from fastapi import APIRouter, UploadFile, File
import random

router = APIRouter()

@router.post("/scan")
async def scan_skin(file: UploadFile = File(...)):

    result = {
        "skin_type": random.choice(
            [
                "Dry",
                "Oily",
                "Combination",
                "Normal"
            ]
        ),

        "acne": random.choice(
            [
                "Low",
                "Medium",
                "High"
            ]
        ),

        "pigmentation": random.choice(
            [
                "Low",
                "Medium"
            ]
        ),

        "oiliness": random.choice(
            [
                "Low",
                "Medium",
                "High"
            ]
        ),

        "confidence": "96%"
    }

    return result