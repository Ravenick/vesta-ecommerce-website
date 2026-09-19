import type { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 1000,
    name: 'Meridian',
    tag: 'Contemporary',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    price: 45000,
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A striking contemporary residence featuring clean geometric lines, floor-to-ceiling windows, and an open-concept living space that seamlessly blends indoor and outdoor living. The Meridian offers a sophisticated urban sanctuary with premium finishes throughout.',
    features: [
      'Open-concept living & dining',
      'Gourmet kitchen with island',
      'Master suite with walk-in closet',
      'Home office nook',
      'Three-car garage',
      'Private courtyard',
    ],
  },
  {
    id: 1002,
    name: 'Courtyard Bungalow',
    tag: 'Modern',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    price: 32000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A charming modern bungalow centered around a private courtyard. This single-level design emphasizes indoor-outdoor living with sliding glass walls that open to the central patio, perfect for entertaining or quiet relaxation.',
    features: [
      'Central courtyard',
      'Open-plan living area',
      'Designer kitchen',
      'Master retreat',
      'Covered outdoor lounge',
      'Two-car garage',
    ],
  },
  {
    id: 1003,
    name: 'Villa Ancora',
    tag: 'Mediterranean',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    price: 62000,
    image:
      'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'An exquisite Mediterranean-inspired villa showcasing arched doorways, terracotta roof tiles, and a stunning central atrium. Villa Ancora embodies timeless elegance with modern amenities for luxurious family living.',
    features: [
      'Grand foyer with atrium',
      'Formal living & dining',
      'Gourmet kitchen with butler\'s pantry',
      'Master suite with private terrace',
      'Resort-style pool deck',
      'Three-car garage',
    ],
  },
  {
    id: 1004,
    name: 'The Loft House',
    tag: 'Industrial',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    price: 28000,
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'An industrial-chic urban dwelling featuring soaring double-height ceilings, exposed steel beams, and polished concrete floors. The Loft House captures the essence of modern city living with raw sophistication.',
    features: [
      'Double-height living room',
      'Mezzanine office space',
      'Chef\'s kitchen',
      'Master loft bedroom',
      'Rooftop terrace',
      'Secure parking',
    ],
  },
  {
    id: 1005,
    name: 'Oasis Retreat',
    tag: 'Tropical',
    beds: 4,
    baths: 3,
    sqft: '3,600',
    price: 48000,
    image:
      'https://images.pexels.com/photos/210257/pexels-photo-210257.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A tropical paradise designed for indoor-outdoor living. Lush landscaping surrounds this stunning residence, featuring natural stone accents, water features, and expansive covered terraces for year-round enjoyment.',
    features: [
      'Infinity pool',
      'Outdoor kitchen & bar',
      'Screened lanai',
      'Spa-inspired master bath',
      'Guest casita potential',
      'Three-car garage',
    ],
  },
  {
    id: 1006,
    name: 'Cascade Heights',
    tag: 'Contemporary',
    beds: 4,
    baths: 3,
    sqft: '3,400',
    price: 51000,
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A dramatic contemporary home cascading down a hillside, maximizing views at every level. Each floor reveals a new perspective with cantilevered terraces and walls of glass framing panoramic vistas.',
    features: [
      'Tiered living spaces',
      'Panoramic views',
      'Wine cellar',
      'Home theater',
      'Infinity-edge spa',
      'Elevator ready',
    ],
  },
  {
    id: 1007,
    name: 'Sahel Compound',
    tag: 'Modern',
    beds: 5,
    baths: 5,
    sqft: '5,200',
    price: 72000,
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'An estate-style compound designed for multi-generational living. Sahel Compound features a main residence plus separate guest quarters, creating a private sanctuary for extended family living.',
    features: [
      'Main house + guest house',
      'Staff quarters',
      'Resort-style pool complex',
      'Multiple entertaining spaces',
      'Private driveway',
      'Four-car garage',
    ],
  },
  {
    id: 1008,
    name: 'The Terrace Row',
    tag: 'Urban',
    beds: 3,
    baths: 2,
    sqft: '2,400',
    price: 35000,
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'A sophisticated townhouse design maximizing urban space efficiency without sacrificing style. The Terrace Row features multiple outdoor terraces, creating vertical living spaces in the city.',
    features: [
      'Rooftop terrace',
      'Private courtyard',
      'Two-story living room',
      'Chef\'s kitchen',
      'Home gym space',
      'Two-car parking',
    ],
  },
];

export const HERO_SLIDES = [
  { planId: 1000, tag: 'Contemporary', title: 'Meridian', desc: 'Clean geometric lines meet panoramic living in this striking contemporary residence.' },
  { planId: 1002, tag: 'Modern', title: 'Courtyard Bungalow', desc: 'A modern bungalow centered around a private courtyard for seamless indoor-outdoor living.' },
  { planId: 1003, tag: 'Mediterranean', title: 'Villa Ancora', desc: 'Timeless elegance with Mediterranean-inspired architecture and modern luxury.' },
  { planId: 1007, tag: 'Modern', title: 'Sahel Compound', desc: 'An estate-style compound designed for multi-generational family living.' },
];

export const TICKER_ITEMS = [
  { name: 'Meridian', tag: 'Contemporary' },
  { name: 'Courtyard Bungalow', tag: 'Modern' },
  { name: 'Villa Ancora', tag: 'Mediterranean' },
  { name: 'The Loft House', tag: 'Industrial' },
  { name: 'Oasis Retreat', tag: 'Tropical' },
  { name: 'Cascade Heights', tag: 'Contemporary' },
  { name: 'Sahel Compound', tag: 'Modern' },
  { name: 'The Terrace Row', tag: 'Urban' },
];

export const ABOUT_FEATURES = [
  { icon: 'compass-drafting', title: 'Expert Design', desc: 'Every plan is crafted by licensed architects with decades of experience.' },
  { icon: 'shield-check', title: 'Code Compliant', desc: 'All plans meet current building codes and can be customized for your jurisdiction.' },
  { icon: 'file-contract', title: 'Complete Package', desc: 'Detailed construction documents, material lists, and 3D renderings included.' },
];
