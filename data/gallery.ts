export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'architecture' | 'strength' | 'recovery' | 'coaching';
  categoryLabel: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'The Olympic Platform Deck',
    category: 'strength',
    categoryLabel: 'Strength Floor',
    image: '/images/gym1.jpeg',
    aspect: 'wide',
    caption: 'Handcrafted oak platforms with Eleiko Swedish steel competition barbells and calibrated plates.'
  },
  {
    id: '2',
    title: 'Minimalist Club Architecture',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/gym2.jpeg',
    aspect: 'tall',
    caption: 'Natural oak, travertine stone, and ambient architectural lighting create a serene atmosphere.'
  },
  {
    id: '3',
    title: 'Hypertrophy Machine Suite',
    category: 'strength',
    categoryLabel: 'Strength Floor',
    image: '/images/gym4.jpeg',
    aspect: 'square',
    caption: 'Custom Arsenal Strength and Prime Fitness variable-resistance selectorized equipment.'
  },
  {
    id: '4',
    title: 'Infrared Sauna & Thermal Suite',
    category: 'recovery',
    categoryLabel: 'Recovery & Longevity',
    image: '/images/gym6.jpeg',
    aspect: 'wide',
    caption: 'Cedarwood Finnish saunas with full-spectrum infrared therapy and ambient chromotherapy.'
  },
  {
    id: '5',
    title: 'Private Coaching Sanctuary',
    category: 'coaching',
    categoryLabel: 'Coaching',
    image: '/images/gym8.jpeg',
    aspect: 'tall',
    caption: '1-on-1 private training suite designed for focused movement assessments and biomechanics.'
  },
  {
    id: '6',
    title: 'Sub-Zero Cold Plunge Basin',
    category: 'recovery',
    categoryLabel: 'Recovery & Longevity',
    image: '/images/gym12.jpeg',
    aspect: 'square',
    caption: 'Filtered glacier-cold plunge pools regulated at 42�F for rapid vascular flushing.'
  },
  {
    id: '7',
    title: '50-Meter Indoor Turf Sprint',
    category: 'strength',
    categoryLabel: 'Strength Floor',
    image: '/images/gym5.jpeg',
    aspect: 'wide',
    caption: 'High-density athletic turf for resisted sled sprints, plyometrics, and kettlebell flow.'
  },
  {
    id: '8',
    title: 'Rainfall Shower Suites',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/gym3.jpeg',
    aspect: 'tall',
    caption: 'Private marble rainfall showers stocked with organic botanical amenities and plush towels.'
  },
  {
    id: '9',
    title: 'Movement & Mobility Deck',
    category: 'coaching',
    categoryLabel: 'Coaching',
    image: '/images/gym7.jpeg',
    aspect: 'square',
    caption: 'Spacious hardwood studio for fascial release, Pilates reformer, and mobility workshops.'
  },
  {
    id: '10',
    title: 'High Performance Athletic Zone',
    category: 'strength',
    categoryLabel: 'Strength Floor',
    image: '/images/gym11.jpeg',
    aspect: 'wide',
    caption: 'Advanced athletic conditioning floor with custom dumbbells, kettlebells, and functional rigs.'
  },
  {
    id: '11',
    title: 'Precision Biomechanics Floor',
    category: 'strength',
    categoryLabel: 'Strength Floor',
    image: '/images/gym13.jpeg',
    aspect: 'tall',
    caption: 'State-of-the-art selectorized stations with variable resistance cam profiles.'
  },
  {
    id: '12',
    title: 'Recovery Lounge & Wellness Bar',
    category: 'recovery',
    categoryLabel: 'Recovery & Longevity',
    image: '/images/gym14.png',
    aspect: 'wide',
    caption: 'Artisanal espresso and adaptogenic hydration lounge overlooking Mayfair Avenue.'
  }
];
