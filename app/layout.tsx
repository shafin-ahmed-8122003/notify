import fonts from "@/lib/fonts";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";

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
            <body className={fonts.baloo_2.className}>
                <ConvexClientProvider>
                    {children}
                    <Toaster
                        toastOptions={{
                            classNames: {
                                toast: "bg-primary",
                                content: "text-primary-foreground",
                            },
                        }}
                        closeButton={true}
                        position="bottom-right"
                    />
                </ConvexClientProvider>
            </body>
        </html>
    );
}
