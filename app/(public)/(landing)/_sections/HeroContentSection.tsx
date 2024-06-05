import Gap from "@/components/Gap";
import LoadingIcon from "@/components/LoadingIcon";
import { Button } from "@/components/ui/button";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import Link from "next/link";
import HeroTexts from "../_components/HeroTexts";

const HeroContentSection = () => {
    const { isLoading, isAuthenticated } = useStoreUserEffect();

    return (
        <section className="flex-1 max-md:w-full md:h-full flex flex-col justify-center max-md:justify-start items-center md:items-start">
            <div className="flex flex-col">
                <HeroTexts />
                <Gap height={24} />

                {isLoading && !isAuthenticated && (
                    <div className="w-full flex justify-center">
                        <LoadingIcon />
                    </div>
                )}

                {!isAuthenticated && !isLoading && (
                    <>
                        <SignUpButton forceRedirectUrl="/documents" mode="modal">
                            <Button variant="primary">Get Started</Button>
                        </SignUpButton>
                        <div className="h-2" />
                        <SignInButton forceRedirectUrl="/documents" mode="modal">
                            <Button size="sm" variant="secondaryGhost">
                                I already have an account
                            </Button>
                        </SignInButton>
                    </>
                )}

                {isAuthenticated && !isLoading && (
                    <Link href="/documents">
                        <Button variant="primary">Create your notes</Button>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default HeroContentSection;
