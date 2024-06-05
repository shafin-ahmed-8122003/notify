import ExpandableTextarea from "@/components/ExpandableTextarea";

const NoteBody = ({
    note,
    bodyChangeHandler,
}: {
    note: any;
    bodyChangeHandler: React.Dispatch<React.SetStateAction<any>>;
}) => {
    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        bodyChangeHandler({
            ...note,
            body: e.target.value,
        });
    };

    return (
        <div>
            <ExpandableTextarea
                value={note.body}
                onChange={handleBodyChange}
                className="w-full h-full bg-transparent outline-none"
                placeholder="Type your note here..."
            />
        </div>
    );
};

export default NoteBody;
