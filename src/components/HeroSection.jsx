import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "PCB Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "3d Artist",
  "Game Developer",
  "PCB Engineer",
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useGSAP(
    () => {
      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );
  useGSAP(() => {
    gsap.set("#hero", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#hero", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section className="relative min-h-screen flex flex-col bg-background text-left p-0 overflow-hidden">
      <div
        id="hero"
        className="min-w-screen min-h-screen relative size-full text-center "
      >
        <video
          id="current-video"
          autoPlay
          loop
          muted
          src="src/assets/GameCubeAnimation.mov"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <div className=" flex-col absolute left-5 bottom-5 ">
          <p className="intro-text text-text text-3xl text-left"> I am a</p>
          <div className="roles-container">
            {roles.map((role, i) => (
              <span
                key={i}
                className="role text-3xl md:text-6xl text-nowrap font-bold text-primary h-[5rem] text-left max-w-screen overflow-hidden"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-sm text-white text-muted-foreground mb-2">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-secondary" />
        </div>
      </div>
    </section>
  );
};
