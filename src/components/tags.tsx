"use client";
import { useState } from "react";
import Pill from "@/components/pill";
import Image from "next/image";

const data = [
    "All",
    "Subscriptions",
    "Posts",
    "Music",
    "Tech",
    "Design",
    "Live",
    "Playlists",
    "Cats",
    "Electronics",
    "New Creators",
    "Art",
    "Tech News",
    // "Lofi beats",
    // "UI/UX Redesign",
]

export default function Tags() {
    const [selected, setSelected] = useState(data[0]);

    return (
        <div className="flex gap-2">
            <Pill><Image src="/icons/filter.svg" alt="Filter" width={24} height={24} /></Pill>
            {data.map((item, i) => {
                return <Pill key={i} highlight={selected === item} onClick={() => setSelected(item)}>{item}</Pill>
            })}
        </div>
    )
}
