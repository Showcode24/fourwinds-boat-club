export interface SlideData {
  text: string;
  src: string;
  bgClass?: string;
  textClass?: string;
}

export interface MembershipType {
  title: string;
  desc: string;
}

export interface FourwindsData {
  // Cover Section
  cover: {
    clubName: string;
    clubSubtitle: string;
    tagline: string;
    description: string;
  };

  // Hero Section
  hero: {
    headline: string;
    subheadline: string;
    backgroundText: string;
  };

  // Intro Section
  intro: {
    title: string;
    subtitle: string;
    leadParagraph: string;
    description1: string;
    description2: string;
    features: string[];
    imageText: string;
  };

  // Nautical Elegance Section
  nauticalElegance: {
    label: string;
    title: string;
    description: string;
    highlights: string[];
    imageText: string;
  };

  // Full Width Images
  fullWidthImages: {
    tranquilWaters: {
      imageText: string;
      overlayText: string;
    };
    openSkies: {
      imageText: string;
      overlayText: string;
    };
  };

  // Amenities Section
  amenities: {
    label: string;
    title: string;
    description: string;
    list: string[];
    images: { text: string; bgClass: string; src: string }[];
  };

  // Executive Overview Section
  executiveOverview: {
    label: string;
    title: string;
    headline: string;
    corporateMembershipIntro: string;
    corporateMembershipPoints: string[];
    description: string;
    imageText: string;
  };

  // Membership Section
  membership: {
    title: string;
    subtitle: string;
    description: string;
    headerImageText: string;
    types: MembershipType[];
    useCases: {
      title: string;
      items: string[];
    };
    valueProposition: {
      title: string;
      items: string[];
    };
    footerImageText: string;
  };

  // Location / Gracefield Section
  location: {
    title: string;
    subtitle: string;
    headline: string;
    tagline: string;
    description: string;
    features: string[];
    images: {
      main: { text: string; bgClass: string; src: string };
      secondary: { text: string; bgClass: string; src: string }[];
    };
  };

  // Lifestyle Slideshow
  lifestyleSlides: SlideData[];

  // Exterior Gallery Slideshow
  exteriorSection: {
    title: string;
    slides: SlideData[];
  };

  // Interiors Gallery Slideshow
  interiorsSection: {
    title: string;
    subtitle: string;
    slides: SlideData[];
  };

  // The Experience Section
  experience: {
    label: string;
    title: string;
    quote: string;
    description: string;
    sideImageText: string;
    bottomImageText: string;
  };

  // Disclaimer Section
  disclaimer: {
    title: string;
    paragraphs: string[];
    emphasis: string;
  };

  // Footer Section
  footer: {
    clubName: string;
    tagline: string;
    contactLabel: string;
    email: string;
    website: string;
  };
}

