export const animationConfig = {
  reveal: {
    durationMs: 480,
    delayMs: 80,
    staggerMs: 65,
    distancePx: 16,
    threshold: 0.18,
    rootMargin: "0px 0px -6% 0px",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  carousel: {
    intervalMs: 5000,
    transitionMs: 450,
  },
} as const;
