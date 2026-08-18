export interface PricingPlan {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  period: string;
  billingText: string;
  featured?: boolean;
  badge?: string;
  description: string;
  features: string[];
  perks: string[];
  ctaText: string;
  ctaAction: 'trial' | 'membership' | 'whatsapp';
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'MONTHLY',
    slug: 'monthly-access',
    tagline: 'Flexible Club Membership',
    price: 180,
    period: '/ month',
    billingText: 'Billed monthly. Cancel anytime with 30 days notice.',
    featured: false,
    description: 'Complete unrestricted access to YHC facilities, strength floor, and signature group training sessions.',
    features: [
      'Unlimited 24/7 Access to Main Club',
      'Full use of Eleiko & Arsenal Strength floors',
      'Access to all Signature Group Classes',
      'Digital YHC Mobile App & Workout Log',
      'Locker room, rainfall showers & sauna access',
      'Complimentary artisanal espresso & towel service'
    ],
    perks: [
      '1 Complimentary 1-on-1 Fitness Assessment',
      '1 Free Guest Pass per month'
    ],
    ctaText: 'START MEMBERSHIP',
    ctaAction: 'membership'
  },
  {
    id: 'quarterly',
    name: 'QUARTERLY',
    slug: 'quarterly-club',
    tagline: 'Dedicated Transformation Tier',
    price: 150,
    period: '/ month',
    billingText: 'Billed every 3 months ($450 total). Save 17%.',
    featured: true,
    badge: 'BEST VALUE',
    description: 'Our most popular membership for committed individuals seeking measurable physical changes and holistic care.',
    features: [
      'All Monthly Access Inclusions',
      'Priority booking for Peak Training Hours',
      '2 Private 1-on-1 Coaching Sessions per quarter',
      'Quarterly DEXA Body Composition Scans',
      'Full Access to Cold Plunge & Contrast Therapy',
      'Custom Macronutrient & Nutrition Blueprint',
      'Nutritional Supplement Consultation'
    ],
    perks: [
      '3 Complimentary VIP Guest Passes per quarter',
      'Exclusive YHC Welcome Athletic Kit'
    ],
    ctaText: 'CHOOSE QUARTERLY',
    ctaAction: 'membership'
  },
  {
    id: 'yearly',
    name: 'YEARLY',
    slug: 'annual-patron',
    tagline: 'The Ultimate Patron Membership',
    price: 120,
    period: '/ month',
    billingText: 'Billed annually ($1,440 total). Save 33%.',
    featured: false,
    badge: 'VIP ACCESS',
    description: 'The definitive luxury wellness experience with private locker amenities, concierge access, and regular 1-on-1 mentorship.',
    features: [
      'All Quarterly Access Inclusions',
      'Dedicated Private Locker with Personal Nameplate',
      'Complimentary Club Laundry & Gear Service',
      '12 Private 1-on-1 Coaching Sessions included',
      'Monthly In-Depth Biomarker & Biometric Reviews',
      'Unlimited Guest Passes (1 per visit)',
      'VIP Invitations to Masterclass & Social Dinners'
    ],
    perks: [
      'Direct WhatsApp Concierge & Coach Channel',
      '1-Month Membership Pause for travel allowance'
    ],
    ctaText: 'BECOME A PATRON',
    ctaAction: 'membership'
  }
];

export const comparisonFeatures = [
  { feature: '24/7 Access to Main Club & Grounds', monthly: true, quarterly: true, yearly: true },
  { feature: 'Eleiko & Arsenal Strength Machinery', monthly: true, quarterly: true, yearly: true },
  { feature: 'Infrared Sauna & Steam Rooms', monthly: true, quarterly: true, yearly: true },
  { feature: 'All Signature Group Classes', monthly: true, quarterly: true, yearly: true },
  { feature: 'Cold Plunge & Contrast Therapy Suite', monthly: 'Add-on', quarterly: true, yearly: true },
  { feature: 'Private 1-on-1 Coaching Sessions', monthly: 'None', quarterly: '2 / Quarter', yearly: '12 / Year' },
  { feature: 'DEXA Body Composition Scans', monthly: '$50 each', quarterly: '1 / Quarter', yearly: 'Monthly' },
  { feature: 'Custom Nutrition & Macro Blueprint', monthly: false, quarterly: true, yearly: true },
  { feature: 'Permanent Private Locker & Nameplate', monthly: false, quarterly: false, yearly: true },
  { feature: 'Complimentary Laundry & Towel Service', monthly: 'Towel Only', quarterly: 'Towel Only', yearly: 'Full Laundry' },
  { feature: 'Guest Passes Included', monthly: '1 / mo', quarterly: '3 / quarter', yearly: 'Unlimited (1/visit)' },
  { feature: 'Travel Freeze Allowance', monthly: false, quarterly: '14 Days', yearly: '30 Days' }
];
