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
    title: "BlueCube Mod Modification",
    description: "Updated GameCube Controller Mod to USB-C",
    src: "/assets/GameCubeAnimation.mov",
    video: true,
    className: "md:col-span-2 lg:row-span-2 text-white",
  },
  {
    title: "clean-eck.de",
    description: "Basic Website for a cleaning company",
    src: "/assets/CleanEck.png",
    className: " lg:row-span-2 ",
    button: "https://clean-eck.de",
  },
  {
    title: "Photogrametry Projects",
    description: "Scanned Some Objects via Photogrametry",
    src: "/assets/BaumStamm.png",
    className: " md:row-span-2  text-white",
  },
  {
    title: "First Game at 14",
    description: "My First small Racing Simulator",
    src: "/assets/CarRacing.mov",
    video: true,
    className: "lg:col-span-2 text-white ",
  },
  {
    title: " Arduino Battleships",
    description: "A Battleship Game with Arduino in Wokwi",
    src: "assets/wokwi-project.png",
    className: " bg-primary text-white text-xl ",
    button: "https://wokwi.com/projects/400327839208975361",
  },
  {
    title: " More Coming Soon",
    src: "/assets/Rocket.svg",
    className: " bg-primary text-white ",
  },
];

const Card = ({ title, description, src, video, button }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative size-full border-border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {video ? (
        <video
          ref={videoRef}
          loop={false}
          muted
          src={src}
          alt="video"
          className={`absolute left-0 top-0 size-full object-cover object-center transition-all duration-300 ${!isHovered ? "md:blur-md" : ""}`}
          playsInline
          disablePictureInPicture
          controls={false}
        />
      ) : (
        <img
          src={src}
          alt="image"
          className={`absolute left-0 top-0 size-full object-cover object-center transition-all duration-300 ${!isHovered ? "md:blur-md" : ""}`}
        />
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div>
          <h1 className="text-2xl font-bold font-circular-web text-left ">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-64 text-xs md:text-base text-left ">
              {description}
            </p>
          )}
          {button && (
            <a
              href={button}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block absolute px-4 py-2 bg-primary text-white rounded-md bottom-5 right-5 transition-colors"
            >
              Learn More
            </a>
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

    const tiltX = (relativeY - 0.5) * 4;
    const tiltY = (relativeX - 0.5) * -4;

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
      className={"pointer-events-auto" + className}
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
    <section className="bg-background pb-10" id="projects">
      {/* Title Section */}
      <div className="container mx-auto px-3 md:px-10 ">
        {/* Title */}
        <div className="px-5 py-32">
          <h1 className="mt-5 font-circular-web font-extrabold text-6xl text-primary animation-appear">
            Projects
          </h1>
          <p className=" font-circular-web text-lg text-text-light text-center w-full">
            Here are just some of my Projects i have worked on.
          </p>
        </div>
        <div className="grid h-[135vh] grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 gap-7">
          {/* Map Cards */}
          {cardItems.map((items, id) => (
            <CardTilt
              className={` ${items.className} bg-primary size-full relative border-hsla col-span-1 overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-color `}
              key={id}
            >
              <Card
                className={`row-span-1 col-span-1 overflow-hidden text-3xl text-left transition-color duration-300  + ${items.className}`}
                title={items.title}
                description={items.description}
                src={items.src}
                {...(items.video ? { video: true } : {})}
                button={items.button}
              />
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
