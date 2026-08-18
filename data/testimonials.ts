export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  duration: string;
  rating: number;
  highlight: string;
  avatar: string;
  image: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'YHC is on another plane compared to any gym I have ever joined in New York, London, or Zurich. The attention to biomechanics, the serenity of the space, and the calibre of the coaches make training the highlight of my morning.',
    name: 'Alexander Wright',
    role: 'Managing Director, Private Equity',
    duration: 'Member for 2 Years',
    rating: 5,
    highlight: 'Down 14kg & Deadlift PR 220kg',
    avatar: '/images/gym8.jpeg',
    image: '/images/gym1.jpeg'
  },
  {
    id: '2',
    quote: 'As an architect, I am deeply sensitive to lighting, materials, and atmosphere. YHC feels more like an Aman resort crossed with a world-class athletic training lab. It is calm, inspiring, and completely unpretentious.',
    name: 'Clara Sorensen',
    role: 'Lead Architectural Principal',
    duration: 'Member for 18 Months',
    rating: 5,
    highlight: 'Recovered from Chronic Back Pain',
    avatar: '/images/gym7.jpeg',
    image: '/images/gym2.jpeg'
  },
  {
    id: '3',
    quote: 'The personalized programming by Marcus Vance changed my entire trajectory after turning 40. I have never felt more powerful, clear-headed, and energized. The cold plunge and sauna routine afterward is non-negotiable.',
    name: 'Dr. Michael Sterling',
    role: 'Orthopedic Surgeon',
    duration: 'Member for 3 Years',
    rating: 5,
    highlight: 'VO2 Max Increased by 22%',
    avatar: '/images/gym11.jpeg',
    image: '/images/gym4.jpeg'
  },
  {
    id: '4',
    quote: 'From the moment you walk through the door, the staff remembers your name, your coffee preferences, and your training schedule. It is a genuine community of driven people who take their health seriously.',
    name: 'Serena Vance-Lee',
    role: 'Tech Founder & Angel Investor',
    duration: 'Member for 1 Year',
    rating: 5,
    highlight: 'Gained 4kg Lean Muscle',
    avatar: '/images/gym10.jpeg',
    image: '/images/gym5.jpeg'
  }
];
