import NotesPreviewBoxBottom from "./NotesPreviewBoxBottom";
import NotesPreviewBoxTop from "./NotesPreviewBoxTop";

const NotesPreviewBox = ({ note }: { note: any }) => {
    return (
        <div
            key={note._id}
            className="w-60 h-60 relative bg-background shadow-2xl border-secondary border-2 rounded-md overflow-hidden"
        >
            <NotesPreviewBoxTop note={note} />
            <NotesPreviewBoxBottom note={note} />
        </div>
    );
};

export default NotesPreviewBox;
