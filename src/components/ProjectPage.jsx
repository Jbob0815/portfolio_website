import React, { useRef, useState } from "react";
import AnimatedTitle from "./animatetdTitle";
import { cn } from "@/lib/utils";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Key } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cardItems = [
  {
    title: "Project 1",
    description: "This is a description of project 1",
    src: "src/assets/jwb_X_201909_03_r720P.mp4",
    video: "true",
    className: "md:col-span-2 lg:row-span-2",
  },
  {
    title: "Project 2",
    description: "This is a description of project ",
    src: "src/assets/Screenshot.png",
    className: "lg:row-span-2",
  },
  {
    title: "Project 3",
    description: "This is a description of project ",
    src: "src/assets/Screenshot.png",
    className: " md:row-span-2 ",
  },
  {
    title: "Project 4",
    description: "This is a description of project ",
    src: "src/assets/Screenshot.png",
    className: " lg:col-span-2 ",
  },
  {
    title: "Project 5",
    description: "This is a description of project ",
    src: "src/assets/Screenshot.png",
    className: " md:col-span-2 ",
  },
];

const Card = ({ title, description, src, video }) => {
  return (
    <div className="relative size-full ">
      {video ? (
        <video
          autoPlay
          loop
          muted
          src={src}
          alt="video"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt="image"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="text-2xl font-bold font-circular-web text-left ">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-64 text-xs md:text-base text-left ">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const CardTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 6;
    const tiltY = (relativeX - 0.5) * -6;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={"" + className}
      style={{
        transform: transformStyle,
      }}
    >
      {children}
    </div>
  );
};

export const ProjectPage = () => {
  return (
    <section className="bg-background pb-10">
      <div className="container mx-auto px-3 md:px-10 ">
        {/* Title */}
        <div className="px-5 py-32">
          <h1 className="mt-5 font-circular-web font-extrabold text-6xl text-primary animation-appear">
            Projects
          </h1>
          <p className=" font-circular-web text-lg text-text-light text-center w-full">
            This i a collection of past things i have worked on.
          </p>
        </div>
        <div className="grid h-[135vh] grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 gap-7">
          {/* Map Cards */}
          {cardItems.map((items, id) => (
            <CardTilt
              className={` ${items.className} size-full relative border-hsla col-span-1 overflow-hidden rounded-md  `}
              key={id}
            >
              <Card
                className={`row-span-1 col-span-1 overflow-hidden rounded-md text-3xl text-left`}
                title={items.title}
                description={items.description}
                src={items.src}
                {...(items.video ? { video: true } : {})}
              />
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
