import random

def predict(image_path):
    return {
        "skin_type": random.choice(["Oily", "Dry", "Combination", "Normal"]),
        "acne": random.randint(0, 100),
        "pigmentation": random.randint(0, 100),
        "oiliness": random.randint(0, 100),
        "dark_circles": random.randint(0, 100),
    }