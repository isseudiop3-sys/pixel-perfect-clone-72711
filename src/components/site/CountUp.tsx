import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  separator?: string;
}

export function CountUp({ end, duration = 1800, prefix = "+", separator = " " }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.floor(eased * end));
            if (t < 1) requestAnimationFrame(animate);
            else setValue(end);
          };
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, [end, duration]);

  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return <span ref={ref}>{prefix}{formatted}</span>;
}
