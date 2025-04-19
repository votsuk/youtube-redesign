import NavLink from "@/components/nav-link";
import Divider from "@/components/divider";
import NavDropdown from "@/components/nav-dropdown";

export default function Nav() {
    return (
        <nav className="inline-block pl-16">
            <ul className="flex flex-col">
                <NavLink src="/icons/red/home.svg" alt="Home" link="/">
                    Home
                </NavLink>
                <NavLink src="/icons/red/explore.svg" alt="Explore" link="/explore">
                    Explore
                </NavLink>
                <NavLink src="/icons/red/shorts.svg" alt="Shorts" link="/shorts">
                    Shorts
                </NavLink>
                <NavLink src="/icons/red/tv-mode.svg" alt="TV Mode" link="/tv-mode">
                    TV Mode
                </NavLink>
                <div className="px-2.5">
                    <Divider />
                </div>
                <NavLink src="/icons/red/history.svg" alt="History" link="/history">
                    History
                </NavLink>
                <NavLink src="/icons/red/clock.svg" alt="Watch Later" link="/watch-later">
                    Watch Later
                </NavLink>
                <NavLink src="/icons/red/like.svg" alt="Liked Videos" link="/liked-videos">
                    Liked Videos
                </NavLink>
                <NavDropdown src="/icons/red/playlists.svg" alt="Playlists" link="/playlists/">
                    Playlists
                </NavDropdown>
                <div className="px-2.5">
                    <Divider />
                </div>
                <NavDropdown src="/icons/red/collections.svg" alt="Collections" link="/collections/">
                    Collections
                </NavDropdown>
                <NavDropdown src="/icons/red/subscriptions.svg" alt="Subscriptions" link="/subscriptions/">
                    Subscriptions
                </NavDropdown>
                <div className="px-2.5">
                    <Divider />
                </div>
            </ul>
        </nav>
    )
}
