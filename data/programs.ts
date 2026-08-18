export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'strength' | 'conditioning' | 'hypertrophy' | 'coaching' | 'wellness';
  description: string;
  longDescription: string;
  featured?: boolean;
  intensity: 'High' | 'Moderate-High' | 'Custom' | 'All Levels';
  duration: string;
  frequency: string;
  trainer: string;
  trainerRole: string;
  image: string;
  highlights: string[];
  benefits: string[];
  schedule: { day: string; time: string; session: string }[];
}

export const programsData: Program[] = [
  {
    id: '1',
    slug: 'strength-training',
    title: 'STRENGTH TRAINING',
    subtitle: 'Pure Force & Compound Mechanics',
    category: 'strength',
    featured: true,
    description: 'Master compound lifts, barbell technique, and absolute power output through periodized athletic programming.',
    longDescription: 'Our signature Strength Training protocol combines progressive overload with biomechanically optimized movement patterns. Guided by master coaches, athletes build raw foundational strength and structural resilience.',
    intensity: 'High',
    duration: '60 min',
    frequency: '3�4x / week',
    trainer: 'Marcus Vance',
    trainerRole: 'Head of Performance',
    image: '/images/gym1.jpeg',
    highlights: [
      'Periodized strength blocks & peak cycles',
      'Olympic weightlifting & powerlifting platforms',
      'Real-time barbell velocity & bar path tracking',
      'Dedicated CNS recovery protocols'
    ],
    benefits: [
      'Increase absolute one-rep maximums across core lifts',
      'Enhance bone density and connective tissue durability',
      'Elevate resting metabolic rate and hormonal balance',
      'Develop unbreakable mental discipline'
    ],
    schedule: [
      { day: 'Mon & Thu', time: '06:30 AM / 05:30 PM', session: 'Lower Body Force & Squat Dynamics' },
      { day: 'Tue & Fri', time: '07:00 AM / 06:00 PM', session: 'Upper Body Press & Pull Mechanics' },
      { day: 'Saturday', time: '09:00 AM', session: 'Full Body Overload & Strongman Carries' }
    ]
  },
  {
    id: '2',
    slug: 'muscle-building',
    title: 'MUSCLE BUILDING',
    subtitle: 'Hypertrophy & Physique Architecture',
    category: 'hypertrophy',
    description: 'Precision volume, mechanical tension, and metabolic conditioning tailored for aesthetic muscle development.',
    longDescription: 'An elite hypertrophy curriculum designed to maximize muscle fiber recruitment. Using custom Arsenal Strength resistance curves, we eliminate weak links and build balanced athletic symmetry.',
    intensity: 'High',
    duration: '55 min',
    frequency: '4�5x / week',
    trainer: 'David Chen',
    trainerRole: 'Master Hypertrophy Coach',
    image: '/images/gym4.jpeg',
    highlights: [
      'Variable resistance curve machinery',
      'Custom hypertrophy split architecture',
      'Intra-workout hydration & amino protocols',
      'DEXA biometric muscular symmetry analysis'
    ],
    benefits: [
      'Sculpt balanced muscular proportions and posture',
      'Optimize target muscle mind-muscle connection',
      'Increase insulin sensitivity and nutrient partitioning',
      'Prevent overuse injuries through varied resistance angles'
    ],
    schedule: [
      { day: 'Mon & Wed', time: '08:00 AM / 06:30 PM', session: 'Torso: Chest, Upper Back & Deltoid Splay' },
      { day: 'Tue & Thu', time: '08:00 AM / 06:30 PM', session: 'Posterior Chain & Quad Development' },
      { day: 'Friday', time: '05:00 PM', session: 'Arms & Direct Core Specialization' }
    ]
  },
  {
    id: '3',
    slug: 'weight-loss',
    title: 'METABOLIC RESET',
    subtitle: 'Body Recomposition & Fat Loss',
    category: 'conditioning',
    description: 'High-yield metabolic circuits combining steady-state aerobic pacing and high-torque resistance intervals.',
    longDescription: 'The YHC Metabolic Reset delivers calculated energy expenditure combined with tailored nutritional blueprints to incinerate visceral fat while protecting hard-earned lean muscle mass.',
    intensity: 'Moderate-High',
    duration: '50 min',
    frequency: '3�5x / week',
    trainer: 'Elena Rostova',
    trainerRole: 'Director of Conditioning',
    image: '/images/gym7.jpeg',
    highlights: [
      'Continuous heart-rate zone 2 & 4 telemetry',
      'Low-impact high-output conditioning ergs',
      'Metabolic testing & resting baseline mapping',
      'Personalized macronutrient dietary blueprint'
    ],
    benefits: [
      'Sustainably shed body fat without metabolic slowdown',
      'Elevate mitochondrial density and daily stamina',
      'Regulate appetite hormones and blood glucose levels',
      'Improve cardiovascular oxygen uptake (VO2 max)'
    ],
    schedule: [
      { day: 'Mon / Wed / Fri', time: '06:00 AM / 07:00 PM', session: 'High-Density Interval Circuit' },
      { day: 'Tue / Thu', time: '09:00 AM / 05:00 PM', session: 'Zone 2 Aerobic Foundation' },
      { day: 'Sunday', time: '10:00 AM', session: 'Active Recovery & Mobility Flush' }
    ]
  },
  {
    id: '4',
    slug: 'personal-training',
    title: 'PRIVATE COACHING',
    subtitle: 'One-on-One Bespoke Mentorship',
    category: 'coaching',
    description: 'Dedicated 1-on-1 coaching with customized biomechanical assessment, nutrition tracking, and private suite access.',
    longDescription: 'The pinnacle of personalized athletic care. Your dedicated Master Coach designs every minute of your training, recovery, and nutrition around your individual biomarkers and ambitious goals.',
    intensity: 'Custom',
    duration: '60 min',
    frequency: 'Flexible Scheduling',
    trainer: 'Durgesh Patil',
    trainerRole: 'Elite Private Coach',
    image: '/images/gym8.jpeg',
    highlights: [
      'Private VIP training suites',
      'Weekly blood marker and hormonal reviews',
      'Custom digital training app with 24/7 coach chat',
      'Complimentary laundry, post-workout shake & recovery pass'
    ],
    benefits: [
      'Accelerate progress by 3x with tailored accountability',
      'Eliminate chronic movement compensations and pain',
      'Train around executive travel and busy lifestyles',
      'Direct WhatsApp access to your master coach'
    ],
    schedule: [
      { day: 'Daily Mon-Sun', time: '05:00 AM � 10:00 PM', session: 'By Private Appointment' }
    ]
  },
  {
    id: '5',
    slug: 'functional-fitness',
    title: 'FUNCTIONAL FITNESS',
    subtitle: 'Athletic Agility & Longevity',
    category: 'conditioning',
    description: 'Multi-planar movement, kettlebells, turf sprints, and joint stabilization for real-world athletic capability.',
    longDescription: 'Designed for high performers who demand real-world capability. We merge kettlebell ballistic work, plyometrics, sled pushes, and rotational core dynamics.',
    intensity: 'Moderate-High',
    duration: '50 min',
    frequency: '3�4x / week',
    trainer: 'Durgesh Patil',
    trainerRole: 'Athletic Performance Specialist',
    image: '/images/gym5.jpeg',
    highlights: [
      '50-meter indoor turf sprint & sled track',
      'Eleiko competition kettlebells and medicine balls',
      'Kinetic chain rotational power drills',
      'Joint durability and active mobility primers'
    ],
    benefits: [
      'Develop seamless multi-directional athletic speed',
      'Reinforce core rotational power for sport & daily life',
      'Eliminate low-back stiffness and hip impingement',
      'Boost everyday stamina and work capacity'
    ],
    schedule: [
      { day: 'Mon & Wed', time: '07:30 AM / 06:30 PM', session: 'Turf Power & Multi-Planar Agility' },
      { day: 'Tue & Thu', time: '07:30 AM / 06:30 PM', session: 'Kettlebell Complex & Core Stability' },
      { day: 'Saturday', time: '10:30 AM', session: 'Team Athletic Challenge' }
    ]
  },
  {
    id: '6',
    slug: 'cardio-conditioning',
    title: 'CARDIO & LONGEVITY',
    subtitle: 'Endurance & Heart Rate Mastery',
    category: 'wellness',
    description: 'Precision cardiovascular conditioning with Woodway curves, Concept2 ergs, and altitude simulation training.',
    longDescription: 'Cardiovascular health is the cornerstone of lifelong vitality. Our Longevity & Cardio program trains all energy pathways using gold-standard metric tracking.',
    intensity: 'All Levels',
    duration: '45 min',
    frequency: '3�4x / week',
    trainer: 'Sophia Al-Mansoor',
    trainerRole: 'Longevity & Mobility Lead',
    image: '/images/gym9.jpeg',
    highlights: [
      'Woodway 4Front manual curve treadmills',
      'Concept2 SkiErgs, Rowers, and BikeErgs',
      'Infrared sauna and cold plunge pairing',
      'Heart Rate Variability (HRV) recovery mapping'
    ],
    benefits: [
      'Lower resting heart rate and arterial stiffness',
      'Enhance cellular energy generation through mitophagy',
      'Improve sleep depth, REM cycles, and stress resilience',
      'Boost cognitive focus and mental sharpness'
    ],
    schedule: [
      { day: 'Mon / Wed / Fri', time: '07:00 AM / 06:00 PM', session: 'Aerobic Threshold & Erg Intervals' },
      { day: 'Tue / Thu', time: '08:30 AM / 05:30 PM', session: 'Incline Ruck & Sled Endurance' },
      { day: 'Saturday', time: '08:00 AM', session: 'Club 5K Run & Cold Plunge Session' }
    ]
  }
];
