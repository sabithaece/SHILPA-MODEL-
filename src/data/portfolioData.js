import {
  MODEL_IMAGE,
  MODEL_TRANSPARENT_IMAGE,
  MODEL_STANDING_RAW,
  MODEL_FRONT_RAW,
  FOUNDER_WHITE_BLAZER,
  EDITORIAL_BW_FLOWERS,
  EDITORIAL_BRONZE_STOOL,
  MILESTONE_VOGUE_STAGE,
  MILESTONE_RISE_PRESENTATION
} from '../constants/assets';

export const portfolioData = {
  // Brand & Hero Identity
  brandInfo: {
    name: "SHILPA SEETHARAMAN",
    title: "CEO & FOUNDER",
    company: "VOGUE MODELING COMPANY & RISE ACADEMY",
    tagline: "Confidence in Every Frame.",
    subTagline: "Where confidence meets creativity.",
    scrollPrompt: "SCROLL TO EXPLORE",
  },

  // Key Verified Metrics
  stats: [
    {
      id: "modeling-exp",
      value: 10,
      suffix: "+",
      label: "YEARS IN MODELING",
      subtext: "Editorial, runway & brand excellence"
    },
    {
      id: "company-journey",
      value: 5,
      suffix: "+",
      label: "YEARS OF VOGUE MODELING COMPANY",
      subtext: "Pioneering model management & fashion innovation"
    },
    {
      id: "models-trained",
      value: 500,
      suffix: "+",
      label: "MODELS DEVELOPED",
      subtext: "Mentored through Vogue Modeling & Rise Academy"
    }
  ],

  // About Narrative
  about: {
    heading: "ABOUT SHILPA",
    lead: "Shilpa Seetharaman is a model, entrepreneur, mentor and the CEO & Founder of Vogue Modeling Company and Rise Academy.",
    story: [
      "With over a decade of hands-on experience gracing fashion runways and editorial campaigns, Shilpa Seetharaman has carved a distinctive presence in the modeling and fashion industry.",
      "Recognizing the need for structured talent empowerment, she evolved from modeling into founding Vogue Modeling Company and Rise Academy. Over the past 5+ years, her organizations have become premier platforms dedicated to discovering, training, and launching aspiring talent.",
      "Having mentored more than 500 aspiring models, Shilpa’s mission remains rooted in nurturing unshakeable confidence, editorial versatility, and creating real, transformative opportunities for emerging faces across the fashion world."
    ],
    image: FOUNDER_WHITE_BLAZER,
    secondaryImage: EDITORIAL_BW_FLOWERS,
  },

  // Portfolio Gallery Data (Curated high-fashion lookbook)
  portfolioCategories: [
    "All",
    "Editorial",
    "Fashion",
    "Runway",
    "Commercial",
    "Lifestyle"
  ],

  portfolioItems: [
    {
      id: 1,
      title: "Sculptural Silhouette",
      category: "Editorial",
      subtitle: "B&W Avant-Garde Expression",
      image: EDITORIAL_BW_FLOWERS,
      aspect: "aspect-[3/4]",
      featured: true,
      description: "Monochrome fine-art couture editorial accentuating sculpted floral millinery, composure, and haute couture lighting."
    },
    {
      id: 2,
      title: "Bronze Tailored Poise",
      category: "Fashion",
      subtitle: "Studio Metallic Series",
      image: EDITORIAL_BRONZE_STOOL,
      aspect: "aspect-[3/4]",
      featured: true,
      description: "Seated editorial composition showcasing commanding posture, bronze suiting, and refined high-fashion poise."
    },
    {
      id: 3,
      title: "The Executive Presence",
      category: "Commercial",
      subtitle: "CEO & Founder Portfolio",
      image: FOUNDER_WHITE_BLAZER,
      aspect: "aspect-[3/4]",
      featured: true,
      description: "Crisp white tailored blazer and authoritative poise reflecting leadership across Vogue Modeling Company and Rise Academy."
    },
    {
      id: 4,
      title: "Vogue Runway Authority",
      category: "Runway",
      subtitle: "Showcase & Model Management",
      image: MILESTONE_VOGUE_STAGE,
      aspect: "aspect-[3/4]",
      featured: true,
      description: "Leading center stage at major fashion productions and Vogue Modeling Company showcase events."
    },
    {
      id: 5,
      title: "Rise Academy Masterclass",
      category: "Lifestyle",
      subtitle: "Soft Skills & Model Education",
      image: MILESTONE_RISE_PRESENTATION,
      aspect: "aspect-[3/4]",
      featured: false,
      description: "Keynote presentation and mentorship seminar training the next generation of models in professional runway etiquette."
    },
    {
      id: 6,
      title: "Signature Monograph",
      category: "Editorial",
      subtitle: "Natural Glow & Expression",
      image: MODEL_IMAGE,
      aspect: "aspect-[3/4]",
      featured: false,
      description: "High-fashion portrait capturing depth, composure, and timeless character in soft warm light."
    }
  ],

  // Achievements & Milestones (Editable Categories with verified foundations)
  achievements: [
    {
      year: "2024",
      title: "500+ Model Mentorship Milestone",
      category: "Mentorship & Education",
      image: MILESTONE_VOGUE_STAGE,
      description: "Celebrated developing and mentoring over 500 aspiring models through Vogue Modeling Company and Rise Academy programs."
    },
    {
      year: "2022",
      title: "Rise Academy Launch",
      category: "Major Milestones",
      image: MILESTONE_RISE_PRESENTATION,
      description: "Established Rise Academy to provide specialized runway walking, poise, self-branding, and editorial portfolio training."
    },
    {
      year: "2019",
      title: "Vogue Modeling Company Founded",
      category: "Entrepreneurship",
      image: MILESTONE_VOGUE_STAGE,
      description: "Launched Vogue Modeling Company to bridge the gap between fresh, diverse fashion talent and luxury agency campaigns."
    },
    {
      year: "2018",
      title: "Fashion Shows & Runway Leadership",
      category: "Runway & Shows",
      description: "Headlined prominent regional and national fashion showcases, choreography sessions, and luxury designer runways."
    },
    {
      year: "2016",
      title: "Industry Recognition & Brand Campaigns",
      category: "Industry Recognition",
      description: "Collaborated with premium designers, leading fashion photographers, and commercial brand showcases."
    },
    {
      year: "2014",
      title: "10+ Years Modeling Legacy Inception",
      category: "Modeling Titles",
      description: "Commenced professional fashion modeling career, setting the standard for disciplined runway technique and camera presence."
    }
  ],

  // Leadership & Stage Visual Spotlights
  leadershipSpotlights: [
    {
      id: 1,
      title: "Vogue Modeling Company Showcase",
      subtitle: "Runway Production & Model Management",
      image: MILESTONE_VOGUE_STAGE,
      description: "Commanding center stage at Vogue Modeling Company productions, leading high-energy fashion showcases and industry talent presentations."
    },
    {
      id: 2,
      title: "Rise Academy Keynote & Mentorship",
      subtitle: "Soft Skills, Poise & Runway Education",
      image: MILESTONE_RISE_PRESENTATION,
      description: "Delivering foundational masterclasses on professional modeling ethics, self-presentation, and poise for 500+ mentored students."
    }
  ],

  // Contact Channels
  contact: {
    heading: "LET'S CREATE SOMETHING ICONIC.",
    subheading: "For collaborations, modeling opportunities, brand projects, training and professional enquiries, get in touch.",
    email: "bookings@voguemodeling.com",
    phone: "+91 98400 12345",
    location: "Chennai, India • Available Pan-India & Globally",
    instagram: "https://instagram.com",
    instagramHandle: "@shilpa.seetharaman",
    whatsapp: "https://wa.me/919840012345",
    whatsappNumber: "+91 98400 12345",
    projectTypes: [
      "Editorial & Fashion Shoot",
      "Brand Campaign & Commercial",
      "Runway & Fashion Week",
      "Model Training / Rise Academy",
      "Mentorship & Masterclasses",
      "Speaking & Event Appearances"
    ]
  }
};

export default portfolioData;

