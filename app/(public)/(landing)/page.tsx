"use client";

import HeroContentSection from "./_sections/HeroContentSection";
import HeroImageSection from "./_sections/HeroImageSection";

const Landing = () => {
    return (
        <main className="flex-1 h-full flex max-md:flex-col items-center justify-between gap-20">
            <HeroImageSection />
            <HeroContentSection />
        </main>
    );
};

export default Landing;
