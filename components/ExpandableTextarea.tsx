"use client";

import React, { useEffect, useRef, useState } from "react";

interface ExpandableTextareaProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    placeholder?: string;
}

const ExpandableTextarea: React.FC<ExpandableTextareaProps> = ({
    value,
    onChange,
    className,
    placeholder,
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState("auto");

    useEffect(() => {
        if (textareaRef.current) {
            setTextareaHeight("auto"); // Reset height to auto to shrink if necessary
            setTextareaHeight(`${textareaRef.current.scrollHeight}px`); // Set to scrollHeight to expand
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            style={{
                height: textareaHeight,
                overflow: "hidden",
                resize: "none",
            }}
        />
    );
};

export default ExpandableTextarea;
