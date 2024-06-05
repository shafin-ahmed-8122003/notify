import UserName from "@/app/(private)/_components/UserName";
import Image from "next/image";
import CreateNoteButton from "../../_components/CreateNoteButton";

const EmptyNotesSection = () => {
    return (
        <section className="w-full h-full flex flex-col justify-center items-center gap-4">
            <Image src="/empty.svg" alt="Empty Notes Image" width={200} height={200} />
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">
                    Peach be upon you, <UserName />!
                </h1>
                <p>You don{"'"}t have any notes yet!</p>
            </div>
            <CreateNoteButton note={{ title: "", body: "" }} title="Create One" />
        </section>
    );
};

export default EmptyNotesSection;
