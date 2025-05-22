
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span>Hi Im </span>
                        <span>Jakob </span>
                        <span>Nieß </span>
                    </h1>
                </div>
            </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-secondary" />
        </div>
        </section>
    );
}