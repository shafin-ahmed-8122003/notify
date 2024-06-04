import { EllipsisIcon } from "lucide-react";

const EditNoteButton = ({ noteId, className }: { noteId: any; className?: string }) => {
    const handleClick = (noteId: any) => {};

    return (
        <div
            onClick={() => handleClick(noteId)}
            className={`${className} flex items-center justify-center`}
        >
            <EllipsisIcon className="w-4" />
        </div>
    );
};

export default EditNoteButton;
