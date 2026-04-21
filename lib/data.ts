// Fourwinds Boat Club - Dynamic Data

export const clubInfo = {
  name: 'Fourwinds Boat Club',
  tagline: 'Good Winds. Good Sails.',
  subtitle: "West Africa's Most Iconic Private Club",
  motto: 'Curated Rather Than Crowded',
  description:
    'An exclusive marina and waterfront members boat club built for the Lagos elite. Where hospitality, premium real estate, member-led influence, and full-service marine recreation converge.',
  location: 'Gracefield Island, Lekki Peninsula, Lagos',
  email: 'josiyi@fourwindsboatclub.com',
  phone: '08035752563',
  contact: {
    email: 'josiyi@fourwindsboatclub.com',
    phone: '08035752563',
    address: 'Gracefield Island, Lekki Peninsula, Lagos',
    description: 'Quick access to Ikoyi, Victoria Island, and Lekki Phase 1 by boat and road',
  },
}

export const amenities = [
  {
    title: 'Private Jetty & Berths',
    description: 'Direct lagoon access with private jetties and dedicated berths for members',
    icon: 'Anchor',
  },
  {
    title: 'Boat Repair Shop',
    description: 'State-of-the-art facilities for yacht maintenance and repairs',
    icon: 'Wrench',
  },
  {
    title: 'State-of-the-Art Gym',
    description: 'Premium fitness facilities for members and their guests',
    icon: 'Dumbbell',
  },
  {
    title: 'Sauna & Spa',
    description: 'Luxury wellness center for complete relaxation and rejuvenation',
    icon: 'Droplets',
  },
  {
    title: 'Fine Dining Restaurant',
    description: 'Exquisite culinary experiences with panoramic waterfront views',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Café & Tea Shop',
    description: 'Casual dining space perfect for meetings and socializing',
    icon: 'Coffee',
  },
  {
    title: 'Squash Court',
    description: 'Professional-grade courts for recreational and competitive play',
    icon: 'Trophy',
  },
  {
    title: 'Outdoor Pool',
    description: 'Scenic waterfront pool with ocean views and relaxation areas',
    icon: 'Waves',
  },
  {
    title: 'Ocean View Deck',
    description: 'Spectacular panoramic deck overlooking the lagoon and marina',
    icon: 'Sunset',
  },
  {
    title: 'Snooker & Darts',
    description: 'Recreational gaming facilities for social entertainment',
    icon: 'Target',
  },
  {
    title: 'Children&apos;s Play Area',
    description: 'Safe, supervised recreational space for young members',
    icon: 'Smile',
  },
  {
    title: 'Concierge Services',
    description: '24/7 dedicated support for all your maritime and lifestyle needs',
    icon: 'Headset',
  },
  {
    title: 'Meeting Rooms & Offices',
    description: 'Professional spaces for corporate gatherings and private meetings',
    icon: 'Building2',
  },
  {
    title: 'Panoramic Elevator',
    description: 'Modern elevator system offering breathtaking views of the marina',
    icon: 'Move',
  },
  {
    title: 'Premium Security',
    description: 'Stand-by security team ensuring member safety and privacy',
    icon: 'Shield',
  },
  {
    title: 'Ample Parking',
    description: 'Convenient and secure parking facilities for all members',
    icon: 'ParkingCircle',
  },
]

export const amenitiesByCategory = [
  {
    category: 'Recreation & Sports',
    items: ['State-of-the-Art Gym', 'Squash Court', 'Outdoor Pool', 'Snooker & Darts', 'Children&apos;s Play Area'],
  },
  {
    category: 'Dining & Beverage',
    items: ['Fine Dining Restaurant', 'Café & Tea Shop'],
  },
  {
    category: 'Maritime Facilities',
    items: ['Private Jetty & Berths', 'Boat Repair Shop'],
  },
  {
    category: 'Wellness & Relaxation',
    items: ['Sauna & Spa', 'Ocean View Deck'],
  },
  {
    category: 'Business & Services',
    items: ['Meeting Rooms & Offices', 'Concierge Services', 'Premium Security', 'Panoramic Elevator', 'Ample Parking'],
  },
]

