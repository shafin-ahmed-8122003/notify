import type { Metadata, Viewport } from "next";
import { Baloo_2 } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";

const baloo_2 = Baloo_2({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
    title: "Notify",
    description: "An app to create, manage, and collaborate notes with ease",
};

export const viewport: Viewport = {
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={baloo_2.className}>
                <ConvexClientProvider>{children}</ConvexClientProvider>
            </body>
        </html>
    );
}
