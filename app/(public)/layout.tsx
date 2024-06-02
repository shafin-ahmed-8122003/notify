import React from "react";
import Navbar from "./_components/Navbar";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col h-full p-4 xl:px-60 lg:px-40 md:px-16 lg:py-6">
            <header>
                <Navbar />
            </header>
            {children}
            <footer className="text-center text-sm">
                &copy; 2024 NSMSA, Bangladesh. All Rights Reserved
            </footer>
        </div>
    );
};

export default layout;
