"use client";
import React from "react";
import { useRef, useState, useEffect, useCallback } from "react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiKicad } from "react-icons/si";
import { DiRasberryPi } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoBlender } from "react-icons/bi";
export const About = () => {
  const items = [
    { Icon: FaReact, Color: "#55bed5" },
    { Icon: FaJsSquare, Color: "#f7e025" },
    { Icon: RiTailwindCssFill, Color: "#3ebff8" },
    { Icon: SiKicad, Color: "#3752b2" },
    { Icon: DiRasberryPi, Color: "#be1848" },
    { Icon: BiLogoBlender, Color: "#ff7428" },
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
    <section
      className="bg-background  w-full container flex justify-center items-center my-30"
      id="about"
    >
      <div className="w-full my-auto h-full max-w-[1600px] relative flex flex-col-reverse md:flex-row items-center px-5 justify-center">
        <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center gap-5 px-5 md:px-10">
          <div className="text-left w-full gap-2 justify-center items-start">
            <h1 className="mb-3">
              <span className="text-primary font-circular-web font-extrabold text-5xl">
                About Me
              </span>
            </h1>
            <p className="text-text-light text-left font-circular-web text-lg mb-5">
              "Technically skilled assistant with a focus on electrical circuit
              design, microcontroller programming, and web frontends. Passionate
              about PCB prototyping and continuously learning new tools and
              frameworks."
            </p>
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center w-10 h-10 m-1 mr-3 rounded-full bg-card text-text-light"
                  style={{ color: item.Color }}
                >
                  <item.Icon size={30} /> {/* Set your desired size here */}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full hidden  lg:flex item-center justify-center  ">
          <img
            src="assets/pexels-luis-gomes-166706-546819.jpg"
            className="rounded-xl w-full h-full object-cover object-center"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
