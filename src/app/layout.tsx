import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/app-shell";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Youtube Redesign",
    description: "This is a youtube redesign",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} antialiased`}
            >
                <AppShell>
                    {children}
                </AppShell>
            </body>
        </html>
    );
}
