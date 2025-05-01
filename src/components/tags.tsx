"use client";
import { useState, useRef, useEffect } from "react";
import Pill from "@/components/pill";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const categories = [
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
    "Lofi beats",
    "UI/UX Redesign",
];

export default function Tags() {
    const [selected, setSelected] = useState(categories[0]);
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);
    const pillsRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

    function checkOverflow() {
        if (containerRef.current && pillsRef.current) {
            const containerWidth = containerRef.current.getBoundingClientRect().width;
            const pillsWidth = pillsRef.current.getBoundingClientRect().width;
            setIsOverflowing(pillsWidth > containerWidth);
        }
    };

    useEffect(() => {
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

    return (
        <div className="relative overflow-hidden" ref={containerRef}>
            {(!isMobile && isOverflowing) && (
                <>
                    <div className="absolute h-full w-36 right-0 top-0 z-1 bg-gradient-to-r from-transparent via-darker via-70% to-darker"></div>
                    <div className="absolute h-full w-auto right-0 top-0 z-2 flex flex-col items-center justify-center pr-6">
                        <button
                            className="group cursor-pointer"
                            onClick={() => console.log("Show next video")}
                        >
                            <Image
                                className="group-hover:brightness-70"
                                src="/icons/arrow-right.svg"
                                alt="Close"
                                width={7}
                                height={13}
                            />
                        </button>
                    </div>
                </>
            )}

            <div className="inline-flex items-start w-auto gap-2" ref={pillsRef}>
                {/* Filter Pill */}
                <Pill onClick={() => console.log("Toggle")}>
                    <Image
                        className="group-hover:brightness-0 w-6 h-6 max-w-none"
                        src="/icons/filter.svg"
                        alt="Filter"
                        width={24}
                        height={24}
                    />
                </Pill>

                {/* Category Pills */}
                {categories.map((item, i) => (
                    <Pill
                        key={i}
                        highlight={selected === item}
                        onClick={() => setSelected(item)}
                        special={item === "New Creators"}
                    >
                        {/* Special Icon for "New Creators" */}
                        {item === "New Creators" && (
                            <Image
                                src="/icons/star.svg"
                                width={22}
                                height={24}
                                alt="Star"
                            />
                        )}
                        <p className="text-nowrap">{item}</p>
                    </Pill>
                ))}
            </div>
        </div>
    );
}
