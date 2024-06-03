import { FullscreenIcon, MinimizeIcon } from "lucide-react";
import { useState } from "react";

const FullScreenBtn = () => {
    const [isFullScreen, setFullScreenState] = useState(false);

    const handleFullScreen = () => {
        setFullScreenState((prevState) => !prevState);

        if (isFullScreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    return (
        <div role="button" onClick={handleFullScreen} className="[&>*]:stroke-secondary">
            {isFullScreen ? <MinimizeIcon /> : <FullscreenIcon />}
        </div>
    );
};

export default FullScreenBtn;
