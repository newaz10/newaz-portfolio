"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || "",
  );

  useEffect(() => {
    if (!sectionIds.length) return;

    let rafId: number;

    const handleScroll = () => {
      if (window.scrollY >= 150) {
        rafId = requestAnimationFrame(handleScroll);
        return;
      }

      setActiveSection((prev) => {
        if (window.scrollY < 150 && prev !== sectionIds[0]) {
          return sectionIds[0];
        }
        return prev;
      });
      rafId = requestAnimationFrame(handleScroll);
    };

    rafId = requestAnimationFrame(handleScroll);

    const observers: IntersectionObserver[] = [];
    const sectionsToObserve = sectionIds.slice(1);

    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
