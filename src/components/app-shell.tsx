import TopHeader from "@/components/top-header";
import Nav, { NavProvider } from "@/components/nav";

export default function AppShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="px-16">
            <NavProvider>
                <TopHeader />
                <div className="flex">
                    <Nav />
                    <main className="pl-6 overflow-hidden w-full">
                        {children}
                    </main>
                </div>
            </NavProvider>
        </div>
    )
}
