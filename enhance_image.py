import sys
try:
    from PIL import Image, ImageEnhance, ImageFilter
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageEnhance, ImageFilter

def enhance_image(input_path, output_path):
    print(f"Opening {input_path}...")
    img = Image.open(input_path)
    
    # 1. Upscale by 1.5x to improve resolution
    new_size = (int(img.width * 1.5), int(img.height * 1.5))
    print(f"Resizing from {img.width}x{img.height} to {new_size[0]}x{new_size[1]}")
    img = img.resize(new_size, Image.Resampling.LANCZOS)
    
    # 2. Sharpen the image
    print("Sharpening image...")
    enhancer_sharp = ImageEnhance.Sharpness(img)
    img = enhancer_sharp.enhance(1.5)  # 1.0 is original, >1.0 is sharpened
    
    # 3. Enhance color slightly
    print("Enhancing color...")
    enhancer_color = ImageEnhance.Color(img)
    img = enhancer_color.enhance(1.2)
    
    # 4. Enhance contrast slightly
    print("Enhancing contrast...")
    enhancer_contrast = ImageEnhance.Contrast(img)
    img = enhancer_contrast.enhance(1.1)
    
    # Save the output
    print(f"Saving to {output_path}...")
    img.save(output_path, quality=95)
    print("Done!")

if __name__ == "__main__":
    input_file = "public/Gemini_Generated_Image_.jpg"
    output_file = "public/Gemini_Generated_Image_Enhanced.jpg"
    enhance_image(input_file, output_file)
