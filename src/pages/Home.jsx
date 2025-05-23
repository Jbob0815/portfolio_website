import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { ProjectPage } from "../components/ProjectPage";


export const Home = () => {
    return <div className="min-h-screen bg-background font-zentry-regular" > 

        {/*Theme Toogle*/}
            <ThemeToggle />

        {/*Background*/}
        
        {/*NavBar*/}
        <NavBar />

        {/*Main Content*/}

        <main>
            <HeroSection />
            <ProjectPage />
        </main>


        {/*Footer*/}


         </div>;
};
