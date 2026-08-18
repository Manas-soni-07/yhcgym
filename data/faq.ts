export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'membership' | 'training' | 'facilities';
}

export const faqData: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    question: 'What are YHC opening hours?',
    answer: 'The club is open 24 hours a day, 7 days a week for all active members via biometric mobile access. Our front desk concierge, master trainers, and recovery lounge staff are on site Monday through Friday from 05:30 AM to 10:00 PM, and Saturday & Sunday from 07:00 AM to 08:00 PM.'
  },
  {
    id: '2',
    category: 'general',
    question: 'Do you offer a free trial?',
    answer: 'Yes. We welcome prospective members to book a complimentary 1-day Full Club Experience pass. This includes a personalized club walkthrough, a 45-minute movement and biomechanical assessment with a Master Coach, full access to our strength floor, and a session in our recovery sauna and cold plunge.'
  },
  {
    id: '3',
    category: 'training',
    question: 'Can beginners join?',
    answer: 'Absolutely. Over 40% of our members began with little to no previous barbell experience. Every new member receives our comprehensive 3-step Onboarding Protocol, where coach assessments ensure you learn safe, foundational mechanics before progressing to loaded movements.'
  },
  {
    id: '4',
    category: 'training',
    question: 'Do you offer personal training?',
    answer: 'Yes. Our Master Coaches provide tailored 1-on-1 private coaching suites. Private mentorship includes complete biomechanical movement screening, custom periodized workouts, nutrition coaching, weekly biomarker tracking, and direct WhatsApp coach messaging.'
  },
  {
    id: '5',
    category: 'membership',
    question: 'What membership plans are available?',
    answer: 'We offer three primary membership tiers: Monthly ($180/mo with flexible cancelation), Quarterly Club ($150/mo billed every 3 months, featuring complimentary PT sessions and DEXA scans), and Annual Patron ($120/mo billed annually with private permanent locker, gear laundry, and 12 PT sessions).'
  },
  {
    id: '6',
    category: 'facilities',
    question: 'What luxury amenities are included?',
    answer: 'YHC provides European infrared saunas, custom cold plunge tubs (maintained at 42�F / 5.5�C), rainfall steam showers with organic Malin+Goetz toiletries, full towel service, artisanal espresso bar, private lockers, and biometric heart-rate telemetry.'
  },
  {
    id: '7',
    category: 'membership',
    question: 'Can I freeze my membership when traveling?',
    answer: 'Yes. Annual Patron members receive up to 30 days of travel pause per calendar year, and Quarterly members receive 14 days. Simply notify our concierge via WhatsApp 48 hours prior to your travel departure.'
  },
  {
    id: '8',
    category: 'facilities',
    question: 'Where is YHC located?',
    answer: 'YHC is centrally located at 124 Mayfair Avenue (City Centre). We offer complimentary private underground valet parking for members, as well as dedicated bike storage and electric vehicle charging stations.'
  }
];
