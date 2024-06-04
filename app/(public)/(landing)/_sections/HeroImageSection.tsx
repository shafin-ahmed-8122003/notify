import heroImage from "@/public/heroImage.svg";
import Image from "next/image";

const HeroImageSection = () => {
    return (
        <section className="flex-1 max-md:w-full md:h-full flex justify-center md:justify-end items-center max-md:items-end">
            <div className="w-full max-md:max-w-[350px] max-sm:max-w-[280px]">
                <Image src={heroImage} alt="Hero Image" />
            </div>
        </section>
    );
};

export default HeroImageSection;
