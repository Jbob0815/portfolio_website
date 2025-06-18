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

  const AboutSection = [
    {
      title: "About Me",
      description:
        "Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repudiandae quaerat voluptas. Veniam, asperiores recusandae nihil, laudantium blanditiis aliquid dolor saepe nulla sed soluta quia! Praesentium aperiam earum aliquam? Est.",
    },
    {
      title: "My Skills",
      description:
        "I have a diverse skill set that includes programming, communication, problem-solving, teamwork, adaptability, time management, critical thinking, creativity, and leadership.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-background w-full min-h-screen " id="about">
      <div className="w-full h-full relative flex flex-row items-center px-5 justify-center">
        <div className="w-full min-h-screen h-full flex flex-col justify-around ">
          {AboutSection.map((section, index) => (
            <div
              key={index}
              className={`w-full max-w-3xl mx-auto text-center mb-10 ${
                index === 0 ? "mt-20" : ""
              }`}
            >
              <h2 className="text-4xl font-bold text-text mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-text-light">{section.description}</p>
            </div>
          ))}
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
      </div>
    </section>
  );
};
