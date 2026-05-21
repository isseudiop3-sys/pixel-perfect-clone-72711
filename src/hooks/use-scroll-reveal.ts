import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Observes every <main section> and adds `.is-visible` when it enters the viewport.
 * Re-scans on every route change so newly mounted sections animate too.
 */
export function useScrollReveal() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observed = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const scan = () => {
      const nodes = document.querySelectorAll("main section");
      nodes.forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add("is-visible");
        } else {
          io.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    const unsub = router.subscribe("onResolved", () => {
      // small delay to let new DOM mount
      setTimeout(scan, 50);
    });

    return () => {
      io.disconnect();
      mo.disconnect();
      unsub();
    };
  }, [router]);
}
