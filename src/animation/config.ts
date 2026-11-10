export const animationConfig = {
  reveal: {
    durationMs: 400,
    delayMs: 80,
    staggerMs: 65,
    distancePx: 60,
    threshold: 0.18,
    rootMargin: "0px 0px -6% 0px",
    easing: "cubic-bezier(0.6, 0, 0.4, 1.01)",
  },
  carousel: { transitionMs: 400 },
} as const;