export const membershipTiers = [
  {
    name: 'Regular Membership',
    type: 'Individual',
    description: 'Perfect for private individuals meeting our membership criteria',
    features: [
      'Full access to all facilities',
      'Private jetty access',
      'Member exclusive events',
      'Priority booking for facilities',
      'Concierge support during business hours',
      'Access to boat repair services',
      'Family privileges for up to 4 guests',
    ],
    highlighted: false,
    icon: 'Sailboat',
  },
  {
    name: 'Foreign Membership',
    type: 'International',
    description: 'Tailored for foreign nationals and expatriates in Lagos',
    features: [
      'All Regular Membership benefits',
      'Priority access for international guests',
      '24/7 multilingual concierge support',
      'Guest accommodation assistance',
      'Travel coordination services',
      'Visa facilitation support',
      'Extended guest privileges',
      'Premium event access',
    ],
    highlighted: true,
    icon: 'Globe',
  },
  {
    name: 'Corporate Membership',
    type: 'Organization',
    description: 'Strategic relationship capital investment for corporate entities',
    features: [
      'All membership benefits',
      'Dedicated corporate contact',
      'Client entertainment spaces',
      'Executive strategy session rooms',
      'Board retreat facilities',
      'Product launch venue access',
      'Staff reward and recognition events',
      'Unlimited guest privileges',
      'Custom event planning',
      'Priority facility booking',
      'Premium dining options',
      'Annual appreciation gala access',
    ],
    highlighted: false,
    icon: 'Building',
  },
]

export const exclusiveEvents = [
  {
    name: 'Annual Regatta',
    description: 'Premier sailing competition bringing together the most skilled sailors in West Africa',
    icon: 'Sailboat',
  },
  {
    name: 'Boating Expeditions',
    description: 'Curated maritime adventures exploring stunning coastal destinations',
    icon: 'Waves',
  },
  {
    name: 'Fishing Competitions',
    description: 'Thrilling offshore fishing tournaments with exclusive prizes',
    icon: 'Fish',
  },
  {
    name: 'Member Galas',
    description: 'Elegant evening celebrations with fine dining and premium entertainment',
    icon: 'Sparkles',
  },
  {
    name: 'Sunset Cruises',
    description: 'Romantic waterfront experiences with curated entertainment',
    icon: 'Sunset',
  },
  {
    name: 'Executive Mixers',
    description: 'Networking events designed for high-net-worth individuals and corporate leaders',
    icon: 'Users',
  },
]

export const targetAudience = [
  'High-net-worth individuals and the Lagos elite',
  'Global visitors and foreign expatriates',
  'Corporate organizations seeking premium client engagement spaces',
  'Executive boards planning strategic retreats',
  'Families looking for exclusive recreational facilities',
]

export const visionStatement =
  'To establish West Africa&apos;s premier waterfront destination where maritime excellence, luxury hospitality, and exclusive community converge, offering an unparalleled experience for the discerning few.'

export const experience = {
  title: 'The Fourwinds Experience',
  description:
    'Five-star hospitality delivered with precision. A curated network of like-minded individuals sharing a passion for maritime excellence and refined living.',
  highlights: [
    'Exclusive membership by invitation',
    'Superyacht-inspired architecture and design',
    'Seamless blend of urban convenience and natural serenity',
    'World-class amenities and services',
    'Curated social events and networking opportunities',
  ],
}

export const navigationItems = ['The Club', 'Amenities', 'Membership', 'Events', 'Contact']

export const gallery = [
  {
    id: 1,
    title: 'Marina & Private Jetties',
    category: 'Facilities',
    image: '/images/marina.jpg',
  },
  {
    id: 2,
    title: 'Fine Dining Restaurant',
    category: 'Dining',
    image: '/images/restaurant.jpg',
  },
  {
    id: 3,
    title: 'Waterfront Deck',
    category: 'Spaces',
    image: '/images/deck.jpg',
  },
  {
    id: 4,
    title: 'Spa & Wellness Center',
    category: 'Amenities',
    image: '/images/spa.jpg',
  },
  {
    id: 5,
    title: 'Exterior Architecture',
    category: 'Architecture',
    image: '/images/exterior.jpg',
  },
  {
    id: 6,
    title: 'Lounge Area',
    category: 'Spaces',
    image: '/images/lounge.jpg',
  },
]
