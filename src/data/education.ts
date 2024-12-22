interface Education {
  year: string;
  institution: string;
  degree: string;
  location: string;
  icon: string;
}

export const education: Education[] = [
  {
    year: "2015-2018",
    institution: "The Juilliard School",
    degree: "Doctor of Musical Arts",
    location: "New York, USA",
    icon: "🎓",
  },
  {
    year: "2012-2014",
    institution: "Mozarteum University Salzburg",
    degree: "Master of Arts in Piano Performance",
    location: "Salzburg, Austria",
    icon: "🎹",
  },
  {
    year: "2008-2012",
    institution: "Conservatorio Luigi Cherubini",
    degree: "Bachelor of Music in Piano Performance",
    location: "Florence, Italy",
    icon: "🎼",
  },
  {
    year: "2007-2008",
    institution: "Royal College of Music",
    degree: "Advanced Performance Diploma",
    location: "London, UK",
    icon: "🎭",
  },
  {
    year: "2006-2007",
    institution: "Paris Conservatory",
    degree: "Artist Diploma in Chamber Music",
    location: "Paris, France",
    icon: "🎪",
  },
  {
    year: "2004-2006",
    institution: "Vienna Conservatory",
    degree: "Pre-College Program",
    location: "Vienna, Austria",
    icon: "🏛️",
  },
];
