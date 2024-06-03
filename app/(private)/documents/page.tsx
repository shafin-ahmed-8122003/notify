import { Button } from "@/components/ui/button";
import Image from "next/image";

const Documents = () => {
    return (
        <div className="h-full">
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                <Image src="/empty.svg" alt="Empty Notes Image" width={200} height={200} />
                <p>You don{"'"}t have any notes yet</p>
                <Button variant="primary">Create One</Button>
            </div>
        </div>
    );
};

export default Documents;
