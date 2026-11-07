import { useEffect } from "react";
import { animationConfig } from "../animation/config";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const { reveal } = animationConfig;
    root.style.setProperty("--reveal-duration", `${reveal.durationMs}ms`);
    root.style.setProperty("--reveal-delay", `${reveal.delayMs}ms`);
    root.style.setProperty("--reveal-stagger", `${reveal.staggerMs}ms`);
    root.style.setProperty("--reveal-distance", `${reveal.distancePx}px`);
    root.style.setProperty("--reveal-easing", reveal.easing);
    root.style.setProperty("--carousel-transition", `${animationConfig.carousel.transitionMs}ms`);

    const prefersReducedMotion = window.matchMedia(reducedMotionQuery).matches;
    const motionPreference = window.matchMedia(reducedMotionQuery);
    const intersectionObserver =
      !prefersReducedMotion && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries, observer) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              });
            },
            {
              threshold: reveal.threshold,
              rootMargin: reveal.rootMargin,
            },
          )
        : null;

    const revealElement = (element: Element) => {
      if (!(element instanceof HTMLElement)) return;
      const revealIndex = element.dataset.revealIndex;
      if (revealIndex) {
        element.style.setProperty(
          "--reveal-delay",
          `${reveal.delayMs + Number(revealIndex) * reveal.staggerMs}ms`,
        );
      }

      if (!intersectionObserver) {
        element.classList.add("is-visible");
      } else {
        intersectionObserver.observe(element);
      }
    };

    document.querySelectorAll("[data-reveal]").forEach(revealElement);
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          revealElement(node);
          node.querySelectorAll("[data-reveal]").forEach(revealElement);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
    const revealForReducedMotion = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
    };
    motionPreference.addEventListener("change", revealForReducedMotion);

    return () => {
      motionPreference.removeEventListener("change", revealForReducedMotion);
      mutationObserver.disconnect();
      intersectionObserver?.disconnect();
    };
  }, []);

  return null;
}
