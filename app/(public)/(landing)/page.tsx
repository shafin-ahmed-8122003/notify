"use client";

import { Button } from "@/components/ui/button";
import heroImage from "@/public/heroImage.svg";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { Loader } from "lucide-react";
import Image from "next/image";

const Landing = () => {
    return (
        <main className="flex-1 h-full flex max-md:flex-col items-center justify-between gap-20">
            <section className="flex-1 max-md:w-full md:h-full flex justify-center md:justify-end items-center max-md:items-end">
                <div className="w-full max-md:max-w-[350px] max-sm:max-w-[280px]">
                    <Image src={heroImage} alt="Hero Image" />
                </div>
            </section>
            <section className="flex-1 max-md:w-full md:h-full flex flex-col justify-center max-md:justify-start items-center md:items-start">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold">Elevate Your Productivity</h1>
                    <div className="h-1" />
                    <h3>Create, Manage, and Collaborate Notes with Ease</h3>
                    <div className="h-6" />
                    <AuthLoading>
                        <div className="w-full flex justify-center">
                            <Loader className="text-primary animate-spin" />
                        </div>
                    </AuthLoading>
                    <Authenticated>
                        <Button variant="primary">Create your notes</Button>
                    </Authenticated>
                    <Unauthenticated>
                        <>
                            <SignUpButton mode="modal">
                                <Button className="" variant="primary">
                                    Get Started
                                </Button>
                            </SignUpButton>
                            <div className="h-2" />
                            <SignInButton mode="modal">
                                <Button className="text-sm" variant="secondaryOutline">
                                    I already have an account
                                </Button>
                            </SignInButton>
                        </>
                    </Unauthenticated>
                </div>
            </section>
        </main>
    );
};

export default Landing;
