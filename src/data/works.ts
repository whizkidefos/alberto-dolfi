export type WorkCategory = 'orchestral' | 'chamber' | 'piano' | 'vocal';

export interface Work {
  title: string;
  year: string;
  duration: string;
  description: string;
  category: WorkCategory;
  premiere?: string;
  scoreUrl: string;
  audioUrl: string;
  image: string;
}

export const works: Work[] = [
  // Orchestral Works
  {
    title: "Symphony No. 1 'Luminescence'",
    year: "2023",
    duration: "35'",
    description: "A four-movement symphony exploring themes of light and darkness, featuring extensive use of percussion and brass sections.",
    category: "orchestral",
    premiere: "Berlin Philharmonic, June 2023",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV1068/bwv-1068-2/bwv-1068-2-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/BachGavotteShort.mp3",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80",
  },
  {
    title: "Piano Concerto in D Minor",
    year: "2022",
    duration: "28'",
    description: "A contemporary take on the classical piano concerto form, featuring extended piano techniques and innovative orchestration.",
    category: "orchestral",
    premiere: "London Symphony Orchestra, March 2022",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV1068/bwv1068_air/bwv1068_air-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.mp3",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80",
  },
  {
    title: "Symphonic Dances 'Elements'",
    year: "2021",
    duration: "25'",
    description: "A suite of four symphonic dances, each representing one of the classical elements: earth, water, air, and fire.",
    category: "orchestral",
    premiere: "Vienna Philharmonic, September 2021",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV1068/bwv1068_air/bwv1068_air-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/BachGavotteShort.mp3",
    image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&q=80",
  },

  // Chamber Works
  {
    title: "String Quartet No. 3 'Echoes'",
    year: "2023",
    duration: "22'",
    description: "A four-movement work exploring spatial sound and echo effects between the instruments.",
    category: "chamber",
    premiere: "Kronos Quartet, April 2023",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV1007/bwv1007_cello_suite_1/bwv1007_cello_suite_1-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/BachGavotteShort.mp3",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80",
  },
  {
    title: "Piano Quintet 'Reflections'",
    year: "2022",
    duration: "25'",
    description: "A single-movement work that seamlessly blends classical form with contemporary harmonies.",
    category: "chamber",
    premiere: "Vienna Chamber Ensemble, December 2022",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV846/wtk1-prelude1/wtk1-prelude1-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.mp3",
    image: "https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?auto=format&fit=crop&q=80",
  },
  {
    title: "Wind Quintet 'Seasons'",
    year: "2021",
    duration: "20'",
    description: "A vibrant exploration of the four seasons through the unique timbres of wind instruments.",
    category: "chamber",
    premiere: "Berlin Wind Ensemble, May 2021",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV846/wtk1-prelude1/wtk1-prelude1-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.mp3",
    image: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?auto=format&fit=crop&q=80",
  },

  // Piano Works
  {
    title: "Nocturnes (Set of 5)",
    year: "2023",
    duration: "18'",
    description: "A collection of five nocturnes inspired by different phases of the night, from dusk to dawn.",
    category: "piano",
    premiere: "Royal Albert Hall, May 2023",
    scoreUrl: "https://www.mutopiaproject.org/ftp/ChopinFF/O28/chopin_op28_no4/chopin_op28_no4-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.mp3",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80",
  },
  {
    title: "Sonata No. 2 'Tempest'",
    year: "2022",
    duration: "23'",
    description: "A three-movement sonata exploring themes of nature's fury and calm.",
    category: "piano",
    premiere: "Carnegie Hall, November 2022",
    scoreUrl: "https://www.mutopiaproject.org/ftp/MozartWA/KV545/mozart-sonata-facile/mozart-sonata-facile-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/BachGavotteShort.mp3",
    image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&q=80",
  },
  {
    title: "Études 'Contrasts'",
    year: "2021",
    duration: "25'",
    description: "A set of twelve études exploring various technical challenges and emotional extremes.",
    category: "piano",
    premiere: "Wigmore Hall, March 2021",
    scoreUrl: "https://www.mutopiaproject.org/ftp/ChopinFF/O28/chopin_op28_no4/chopin_op28_no4-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.mp3",
    image: "https://images.unsplash.com/photo-1571974599782-7c0518027768?auto=format&fit=crop&q=80",
  },

  // Vocal Works
  {
    title: "Song Cycle 'Seasons of the Heart'",
    year: "2023",
    duration: "20'",
    description: "A cycle of four songs for soprano and piano, each representing a different season and emotional state.",
    category: "vocal",
    premiere: "Wigmore Hall, July 2023",
    scoreUrl: "https://www.mutopiaproject.org/ftp/SchumannR/O48/Dichterliebe01/Dichterliebe01-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.mp3",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80",
  },
  {
    title: "Choral Suite 'Sacred Spaces'",
    year: "2022",
    duration: "15'",
    description: "A suite for mixed choir exploring different sacred texts and spatial arrangements.",
    category: "vocal",
    premiere: "St. Paul's Cathedral, October 2022",
    scoreUrl: "https://www.mutopiaproject.org/ftp/BachJS/BWV147/jesu-joy/jesu-joy-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.mp3",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
  },
  {
    title: "Opera 'The Lighthouse'",
    year: "2021",
    duration: "120'",
    description: "A chamber opera in two acts based on the mysterious disappearance of three lighthouse keepers.",
    category: "vocal",
    premiere: "Royal Opera House, December 2021",
    scoreUrl: "https://www.mutopiaproject.org/ftp/SchumannR/O48/Dichterliebe01/Dichterliebe01-a4.pdf",
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.mp3",
    image: "https://images.unsplash.com/photo-1534370228686-b8c229f633e1?auto=format&fit=crop&q=80",
  },
];
