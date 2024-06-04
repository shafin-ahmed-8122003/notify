import { Button } from "@/components/ui/button";
import { Authenticated } from "convex/react";
import Link from "next/link";

const AuthenticatedState = () => {
    return (
        <Authenticated>
            <Link href="/documents">
                <Button variant="primary">Create your notes</Button>
            </Link>
        </Authenticated>
    );
};

export default AuthenticatedState;
