"use client";
import TopHeader from "@/components/top-header";
import Nav, { NavProvider } from "@/components/nav";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "@/components/mobile-nav";

export default function AppShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isMobile = useIsMobile();

    return (
        <div className="px-2.5 xl:px-16">
            <NavProvider>
                <TopHeader />
                {isMobile && <MobileNav />}
                <div className="flex">
                    {!isMobile && <Nav />}
                    <main className="md:pl-6 overflow-hidden w-full">
                        {children}
                    </main>
                </div>
            </NavProvider>
        </div>
    )
}
