import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: Element, delay = 0) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
};

export const staggerFadeIn = (elements: Element[], staggerAmount = 0.2) => {
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: staggerAmount,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
};
