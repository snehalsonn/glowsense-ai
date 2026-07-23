import cv2
import numpy as np


def analyze(face):

    hsv = cv2.cvtColor(face, cv2.COLOR_BGR2HSV)

    brightness = hsv[:, :, 2].mean()

    saturation = hsv[:, :, 1].mean()

    acne = min(100, int(saturation / 2))

    oiliness = min(100, int(brightness / 2))

    pigmentation = min(100, int(np.std(face)))

    dark_circles = max(
        0,
        min(
            100,
            int(100 - brightness / 2)
        )
    )

    if oiliness > 60:

        skin = "Oily"

    elif oiliness > 40:

        skin = "Combination"

    else:

        skin = "Dry"

    return {

        "skin_type": skin,

        "acne": acne,

        "oiliness": oiliness,

        "pigmentation": pigmentation,

        "dark_circles": dark_circles

    }