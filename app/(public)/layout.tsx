import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col h-full p-4 xl:px-60 lg:px-40 md:px-16 lg:py-6">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default layout;
