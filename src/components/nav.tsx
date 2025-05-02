"use client";
import { createContext, useContext, useState } from "react";
import NavLink from "@/components/nav-link";
import Divider from "@/components/divider";
import NavDropdown from "@/components/nav-dropdown";
import { useIsTablet } from "@/hooks/use-tablet";
import { NavDisplay, NavItem } from "@/utils/types";
import { navData } from "@/data/navData";

type NavContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    toggleNav: () => void;
}

const NavContext = createContext<NavContextProps | null>(null);

export function useNav() {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error("useNav must be used within a NavProvider");
    }

    return context;
}

export function NavProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true);
    const state = open ? "expanded" : "collapsed";

    function toggleNav() {
        return setOpen((prev) => !prev);
    };

    const contextValue: NavContextProps = {
        state,
        open,
        setOpen,
        toggleNav,
    };

    return (
        <NavContext.Provider value={contextValue}>
            {children}
        </NavContext.Provider>
    )
}

export default function Nav() {
    const { state, open } = useNav();

    return (
        <nav className="group inline-block shrink-0 min-w-20 xl:min-w-auto" data-variant="nav" data-state={state} data-collapsible={open ? "" : "icon"}>
            <ul className="flex flex-col">
                {navData.map((item, i) => (
                    <li key={i}>
                        <NavController item={item} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function NavController({ item }: { item: NavItem }) {
    const isTablet = useIsTablet();

    if (item.displaySupport === NavDisplay.Tablet && isTablet) {
        return <NavItemRenderer item={item} />
    }

    if (item.displaySupport === NavDisplay.Desktop && !isTablet) {
        return <NavItemRenderer item={item} />
    }

    if (item.displaySupport === NavDisplay.Both) {
        return <NavItemRenderer item={item} />
    }

}

function NavItemRenderer({ item }: { item: NavItem }) {
    return (
        <>
            {item.dropdown ? (
                <NavDropdown icon={item.icon} text={item.text} href={item.href} />
            ) : (
                <NavLink icon={item.icon} text={item.text} href={item.href} />
            )}
            {item.divider && (
                <div className="px-2.5">
                    <Divider />
                </div>
            )}
        </>
    )

}
