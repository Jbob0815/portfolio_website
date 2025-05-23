import { ArrowDown } from "lucide-react";

const roles = [
  "PCB Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "3d Artist",
  "Game Developer",
  "PCB Engineer",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-end content-end  px-4 text-left">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="text-change">
          <p className="intro-text text-3xl text-left"> I am a</p>
          <div className="roles-container">
            {roles.map((role, i) => (
              <span
                key={i}
                className="role text-6xl font-bold text-secondary h-[5rem] text-left"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-secondary" />
      </div>
    </section>
  );
};
