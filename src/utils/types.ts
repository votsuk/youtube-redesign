export type Video = {
    id: string;
    title: string;
    thumbnail: string;
    length: number;
    views: number;
    publishedDate: string;
    creator: Creator
}

export type Creator = {
    name: string;
    profilePicture: string;
    verified: boolean;
}
