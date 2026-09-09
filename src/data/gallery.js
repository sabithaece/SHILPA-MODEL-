import { MODEL_IMAGE } from '../constants/assets';

export const galleryCategories = [
  "ALL",
  "EDITORIAL",
  "FASHION",
  "RUNWAY",
  "PORTRAIT",
  "COMMERCIAL"
];

export const galleryItems = [
  {
    id: 1,
    number: "01",
    title: "Couture Silhouette",
    category: "PORTRAIT",
    tagline: "Signature Portrait Collection",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[3/4]",
    cropPosition: "center 18%",
    filterClass: "contrast-105 brightness-100",
    editorialNote: "A masterclass in poise and symmetry, capturing high-fashion presence and effortless elegance.",
    gridClass: "col-span-1 md:col-span-1"
  },
  {
    id: 2,
    number: "02",
    title: "Midnight Noir",
    category: "EDITORIAL",
    tagline: "High-Contrast Monograph",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[4/5]",
    cropPosition: "center 12%",
    filterClass: "grayscale contrast-125 brightness-95",
    editorialNote: "Monochromatic editorial depth celebrating structural jawlines, dramatic light sculpting, and timeless allure.",
    gridClass: "col-span-1 md:col-span-1"
  },
  {
    id: 3,
    number: "03",
    title: "Runway Grace & Power",
    category: "RUNWAY",
    tagline: "Fashion Week Showcase",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[16/10]",
    cropPosition: "center 22%",
    filterClass: "contrast-110 saturate-110",
    editorialNote: "The magnetic energy of the runway finale, embodying confident movement and striking couture silhouettes.",
    gridClass: "col-span-1 md:col-span-2"
  },
  {
    id: 4,
    number: "04",
    title: "Golden Hour Opulence",
    category: "FASHION",
    tagline: "Autumn Couture Editorial",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[1/1]",
    cropPosition: "center 15%",
    filterClass: "sepia-[0.2] contrast-110 brightness-100",
    editorialNote: "Warm tones and luxurious textures highlighting delicate gold jewelry accents and haute-couture tailoring.",
    gridClass: "col-span-1 md:col-span-1"
  },
  {
    id: 5,
    number: "05",
    title: "Commercial Aura",
    category: "COMMERCIAL",
    tagline: "Global Brand Campaign",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[3/4]",
    cropPosition: "55% 25%",
    filterClass: "contrast-105 brightness-105",
    editorialNote: "Versatile luxury appeal designed for premier global beauty, apparel, and lifestyle branding.",
    gridClass: "col-span-1 md:col-span-1"
  },
  {
    id: 6,
    number: "06",
    title: "Architectural Gaze",
    category: "EDITORIAL",
    tagline: "Vogue Cover Study",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[9/16]",
    cropPosition: "center 10%",
    filterClass: "contrast-120 saturate-105",
    editorialNote: "Vertical magazine cover framing with intense gaze and striking over-the-shoulder narrative.",
    gridClass: "col-span-1 md:col-span-1"
  },
  {
    id: 7,
    number: "07",
    title: "Haute Glamour",
    category: "FASHION",
    tagline: "Couture Gala Look",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[4/5]",
    cropPosition: "center 20%",
    filterClass: "contrast-110 brightness-95",
    editorialNote: "Eveningwear finesse and refined simplicity capturing the modern spirit of international high fashion.",
    gridClass: "col-span-1 md:col-span-1"
  },
  {
    id: 8,
    number: "08",
    title: "Editorial Climax",
    category: "PORTRAIT",
    tagline: "Main Character Energy",
    image: MODEL_IMAGE,
    aspectRatio: "aspect-[16/9]",
    cropPosition: "center 25%",
    filterClass: "grayscale contrast-130",
    editorialNote: "Cinematic wide-aspect composition radiating undisputed confidence and command of the frame.",
    gridClass: "col-span-1 md:col-span-2"
  }
];

export default galleryItems;
