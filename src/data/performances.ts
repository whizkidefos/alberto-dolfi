export interface Performance {
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  program: string[];
  image: string;
  ticketUrl?: string;
  description?: string;
}

export const performances: Performance[] = [
  {
    title: "New Year's Gala Concert",
    date: "2024-12-31",
    time: "19:30",
    venue: "Carnegie Hall",
    location: "New York, NY",
    program: [
      'Beethoven: Symphony No. 9 "Choral"',
      "Strauss: The Blue Danube",
      "Tchaikovsky: The Nutcracker Suite",
    ],
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&q=80",
    description: "Ring in the New Year with a spectacular evening of classical masterpieces.",
    ticketUrl: "https://example.com/tickets",
  },
  {
    title: "Piano Masterworks",
    date: "2025-01-15",
    time: "20:00",
    venue: "Royal Albert Hall",
    location: "London, UK",
    program: [
      'Rachmaninoff: Piano Concerto No. 2',
      "Chopin: Selected Nocturnes",
      "Liszt: Hungarian Rhapsody No. 2",
    ],
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80",
    description: "An evening of romantic piano masterpieces in the heart of London.",
    ticketUrl: "https://example.com/tickets-london",
  },
  {
    title: "Modern Reflections",
    date: "2025-02-20",
    time: "19:00",
    venue: "Elbphilharmonie",
    location: "Hamburg, Germany",
    program: [
      "Glass: Piano Etudes",
      "Reich: Music for 18 Musicians",
      "Adams: Short Ride in a Fast Machine",
    ],
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    description: "A journey through contemporary classical music in Hamburg's architectural marvel.",
    ticketUrl: "https://example.com/tickets-hamburg",
  },
  {
    title: "Spring Chamber Music Festival",
    date: "2025-03-10",
    time: "18:30",
    venue: "Musikverein",
    location: "Vienna, Austria",
    program: [
      "Mozart: String Quartet No. 19 'Dissonance'",
      "Dvořák: Piano Quintet No. 2",
      "Schumann: Piano Quartet in E-flat major",
    ],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    description: "Experience the intimacy of chamber music in the golden hall of Musikverein.",
    ticketUrl: "https://example.com/tickets-vienna",
  },
  {
    title: "Symphonic Landscapes",
    date: "2025-04-05",
    time: "20:00",
    venue: "Walt Disney Concert Hall",
    location: "Los Angeles, CA",
    program: [
      "Mahler: Symphony No. 2 'Resurrection'",
      "Debussy: La Mer",
    ],
    image: "https://images.unsplash.com/photo-1566553253535-a73c0d133929?auto=format&fit=crop&q=80",
    description: "A monumental evening of orchestral masterpieces in LA's iconic concert hall.",
    ticketUrl: "https://example.com/tickets-la",
  },
  {
    title: "Contemporary Visions",
    date: "2025-05-15",
    time: "19:30",
    venue: "Sydney Opera House",
    location: "Sydney, Australia",
    program: [
      "John Adams: Harmonielehre",
      "Kaija Saariaho: Light and Matter",
      "Thomas Adès: Asyla",
    ],
    image: "https://images.unsplash.com/photo-1551937796-3f69db85a0c9?auto=format&fit=crop&q=80",
    description: "Experience the cutting edge of classical music in Sydney's iconic venue.",
    ticketUrl: "https://example.com/tickets-sydney",
  },
];
