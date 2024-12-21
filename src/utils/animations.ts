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

export const heroAnimation = (element: Element) => {
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
      y: 100,
      rotateX: -90,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out'
    });
  }
  
  if (subtitle) {
    tl.from(subtitle, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');
  }
};

export const workCardAnimation = (card: Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });

  tl.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });
};

export const pageTransition = () => {
  const tl = gsap.timeline();
  
  tl.to('.page-transition', {
    scaleY: 1,
    transformOrigin: 'top',
    duration: 0.5,
    ease: 'power4.inOut'
  })
  .to('.page-transition', {
    scaleY: 0,
    transformOrigin: 'bottom',
    duration: 0.5,
    ease: 'power4.inOut'
  });
};