import csv
import random

brands = {
    "CeraVe": [
        "Foaming Cleanser",
        "Hydrating Cleanser",
        "SA Cleanser",
        "PM Moisturizer",
        "AM Moisturizer",
        "Moisturizing Cream"
    ],

    "Cetaphil": [
        "Gentle Skin Cleanser",
        "Moisturizing Cream",
        "Daily Facial Cleanser",
        "Bright Healthy Radiance",
        "Moisturizing Lotion"
    ],

    "Minimalist": [
        "Niacinamide 10%",
        "Salicylic Acid",
        "Vitamin C Serum",
        "Alpha Arbutin",
        "Tranexamic Acid",
        "Retinol"
    ],

    "The Ordinary": [
        "Niacinamide 10%",
        "Azelaic Acid",
        "Retinol",
        "Vitamin C",
        "Buffet Serum"
    ],

    "La Roche-Posay": [
        "Effaclar Duo",
        "Effaclar Cleanser",
        "Toleriane Cleanser",
        "Anthelios SPF50"
    ],

    "COSRX": [
        "Snail Mucin",
        "Low pH Cleanser",
        "BHA Blackhead Power",
        "AHA Whitehead Power"
    ],

    "Neutrogena": [
        "Hydro Boost",
        "Oil Free Acne Wash",
        "Ultra Sheer SPF50"
    ],

    "Dot & Key": [
        "Vitamin C Serum",
        "Barrier Repair Cream",
        "Watermelon Sunscreen",
        "Cica Gel"
    ]
}

categories = [
    "Cleanser",
    "Serum",
    "Moisturizer",
    "Sunscreen",
    "Cream",
    "Treatment"
]

skin_types = [
    "Dry",
    "Oily",
    "Combination",
    "Sensitive",
    "All"
]

ingredients = [
    "Niacinamide",
    "Ceramides",
    "Vitamin C",
    "Salicylic Acid",
    "Hyaluronic Acid",
    "Retinol",
    "Snail Mucin",
    "Centella"
]

with open("products.csv", "w", newline="", encoding="utf-8") as file:

    writer = csv.writer(file)

    writer.writerow([
        "id",
        "brand",
        "name",
        "category",
        "image",
        "price",
        "rating",
        "skin_type",
        "acne",
        "pigmentation",
        "oiliness",
        "dryness",
        "dark_circles",
        "ingredients",
        "description"
    ])

    pid = 1

    while pid <= 500:

        brand = random.choice(list(brands.keys()))

        product = random.choice(brands[brand])

        image = (
            product.lower()
            .replace(" ", "_")
            .replace("%", "")
            + ".jpg"
        )

        writer.writerow([
            pid,
            brand,
            product,
            random.choice(categories),
            image,
            random.randint(300, 3000),
            round(random.uniform(4.0, 5.0), 1),
            random.choice(skin_types),
            random.randint(0, 1),
            random.randint(0, 1),
            random.randint(0, 1),
            random.randint(0, 1),
            random.randint(0, 1),
            random.choice(ingredients),
            "Recommended by GlowSense AI"
        ])

        pid += 1

print("✅ 500 skincare products generated!")