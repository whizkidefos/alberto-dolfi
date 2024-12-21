import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const workCardAnimation = (card: Element) => {
  gsap.from(card, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
};
