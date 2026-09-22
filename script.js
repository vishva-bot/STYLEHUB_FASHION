// ============================================
// StyleHub — Combined JavaScript
// ============================================

// ============================================
// 1. DATA (data.js)
// ============================================

// StyleHub Product Database
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Leather Moto Jacket",
    category: "Men",
    subcategory: "Outerwear",
    price: 12999,
    originalPrice: 18999,
    discount: 31,
    badge: "Best Seller",
    colors: [
      { name: "Midnight Black", hex: "#1a1a1a" },
      { name: "Espresso Brown", hex: "#5c3a1e" },
      { name: "Olive Green", hex: "#556b2f" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 432,
    image: "images/photo-1591047139829-d91aecb6caea.jpg",
    images: [
      "images/photo-1591047139829-d91aecb6caea.jpg",
      "images/Grey boohooMAN Tall Technical Utility Cargo Pocket Harrington Jacket _ Boohoo.jpg"
    ],
    description: "Elevate your everyday wardrobe with our Premium Leather Moto Jacket. Designed with a rebellious yet sophisticated edge, this piece offers an impeccable slim fit that molds perfectly to your shape over time.",
    specs: ["100% Premium Full-Grain Sheep Leather", "Asymmetrical zip fastening and snap-button lapels", "Multiple zippered pockets and adjustable waist tabs", "Fully lined with breathable viscose for all-day comfort"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 2,
    name: "Oversized Cotton Tee",
    category: "Men",
    subcategory: "Basics",
    price: 299,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Sage", hex: "#9caf88" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 218,
    image: "images/Oversized Cotton Tee (front).jpg",
    images: [
      "images/Oversized Cotton Tee (front).jpg",
      "images/Oversized Cotton Tee back.jpg"
    ],
    description: "The perfect everyday essential. Our Oversized Cotton Tee features a relaxed, boxy silhouette crafted from premium 100% organic cotton for unparalleled comfort.",
    specs: ["100% Organic Cotton, 220 GSM", "Relaxed oversized fit", "Ribbed crew neckline", "Pre-shrunk fabric"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 3,
    name: "Tailored Black Blazer",
    category: "Men",
    subcategory: "Workwear",
    price: 4499,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1b2a4a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 156,
    image: "images/Tailored Black Blazer.jpg",
    images: [
      "images/Tailored Black Blazer.jpg",
      "images/Tailored Black Blazer.jpg"
    ],
    description: "Command attention in our Tailored Black Blazer. Cut from premium Italian wool blend, this blazer features a modern slim fit with structured shoulders and a clean silhouette.",
    specs: ["Italian wool-blend fabric", "Slim-fit tailored cut", "Two-button closure", "Interior pockets with satin lining"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    category: "Women",
    subcategory: "Outerwear",
    price: 599,
    originalPrice: 799,
    discount: 17,
    badge: null,
    colors: [
      { name: "Light Wash", hex: "#7eb4d2" },
      { name: "Dark Indigo", hex: "#2c3e6b" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 289,
    image: "images/Classic Denim Jacket.jpg",
    images: [
      "images/Classic Denim Jacket.jpg",
      "images/Classic Denim Jacket back.jpg"
    ],
    description: "A timeless wardrobe staple reimagined. Our Classic Denim Jacket features a flattering cropped fit with authentic washed detailing and brass hardware.",
    specs: ["100% Premium Denim Cotton", "Cropped relaxed fit", "Brass button closure", "Adjustable button cuffs"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 5,
    name: "Floral Midi Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 3299,
    originalPrice: null,
    discount: 0,
    badge: "TRENDING",
    colors: [
      { name: "Blush Floral", hex: "#f4c2c2" },
      { name: "Navy Floral", hex: "#1b2a4a" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 345,
    image: "images/Floral Midi Dress.webp",
    images: [
      "images/Floral Midi Dress.webp",
      "images/Floral Midi Dress back.webp"
    ],
    description: "Embrace effortless elegance with our Floral Midi Dress. Featuring a romantic print on flowing viscose fabric, this dress transitions seamlessly from brunch to evening.",
    specs: ["100% Viscose fabric", "V-neckline with wrap detail", "Self-tie waist belt", "Midi length with side slit"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: false
  },
  {
    id: 6,
    name: "Relaxed Fit Chinos",
    category: "Men",
    subcategory: "Bottoms",
    price: 2499,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Khaki", hex: "#c3b091" },
      { name: "Olive", hex: "#556b2f" },
      { name: "Navy", hex: "#1b2a4a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 178,
    image: "images/Cargo Jogger Pants.jpg",
    images: [
      "images/Cargo Jogger Pants.jpg",
      "images/Cargo Jogger Pants first.jpg"
    ],
    description: "Our Relaxed Fit Chinos deliver all-day comfort without sacrificing style. Made from a soft cotton-stretch blend with a gently tapered leg.",
    specs: ["98% Cotton, 2% Elastane", "Relaxed fit with tapered leg", "Button fly with zip closure", "Side and back pockets"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 7,
    name: "Utility Technical Jacket",
    category: "Men",
    subcategory: "Outerwear",
    price: 4199,
    originalPrice: 5999,
    discount: 30,
    badge: null,
    colors: [
      { name: "Dark Navy", hex: "#1b2a4a" },
      { name: "Forest Green", hex: "#2d5a27" }
    ],
    sizes: ["M", "L", "XL"],
    rating: 4.6,
    reviews: 203,
    image: "images/Grey boohooMAN Tall Technical Utility Cargo Pocket Harrington Jacket _ Boohoo.jpg",
    images: [
      "images/Grey boohooMAN Tall Technical Utility Cargo Pocket Harrington Jacket _ Boohoo.jpg",
      "images/photo-1591047139829-d91aecb6caea.jpg"
    ],
    description: "Engineered for the modern explorer. Our Utility Technical Jacket combines weather-resistant performance with urban style.",
    specs: ["Water-resistant nylon shell", "Fleece-lined interior", "Multiple utility pockets", "Adjustable hood and cuffs"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 8,
    name: "Platform Minimalist Sneaker",
    category: "Footwear",
    subcategory: "Sneakers",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    badge: null,
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.3,
    reviews: 412,
    image: "images/Platform Minimalist Sneaker.jpg",
    images: [
      "images/Platform Minimalist Sneaker.jpg",
      "images/Platform Minimalist Sneaker back.jpg"
    ],
    description: "Step into elevated minimalism. Our Platform Sneaker features a clean design on a chunky sole for a modern streetwear aesthetic.",
    specs: ["Premium leather upper", "Cushioned platform sole", "Memory foam insole", "Rubber outsole for grip"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 9,
    name: "Structured Leather Crossbody",
    category: "Accessories",
    subcategory: "Bags",
    price: 3149,
    originalPrice: 4499,
    discount: 30,
    badge: null,
    colors: [
      { name: "Tan", hex: "#d2691e" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 167,
    image: "images/Leather Backpack bac.jpg",
    images: [
      "images/Leather Backpack bac.jpg",
      "images/Leather Backpack.jpg"
    ],
    description: "Refined sophistication meets everyday practicality. Our Structured Leather Crossbody is crafted from full-grain leather with gold-tone hardware.",
    specs: ["Full-grain Italian leather", "Adjustable crossbody strap", "Gold-tone hardware", "Interior zip and slip pockets"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 10,
    name: "Heavyweight Oversized Hoodie",
    category: "Men",
    subcategory: "Essentials",
    price: 1875,
    originalPrice: 2500,
    discount: 25,
    badge: null,
    colors: [
      { name: "Sage Green", hex: "#8fbc8f" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Cream", hex: "#fffdd0" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 521,
    image: "images/Heavyweight Oversized Hoodie.jpg",
    images: [
      "images/Heavyweight Oversized Hoodie.jpg",
      "images/Heavyweight Oversized Hoodie back.jpg"
    ],
    description: "Unmatched comfort in our Heavyweight Oversized Hoodie. Made from 400 GSM French terry cotton for a luxuriously thick feel.",
    specs: ["400 GSM French Terry Cotton", "Oversized drop-shoulder fit", "Kangaroo pocket", "Ribbed cuffs and hem"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 11,
    name: "Quilted Puffer Jacket",
    category: "Women",
    subcategory: "Outerwear",
    price: 3899,
    originalPrice: 5999,
    discount: 35,
    badge: null,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Dusty Rose", hex: "#dcae96" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 198,
    image: "images/Quilted Puffer Jacket.jpg",
    images: [
      "images/Quilted Puffer Jacket.jpg",
      "images/Quilted Puffer Jacket back.jpg"
    ],
    description: "Stay warm without compromising style. Our Quilted Puffer Jacket features synthetic down insulation with a flattering cinched waist.",
    specs: ["Water-resistant outer shell", "Synthetic down insulation", "Two-way zip closure", "Detachable faux-fur hood"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 12,
    name: "Pro Series Smart Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    badge: null,
    colors: [
      { name: "Midnight Black", hex: "#1a1a1a" },
      { name: "Silver", hex: "#c0c0c0" }
    ],
    sizes: ["One Size"],
    rating: 4.4,
    reviews: 342,
    image: "images/Pro Series Smart Watch.jpg",
    images: [
      "images/Pro Series Smart Watch.jpg",
      "images/Pro Series Smart Watch back.jpg"
    ],
    description: "Track your fitness and stay connected with the Pro Series Smart Watch. Features health monitoring, GPS, and a stunning AMOLED display.",
    specs: ["1.4\" AMOLED Display", "Heart rate & SpO2 monitoring", "Built-in GPS", "5 ATM water resistance"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 13,
    name: "Slim Fit Dark Wash Jeans",
    category: "Men",
    subcategory: "Bottoms",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    badge: null,
    colors: [
      { name: "Dark Indigo", hex: "#2c3e6b" },
      { name: "Washed Black", hex: "#3b3b3b" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 287,
    image: "images/Slim Fit Dark Wash Jeans.jpg",
    images: [
      "images/Slim Fit Dark Wash Jeans.jpg",
      "images/Slim Fit Dark Wash Jeans back.jpg"
    ],
    description: "Our Slim Fit Dark Wash Jeans deliver a sleek, modern silhouette. Premium Japanese denim with just the right amount of stretch.",
    specs: ["98% Japanese Denim, 2% Elastane", "Slim fit through hip and thigh", "5-pocket construction", "Zip fly with button closure"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 14,
    name: "Classic Aviator Sunglasses",
    category: "Accessories",
    subcategory: "Eyewear",
    price: 2499,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Gold/Green", hex: "#c5a55a" },
      { name: "Silver/Blue", hex: "#8eaabe" }
    ],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 156,
    image: "images/Classic Aviator Sunglasses.jpg",
    images: [
      "images/Classic Aviator Sunglasses.jpg",
      "images/Classic Aviator Sunglasses back.jpg"
    ],
    description: "Iconic style meets premium UV protection. Our Classic Aviator Sunglasses feature lightweight metal frames and polarized lenses.",
    specs: ["Polarized CR-39 lenses", "100% UV400 protection", "Lightweight metal frame", "Spring-loaded hinges"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 15,
    name: "Leather Chelsea Boots",
    category: "Footwear",
    subcategory: "Boots",
    price: 6999,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Dark Brown", hex: "#3e2723" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.8,
    reviews: 224,
    image: "images/Platform Minimalist Sneaker back.jpg",
    images: [
      "images/Platform Minimalist Sneaker back.jpg",
      "images/Platform Minimalist Sneaker.jpg"
    ],
    description: "A modern gentleman's essential. Our Leather Chelsea Boots are handcrafted from full-grain calfskin with elastic side panels and a stacked leather heel.",
    specs: ["Full-grain calfskin leather", "Elastic side panels", "Goodyear welt construction", "Leather sole with rubber insert"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 16,
    name: "Linen Summer Shirt",
    category: "Men",
    subcategory: "Basics",
    price: 1799,
    originalPrice: 2299,
    discount: 22,
    badge: "NEW",
    colors: [
      { name: "Sky Blue", hex: "#87ceeb" },
      { name: "White", hex: "#ffffff" },
      { name: "Peach", hex: "#ffdab9" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 134,
    image: "images/Linen Summer Shirt.jpg",
    images: [
      "images/Linen Summer Shirt.jpg",
      "images/Linen Summer Shirt back.jpg"
    ],
    description: "Stay cool and look sharp with our Linen Summer Shirt. Lightweight and breathable, perfect for warm-weather days and vacation styling.",
    specs: ["100% European Linen", "Regular fit", "Button-down collar", "Curved hem"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: true
  },
  {
    id: 17,
    name: "Wrap Midi Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    badge: "TRENDING",
    colors: [
      { name: "Burgundy", hex: "#722f37" },
      { name: "Emerald", hex: "#046307" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 312,
    image: "images/Wrap Midi Dress.webp",
    images: [
      "images/Wrap Midi Dress.webp",
      "images/Wrap Midi Dress back.webp"
    ],
    description: "Elegant and versatile, our Wrap Midi Dress flatters every body type. Made from flowing crepe fabric with a self-tie waist.",
    specs: ["100% Polyester Crepe", "True wrap silhouette", "Self-tie belt", "Midi length"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 18,
    name: "Cargo Jogger Pants",
    category: "Men",
    subcategory: "Bottoms",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    badge: null,
    colors: [
      { name: "Olive", hex: "#556b2f" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Khaki", hex: "#c3b091" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.3,
    reviews: 245,
    image: "images/Cargo Jogger Pants first.jpg",
    images: [
      "images/Cargo Jogger Pants first.jpg",
      "images/Cargo Jogger Pants.jpg"
    ],
    description: "Our Cargo Jogger Pants combine streetwear style with ultimate comfort. Elastic waistband with adjustable drawcord and multiple utility pockets.",
    specs: ["Cotton-polyester blend", "Elastic waistband with drawcord", "6 utility pockets", "Ribbed ankle cuffs"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 19,
    name: "Premium Polo Shirt",
    category: "Men",
    subcategory: "Basics",
    price: 1499,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "Navy", hex: "#1b2a4a" },
      { name: "White", hex: "#ffffff" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Burgundy", hex: "#722f37" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 189,
    image: "images/Premium Polo Shirt.jpg",
    images: [
      "images/Premium Polo Shirt.jpg",
      "images/Premium Polo Shirt back.jpg"
    ],
    description: "Our Premium Polo Shirt is crafted from piqué cotton with a modern slim fit. Perfect for both casual and smart-casual occasions.",
    specs: ["100% Piqué Cotton", "Slim fit", "Two-button placket", "Ribbed collar and cuffs"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 20,
    name: "Canvas Bucket Hat",
    category: "Accessories",
    subcategory: "Hats",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    badge: null,
    colors: [
      { name: "Beige", hex: "#d2b48c" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Olive", hex: "#556b2f" }
    ],
    sizes: ["One Size"],
    rating: 4.4,
    reviews: 167,
    image: "images/Canvas Bucket Hat.jpg",
    images: [
      "images/Canvas Bucket Hat.jpg",
      "images/Canvas Bucket Hat back.jpg"
    ],
    description: "A streetwear essential. Our Canvas Bucket Hat provides sun protection with effortless style.",
    specs: ["100% Cotton Canvas", "Embroidered eyelets", "Stitched brim", "One size fits most"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 21,
    name: "Running Performance Shoes",
    category: "Footwear",
    subcategory: "Athletic",
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    badge: "Best Seller",
    colors: [
      { name: "Black/Volt", hex: "#1a1a1a" },
      { name: "White/Blue", hex: "#f0f0ff" }
    ],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.8,
    reviews: 534,
    image: "images/Running Performance Shoes.jpg",
    images: [
      "images/Running Performance Shoes.jpg",
      "images/Running Performance Shoes back.jpg"
    ],
    description: "Engineered for speed and comfort. Our Running Performance Shoes feature responsive cushioning and breathable mesh upper.",
    specs: ["Breathable mesh upper", "Responsive foam midsole", "Rubber outsole", "Reflective details"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 22,
    name: "Ribbed Crop Top",
    category: "Women",
    subcategory: "Basics",
    price: 999,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Lavender", hex: "#b57edc" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 278,
    image: "images/Ribbed Crop Top.jpg",
    images: [
      "images/Ribbed Crop Top.jpg",
      "images/Ribbed Crop Top back.jpg"
    ],
    description: "A wardrobe essential. Our Ribbed Crop Top features a flattering silhouette in soft, stretchy ribbed cotton.",
    specs: ["95% Cotton, 5% Elastane", "Ribbed texture", "Cropped length", "Round neckline"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 23,
    name: "Wool Blend Overcoat",
    category: "Men",
    subcategory: "Outerwear",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    badge: null,
    colors: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Charcoal", hex: "#36454f" }
    ],
    sizes: ["M", "L", "XL"],
    rating: 4.9,
    reviews: 97,
    image: "images/Wool Blend Overcoat.jpg",
    images: [
      "images/Wool Blend Overcoat.jpg",
      "images/Wool Blend Overcoat back.jpg"
    ],
    description: "Timeless sophistication in our Wool Blend Overcoat. Tailored for a clean silhouette with notch lapels and a single-breasted front.",
    specs: ["70% Wool, 30% Polyester", "Notch lapel", "Single-breasted two-button", "Full satin lining"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 24,
    name: "Leather Backpack",
    category: "Accessories",
    subcategory: "Bags",
    price: 4499,
    originalPrice: 5999,
    discount: 25,
    badge: "TRENDING",
    colors: [
      { name: "Tan", hex: "#d2691e" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["One Size"],
    rating: 4.6,
    reviews: 203,
    image: "images/Leather Backpack.jpg",
    images: [
      "images/Leather Backpack.jpg",
      "images/Leather Backpack bac.jpg"
    ],
    description: "Style meets function in our Leather Backpack. Premium full-grain leather with padded laptop compartment and organized interior.",
    specs: ["Full-grain leather", "Padded 15\" laptop compartment", "Adjustable shoulder straps", "Antique brass hardware"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 25,
    name: "Vintage Graphic Tee",
    category: "Men",
    subcategory: "Basics",
    price: 1099,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "Washed Black", hex: "#3b3b3b" },
      { name: "Off White", hex: "#faf0e6" },
      { name: "Dusty Blue", hex: "#6699cc" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.3,
    reviews: 412,
    image: "images/Vintage Graphic Tee.jpg",
    images: [
      "images/Vintage Graphic Tee.jpg",
      "images/Vintage Graphic Tee back.jpg"
    ],
    description: "Express yourself with our Vintage Graphic Tee. Pre-washed for that perfect broken-in feel with retro-inspired artwork.",
    specs: ["100% Cotton, 180 GSM", "Pre-washed vintage finish", "Screen-printed graphic", "Relaxed fit"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  }
];

// Category data for navigation
const CATEGORIES = [
  { name: "Men", icon: "👔", count: 12, image: "images/Premium Polo Shirt.jpg" },
  { name: "Women", icon: "👗", count: 6, image: "images/Floral Midi Dress.webp" },
  { name: "Footwear", icon: "👟", count: 4, image: "images/Running Performance Shoes.jpg" },
  { name: "Accessories", icon: "⌚", count: 5, image: "images/Pro Series Smart Watch.jpg" }
];

// Sample orders for order history
const SAMPLE_ORDERS = [
  {
    id: "ORD-2026-8891",
    date: "Aug 28, 2026",
    total: 4299,
    status: "Shipped",
    statusColor: "#e8590c",
    items: [
      { productId: 13, size: "M", qty: 1 },
      { productId: 2, size: "L", qty: 1 }
    ]
  },
  {
    id: "ORD-2026-7422",
    date: "Aug 15, 2026",
    total: 3299,
    status: "Delivered",
    statusColor: "#2f9e44",
    items: [
      { productId: 5, size: "S", qty: 1 }
    ]
  },
  {
    id: "ORD-2026-6105",
    date: "Jul 20, 2026",
    total: 5500,
    status: "Cancelled",
    statusColor: "#e03131",
    items: [
      { productId: 8, size: "9", qty: 1 }
    ]
  }
];


// ============================================
// 2. COMPONENTS — Navbar (navbar.js)
// ============================================

// Navbar Component
function renderNavbar() {
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  return `
    <div class="announcement-bar" id="announcement-bar">
      FREE SHIPPING ON ORDERS ABOVE <span>₹999</span> &nbsp;•&nbsp; <a href="#/shop">SHOP NOW →</a>
      <button class="close-btn" onclick="closeAnnouncement()" aria-label="Close">✕</button>
    </div>
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a class="navbar-logo" onclick="navigate('/')" role="button">STYLE<em>HUB</em></a>
        <div class="navbar-links" id="nav-links">
          <a onclick="navigate('/')" data-page="home">Home</a>
          <a onclick="navigate('/shop')" data-page="shop">Shop</a>
          <a onclick="navigate('/shop?category=Men')" data-page="categories">Categories</a>
          <a onclick="navigate('/shop?new=true')" data-page="new">New Arrivals</a>
          <a onclick="navigate('/shop?sale=true')" class="sale-link" data-page="sale">Sale</a>
        </div>
        <div class="navbar-actions">
          <button class="navbar-action-btn" onclick="toggleSearch()" aria-label="Search" id="search-btn">🔍</button>
          <button class="navbar-action-btn" onclick="navigate('/shop')" aria-label="Wishlist" id="wishlist-btn">
            ♡
            ${wishlistCount > 0 ? `<span class="badge">${wishlistCount}</span>` : ''}
          </button>
          <button class="navbar-action-btn" onclick="navigate('/cart')" aria-label="Cart" id="cart-btn">
            🛒
            ${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}
          </button>
          <button class="navbar-action-btn" onclick="navigate('/orders')" aria-label="Account" id="account-btn">👤</button>
          <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">☰</button>
        </div>
      </div>
    </nav>
    <div class="mobile-nav" id="mobile-nav">
      <button class="close-mobile" onclick="toggleMobileMenu()">✕</button>
      <a onclick="navigate('/'); toggleMobileMenu()">Home</a>
      <a onclick="navigate('/shop'); toggleMobileMenu()">Shop</a>
      <a onclick="navigate('/shop?category=Men'); toggleMobileMenu()">Categories</a>
      <a onclick="navigate('/shop?new=true'); toggleMobileMenu()">New Arrivals</a>
      <a onclick="navigate('/shop?sale=true'); toggleMobileMenu()" style="color:var(--accent-red)">Sale</a>
      <a onclick="navigate('/cart'); toggleMobileMenu()">Cart (${cartCount})</a>
      <a onclick="navigate('/orders'); toggleMobileMenu()">My Orders</a>
    </div>
    <div class="search-overlay" id="search-overlay" onclick="closeSearch(event)">
      <div class="search-box">
        <button>🔍</button>
        <input type="text" placeholder="Search for products..." id="search-input" onkeyup="handleSearch(event)" autofocus>
        <button onclick="toggleSearch()">✕</button>
      </div>
    </div>
  `;
}

function closeAnnouncement() {
  const bar = document.getElementById('announcement-bar');
  if (bar) {
    bar.style.display = 'none';
  }
}

function toggleSearch() {
  const overlay = document.getElementById('search-overlay');
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    setTimeout(() => document.getElementById('search-input')?.focus(), 100);
  }
}

function closeSearch(e) {
  if (e.target.id === 'search-overlay') {
    toggleSearch();
  }
}

function handleSearch(e) {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      toggleSearch();
    }
  }
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.classList.toggle('active');
  // Lock/unlock body scroll
  if (mobileNav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function updateNavActive(page) {
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}


// ============================================
// 3. COMPONENTS — Footer (footer.js)
// ============================================

// Footer Component
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">STYLE<em>HUB</em></div>
            <p class="footer-desc">Your destination for high-velocity fashion commerce. Quality apparel, efficient delivery.</p>
            <div class="footer-social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">𝑓</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>
          <div>
            <h4 class="footer-heading">Company</h4>
            <div class="footer-links">
              <a href="#">About Us</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
              <a href="#">Press Releases</a>
            </div>
          </div>
          <div>
            <h4 class="footer-heading">Support</h4>
            <div class="footer-links">
              <a href="#">Shipping & Returns</a>
              <a href="#">FAQ</a>
              <a href="#">Contact Us</a>
              <a href="#">Size Guide</a>
            </div>
          </div>
          <div>
            <h4 class="footer-heading">Legal</h4>
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 StyleHub. All rights reserved.</span>
          <span>Made with ♥ in India</span>
        </div>
      </div>
    </footer>
  `;
}


// ============================================
// 4. PAGES — Home (home.js)
// ============================================

// Home Page
function renderHomePage() {
  const featured = PRODUCTS.filter(p => p.isTrending || p.badge === 'Best Seller').slice(0, 6);
  const newArrivals = PRODUCTS.filter(p => p.isNew || p.badge === 'NEW');
  const saleItems = PRODUCTS.filter(p => p.isSale).slice(0, 4);

  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('images/hero-banner.jpg')"></div>
      <div class="hero-content">
        <p class="hero-tag">NEW SEASON 2026</p>
        <h1 class="hero-title">DEFINE YOUR<br><em>STYLE.</em></h1>
        <p class="hero-subtitle">Discover fashion designed for your everyday confidence. Premium quality, curated collections.</p>
        <div class="hero-buttons">
          <button class="btn btn-primary btn-lg" onclick="navigate('/shop')">SHOP COLLECTION →</button>
          <button class="btn btn-outline btn-lg" onclick="navigate('/shop?new=true')">EXPLORE</button>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag">Browse By</p>
          <h2 class="section-title">Shop Categories</h2>
          <p class="section-subtitle">Find exactly what you're looking for</p>
        </div>
        <div class="categories-grid">
          ${CATEGORIES.map((cat, i) => `
            <div class="category-card fade-in" onclick="navigate('/shop?category=${cat.name}')" style="animation-delay: ${i * 0.1}s">
              <img class="category-card-img" src="${cat.image}" alt="${cat.name}" loading="lazy">
              <div class="category-card-overlay">
                <h3 class="category-card-name">${cat.name}</h3>
                <span class="category-card-count">${cat.count} Products</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured / Trending -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag">Curated For You</p>
          <h2 class="section-title">Trending Now</h2>
          <p class="section-subtitle">The most popular picks this season</p>
        </div>
        <div class="featured-scroll">
          ${featured.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag">Just Landed</p>
          <h2 class="section-title">New Arrivals</h2>
          <p class="section-subtitle">Fresh styles, just dropped</p>
        </div>
        <div class="products-grid">
          ${newArrivals.map(p => renderProductCard(p)).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <button class="btn btn-outline-dark" onclick="navigate('/shop?new=true')">View All New Arrivals →</button>
        </div>
      </div>
    </section>

    <!-- Sale Preview -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header fade-in">
          <p class="section-tag" style="color: var(--accent-red);">Flash Sale</p>
          <h2 class="section-title">Up to 50% Off</h2>
          <p class="section-subtitle">Limited time deals on top styles</p>
        </div>
        <div class="products-grid">
          ${saleItems.map(p => renderProductCard(p)).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <button class="btn btn-orange" onclick="navigate('/shop?sale=true')">Shop All Sale →</button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section">
      <div class="container">
        <div class="newsletter fade-in">
          <h2 class="newsletter-title">Stay in the Loop</h2>
          <p class="newsletter-subtitle">Subscribe for exclusive drops, style tips, and 10% off your first order.</p>
          <form class="newsletter-form" onsubmit="handleNewsletter(event)">
            <input type="email" placeholder="Enter your email address" required>
            <button class="btn btn-orange" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast('🎉 Subscribed! Check your inbox for 10% off.');
  e.target.reset();
}

// Shared Product Card Renderer
function renderProductCard(product) {
  const isWished = state.wishlist.includes(product.id);
  const defaultSize = product.sizes[1] || product.sizes[0];
  return `
    <div class="product-card fade-in" id="card-${product.id}">
      <div class="product-card-image" onclick="navigate('/product/${product.id}')">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge ${getBadgeClass(product.badge)}">${product.badge}</span>` : ''}
        ${!product.badge && product.discount > 0 ? `<span class="product-card-badge badge-sale">-${product.discount}%</span>` : ''}
        <button class="product-card-wishlist ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" aria-label="Add to wishlist">
          ${isWished ? '❤️' : '♡'}
        </button>
      </div>
      <div class="product-card-info">
        <p class="product-card-category">${product.subcategory}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-colors">
          ${product.colors.slice(0, 4).map(c => `<span class="color-dot" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
        </div>
        <div class="product-card-price">
          <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          ${product.discount > 0 ? `<span class="price-discount">${product.discount}% OFF</span>` : ''}
        </div>
        <button class="btn btn-orange btn-sm" onclick="event.stopPropagation(); addToCart(${product.id}, '${defaultSize}', '${product.colors[0].name}')">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  `;
}

function getBadgeClass(badge) {
  const map = {
    'NEW': 'badge-new',
    'TRENDING': 'badge-trending',
    'Best Seller': 'badge-best'
  };
  return map[badge] || 'badge-sale';
}


// ============================================
// 5. PAGES — Shop (shop.js)
// ============================================

// Shop Page
function renderShopPage(params) {
  const searchParams = new URLSearchParams(params);
  const categoryFilter = searchParams.get('category');
  const saleFilter = searchParams.get('sale') === 'true';
  const newFilter = searchParams.get('new') === 'true';
  const searchQuery = searchParams.get('search');

  let filtered = [...PRODUCTS];

  if (categoryFilter) {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }
  if (saleFilter) {
    filtered = filtered.filter(p => p.isSale);
  }
  if (newFilter) {
    filtered = filtered.filter(p => p.isNew);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    );
  }

  let pageTitle = 'Shop All';
  let pageSubtitle = 'Discover our complete collection. Fresh styles, just landed.';

  if (categoryFilter) {
    pageTitle = categoryFilter;
    pageSubtitle = `Browse our ${categoryFilter.toLowerCase()} collection`;
  }
  if (saleFilter) {
    pageTitle = 'Sale';
    pageSubtitle = 'Limited time deals on top styles. Don\'t miss out!';
  }
  if (newFilter) {
    pageTitle = 'New Arrivals';
    pageSubtitle = 'Discover the latest additions to our collection. Fresh styles, just landed.';
  }
  if (searchQuery) {
    pageTitle = `Search: "${searchQuery}"`;
    pageSubtitle = `${filtered.length} results found`;
  }

  const categories = ['Men', 'Women', 'Footwear', 'Accessories'];
  const catCounts = {};
  categories.forEach(cat => {
    catCounts[cat] = PRODUCTS.filter(p => p.category === cat).length;
  });

  return `
    <div class="container">
      <div class="shop-header fade-in">
        <h1 class="shop-title">${pageTitle}</h1>
        <p class="shop-subtitle">${pageSubtitle}</p>
      </div>

      ${saleFilter ? renderSaleBanner() : ''}

      <div class="shop-layout">
        <!-- Mobile Filter Toggle -->
        <button class="mobile-filter-btn" onclick="toggleFilters()">
          ☰ Filters
        </button>

        <!-- Filters Sidebar -->
        <div class="filters-overlay" id="filters-overlay" onclick="toggleFilters()"></div>
        <aside class="filters-sidebar fade-in" id="filters-sidebar">
          <div class="filters-header-mobile">
            <h3 class="filters-title">Filters</h3>
            <button class="filters-close-mobile" onclick="toggleFilters()">✕</button>
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Category</h4>
            ${categories.map(cat => `
              <label class="filter-checkbox">
                <input type="checkbox" value="${cat}" onchange="applyFilter('category', '${cat}')" ${categoryFilter === cat ? 'checked' : ''}>
                ${cat}
                <span class="count">(${catCounts[cat]})</span>
              </label>
            `).join('')}
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Size</h4>
            <div class="size-grid">
              ${['XS', 'S', 'M', 'L', 'XL'].map(s => `
                <button class="size-btn" onclick="this.classList.toggle('active')">${s}</button>
              `).join('')}
            </div>
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Color</h4>
            <div class="filter-colors">
              ${[
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'White', hex: '#ffffff' },
      { name: 'Brown', hex: '#8B4513' },
      { name: 'Navy', hex: '#1b2a4a' },
      { name: 'Green', hex: '#556b2f' },
      { name: 'Blue', hex: '#4169e1' }
    ].map(c => `
                <button class="filter-color-swatch" style="background:${c.hex}" title="${c.name}" onclick="this.classList.toggle('active')"></button>
              `).join('')}
            </div>
          </div>

          <div class="filter-group">
            <h4 class="filter-group-title">Price Range</h4>
            <label class="filter-checkbox">
              <input type="checkbox"> Under ₹2,000
            </label>
            <label class="filter-checkbox">
              <input type="checkbox"> ₹2,000 - ₹5,000
            </label>
            <label class="filter-checkbox">
              <input type="checkbox"> ₹5,000 - ₹10,000
            </label>
            <label class="filter-checkbox">
              <input type="checkbox"> Above ₹10,000
            </label>
          </div>
        </aside>

        <!-- Product Grid -->
        <div>
          <div class="shop-toolbar">
            <span class="shop-results">Showing <strong>${filtered.length}</strong> of ${PRODUCTS.length} items</span>
            <div class="shop-sort">
              <select id="sort-select" onchange="sortProducts(this.value)">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          <div class="products-grid" id="products-grid">
            ${filtered.map(p => renderProductCard(p)).join('')}
          </div>
          ${filtered.length === 0 ? `
            <div style="text-align: center; padding: 80px 24px;">
              <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
              <h3 style="font-family: var(--font-heading); font-size: 24px; margin-bottom: 8px;">No products found</h3>
              <p style="color: var(--text-secondary);">Try adjusting your filters or search terms</p>
              <button class="btn btn-outline-dark" style="margin-top: 20px;" onclick="navigate('/shop')">View All Products</button>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderSaleBanner() {
  return `
    <div class="sale-banner fade-in">
      <div class="sale-banner-bg" style="background-image: url('images/Wool Blend Overcoat.jpg')"></div>
      <div class="sale-banner-content">
        <span class="sale-flash-tag">🔥 FLASH SALE EVENT</span>
        <h2 class="sale-banner-title">UP TO 50% OFF</h2>
        <p class="sale-banner-desc">Refresh your wardrobe with our biggest sale of the season. Limited time only.</p>
        <div class="countdown" id="countdown">
          <div class="countdown-item"><span class="countdown-number" id="cd-days">02</span><span class="countdown-label">Days</span></div>
          <span class="countdown-sep">:</span>
          <div class="countdown-item"><span class="countdown-number" id="cd-hours">14</span><span class="countdown-label">Hrs</span></div>
          <span class="countdown-sep">:</span>
          <div class="countdown-item"><span class="countdown-number" id="cd-mins">36</span><span class="countdown-label">Min</span></div>
          <span class="countdown-sep">:</span>
          <div class="countdown-item"><span class="countdown-number" id="cd-secs">00</span><span class="countdown-label">Sec</span></div>
        </div>
      </div>
    </div>
  `;
}

function applyFilter(type, value) {
  if (type === 'category') {
    navigate(`/shop?category=${value}`);
  }
}

function toggleFilters() {
  const sidebar = document.getElementById('filters-sidebar');
  const overlay = document.getElementById('filters-overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

function sortProducts(sortBy) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  // Re-apply current filters before sorting
  const route = getRoute();
  const params = route.includes('?') ? route.split('?')[1] : '';
  const searchParams = new URLSearchParams(params);
  const categoryFilter = searchParams.get('category');
  const saleFilter = searchParams.get('sale') === 'true';
  const newFilter = searchParams.get('new') === 'true';
  const searchQuery = searchParams.get('search');

  let products = [...PRODUCTS];

  if (categoryFilter) products = products.filter(p => p.category === categoryFilter);
  if (saleFilter) products = products.filter(p => p.isSale);
  if (newFilter) products = products.filter(p => p.isNew);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    );
  }

  switch (sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
  }

  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
  initScrollAnimations();
}

// Countdown timer for sale
function startCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 2);
  endDate.setHours(endDate.getHours() + 14);

  function update() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}


// ============================================
// 6. PAGES — Product (product.js)
// ============================================

// Product Detail Page
function renderProductPage(productId) {
  const product = PRODUCTS.find(p => p.id === parseInt(productId));
  if (!product) {
    return `<div class="container" style="text-align:center; padding:100px 24px;">
      <h2 style="font-family:var(--font-heading); font-size:32px;">Product Not Found</h2>
      <p style="color:var(--text-secondary); margin:12px 0 24px;">The product you're looking for doesn't exist.</p>
      <button class="btn btn-dark" onclick="navigate('/shop')">Back to Shop</button>
    </div>`;
  }

  const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory)).slice(0, 4);
  const starsHtml = renderStars(product.rating);

  return `
    <div class="container">
      <!-- Breadcrumb -->
      <div class="breadcrumb fade-in">
        <a onclick="navigate('/')">Home</a>
        <span class="sep">›</span>
        <a onclick="navigate('/shop')">Shop</a>
        <span class="sep">›</span>
        <a onclick="navigate('/shop?category=${product.category}')">${product.category}</a>
        <span class="sep">›</span>
        <span>${product.name}</span>
      </div>

      <!-- Product Detail -->
      <div class="product-detail">
        <!-- Gallery -->
        <div class="product-gallery fade-in">
          <div class="product-thumbnails">
            ${product.images.map((img, i) => `
              <div class="product-thumb ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                <img src="${img}" alt="${product.name} view ${i + 1}" loading="lazy">
              </div>
            `).join('')}
          </div>
          <div class="product-main-image">
            <img src="${product.images[0]}" alt="${product.name}" id="main-product-image">
            <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" aria-label="Add to wishlist">
              ${state.wishlist.includes(product.id) ? '❤️' : '♡'}
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="product-info fade-in">
          <div class="product-badges">
            ${product.badge ? `<span class="product-badge best-seller">${product.badge}</span>` : ''}
            <div class="product-rating">
              <span class="stars">${starsHtml}</span>
              <span>${product.rating}</span>
              <span style="color:var(--text-muted)">${product.reviews} Reviews</span>
            </div>
          </div>

          <h1 class="product-detail-name">${product.name}</h1>
          <p class="product-detail-desc">${product.description}</p>

          <div class="product-detail-price">
            <span class="current">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `<span class="original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            ${product.discount > 0 ? `<span class="off">${product.discount}% OFF</span>` : ''}
          </div>

          <!-- Color -->
          <div class="option-section">
            <p class="option-label">Color: <span id="selected-color">${product.colors[0].name}</span></p>
            <div class="color-options">
              ${product.colors.map((c, i) => `
                <button class="color-swatch ${i === 0 ? 'active' : ''}" 
                  style="background:${c.hex}" 
                  title="${c.name}" 
                  onclick="selectColor(this, '${c.name}')"
                  aria-label="${c.name}">
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Size -->
          <div class="option-section">
            <p class="option-label">Size <a class="size-guide-link">Size Guide</a></p>
            <div class="size-options">
              ${product.sizes.map((s, i) => `
                <button class="size-option ${(product.sizes.length === 1 ? i === 0 : i === 1) ? 'active' : ''}" onclick="selectSize(this, '${s}')">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Add to Bag + Buy Now -->
          <button class="btn btn-orange add-to-cart-btn" id="add-to-cart-detail" onclick="addToCartFromDetail(${product.id})">
            🛍️ Add to Bag
          </button>
          <button class="btn btn-dark buy-now-btn" onclick="buyNowFromDetail(${product.id})">
            ⚡ Buy Now
          </button>

          <!-- Delivery Info -->
          <div class="delivery-info">
            <div class="delivery-item">
              🚚 Free Delivery by <strong>Thursday</strong>
            </div>
            <div class="delivery-item">
              ✅ 100% Original Product
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="product-tabs fade-in">
        <div class="tabs-header">
          <button class="tab-btn active" onclick="switchTab(this, 'tab-desc')">Description</button>
          <button class="tab-btn" onclick="switchTab(this, 'tab-specs')">Specifications</button>
          <button class="tab-btn" onclick="switchTab(this, 'tab-reviews')">Reviews (${product.reviews})</button>
        </div>
        <div class="tab-content" id="tab-desc">
          <p>${product.description}</p>
          <ul style="margin-top: 16px;">
            ${product.specs.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        <div class="tab-content hidden" id="tab-specs">
          <table style="width:100%; border-collapse:collapse;">
            ${product.specs.map(s => {
    const parts = s.split(',');
    return `<tr style="border-bottom:1px solid var(--border-light);">
                <td style="padding:12px 0; font-weight:600; width:40%;">${parts[0].split(' ').slice(0, 2).join(' ')}</td>
                <td style="padding:12px 0;">${s}</td>
              </tr>`;
  }).join('')}
            <tr style="border-bottom:1px solid var(--border-light);">
              <td style="padding:12px 0; font-weight:600;">Category</td>
              <td style="padding:12px 0;">${product.category} / ${product.subcategory}</td>
            </tr>
            <tr>
              <td style="padding:12px 0; font-weight:600;">Available Sizes</td>
              <td style="padding:12px 0;">${product.sizes.join(', ')}</td>
            </tr>
          </table>
        </div>
        <div class="tab-content hidden" id="tab-reviews">
          <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px;">
            <div style="font-size:48px; font-family:var(--font-heading); font-weight:800;">${product.rating}</div>
            <div>
              <div style="font-size:20px; color:var(--accent-gold);">${starsHtml}</div>
              <div style="color:var(--text-muted); font-size:14px;">${product.reviews} reviews</div>
            </div>
          </div>
          ${renderSampleReviews()}
        </div>
      </div>

      <!-- Complete The Look -->
      ${related.length > 0 ? `
        <div class="complete-look fade-in">
          <h2 class="complete-look-title">Complete The Look</h2>
          <div class="complete-look-grid">
            ${related.map(p => `
              <div class="complete-look-card" onclick="navigate('/product/${p.id}')">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="info">
                  <p class="name">${p.name}</p>
                  <div class="card-price">
                    ₹${p.price.toLocaleString('en-IN')}
                    ${p.originalPrice ? `<span style="text-decoration:line-through; color:var(--text-muted); font-weight:400; font-size:13px; margin-left:6px;">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                  </div>
                  <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id}, '${p.sizes[1] || p.sizes[0]}', '${p.colors[0].name}')">Add</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '★';
    else if (i - rating < 1) html += '★';
    else html += '☆';
  }
  return html;
}

function renderSampleReviews() {
  const reviews = [
    { name: 'Arjun M.', date: 'Aug 2026', rating: 5, text: 'Absolutely love this! The quality is outstanding and it fits perfectly. Highly recommend to anyone looking for premium fashion.' },
    { name: 'Priya S.', date: 'Jul 2026', rating: 4, text: 'Great product overall. The material feels luxurious and the color is exactly as shown. Shipping was fast too.' },
    { name: 'Rahul K.', date: 'Jul 2026', rating: 5, text: 'Best purchase I\'ve made this season. The craftsmanship is top-notch. Will definitely be ordering more from StyleHub!' }
  ];

  return reviews.map(r => `
    <div style="border-bottom:1px solid var(--border-light); padding:20px 0;">
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <div>
          <strong>${r.name}</strong>
          <span style="color:var(--accent-gold); margin-left:8px;">${renderStars(r.rating)}</span>
        </div>
        <span style="color:var(--text-muted); font-size:13px;">${r.date}</span>
      </div>
      <p style="color:var(--text-secondary); line-height:1.7;">${r.text}</p>
    </div>
  `).join('');
}

function changeMainImage(src, thumbEl) {
  document.getElementById('main-product-image').src = src;
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectColor(el, colorName) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('selected-color').textContent = colorName;
}

function selectSize(el, size) {
  document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.remove('hidden');
}

function addToCartFromDetail(productId) {
  const activeSize = document.querySelector('.size-option.active');
  const activeColor = document.getElementById('selected-color');
  const size = activeSize ? activeSize.textContent : '';
  const color = activeColor ? activeColor.textContent : '';
  addToCart(productId, size, color);
  openCartDrawer();
}

function buyNowFromDetail(productId) {
  const activeSize = document.querySelector('.size-option.active');
  const activeColor = document.getElementById('selected-color');
  const size = activeSize ? activeSize.textContent : '';
  const color = activeColor ? activeColor.textContent : '';

  // Clear cart and add only this item
  state.cart = [{ productId, size, color, qty: 1 }];
  saveState();
  navigate('/checkout');
}


// ============================================
// 7. PAGES — Cart (cart.js)
// ============================================

// Cart Page
function renderCartPage() {
  if (state.cart.length === 0) {
    return `
      <div class="container">
        <div class="cart-page">
          <div class="cart-empty fade-in">
            <div class="cart-empty-icon">🛒</div>
            <h2 class="cart-empty-title">Your cart is empty</h2>
            <p class="cart-empty-text">Looks like you haven't added anything to your cart yet.</p>
            <button class="btn btn-dark btn-lg" onclick="navigate('/shop')">Start Shopping</button>
          </div>
        </div>
      </div>
    `;
  }

  const subtotal = getCartSubtotal();
  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = Math.round(subtotal * 0.05);
  const total = subtotal + shipping - discount;

  return `
    <div class="container">
      <div class="cart-page">
        <h1 class="cart-title fade-in">Shopping Cart</h1>
        <p class="cart-count fade-in">${state.cart.length} item${state.cart.length > 1 ? 's' : ''} in your cart</p>
        
        <div class="cart-layout">
          <!-- Cart Items -->
          <div class="cart-items">
            ${state.cart.map((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';
    const itemTotal = product.price * item.qty;
    return `
                <div class="cart-item fade-in" id="cart-item-${index}">
                  <div class="cart-item-image" onclick="navigate('/product/${product.id}')">
                    <img src="${product.image}" alt="${product.name}">
                  </div>
                  <div class="cart-item-details">
                    <h3 class="cart-item-name">${product.name}</h3>
                    <p class="cart-item-variant">Size: ${item.size} &nbsp;|&nbsp; Color: ${item.color}</p>
                    <div class="cart-item-qty">
                      <button class="qty-btn" onclick="updateQty(${index}, -1)">−</button>
                      <span class="qty-value">${item.qty}</span>
                      <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                    </div>
                  </div>
                  <div class="cart-item-actions">
                    <span class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">🗑️ Remove</button>
                  </div>
                </div>
              `;
  }).join('')}
          </div>

          <!-- Summary -->
          <div class="cart-summary fade-in">
            <h3 class="cart-summary-title">Order Summary</h3>
            
            <div class="coupon-input">
              <input type="text" placeholder="Coupon code" id="coupon-input">
              <button onclick="applyCoupon()">Apply</button>
            </div>

            <div class="summary-row">
              <span class="label">Subtotal</span>
              <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row">
              <span class="label">Shipping</span>
              <span class="${shipping === 0 ? 'free' : 'value'}">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
            </div>
            <div class="summary-row">
              <span class="label">Discount (5%)</span>
              <span class="discount">-₹${discount.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row total">
              <span>Total</span>
              <span>₹${total.toLocaleString('en-IN')}</span>
            </div>

            ${subtotal < 999 ? `<p style="font-size:12px; color:var(--accent-orange); margin-top:12px;">Add ₹${(999 - subtotal).toLocaleString('en-IN')} more for free shipping!</p>` : ''}

            <button class="btn btn-orange btn-full btn-lg" style="margin-top: 20px;" onclick="navigate('/checkout')">
              Proceed to Checkout →
            </button>

            <button class="btn btn-outline-dark btn-full" style="margin-top: 12px;" onclick="navigate('/shop')">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(index);
    return;
  }

  saveState();
  renderApp();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveState();
  renderApp();
  showToast('Item removed from cart');
}

function applyCoupon() {
  const code = document.getElementById('coupon-input')?.value?.trim();
  if (code && code.toUpperCase() === 'STYLE10') {
    showToast('🎉 Coupon applied! 10% extra discount');
  } else if (code) {
    showToast('❌ Invalid coupon code');
  }
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}


// ============================================
// 8. PAGES — Checkout (checkout.js)
// ============================================

// Checkout / Payment Page
function renderCheckoutPage() {
  if (state.cart.length === 0) {
    return `
      <div class="container">
        <div class="checkout-page" style="text-align:center; padding:100px 24px;">
          <h2 style="font-family:var(--font-heading); font-size:32px; margin-bottom:12px;">Your cart is empty</h2>
          <p style="color:var(--text-secondary); margin-bottom:24px;">Add some items before checking out.</p>
          <button class="btn btn-dark btn-lg" onclick="navigate('/shop')">Start Shopping</button>
        </div>
      </div>
    `;
  }

  const subtotal = getCartSubtotal();
  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = Math.round(subtotal * 0.05);
  const total = subtotal + shipping - discount;

  return `
    <div class="container">
      <div class="checkout-page">
        <h1 class="checkout-title fade-in">Checkout</h1>

        <!-- Stepper -->
        <div class="checkout-stepper fade-in">
          <div class="step completed" id="step-1">
            <span class="step-number">✓</span>
            <span class="step-label">Cart</span>
          </div>
          <div class="step-line completed"></div>
          <div class="step active" id="step-2">
            <span class="step-number">2</span>
            <span class="step-label">Shipping & Payment</span>
          </div>
          <div class="step-line"></div>
          <div class="step" id="step-3">
            <span class="step-number">3</span>
            <span class="step-label">Confirmation</span>
          </div>
        </div>

        <div class="checkout-layout">
          <!-- Forms -->
          <div>
            <!-- Shipping Form -->
            <div class="checkout-form-section fade-in">
              <h2 class="checkout-section-title">📦 Shipping Information</h2>
              <div class="form-grid">
                <div class="form-group">
                  <label for="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="John" required>
                </div>
                <div class="form-group">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Doe" required>
                </div>
                <div class="form-group full">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 98765 43210" required oninput="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="10">
                </div>
                <div class="form-group">
                  <label for="pincode">PIN Code</label>
                  <input type="text" id="pincode" placeholder="400001" required oninput="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="6">
                </div>
                <div class="form-group full">
                  <label for="address">Street Address</label>
                  <input type="text" id="address" placeholder="123, MG Road, Apartment 4B" required>
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <input type="text" id="city" placeholder="Mumbai" required>
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <select id="state" required>
                    <option value="">Select State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Uttar Pradesh</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>West Bengal</option>
                    <option>Telangana</option>
                    <option>Kerala</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="checkout-form-section fade-in">
              <h2 class="checkout-section-title">💳 Payment Method</h2>
              <div class="payment-methods">
                <label class="payment-method selected" onclick="selectPayment(this, 'card')">
                  <input type="radio" name="payment" value="card" checked>
                  <span class="payment-method-icon">💳</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">Credit / Debit Card</div>
                    <div class="payment-method-desc">Visa, Mastercard, RuPay</div>
                  </div>
                </label>
                <label class="payment-method" onclick="selectPayment(this, 'upi')">
                  <input type="radio" name="payment" value="upi">
                  <span class="payment-method-icon">📱</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">UPI</div>
                    <div class="payment-method-desc">Google Pay, PhonePe, Paytm</div>
                  </div>
                </label>
                <label class="payment-method" onclick="selectPayment(this, 'netbanking')">
                  <input type="radio" name="payment" value="netbanking">
                  <span class="payment-method-icon">🏦</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">Net Banking</div>
                    <div class="payment-method-desc">All major banks supported</div>
                  </div>
                </label>
                <label class="payment-method" onclick="selectPayment(this, 'cod')">
                  <input type="radio" name="payment" value="cod">
                  <span class="payment-method-icon">💵</span>
                  <div class="payment-method-info">
                    <div class="payment-method-name">Cash on Delivery</div>
                    <div class="payment-method-desc">Pay when you receive</div>
                  </div>
                </label>
              </div>

              <!-- Card Form -->
              <div class="card-form" id="card-form">
                <div class="form-grid">
                  <div class="form-group full">
                    <label for="card-number">Card Number</label>
                    <input type="tel" id="card-number" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNumber(this)" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 32">
                  </div>
                  <div class="form-group full">
                    <label for="card-name">Name on Card</label>
                    <input type="text" id="card-name" placeholder="JOHN DOE">
                  </div>
                  <div class="form-group">
                    <label for="card-expiry">Expiry Date</label>
                    <input type="tel" id="card-expiry" placeholder="MM/YY" maxlength="5" oninput="formatExpiry(this)" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                  </div>
                  <div class="form-group">
                    <label for="card-cvv">CVV</label>
                    <input type="tel" id="card-cvv" placeholder="•••" maxlength="4" oninput="this.value=this.value.replace(/[^0-9]/g,'')" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                  </div>
                </div>
              </div>

              <!-- UPI Form -->
              <div class="card-form" id="upi-form" style="display:none;">
                <div class="form-grid">
                  <div class="form-group full">
                    <label for="upi-id">UPI ID</label>
                    <input type="text" id="upi-id" placeholder="yourname@upi">
                  </div>
                </div>
              </div>
            </div>

            <!-- Place Order -->
            <button class="btn btn-orange btn-full btn-lg fade-in" onclick="placeOrder()" style="margin-bottom:32px;">
              🔒 Place Order — ₹${total.toLocaleString('en-IN')}
            </button>

            <p class="fade-in" style="text-align:center; font-size:13px; color:var(--text-muted);">
              🔒 Your payment info is secure and encrypted. By placing your order, you agree to our Terms of Service.
            </p>
          </div>

          <!-- Order Summary Sidebar -->
          <div class="order-summary-sidebar fade-in">
            <h3 class="order-summary-title">Order Summary</h3>
            <div class="order-summary-items">
              ${state.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';
    return `
                  <div class="order-summary-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="order-summary-item-info">
                      <div class="order-summary-item-name">${product.name}</div>
                      <div class="order-summary-item-variant">${item.size} • ${item.color} • Qty: ${item.qty}</div>
                    </div>
                    <div class="order-summary-item-price">₹${(product.price * item.qty).toLocaleString('en-IN')}</div>
                  </div>
                `;
  }).join('')}
            </div>

            <div class="summary-row">
              <span class="label">Subtotal</span>
              <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row">
              <span class="label">Shipping</span>
              <span class="${shipping === 0 ? 'free' : 'value'}">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
            </div>
            <div class="summary-row">
              <span class="label">Discount</span>
              <span class="discount">-₹${discount.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row total">
              <span>Total</span>
              <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Meesho-style Order Confirmation Page
function renderOrderConfirmPage(orderId, orderItems) {
  return `
    <div class="container">
      <div class="order-confirm-page">
        <canvas id="confetti-canvas"></canvas>

        <!-- Animated Checkmark -->
        <div class="confirm-check-wrap">
          <svg class="confirm-checkmark" viewBox="0 0 50 50">
            <path d="M14 27 L22 35 L38 16" />
          </svg>
        </div>

        <h1 class="confirm-title">Order Placed Successfully! 🎉</h1>
        <p class="confirm-subtitle">Thank you for shopping with StyleHub</p>
        <p class="confirm-order-id">Order ID: ${orderId}</p>

        <div class="confirm-delivery-est">
          🚚 Estimated Delivery: ${getEstimatedDelivery()}
        </div>

        <!-- Ordered Items Thumbnails -->
        <div class="confirm-items-summary">
          ${orderItems.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.productId);
    return p ? `<div class="confirm-item-thumb"><img src="${p.image}" alt="${p.name}"></div>` : '';
  }).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-orange btn-lg" onclick="navigate('/orders')">
            📦 Track My Order
          </button>
          <button class="btn btn-outline-dark btn-lg" onclick="navigate('/shop')">
            Continue Shopping →
          </button>
        </div>
      </div>
    </div>
  `;
}

function getEstimatedDelivery() {
  const d = new Date();
  d.setDate(d.getDate() + 5);
  return d.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });
}

function selectPayment(el, method) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');

  const cardForm = document.getElementById('card-form');
  const upiForm = document.getElementById('upi-form');

  if (cardForm) cardForm.style.display = method === 'card' ? 'block' : 'none';
  if (upiForm) upiForm.style.display = method === 'upi' ? 'block' : 'none';
}

function formatCardNumber(input) {
  let value = input.value.replace(/\D/g, '');
  value = value.replace(/(.{4})/g, '$1 ').trim();
  input.value = value;
}

function formatExpiry(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.substring(0, 2) + '/' + value.substring(2);
  }
  input.value = value;
}

function placeOrder() {
  const firstName = document.getElementById('first-name')?.value?.trim();
  const email = document.getElementById('email')?.value?.trim();
  const phone = document.getElementById('phone')?.value?.trim();
  const address = document.getElementById('address')?.value?.trim();

  if (!firstName || !email || !phone || !address) {
    showToast('❌ Please fill in all required fields');
    return;
  }

  const orderId = 'ORD-2026-' + Math.floor(Math.random() * 9000 + 1000);
  const orderItems = [...state.cart];

  // Clear cart
  state.cart = [];
  saveState();

  // Navigate to confirmation page
  const app = document.getElementById('app');
  app.innerHTML = renderOrderConfirmPage(orderId, orderItems);
  updateNavbarBadges();

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Launch confetti after a short delay
  setTimeout(() => launchConfetti(), 300);
  setTimeout(() => launchConfetti(), 1200);
  setTimeout(() => launchConfetti(), 2500);
}

// ─── Confetti Animation (Meesho-style) ───
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const colors = ['#e8590c', '#d4a017', '#2f9e44', '#e03131', '#1971c2', '#9c36b5', '#f59f00', '#ff6b6b', '#51cf66'];
  const confettiPieces = [];

  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 4,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.random() * 0.1 + 0.03,
      opacity: 1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  const maxFrames = 200;

  function animate() {
    if (frame > maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    frame++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(frame * p.wobbleSpeed) * p.wobble * 0.05;
      p.rotation += p.rotSpeed;

      if (frame > maxFrames - 50) {
        p.opacity = Math.max(0, p.opacity - 0.02);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}


// ============================================
// 9. PAGES — Orders (orders.js)
// ============================================

// Orders Page
function renderOrdersPage() {
  return `
    <div class="container">
      <div class="orders-page">
        <h1 class="orders-title fade-in">Order History</h1>
        <p class="orders-subtitle fade-in">View and manage your recent purchases.</p>

        ${SAMPLE_ORDERS.map(order => {
    const orderItems = order.items.map(item => PRODUCTS.find(p => p.id === item.productId)).filter(Boolean);
    let statusClass = '';
    let statusIcon = '';

    switch (order.status) {
      case 'Shipped':
        statusClass = 'status-shipped';
        statusIcon = '📦';
        break;
      case 'Delivered':
        statusClass = 'status-delivered';
        statusIcon = '✅';
        break;
      case 'Cancelled':
        statusClass = 'status-cancelled';
        statusIcon = '❌';
        break;
    }

    return `
            <div class="order-card fade-in">
              <div class="order-card-header">
                <div>
                  <div class="order-id">ORDER #${order.id}</div>
                  <div class="order-date">Placed on ${order.date}</div>
                </div>
                <div>
                  <div class="order-total">₹${order.total.toLocaleString('en-IN')}</div>
                  <span class="order-status ${statusClass}">${statusIcon} ${order.status}</span>
                </div>
              </div>
              <div class="order-items-row">
                ${orderItems.map(p => `
                  <div class="order-item-thumb" onclick="navigate('/product/${p.id}')">
                    <img src="${p.image}" alt="${p.name}">
                  </div>
                `).join('')}
              </div>
              <div class="order-card-footer">
                ${order.status === 'Shipped' ? `<button class="btn btn-orange btn-sm">Track Order</button>` : ''}
                ${order.status === 'Delivered' ? `<button class="btn btn-outline-dark btn-sm">View Details</button>` : ''}
                ${order.status === 'Cancelled' ? `<button class="btn btn-outline-dark btn-sm" onclick="reorder('${order.id}')">Reorder</button>` : ''}
              </div>
            </div>
          `;
  }).join('')}

        <div style="text-align:center; padding:40px 0;" class="fade-in">
          <p style="color:var(--text-muted); font-size:14px;">Showing all orders</p>
        </div>
      </div>
    </div>
  `;
}

function reorder(orderId) {
  const order = SAMPLE_ORDERS.find(o => o.id === orderId);
  if (order) {
    order.items.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (product) {
        addToCart(item.productId, item.size, product.colors[0].name);
      }
    });
    showToast('🛒 Items added to cart');
    navigate('/cart');
  }
}


// ============================================
// 10. APP — Router & Global State (app.js)
// ============================================

// Global state
let state = {
  cart: [],
  wishlist: []
};

// Load state from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem('stylehub_state');
    if (saved) {
      state = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('stylehub_state', JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

// Cart helpers
function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getWishlistCount() {
  return state.wishlist.length;
}

function addToCart(productId, size, color) {
  const existing = state.cart.find(
    item => item.productId === productId && item.size === size && item.color === color
  );

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ productId, size, color, qty: 1 });
  }

  saveState();
  updateNavbarBadges();

  // Bag pulse animation on navbar
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.classList.add('bag-added-anim');
    setTimeout(() => cartBtn.classList.remove('bag-added-anim'), 500);
  }

  showToast('🛍️ Added to bag!');
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx >= 0) {
    state.wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('❤️ Added to wishlist!');
  }
  saveState();
  updateNavbarBadges();

  // Update wishlist button appearance
  const wishBtn = document.querySelector(`#card-${productId} .product-card-wishlist`);
  if (wishBtn) {
    wishBtn.classList.toggle('active');
    wishBtn.innerHTML = state.wishlist.includes(productId) ? '❤️' : '♡';
  }
}

function updateNavbarBadges() {
  const cartBtn = document.getElementById('cart-btn');
  const wishlistBtn = document.getElementById('wishlist-btn');
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  if (cartBtn) {
    const existing = cartBtn.querySelector('.badge');
    if (existing) existing.remove();
    if (cartCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = cartCount;
      cartBtn.appendChild(badge);
    }
  }

  if (wishlistBtn) {
    const existing = wishlistBtn.querySelector('.badge');
    if (existing) existing.remove();
    if (wishlistCount > 0) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = wishlistCount;
      wishlistBtn.appendChild(badge);
    }
  }
}

// Navigation
function navigate(path) {
  window.location.hash = path;
}

// Router
function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function renderApp() {
  const route = getRoute();
  const app = document.getElementById('app');
  const navbarContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  // Render navbar and footer
  if (navbarContainer) navbarContainer.innerHTML = renderNavbar();
  if (footerContainer) footerContainer.innerHTML = renderFooter();

  // Parse route
  let pageContent = '';
  let activePage = '';

  if (route === '/' || route === '') {
    pageContent = renderHomePage();
    activePage = 'home';
  } else if (route.startsWith('/shop')) {
    const params = route.includes('?') ? route.split('?')[1] : '';
    pageContent = renderShopPage(params);
    activePage = 'shop';
    if (params.includes('sale=true')) activePage = 'sale';
    if (params.includes('new=true')) activePage = 'new';
    if (params.includes('category=')) activePage = 'categories';
  } else if (route.startsWith('/product/')) {
    const id = route.split('/product/')[1];
    pageContent = renderProductPage(id);
    activePage = 'shop';
  } else if (route === '/cart') {
    pageContent = renderCartPage();
    activePage = '';
  } else if (route === '/checkout') {
    pageContent = renderCheckoutPage();
    activePage = '';
  } else if (route === '/orders') {
    pageContent = renderOrdersPage();
    activePage = '';
  } else {
    pageContent = `
      <div class="container" style="text-align:center; padding:120px 24px;">
        <h1 style="font-family:var(--font-heading); font-size:72px; font-weight:900; margin-bottom:16px;">404</h1>
        <p style="font-size:18px; color:var(--text-secondary); margin-bottom:32px;">Page not found</p>
        <button class="btn btn-dark btn-lg" onclick="navigate('/')">Back to Home</button>
      </div>
    `;
  }

  // Inject page content
  if (app) {
    app.innerHTML = pageContent;
  }

  // Update active nav link
  updateNavActive(activePage);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Initialize scroll animations
  requestAnimationFrame(() => {
    initScrollAnimations();
    // Start countdown if sale page
    if (route.includes('sale=true')) {
      startCountdown();
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Toast notifications
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Scroll to top button
function initScrollToTop() {
  const btn = document.getElementById('scroll-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── Cart Drawer ───
function renderCartDrawer() {
  const subtotal = getCartSubtotal();
  const itemsHtml = state.cart.map((item, i) => {
    const p = PRODUCTS.find(pr => pr.id === item.productId);
    if (!p) return '';
    return `
      <div class="cart-drawer-item">
        <img src="${p.image}" alt="${p.name}" onclick="closeCartDrawer(); navigate('/product/${p.id}')">
        <div class="cart-drawer-item-info">
          <div class="cart-drawer-item-name">${p.name}</div>
          <div class="cart-drawer-item-variant">${item.size} · ${item.color} · Qty: ${item.qty}</div>
          <div class="cart-drawer-item-bottom">
            <span class="cart-drawer-item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
            <button class="cart-drawer-item-remove" onclick="removeFromCartDrawer(${i})" title="Remove">✕</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="cart-drawer-overlay" id="cart-drawer-overlay" onclick="closeCartDrawer()"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-drawer-header">
        <h3>🛍️ Your Bag <span class="drawer-count">${getCartCount()}</span></h3>
        <button class="cart-drawer-close" onclick="closeCartDrawer()">✕</button>
      </div>
      <div class="cart-drawer-items">
        ${state.cart.length === 0 ? `
          <div class="cart-drawer-empty">
            <div class="empty-bag-icon">🛍️</div>
            <p>Your bag is empty</p>
          </div>
        ` : itemsHtml}
      </div>
      ${state.cart.length > 0 ? `
        <div class="cart-drawer-footer">
          <div class="cart-drawer-total">
            <span>Subtotal</span>
            <span>₹${subtotal.toLocaleString('en-IN')}</span>
          </div>
          <button class="btn btn-orange btn-full" onclick="closeCartDrawer(); navigate('/checkout')">
            Checkout → ₹${subtotal.toLocaleString('en-IN')}
          </button>
          <button class="btn btn-outline-dark btn-full" onclick="closeCartDrawer(); navigate('/cart')">
            View Bag
          </button>
          ${subtotal >= 999 ? '<p class="free-ship-note">✓ You qualify for free shipping!</p>' : `<p class="free-ship-note">Add ₹${(999 - subtotal).toLocaleString('en-IN')} more for free shipping</p>`}
        </div>
      ` : ''}
    </div>
  `;
}

function openCartDrawer() {
  // Inject drawer HTML
  let drawerContainer = document.getElementById('cart-drawer-container');
  if (!drawerContainer) {
    drawerContainer = document.createElement('div');
    drawerContainer.id = 'cart-drawer-container';
    document.body.appendChild(drawerContainer);
  }
  drawerContainer.innerHTML = renderCartDrawer();

  // Lock body scroll
  document.body.style.overflow = 'hidden';

  // Animate open
  requestAnimationFrame(() => {
    document.getElementById('cart-drawer-overlay')?.classList.add('active');
    document.getElementById('cart-drawer')?.classList.add('active');
  });
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay')?.classList.remove('active');
  document.getElementById('cart-drawer')?.classList.remove('active');
  // Unlock body scroll
  document.body.style.overflow = '';
  setTimeout(() => {
    const container = document.getElementById('cart-drawer-container');
    if (container) container.innerHTML = '';
  }, 400);
}

function removeFromCartDrawer(index) {
  state.cart.splice(index, 1);
  saveState();
  updateNavbarBadges();
  // Re-render drawer
  const container = document.getElementById('cart-drawer-container');
  if (container) {
    container.innerHTML = renderCartDrawer();
    requestAnimationFrame(() => {
      document.getElementById('cart-drawer-overlay')?.classList.add('active');
      document.getElementById('cart-drawer')?.classList.add('active');
    });
  }
}

// Initialize
function init() {
  loadState();
  renderApp();
  initNavbarScroll();
  initScrollToTop();

  // Listen for hash changes
  window.addEventListener('hashchange', renderApp);
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
