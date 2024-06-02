import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";

const chakraPetch = Chakra_Petch({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
    title: "Notify",
    description: "An app to create, manage, and collaborate notes with ease",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={chakraPetch.className}>
                <ConvexClientProvider>{children}</ConvexClientProvider>
            </body>
        </html>
    );
}
