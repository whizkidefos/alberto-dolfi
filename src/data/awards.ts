interface Award {
  year: string;
  award: string;
  description: string;
  icon: string;
}

export const awards: Award[] = [
  {
    year: "2023",
    award: "International Classical Music Award",
    description: "Best Solo Performance",
    icon: `<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path d="M18.364 5.636a9 9 0 010 12.728M21.364 2.636a13 13 0 010 18.728M15.536 8.464a5 5 0 010 7.072" />`,
  },
  {
    year: "2022",
    award: "Royal Philharmonic Society Award",
    description: "Instrumentalist of the Year",
    icon: `<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />`,
  },
  {
    year: "2021",
    award: "Echo Klassik",
    description: "Pianist of the Year",
    icon: `<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
  },
  {
    year: "2020",
    award: "Gramophone Award",
    description: "Best Contemporary Recording",
    icon: `<path d="M19 10v2a7 7 0 01-7 7m0 0a7 7 0 01-7-7v-2m14 0v-3a2 2 0 00-2-2H7a2 2 0 00-2 2v3m14 0h-3m-8 0H5m7 7v3m0 0h2m-2 0H9" />`,
  },
  {
    year: "2019",
    award: "BBC Music Magazine Award",
    description: "Recording of the Year",
    icon: `<path d="M9.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 9.293 4.707a1 1 0 010-1.414z" />`,
  },
  {
    year: "2018",
    award: "Diapason d'Or",
    description: "Excellence in Classical Music",
    icon: `<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />`,
  },
];
