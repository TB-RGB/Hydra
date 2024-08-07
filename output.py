from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Load the original image
original_image_path = "/mnt/data/Canva_logo_draft.png"
original_image = Image.open(original_image_path)

# Create a blank canvas with white background
canvas_size = original_image.size
canvas = Image.new("RGB", canvas_size, "white")

# Function to draw a simplified waveform
def draw_waveform(draw, start_x, start_y, end_x, end_y, color, num_points=10):
    points = [(start_x, start_y)]
    for i in range(1, num_points - 1):
        x = start_x + (end_x - start_x) * i / (num_points - 1)
        y = start_y + (end_y - start_y) * (0.5 + 0.5 * np.sin(2 * np.pi * i / (num_points - 1)))
        points.append((x, y))
    points.append((end_x, end_y))
    draw.line(points, fill=color, width=2)

# Function to draw a musical note
def draw_musical_note(draw, x, y, note_size, color):
    circle_radius = note_size // 3
    line_length = note_size * 2
    draw.line([(x, y), (x, y - line_length)], fill=color, width=5)
    draw.ellipse([(x - circle_radius, y - circle_radius), (x + circle_radius, y + circle_radius)], fill=color)

# Variation 1: Simplified Waveform
simplified_waveform_image = canvas.copy()
draw = ImageDraw.Draw(simplified_waveform_image)
draw_musical_note(draw, 50, 200, 30, "black")
draw_musical_note(draw, 250, 200, 30, "black")
draw_waveform(draw, 50, 100, 250, 100, "black", num_points=20)

# Variation 2: Monochromatic Design (using blue)
monochromatic_image = canvas.copy()
draw = ImageDraw.Draw(monochromatic_image)
draw_musical_note(draw, 50, 200, 30, "blue")
draw_musical_note(draw, 250, 200, 30, "blue")
draw_waveform(draw, 50, 100, 250, 100, "blue", num_points=20)

# Variation 3: Geometric Waveform (using a sine wave)
geometric_waveform_image = canvas.copy()
draw = ImageDraw.Draw(geometric_waveform_image)
draw_musical_note(draw, 50, 200, 30, "black")
draw_musical_note(draw, 250, 200, 30, "black")
draw_waveform(draw, 50, 100, 250, 100, "black", num_points=10)

# Variation 4: Outline Style
outline_image = canvas.copy()
draw = ImageDraw.Draw(outline_image)
draw_musical_note(draw, 50, 200, 30, "black")
draw_musical_note(draw, 250, 200, 30, "black")
draw_waveform(draw, 50, 100, 250, 100, "black", num_points=20)

# Variation 5: Iconic Representation (simplified zigzag)
iconic_representation_image = canvas.copy()
draw = ImageDraw.Draw(iconic_representation_image)
draw_musical_note(draw, 50, 200, 30, "black")
draw_musical_note(draw, 250, 200, 30, "black")
zigzag_points = [(50, 100), (80, 120), (110, 80), (140, 120), (170, 80), (200, 120), (230, 80), (250, 100)]
draw.line(zigzag_points, fill="black", width=2)

# Save the variations
simplified_waveform_image.save("/mnt/data/simplified_waveform_image.png")
monochromatic_image.save("/mnt/data/monochromatic_image.png")
geometric_waveform_image.save("/mnt/data/geometric_waveform_image.png")
outline_image.save("/mnt/data/outline_image.png")
iconic_representation_image.save("/mnt/data/iconic_representation_image.png")

(simplified_waveform_image_path, monochromatic_image_path, geometric_waveform_image_path, outline_image_path, iconic_representation_image_path) = (
    "/mnt/data/simplified_waveform_image.png",
    "/mnt/data/monochromatic_image.png",
    "/mnt/data/geometric_waveform_image.png",
    "/mnt/data/outline_image.png",
    "/mnt/data/iconic_representation_image.png"
)

(simplified_waveform_image_path, monochromatic_image_path, geometric_waveform_image_path, outline_image_path, iconic_representation_image_path)
