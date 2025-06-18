import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { ProjectPage } from "../components/ProjectPage";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background  font-zentry-regular">
      {/*Theme Toogle*/}
      <ThemeToggle />

      {/*Background*/}

      {/*NavBar*/}
      <NavBar />

      {/*Main Content*/}

      <main>
        <HeroSection />
        <About />
        <ProjectPage />
        <Contact />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
