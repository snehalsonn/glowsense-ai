products = [

    {
        "name": "CeraVe Hydrating Cleanser",
        "concerns": ["dryness", "sensitive", "oiliness"]
    },

    {
        "name": "CeraVe Foaming Cleanser",
        "concerns": ["acne", "oiliness"]
    },

    {
        "name": "Minimalist Niacinamide Serum",
        "concerns": ["acne", "pigmentation", "oiliness"]
    },

    {
        "name": "The Ordinary Niacinamide",
        "concerns": ["acne", "pigmentation"]
    },

    {
        "name": "Cetaphil Moisturizer",
        "concerns": ["dryness"]
    },

    {
        "name": "Neutrogena Hydro Boost",
        "concerns": ["dryness", "oiliness"]
    },

    {
        "name": "Dot & Key Sunscreen SPF50",
        "concerns": ["pigmentation", "sun"]
    },

    {
        "name": "COSRX Snail Mucin",
        "concerns": ["barrier", "pigmentation"]
    }

]


def recommend(prediction):

    recommendations = []

    if prediction["acne"] >= 50:
        recommendations.append("CeraVe Foaming Cleanser")
        recommendations.append("Minimalist Niacinamide Serum")

    if prediction["oiliness"] >= 50:
        recommendations.append("Neutrogena Hydro Boost")

    if prediction["pigmentation"] >= 40:
        recommendations.append("The Ordinary Niacinamide")
        recommendations.append("Dot & Key Sunscreen SPF50")

    if prediction["dark_circles"] >= 40:
        recommendations.append("COSRX Snail Mucin")

    if prediction["redness"] >= 40:
        recommendations.append("Cetaphil Moisturizer")

    # Remove duplicates
    recommendations = list(dict.fromkeys(recommendations))

    # Fallback recommendation
    if len(recommendations) == 0:
        recommendations.append("Cetaphil Moisturizer")

    return recommendations