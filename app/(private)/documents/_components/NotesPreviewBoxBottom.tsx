import { formatDate } from "@/lib/formatDate";
import DeleteNoteButton from "../../_components/DeleteNoteButton";

const NotesPreviewBoxBottom = ({ note }: { note: any }) => {
    return (
        <div className="group/docsbox w-full h-20 p-4 flex flex-col bg-secondary [&>*]:text-secondary-foreground absolute bottom-0">
            <h1 className="font-bold">{note.title}</h1>
            <time className="text-xs">{formatDate(note._creationTime)}</time>
            <DeleteNoteButton
                className="absolute right-2 bottom-2 opacity-0 [&>*]:stroke-secondary-foreground group-hover/docsbox:opacity-100"
                noteId={note._id}
            />
        </div>
    );
};

export default NotesPreviewBoxBottom;
