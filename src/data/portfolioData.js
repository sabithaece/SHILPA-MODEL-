import { MODEL_IMAGE } from '../constants/assets';

export const portfolioData = {
  modelInfo: {
    name: "SABITHA",
    title: "FASHION MODEL | EDITORIAL | COMMERCIAL",
    quote: "Confidence in Every Frame.",
    location: "Chennai, India • Available Globally",
    email: "bookings@sabithamodel.com",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    instagram: "https://instagram.com",
    instagramHandle: "@sabitha.model",
    linkedin: "https://linkedin.com",
    experienceYears: "5+",
    shootsCompleted: "60+",
  },

  aboutMe: {
    heading: "ABOUT ME",
    subheading: "Editorial Presence & Commercial Versatility",
    description: "I am a passionate fashion model with a strong interest in editorial, commercial, and lifestyle modeling. I bring confidence, versatility, and a distinctive presence to every photoshoot. My goal is to collaborate with creative professionals and bring unique visual concepts to life.",
    philosophy: "Every frame is an opportunity to communicate mood, elegance, and narrative through stillness, movement, and expressive confidence.",
    specs: [
      { label: "Height", value: "5'9\" / 175 cm" },
      { label: "Bust", value: "33\" / 84 cm" },
      { label: "Waist", value: "24\" / 61 cm" },
      { label: "Hips", value: "35\" / 89 cm" },
      { label: "Shoe Size", value: "39 EU / 8.5 US" },
      { label: "Hair / Eyes", value: "Dark Brown" }
    ]
  },

  portfolioCategories: [
    "All",
    "Editorial",
    "Fashion",
    "Commercial",
    "Lifestyle",
    "Traditional"
  ],

  portfolioItems: [
    {
      id: 1,
      title: "Signature Monograph",
      category: "Editorial",
      tagline: "High-Contrast Lighting Study",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[3/4]",
      cropPosition: "center 15%",
      caption: "Clean, sculptural portrait capturing poise and natural camera chemistry."
    },
    {
      id: 2,
      title: "Couture Elegance",
      category: "Fashion",
      tagline: "Eveningwear Editorial",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[4/5]",
      cropPosition: "center 20%",
      caption: "Fluid movement and dramatic shoulder silhouette for designer evening couture."
    },
    {
      id: 3,
      title: "Runway Allure",
      category: "Fashion",
      tagline: "Fashion Week Showcase",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[16/10]",
      cropPosition: "center 25%",
      caption: "Commanding stage presence and signature runway posture."
    },
    {
      id: 4,
      title: "Fine Jewellery Face",
      category: "Commercial",
      tagline: "Luxury Brand Campaign",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[1/1]",
      cropPosition: "center 12%",
      caption: "Macro focus on delicate golden ear accents and expressive profile."
    },
    {
      id: 5,
      title: "Golden Hour Serenade",
      category: "Lifestyle",
      tagline: "Natural Light Study",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[3/4]",
      cropPosition: "center 30%",
      caption: "Warm ambiance and relaxed outdoor editorial aesthetic."
    },
    {
      id: 6,
      title: "Heritage Splendor",
      category: "Traditional",
      tagline: "Bridal Silk Couture",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[9/16]",
      cropPosition: "center 10%",
      caption: "Regal poise embodying the grace and elegance of heritage South Asian fashion."
    },
    {
      id: 7,
      title: "Urban Minimalist",
      category: "Editorial",
      tagline: "Architectural Frames",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[4/5]",
      cropPosition: "55% 25%",
      caption: "Clean geometric lines, poised expression, and contemporary flair."
    },
    {
      id: 8,
      title: "Elysian Poise",
      category: "Commercial",
      tagline: "Brand Campaign Shoot",
      image: MODEL_IMAGE,
      aspectRatio: "aspect-[16/9]",
      cropPosition: "center 22%",
      caption: "Cinematic horizontal crop radiating confident Main Character Energy."
    }
  ]
};

export default portfolioData;
