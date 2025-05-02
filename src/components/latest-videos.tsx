"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import latestVideos from "@/data/latestVideos.json";
import { Video } from "@/utils/types";
import VideoCard from "./video-card";

export default function LatestVideos() {
    const [hidden, setHidden] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const videosRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

    function checkOverflow() {
        if (containerRef.current && videosRef.current) {
            const containerWidth = containerRef.current.getBoundingClientRect().width;
            const videosWidth = videosRef.current.getBoundingClientRect().width;
            setIsOverflowing((videosWidth + 50) > containerWidth);
        }
    };

    useEffect(() => {
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

    if (hidden) {
        return;
    }

    return (
        <div className="relative w-auto bg-[#272727] rounded-2xl p-7.5 pr-0 space-y-4 overflow-hidden mb-5" ref={containerRef}>

            {/* Gradient Overlay */}
            {isOverflowing && <div className="absolute h-full w-36 right-0 top-0 z-1 bg-linear-to-r from-transparent via-[#272727] via-90% to-[#272727]"></div>}

            <div className="absolute h-full w-auto right-0 top-0 z-2 flex flex-col items-center justify-between p-7.5">
                {/* Cancel Button */}
                <button className="cursor-pointer hover:opacity-40 transition-opacity" onClick={() => setHidden(true)}>
                    <Image src="/icons/cross.svg" alt="Close" width={24} height={24} />
                </button>

                {/* Arrow Button */}
                {isOverflowing && (
                    <button className="group cursor-pointer w-12 h-12 bg-[#3F3F3F] hover: rounded-full flex items-center justify-center transition-colors hover:bg-white" onClick={() => console.log("Show next video")}>
                        <Image className="group-hover:brightness-0" src="/icons/arrow-right.svg" alt="Close" width={7} height={13} />
                    </button>
                )}

                {/* Filler Div for Layout */}
                <div></div>
            </div>
            <h2 className="text-2xl font-medium">In Case You Missed</h2>
            <div className="inline-flex gap-5" ref={videosRef}>
                    {latestVideos.map((video: Video) => {
                        return (
                            <VideoCard 
                                key={video.id}
                                video={video}
                                width={384}
                                height={198}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
