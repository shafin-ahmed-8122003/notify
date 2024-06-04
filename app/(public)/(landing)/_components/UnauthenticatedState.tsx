import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Unauthenticated } from "convex/react";

const UnauthenticatedState = () => {
    return (
        <Unauthenticated>
            <SignUpButton forceRedirectUrl="/documents" mode="modal">
                <Button variant="primary">Get Started</Button>
            </SignUpButton>
            <div className="h-2" />
            <SignInButton forceRedirectUrl="/documents" mode="modal">
                <Button size="sm" variant="secondaryGhost">
                    I already have an account
                </Button>
            </SignInButton>
        </Unauthenticated>
    );
};

export default UnauthenticatedState;
