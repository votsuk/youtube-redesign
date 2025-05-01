import NavLink from "@/components/nav-link";

const mobileNavData = [
    {
        "icon": "/icons/red/home.svg",
        "text": "Home",
        "href": "/",
    },
    {
        "icon": "/icons/red/shorts.svg",
        "text": "Shorts",
        "href": "/shorts",
    },
    {
        "icon": "/icons/red/search.svg",
        "text": "Search",
        "href": "/search",
    },
    {
        "icon": "/icons/red/subscriptions.svg",
        "text": "Subs",
        "href": "/subscriptions",
    },
    {
        "icon": "/icons/red/library.svg",
        "text": "Library",
        "href": "/library",
    },
]

export default function MobileNav() {
    return (
        <nav className="fixed z-20 bottom-0 left-0 right-0 w-full h-auto bg-dark">
            <ul className="grid grid-cols-5 px-2">
                {mobileNavData.map((item, i) => (
                    <li key={i}>
                        <NavLink href={item.href} text={item.text} icon={item.icon} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
