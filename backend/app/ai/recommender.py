import pandas as pd

# Load product database
products = pd.read_csv("app/database/products.csv")


def recommend(acne, pigmentation, oiliness):

    recommendations = []

    for _, product in products.iterrows():

        score = 0

        if acne > 50 and product["acne"] == 1:
            score += 3

        if pigmentation > 50 and product["pigmentation"] == 1:
            score += 3

        if oiliness > 50 and product["oiliness"] == 1:
            score += 3

        if score > 0:
            recommendations.append({
                "score": score,
                "brand": product["brand"],
                "name": product["name"],
                "category": product["category"],
                "price": product["price"],
                "rating": product["rating"],
                "image": product["image"],
                "description": product["description"]
            })

    recommendations = sorted(
        recommendations,
        key=lambda x: x["score"],
        reverse=True
    )

    return recommendations[:5]