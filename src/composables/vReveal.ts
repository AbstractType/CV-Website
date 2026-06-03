import type { Directive } from 'vue';

// Single shared IntersectionObserver — cheaper than one per element.
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
  }
  return sharedObserver;
}

export const vReveal: Directive<HTMLElement, { delay?: number } | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal');
    const delay = binding.value?.delay;
    if (typeof delay === 'number' && delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }
    getObserver().observe(el);
  },
  unmounted(el) {
    sharedObserver?.unobserve(el);
  },
};
