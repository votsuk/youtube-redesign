export type Video = {
    id: string;
    title: string;
    thumbnail: string;
    length: number;
    views: number;
    publishedDate: string;
    creator: Creator;
}

export type Creator = {
    name: string;
    profilePicture: string;
    verified: boolean;
    hasNewVideo?: boolean;
}

export enum NavDisplay {
    Mobile = "MOBILE",
    Desktop = "DESKTOP",
    Tablet = "TABLET",
    Both = "BOTH",
}

export type NavItem = {
    icon: string;
    text: string;
    href: string;
    dropdown: boolean;
    divider: boolean;
    displaySupport: NavDisplay;
}
