import cv2
import numpy as np

from .model import model


def detect_face(image_path):

    results = model(image_path)

    if len(results) == 0:
        return None

    result = results[0]

    if len(result.boxes) == 0:
        return None

    box = result.boxes.xyxy[0].cpu().numpy()

    x1, y1, x2, y2 = map(int, box)

    image = cv2.imread(image_path)

    face = image[y1:y2, x1:x2]

    return face