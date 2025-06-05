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

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      className="bg-background w-full min-h-screen relative flex flex-row items-center px-5 justify-center"
      id="about"
    >
      <div className="relative w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font bold text-text ">About Me</h2>
        <p className="text-text-light text-lg ">
          Text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur repudiandae quaerat voluptas. Veniam, asperiores
          recusandae nihil, laudantium blanditiis aliquid dolor saepe nulla sed
          soluta quia! Praesentium aperiam earum aliquam? Est.
        </p>
      </div>
      <div className="w-full  item-center justify-center sticky top-[calc(100vh/2)] translate-y-[-50%]">
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