export const fourwindsData: FourwindsData = {
  // Cover Section
  cover: {
    clubName: "Fourwinds",
    clubSubtitle: "Boat Club",
    tagline: "Good Winds, Good Sails",
    description: "West Africa's Most Iconic Private Club",
  },

  // Hero Section
  hero: {
    headline: "Refined. Nautical. Exclusive.",
    subheadline: "in an Uncharted Oasis in Lekki, Lagos",
    backgroundText: "Refined Nautical Background Image",
  },

  // Intro Section
  intro: {
    title: "Fourwinds",
    subtitle: "Boat Club",
    leadParagraph:
      "A new, exclusive marina and waterfront members boat club built for the preserve of Lagos' elite.",
    description1:
      "Fourwinds Boat Club is designed to encapsulate the ultimate modern waterfront architecture. It sits at the intersection of hospitality, premium real estate, member-led influence, and full-service marine recreation.",
    description2:
      "Our recreational amenities are tailored for your enjoyment and relaxation, making the destination an epitome of comfort and elegant nautical experience.",
    features: [
      "High Value Member Network",
      "Docking & Charter Services",
      "Events and Partnerships",
      "Fine Dining & Entertainment",
    ],
    imageText: "Club Building Exterior",
  },

  // Nautical Elegance Section
  nauticalElegance: {
    label: "World Class",
    title: "Nautical Elegance",
    description:
      "At Fourwinds Boat Club, the vibrant essence of marina life comes alive in both day and night. This lively hub combines a variety of dining experiences with fitness and wellness, creating a sophisticated atmosphere.",
    highlights: [
      "Private marina access with curated membership and concierge services.",
      "A social club where status, leisure, and business relationships converge.",
      "An island destination designed for High Net-worth Individuals, Executives, and Global visitors.",
    ],
    imageText: "Marina at Night",
  },

  // Full Width Images
  fullWidthImages: {
    tranquilWaters: {
      imageText: "Tranquil Waters Image",
      overlayText: "Where tranquility flows",
    },
    openSkies: {
      imageText: "Open Skies Image",
      overlayText: "Moments of wonder under open skies",
    },
  },

  // Amenities Section
  amenities: {
    label: "Curated Spaces",
    title: "Exceptional Amenities",
    description:
      "At Fourwinds, amenities are crafted for those who expect nothing but the best. Our lush green areas, concierge service, and waterfront setting provide a haven for relaxation, entertainment, and play.",
    list: [
      "Scenic Waterfront",
      "Ample Parking Space",
      "State of the art Gym",
      "Panoramic Elevator",
      "Stand-by Security",
      "Concierge",
      "Sauna & Spa",
      "Outdoor Pool",
      "Toy Shop / Cafe",
      "Restaurant and Bar",
      "Snooker and Darts",
      "Children's Play area",
      "Squash Court",
      "Boat Repair Shop",
      "Jetties & Berths",
      "Ocean View Deck",
      "Offices / Meeting Rooms",
      "Restrooms",
    ],
    images: [
      {
        text: "Squash Court / Sports",
        bgClass: "bg-[#F1F5F9]",
        src: "/images/img/sports.PNG",
      },
      {
        text: "Children's Play Area",
        bgClass: "bg-[#E2E8F0]",
        src: "/images/img/children.PNG",
      },
      {
        text: "Spa / Massage",
        bgClass: "bg-[#CBD5E1]",
        src: "/images/img/spa.PNG",
      },
    ],
  },

  // Executive Overview Section
  executiveOverview: {
    label: "Executive",
    title: "Overview",
    headline:
      "A private ecosystem for business lifestyle and client engagement.",
    corporateMembershipIntro:
      "Our Corporate Membership is a relationship capital investment tool that offers:",
    corporateMembershipPoints: [
      "Executive Privileges",
      "Client Entertainment Platform",
      "Brand Positioning",
      "Deal Making Environment",
    ],
    description:
      "This offering provides organizations with a strategic platform to entertain clients, reward executives, host private events, and enhance brand positioning within an exclusive environment.",
    imageText: "Executives Meeting Lounge",
  },

  // Membership Section
  membership: {
    title: "Membership",
    subtitle: "Structure",
    description:
      "We offer a flexible structure based on access, allocation, and usage intensity.",
    headerImageText: "Members Networking Event",
    types: [
      {
        title: "REGULAR MEMBERSHIP",
        desc: "A private individual that meets the membership criteria, and fulfills the terms of the Club.",
      },
      {
        title: "FOREIGN MEMBERSHIP",
        desc: "A foreigner that meets the membership criteria, and fulfills the terms of the Club.",
      },
      {
        title: "CORPORATE MEMBERSHIP",
        desc: "A corporate organization that meets the membership criteria, and fulfills the terms of the Club.",
      },
    ],
    useCases: {
      title: "Use Cases For Corporate Members",
      items: [
        "Client entertainment and relationship management",
        "Executive strategy sessions",
        "Board and Leadership retreats",
        "Product launches and private showcases",
        "Staff reward and recognition programmes",
      ],
    },
    valueProposition: {
      title: "Value Proposition",
      items: [
        "Private, controlled environment",
        "Waterfront + Lifestyle Integration",
        "Premium, curated audience",
        "Experiential + memorable",
        "Sophistication in every space",
      ],
    },
    footerImageText: "Certificate of Membership Handover Event",
  },

  // Location / Gracefield Section
  location: {
    title: "Gracefield Island",
    subtitle: "Lekki Peninsula",
    headline: "Ideal Location",
    tagline: "For a vibrant lifestyle",
    description:
      "Perfectly positioned to blend with nature while offering urban convenience. A private club within a uniquely secure enclave that lifts the profile, status, and desirability of members.",
    features: [
      "Secure Master-planned Island environment with a Premium residential profile.",
      "Quick access to and from Ikoyi, Victoria Island, and Lekki Phase 1 by boat and road.",
      "Natural fit for a Marquee marina Clubhouse and Events destination.",
      "Waterfront setting that creates a true island lifestyle.",
    ],
    images: {
      main: {
        text: "Map / Satellite View of Lekki",
        bgClass: "bg-[#BAE6FD]",
        src: "/images/img/location.PNG",
      },
      secondary: [
        {
          text: "Road Access View",
          bgClass: "bg-[#DDD6FE]",
          src: "/images/img/road-access.png",
        },
        {
          text: "Island Approach View",
          bgClass: "bg-[#A7F3D0]",
          src: "/images/img/island-approach.png",
        },
      ],
    },
  },

  // Lifestyle Slideshow
  lifestyleSlides: [
    {
      text: "Women Chatting by the Waterfront",
      src: "/images/img/waterfront-chat.png",
      bgClass: "bg-[#FDE68A]",
    },
    {
      text: "Family Relaxing on a Sailboat",
      src: "/images/img/sailboat-family.png",
      bgClass: "bg-[#FDBA74]",
    },
  ],

  // Exterior Gallery Slideshow
  exteriorSection: {
    title: "Fourwinds Exterior",
    slides: [
      {
        text: "Exterior Day Rendering",
        src: "/images/img/exterior-day.png",
        bgClass: "bg-[#E0F2FE]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Exterior Night Rendering",
        src: "/images/img/exterior-night.png",
        bgClass: "bg-[#1E3A8A]",
        textClass: "text-white",
      },
      {
        text: "Aerial View (Marina & Jetty)",
        src: "/images/img/aerial.png",
        bgClass: "bg-[#DCFCE7]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Panoramic Elevator Close-up",
        src: "/images/img/elevator.png",
        bgClass: "bg-[#FFEDD5]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Members on Yacht / Ocean Deck",
        src: "/images/img/yacht.png",
        bgClass: "bg-[#FCE7F3]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Parking & Entrance Approach",
        src: "/images/img/parking.png",
        bgClass: "bg-[#F1F5F9]",
        textClass: "text-[#1A1A1A]",
      },
    ],
  },

  // Interiors Gallery Slideshow
  interiorsSection: {
    title: "Fourwinds Interiors",
    subtitle: "Elegance and Comfort in Every Corner",
    slides: [
      {
        text: "Main Lounge & Reception Area",
        src: "/images/img/interior-1.jpeg",
        bgClass: "bg-[#E8E4DF]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Snooker & Games Room",
        src: "/images/img/interior-2.jpeg",
        bgClass: "bg-[#D4CFC8]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Restaurant & Dining Space",
        src: "/images/img/interior-3.jpeg",
        bgClass: "bg-[#C9C2B8]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Executive Bar Setup",
        src: "/images/img/interior-4.jpeg",
        bgClass: "bg-[#BEB5A8]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Grand Staircase & Hallways",
        src: "/images/img/interior-5.jpeg",
        bgClass: "bg-[#B3A898]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Grand Staircase & Hallways",
        src: "/images/img/interior-8.png",
        bgClass: "bg-[#B3A898]",
        textClass: "text-[#1A1A1A]",
      },
      {
        text: "Grand Staircase & Hallways",
        src: "/images/img/interior-7.png",
        bgClass: "bg-[#B3A898]",
        textClass: "text-[#1A1A1A]",
      },
      // {
      //   text: "Grand Staircase & Hallways",
      //   src: "/images/img/interior-8.jpeg",
      //   bgClass: "bg-[#B3A898]",
      //   textClass: "text-[#1A1A1A]",
      // },
    ],
  },

  // The Experience Section
  experience: {
    label: "The",
    title: "Fourwinds Experience",
    quote:
      '"The Fourwinds Experience is a culmination of luxury, privacy, and the pristine beauty of Lagos waters."',
    description:
      "Whether closing a deal, celebrating a milestone, or simply retreating from the city's pulse, every moment is curated to perfection.",
    sideImageText: "Abstract Lifestyle / Nautical Detail Image",
    bottomImageText: "Yacht Wake / Cruising Image",
  },

  // Disclaimer Section
  disclaimer: {
    title: "Important Notice",
    paragraphs: [
      "This document and its contents are highly confidential and are intended solely for the use of the individual or entity to whom they are addressed.",
      "If you are not the intended recipient of this document, you must not use, copy, disclose, or distribute its contents to any other person.",
    ],
    emphasis:
      "Please contact the sender immediately if you have received this document in error.",
  },

  // Footer Section
  footer: {
    clubName: "FOURWINDS BOAT CLUB",
    tagline: "West Africa's Most Iconic Private Club",
    contactLabel: "Contact Details",
    email: "membership@fourwindsboatclub.com",
    website: "WWW.FOURWINDSBOATCLUB.COM",
  },
};

export default fourwindsData;
