"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.svg" alt="Notify Logo" width={30} height={30} />
                        <h1 className="text-2xl font-bold text-primary">NotiFy</h1>
                    </div>
                </Link>
                <AuthLoading>
                    <Loader className="animate-spin text-primary" />
                </AuthLoading>
                <Authenticated>
                    <UserButton
                        appearance={{ elements: { userButtonAvatarBox: "w-8 h-8 rounded-sm" } }}
                    />
                </Authenticated>
                <Unauthenticated>
                    <SignInButton mode="modal">
                        <Button className="px-0">Login</Button>
                    </SignInButton>
                </Unauthenticated>
            </nav>
        </header>
    );
};

export default Header;
