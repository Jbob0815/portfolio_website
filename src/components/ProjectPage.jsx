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
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Project 2",
    description: "This is a description of project 2",
    src: "src/assets/Screenshot.png",
    className: " md:col-span-2 lg:col-span-3 row-span-1",
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
          <h1>{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
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
    <section className="bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          {/* <AnimatedTitle
            title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
            containerClass="mt-5 !text-black text-center"
            /> */}

          <h1 className="mt-5 font-circular-web font-extrabold text-4xl text-primary animation-appear">
            Projects
          </h1>
          <p className=" font-circular-web text-lg text-blue-50 opacity-50 text-center w-full">
            This i a collection of past things i have worked on.
          </p>
        </div>
        <div className="grid h-[135vh] grid-cols-1 grid-rows-4 md:grid-cols-3 gap-7">
          {/* Map Cards */}
          {cardItems.map((items, id) => (
            <CardTilt
              className={` ${items.className} size-full relative border-hsla col-span-1 overflow-hidden rounded-md `}
              key={id}
            >
              <Card
                className={`row-span-1 col-span-1 overflow-hidden rounded-md`}
                title={items.title}
                description={items.description}
                src={items.src}
                {...(items.video ? { video: true } : {})}
              />
            </CardTilt>
          ))}

          {/* 
          <CardTilt className="row-span-1 col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-md">
            <Card
              title="Project 1"
              description="This is a description of project 2"
              src="src/assets/jwb_X_201909_03_r720P.mp4"
              video
            />
          </CardTilt>

          <CardTilt className="col-span-1 row-span-1 overflow-hidden rounded-md  ">
            <Card
              title="Project 2"
              description="This is a description of project 1"
              src="src/assets/Screenshot.png"
            />
          </CardTilt>

          <CardTilt className="relative border-hsla col-span-1 md:row-span-2 overflow-hidden rounded-md ">
            <Card
              title="Project 3"
              description="This is a description of project 1"
              src="src/assets/Screenshot.png"
            />
          </CardTilt>

          <CardTilt className="relative border-hsla  row-span-1 col-span-1 overflow-hidden rounded-md ">
            <Card
              title="Project 4"
              description="This is a description of project 1"
              src="src/assets/Screenshot.png"
            />
          </CardTilt>

          <CardTilt className="relative border-hsla md:col-span-2 row-span-1 col-span-1 overflow-hidden rounded-md ">
            <Card
              title="Project 5"
              description="This is a description of project 1"
              src="src/assets/Screenshot.png"
            />
          </CardTilt> */}
        </div>
      </div>
    </section>
  );
};
