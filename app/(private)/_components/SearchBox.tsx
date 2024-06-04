import Row from "@/components/Row";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBox = () => {
    return (
        <Row className="h-10">
            <Input
                autoFocus
                className="h-full rounded-r-none border-secondary border-2 text-xs"
                placeholder="Search your notes"
            />
            <Button className="h-full px-3 border-0 rounded-l-none [&>*]:w-4" variant="secondary">
                <SearchIcon />
            </Button>
        </Row>
    );
};

export default SearchBox;
