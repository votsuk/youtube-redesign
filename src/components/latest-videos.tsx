"use client";
import { useState } from "react";
import Image from "next/image";
import latestVideos from "@/data/latestVideos.json";
import { Video } from "@/utils/types";
import VideoCard from "./video-card";

export default function LatestVideos() {
    const [hidden, setHidden] = useState(false);

    return (
        <>
            {!hidden && (
                <div className="relative bg-[#272727] rounded-2xl p-7.5 pr-0 space-y-4 overflow-hidden mb-5">
                    <div className="absolute h-full w-36 right-0 top-0 z-1 bg-linear-to-r from-transparent to-[#272727]"></div>
                    <div className="absolute h-full w-auto right-0 top-0 z-2 flex flex-col items-center justify-between p-7.5">
                        <button className="cursor-pointer hover:opacity-40 transition-opacity" onClick={() => setHidden(true)}>
                            <Image src="/icons/cross.svg" alt="Close" width={24} height={24} />
                        </button>
                        <button className="group cursor-pointer w-12 h-12 bg-[#3F3F3F] hover: rounded-full flex items-center justify-center transition-colors hover:bg-white" onClick={() => console.log("Show next video")}>
                            <Image className="group-hover:brightness-0" src="/icons/arrow-right.svg" alt="Close" width={7} height={13} />
                        </button>
                        <div></div>
                    </div>
                    <h2 className="text-2xl font-medium">In Case You Missed</h2>
                    <div className="relative grid grid-rows-1 grid-flow-col gap-5">
                            {latestVideos.map((video: Video) => {
                                return (
                                    <VideoCard key={video.id} video={video} />
                                )
                            })}
                    </div>
                </div>
            )}
        </>
    )
}
