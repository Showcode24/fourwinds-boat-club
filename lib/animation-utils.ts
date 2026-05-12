import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==================== ANIMATION CONFIGURATION ====================

export const ANIMATION_CONFIG = {
  // Timing
  SHORT: 0.3,
  MEDIUM: 0.6,
  LONG: 1.0,
  VERY_LONG: 1.5,

  // Easing
  EASE_IN: 'power2.in',
  EASE_OUT: 'power2.out',
  EASE_IN_OUT: 'power2.inOut',
  EASE_BOUNCE_OUT: 'back.out',
  EASE_ELASTIC: 'elastic.out(1, 0.5)',

  // Defaults
  STAGGER: 0.1,
  SPRING_STIFFNESS: 100,
  SPRING_DAMPING: 10,
};

// ==================== REDUCED MOTION DETECTION ====================

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getAnimationDuration = (duration: number): number => {
  return prefersReducedMotion() ? duration * 0.5 : duration;
};

// ==================== GSAP PINNED SECTION HELPER ====================

export const createPinnedSection = (
  trigger: HTMLElement | null,
  duration: number = 3000,
  onProgress?: (progress: number) => void
) => {
  if (!trigger || prefersReducedMotion()) {
    return gsap.timeline();
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      pin: true,
      start: 'top top',
      end: `+=${duration}`,
      scrub: 1.2, // Smooth scrub
      onUpdate: (self) => onProgress?.(self.progress),
    },
  });

  return tl;
};

// ==================== PARALLEL MOTION LAYERS ====================

export const createParallaxLayer = (
  element: HTMLElement | null,
  trigger: HTMLElement | null,
  intensity: number = 0.5
) => {
  if (!element || !trigger) return;

  gsap.to(element, {
    y: (i, target) => {
      const triggerRect = trigger.getBoundingClientRect();
      return -(triggerRect.height * intensity);
    },
    scrollTrigger: {
      trigger,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      markers: false,
    },
  });
};

// ==================== CLIP-PATH MASK REVEAL ====================

export const createClipPathReveal = (
  element: HTMLElement | null,
  direction: 'top' | 'bottom' | 'left' | 'right' = 'bottom'
) => {
  if (!element || prefersReducedMotion()) return;

  const clipPaths = {
    top: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
    bottom: ['inset(0 0 100% 0)', 'inset(0 0 0 0)'],
    left: ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
    right: ['inset(0 0 0 100%)', 'inset(0 0 0 0)'],
  };

  gsap.fromTo(
    element,
    { clipPath: clipPaths[direction][0] },
    {
      clipPath: clipPaths[direction][1],
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// ==================== STAGGERED TEXT REVEAL ====================

export const createCharacterReveal = (
  element: HTMLElement | null,
  delay: number = 0
) => {
  if (!element || prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  const text = element.textContent || '';
  element.innerHTML = text
    .split('')
    .map((char) => `<span style="opacity:0; display:inline-block;">${char}</span>`)
    .join('');

  gsap.to(element.querySelectorAll('span'), {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.04,
    ease: 'back.out',
    delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });
};

// ==================== KEN BURNS ZOOM ====================

export const createKenBurnsEffect = (
  element: HTMLElement | null,
  duration: number = 8,
  intensity: number = 1.2
) => {
  if (!element) return;

  const isReducedMotion = prefersReducedMotion();

  gsap.fromTo(
    element,
    {
      scale: isReducedMotion ? 1 : 1,
      transformOrigin: 'center center',
    },
    {
      scale: isReducedMotion ? 1 : intensity,
      duration: isReducedMotion ? 2 : duration,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: element.parentElement,
        start: 'top center',
        end: 'bottom center',
        scrub: isReducedMotion ? false : 1,
      },
    }
  );
};

// ==================== 3D PERSPECTIVE TRANSFORM ====================

export const apply3DDepth = (
  element: HTMLElement | null,
  perspective: number = 1000,
  rotateX: number = 0,
  rotateY: number = 0,
  translateZ: number = 0
) => {
  if (!element) return;

  gsap.set(element, {
    perspective,
    transformStyle: 'preserve-3d',
    rotateX,
    rotateY,
    z: translateZ,
  });
};

export const create3DScroll = (
  element: HTMLElement | null,
  trigger: HTMLElement | null,
  maxRotateX: number = 5,
  maxRotateY: number = 0
) => {
  if (!element || !trigger || prefersReducedMotion()) return;

  gsap.to(element, {
    rotateX: () => maxRotateX,
    rotateY: () => maxRotateY,
    z: () => 100,
    scrollTrigger: {
      trigger,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
};

// ==================== ANIMATED BORDERS & LINES ====================

export const createBorderGrowth = (
  element: HTMLElement | null,
  duration: number = 1.2
) => {
  if (!element || prefersReducedMotion()) {
    gsap.set(element, { strokeDashoffset: 0 });
    return;
  }

  const totalLength = (element as any).getTotalLength?.() || 0;

  gsap.fromTo(
    element,
    { strokeDashoffset: totalLength },
    {
      strokeDashoffset: 0,
      duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// ==================== HOVER LIFT & ELEVATION ====================

export const createHoverLift = (
  element: HTMLElement | null,
  lift: number = 10
) => {
  if (!element) return;

  const onMouseEnter = () => {
    gsap.to(element, {
      y: -lift,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      y: 0,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  element.addEventListener('mouseenter', onMouseEnter);
  element.addEventListener('mouseleave', onMouseLeave);

  // Cleanup function
  return () => {
    element.removeEventListener('mouseenter', onMouseEnter);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
};

// ==================== STAGGERED LIST ANIMATION ====================

export const createStaggeredList = (
  container: HTMLElement | null,
  itemSelector: string,
  delay: number = 0
) => {
  if (!container) return;

  const items = container.querySelectorAll(itemSelector);

  gsap.fromTo(
    items,
    { opacity: 0, x: prefersReducedMotion() ? 0 : -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    }
  );
};

// ==================== CLEANUP ON UNMOUNT ====================

export const cleanupGSAPContext = (contextScope: gsap.Context | null) => {
  contextScope?.revert();
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars?.trigger && document.contains(trigger.vars.trigger as HTMLElement)) {
      // Only kill if trigger is still in DOM
    }
  });
};

// ==================== MOBILE ANIMATION REDUCER ====================

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const getResponsiveAnimationConfig = () => {
  if (typeof window === 'undefined') {
    return {
      durationMultiplier: 1,
      parallaxIntensity: 0.5,
      enableKenBurns: true,
      enableParticles: true,
      scrubIntensity: 1,
    };
  }

  const isMobile = isMobileDevice();
  const isTablet = window.innerWidth < 1024;

  return {
    durationMultiplier: isMobile ? 0.6 : isTablet ? 0.8 : 1,
    parallaxIntensity: isMobile ? 0.2 : isTablet ? 0.35 : 0.5,
    enableKenBurns: !isMobile,
    enableParticles: !isMobile,
    scrubIntensity: isMobile ? 0.5 : isTablet ? 0.8 : 1,
  };
};
