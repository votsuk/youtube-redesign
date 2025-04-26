"use client";
import { createContext, useContext, useState } from "react";
import NavLink from "@/components/nav-link";
import Divider from "@/components/divider";
import NavDropdown from "@/components/nav-dropdown";

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
        <nav className="group inline-block shrink-0" data-variant="nav" data-state={state} data-collapsible={open ? "" : "icon"}>
            <ul className="flex flex-col">
                <NavLink icon="/icons/red/home.svg" text="Home" link="/" />
                <NavLink icon="/icons/red/explore.svg" text="Explore" link="/explore" />
                <NavLink icon="/icons/red/shorts.svg" text="Shorts" link="/shorts" />
                <NavLink icon="/icons/red/tv-mode.svg" text="TV Mode" link="/tv-mode" />
                <div className="px-2.5">
                    <Divider />
                </div>
                <NavLink icon="/icons/red/history.svg" text="History" link="/history" />
                <NavLink icon="/icons/red/clock.svg" text="Watch Later" link="/watch-later" />
                <NavLink icon="/icons/red/like.svg" text="Liked Videos" link="/liked-videos" />
                <NavDropdown icon="/icons/red/playlists.svg" text="Playlists" link="/playlists" />
                <div className="px-2.5">
                    <Divider />
                </div>
                <NavDropdown icon="/icons/red/collections.svg" text="Collections" link="/collections" />
                <NavDropdown icon="/icons/red/subscriptions.svg" text="Subscriptions" link="/subscriptions" />
                <div className="px-2.5">
                    <Divider />
                </div>
            </ul>
        </nav>
    )
}
