"use client";
import React from "react";
import { useRef, useState, useEffect, useCallback } from "react";

export const About = () => {
  const items = [
    "programming",
    "communication",
    "problem-solving",
    "teamwork",
    "adaptability",
    "time management",
    "critical thinking",
    "creativity",
    "leadership",
  ];
  const containerRef = useRef(null);

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              entry.target.getAttribute("data-idx") || "0",
              10
            );
            setActiveIdx(idx);
          }
        });
      },
      {
        root: container,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const elements = container.querySelectorAll("[data-idx]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-background h-[200vh] relative " id="about">
      <div
        ref={containerRef}
        className="
        h-screen
        overflow-y-auto
        py-40
        snap-y snap-mandatory
        scroll-smooth
      "
      >
        {items.map((txt, i) => (
          <div
            key={i}
            data-idx={i}
            className={`snap-center text-3xl font-bold transition-colors duration-200 ${
              activeIdx === i ? "text-yellow-400" : "text-gray-500"
            }`}
          >
            {txt}
          </div>
        ))}
      </div>
    </section>
  );
};
