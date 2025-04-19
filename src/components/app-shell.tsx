import TopHeader from "@/components/top-header";
import Nav from "@/components/nav";

export default function AppShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopHeader />
            <div className="flex">
                <Nav />
                <main className="pl-14 pt-3">
                    {children}
                </main>
            </div>
        </>
    )
}
