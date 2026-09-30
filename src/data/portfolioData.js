import {
  MODEL_IMAGE,
  MODEL_TRANSPARENT_IMAGE,
  MODEL_STANDING_RAW,
  MODEL_FRONT_RAW
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
    image: MODEL_STANDING_RAW,
    secondaryImage: MODEL_FRONT_RAW,
  },

  // Portfolio Gallery Data (Easily expandable with user's future uploads)
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
      title: "Executive Editorial",
      category: "Editorial",
      subtitle: "Haute Couture & Tailored Poise",
      image: MODEL_STANDING_RAW,
      aspect: "aspect-[3/4]",
      featured: true,
      description: "Structured houndstooth tailoring meets modern editorial posture."
    },
    {
      id: 2,
      title: "Glittering Silhouette",
      category: "Fashion",
      subtitle: "Evening Luxe Edition",
      image: MODEL_FRONT_RAW,
      aspect: "aspect-[4/5]",
      featured: false,
      description: "Bronze metallic texture and confident forward-leaning editorial chemistry."
    },
    {
      id: 3,
      title: "Signature Monograph",
      category: "Editorial",
      subtitle: "Natural Glow & Expression",
      image: MODEL_IMAGE,
      aspect: "aspect-[3/4]",
      featured: true,
      description: "High-fashion portrait capturing depth, composure, and timeless character."
    },
    {
      id: 4,
      title: "Runway Authority",
      category: "Runway",
      subtitle: "Vogue Showcase Presentation",
      image: MODEL_STANDING_RAW,
      aspect: "aspect-[4/5]",
      featured: false,
      description: "Commanding runway posture and contemporary stage presence."
    },
    {
      id: 5,
      title: "Studio Elegance",
      category: "Commercial",
      subtitle: "Brand Leadership Series",
      image: MODEL_FRONT_RAW,
      aspect: "aspect-[3/4]",
      featured: false,
      description: "Expressive commercial portrait reflecting CEO confidence."
    },
    {
      id: 6,
      title: "Timeless Expression",
      category: "Lifestyle",
      subtitle: "Warm Minimalist Mood",
      image: MODEL_IMAGE,
      aspect: "aspect-[4/5]",
      featured: false,
      description: "Warm tonal styling celebrating authentic personal identity."
    }
  ],

  // Achievements & Milestones (Editable Categories with verified foundations)
  achievements: [
    {
      year: "2024",
      title: "500+ Model Mentorship Milestone",
      category: "Mentorship & Education",
      description: "Celebrated developing and mentoring over 500 aspiring models through Vogue Modeling Company and Rise Academy programs."
    },
    {
      year: "2022",
      title: "Rise Academy Launch",
      category: "Major Milestones",
      description: "Established Rise Academy to provide specialized runway walking, poise, self-branding, and editorial portfolio training."
    },
    {
      year: "2019",
      title: "Vogue Modeling Company Founded",
      category: "Entrepreneurship",
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

