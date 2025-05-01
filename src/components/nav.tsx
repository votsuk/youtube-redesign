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

const navData = [
    {
        "icon": "/icons/red/home.svg",
        "text": "Home",
        "href": "/",
        "dropdown": false,
        "divider": false
    },
    {
        "icon": "/icons/red/explore.svg",
        "text": "Explore",
        "href": "/explore",
        "dropdown": false,
        "divider": false
    },
    {
        "icon": "/icons/red/shorts.svg",
        "text": "Shorts",
        "href": "/shorts",
        "dropdown": false,
        "divider": false
    },
    {
        "icon": "/icons/red/tv-mode.svg",
        "text": "TV Mode",
        "href": "/tv-mode",
        "dropdown": false,
        "divider": true
    },
    {
        "icon": "/icons/red/history.svg",
        "text": "History",
        "href": "/history",
        "dropdown": false,
        "divider": false
    },
    {
        "icon": "/icons/red/clock.svg",
        "text": "Watch Later",
        "href": "/watch-later",
        "dropdown": false,
        "divider": false
    },
    {
        "icon": "/icons/red/like.svg",
        "text": "Liked Videos",
        "href": "/liked-videos",
        "dropdown": false,
        "divider": false
    },
    {
        "icon": "/icons/red/playlists.svg",
        "text": "Playlists",
        "href": "/playlists",
        "dropdown": true,
        "divider": true
    },
    {
        "icon": "/icons/red/collections.svg",
        "text": "Collections",
        "href": "/collections",
        "dropdown": true,
        "divider": false
    },
    {
        "icon": "/icons/red/subscriptions.svg",
        "text": "Subscriptions",
        "href": "/subscriptions",
        "dropdown": true,
        "divider": true
    },
]

export default function Nav() {
    const { state, open } = useNav();

    return (
        <nav className="group inline-block shrink-0" data-variant="nav" data-state={state} data-collapsible={open ? "" : "icon"}>
            <ul className="flex flex-col">
                {navData.map((item, i) => (
                    <li key={i}>
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
                    </li>
                ))}
            </ul>
        </nav>
    )
}
