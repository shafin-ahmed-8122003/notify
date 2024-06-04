import Gap from "@/components/Gap";
import AuthLoadingState from "../_components/AuthLoadingState";
import AuthenticatedState from "../_components/AuthenticatedState";
import HeroTexts from "../_components/HeroTexts";
import UnauthenticatedState from "../_components/UnauthenticatedState";

const HeroContentSection = () => {
    return (
        <section className="flex-1 max-md:w-full md:h-full flex flex-col justify-center max-md:justify-start items-center md:items-start">
            <div className="flex flex-col">
                <HeroTexts />
                <Gap height={24} />
                <AuthLoadingState />
                <AuthenticatedState />
                <UnauthenticatedState />
            </div>
        </section>
    );
};

export default HeroContentSection;
