import NotesPreviewBox from "../_components/NotesPreviewBox";

const AllNotesSection = ({ allNotes }: { allNotes: any[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8">
            {allNotes.map((note) => (
                <NotesPreviewBox note={note} />
            ))}
        </div>
    );
};

export default AllNotesSection;
