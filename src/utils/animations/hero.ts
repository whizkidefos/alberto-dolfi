import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = async (element: Element) => {
  const title = element.querySelector('h1');
  const subtitle = element.querySelector('p');
  
  const tl = gsap.timeline();
  
  if (title) {
    const words = title.textContent?.split(' ') || [];
    title.innerHTML = words
      .map(word => `<span class="inline-block">${word}</span>`)
      .join(' ');
    
    const spans = title.querySelectorAll('span');
    
    tl.from(spans, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }
  
  if (subtitle) {
    tl.from(subtitle, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5');
  }
};
