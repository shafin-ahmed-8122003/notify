import LoadingIcon from "@/components/LoadingIcon";
import { AuthLoading } from "convex/react";

const AuthLoadingState = () => {
    return (
        <AuthLoading>
            <div className="w-full flex justify-center">
                <LoadingIcon />
            </div>
        </AuthLoading>
    );
};

export default AuthLoadingState;
