export interface Transformation {
  id: string;
  name: string;
  age: number;
  profession: string;
  weightLost: string;
  timeFrame: string;
  goal: string;
  muscleGained: string;
  coach: string;
  program: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  details: string;
}

export const transformationsData: Transformation[] = [
  {
    id: '1',
    name: 'James Harrison',
    age: 38,
    profession: 'Venture Capitalist',
    weightLost: '16.5 kg',
    timeFrame: '16 Weeks',
    goal: 'Fat Loss & Lean Muscle',
    muscleGained: '+4.2 kg',
    coach: 'Marcus Vance',
    program: 'Strength Training + Metabolic Reset',
    beforeImage: '/images/gym12.jpeg',
    afterImage: '/images/gym1.jpeg',
    quote: 'I used to think 70-hour work weeks meant my health had to take a back seat. YHC structured everything around my travel, and the results spoke for themselves in 4 months.',
    details: 'Dropped body fat from 26.5% to 12.8% while adding 45kg to his barbell squat.'
  },
  {
    id: '2',
    name: 'Natalie Chen',
    age: 32,
    profession: 'Creative Director',
    weightLost: '9.2 kg',
    timeFrame: '12 Weeks',
    goal: 'Tone, Posture & Energy',
    muscleGained: '+3.1 kg',
    coach: 'Elena Rostova',
    program: 'Metabolic Reset & Mobility',
    beforeImage: '/images/gym10.jpeg',
    afterImage: '/images/gym7.jpeg',
    quote: 'The constant fatigue and desk posture were draining me. Elena rebuilt my kinetic chain and taught me how to fuel my body with real food.',
    details: 'Eliminated lower back tightness and achieved her first strict pull-up.'
  },
  {
    id: '3',
    name: 'Marcus Brody',
    age: 44,
    profession: 'Managing Partner',
    weightLost: '18.0 kg',
    timeFrame: '24 Weeks',
    goal: 'Longevity & Cardiovascular Power',
    muscleGained: '+5.5 kg',
    coach: 'David Chen',
    program: 'Hypertrophy & Private Coaching',
    beforeImage: '/images/gym13.jpeg',
    afterImage: '/images/gym4.jpeg',
    quote: 'At 44, I am leaner and faster than I was in university. The environment at YHC makes greatness standard.',
    details: 'Lowered resting heart rate from 74 bpm to 48 bpm with normalized blood lipid panels.'
  }
];
