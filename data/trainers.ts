export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  featured?: boolean;
  certifications: string[];
  philosophy: string;
  achievements: string[];
}

export const trainersData: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Head of Performance',
    specialization: 'Olympic Weightlifting & Neuromuscular Strength',
    experience: '12+ Years',
    featured: true,
    image: '/images/gym8.jpeg',
    bio: 'Former national strength coach and biomechanics specialist. Marcus has developed physical conditioning programs for international athletes, Olympic hopefuls, and top executives.',
    certifications: ['CSCS (NSCA)', 'USAW Level 3 Senior Coach', 'FMS Level 2 Certified', 'B.Sc. Exercise Science'],
    philosophy: 'Strength is the foundational physical quality upon which all other athletic achievements are built. Respect the barbell, honor the mechanics.',
    achievements: [
      'Coached 14 National Olympic weightlifting medalists',
      'Keynote speaker at International Strength Summit',
      'Author of The Biomechanics of Barbell Velocity'
    ]
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Director of Conditioning',
    specialization: 'Metabolic Optimization & Athletic Durability',
    experience: '9+ Years',
    featured: false,
    image: '/images/gym7.jpeg',
    bio: 'Specializing in high-yield metabolic conditioning and hormonal health. Elena blends scientific endurance pacing with targeted resistance training to transform body composition and stamina.',
    certifications: ['EXOS Performance Specialist', 'Precision Nutrition Master Coach (Pn2)', 'CrossFit Level 3 Trainer'],
    philosophy: 'Real conditioning is not about exhausting yourself; it is about building an engine that recovers instantly and runs effortlessly under stress.',
    achievements: [
      'Formulated the YHC Metabolic Recomposition Protocol',
      'Over 400 successful client transformations',
      'Former European Track & Field Decathlete Coach'
    ]
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Master Hypertrophy Coach',
    specialization: 'Skeletal Muscle Biomechanics & Physique Architecture',
    experience: '10+ Years',
    featured: false,
    image: '/images/gym4.jpeg',
    bio: 'David combines clinical biomechanics with advanced bodybuilding principles to engineer symmetrical, injury-free physiques with surgical precision and intelligent volume management.',
    certifications: ['NCSA-CPT', 'Muscle Activation Techniques (MAT)', 'Poliquin PICP Level 2'],
    philosophy: 'Stimulate, do not annihilate. When tension is placed precisely where it belongs, growth is an inevitable biological response.',
    achievements: [
      'Consultant to IFBB Pro and Natural Physique athletes',
      'Developed YHC Custom Resistance Curve Profiles',
      'Over 1,000 hours of 1-on-1 private coaching delivery'
    ]
  },
  {
    id: '4',
    name: 'Sophia Al-Mansoor',
    role: 'Longevity & Recovery Specialist',
    specialization: 'Fascial Release, Mobility & Autonomic Nervous System',
    experience: '8+ Years',
    featured: false,
    image: '/images/gym10.jpeg',
    bio: 'Sophia bridges the gap between intense strength training and regenerative longevity. She oversees the YHC Recovery Lounge, cold plunge breathwork, and fascial mobility workshops.',
    certifications: ['FRC Mobility Specialist (FRCms)', 'Kinstretch Instructor', 'Breathwork & Cold Thermogenesis Certified'],
    philosophy: 'Longevity is your capacity to adapt, repair, and express movement without pain for decades to come.',
    achievements: [
      'Pioneered the YHC Hot/Cold Contrast Recovery Protocol',
      'Lecturer on Circadian Rhythm & Sleep Optimization'
    ]
  },
  {
    id: '5',
    name: 'Durgesh Patil',
    role: 'High Performance Athletic Coach',
    specialization: 'Rotational Power, Turf Speed & Functional Capacity',
    experience: '11+ Years',
    featured: false,
    image: '/images/gym11.jpeg',
    bio: 'Durgesh is an elite trainer focused on transferring gym strength onto the playing field, the court, and everyday physical challenges through kinetic chain integration.',
    certifications: ['NSCA-CSCS', 'Titleist Performance Institute (TPI Level 2)', 'StrongFirst Kettlebell Instructor (SFG I)'],
    philosophy: 'Movement quality creates athletic freedom. Train movements, not isolated muscles.',
    achievements: [
      'Coached PGA Tour and ATP professional competitors',
      'Developed 50m Turf Athletic Matrix at YHC'
    ]
  }
];
