type Options = {
  threshold?: number;
  rootMargin?: string;
};

export function inView(node: HTMLElement, options: Options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
        } else {
          node.classList.remove('is-visible');
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
      observer.disconnect();
    },
  };
}
