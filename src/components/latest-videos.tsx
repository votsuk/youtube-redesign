"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatVideoDuration, formatViews, timeElapsed } from "@/utils/video-utils";
import latestVideos from "@/data/latestVideos.json";

export default function LatestVideos() {
    const [hidden, setHidden] = useState(false);

    return (
        <>
            {!hidden && (
                <div className="relative bg-[#C4E4FF]/8 rounded-2xl p-7.5 space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-medium">In Case You Missed</h2>
                        <button className="cursor-pointer hover:opacity-40 transition-opacity" onClick={() => setHidden(true)}>
                            <Image src="/icons/cross.svg" alt="Close" width={24} height={24} />
                        </button>
                    </div>
                    <div className="relative w-full">
                        <div className="flex gap-5 w-full">
                            {latestVideos.map((video) => {
                                return (
                                    <Link href={`/video/${video.id}`} key={video.id} className="space-y-3">
                                        <div className="relative w-[354px] h-[199px]">
                                            <Image className="rounded-2xl w-full h-full" src={video.thumbnail} alt="thumbnail" width={354} height={199} />
                                            <span className="absolute bottom-2 right-2 bg-black/60 rounded-md px-2 py-0.5">
                                                {formatVideoDuration(video.length)}
                                            </span>
                                        </div>
                                        <div className="flex gap-2 max-w-[354px]">
                                            <Image className="w-12 h-12" src={video.creator.profilePicture} alt={`${video.creator.name} profile picture`} width={48} height={48} />
                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-medium text-lg">{video.title}</h3>
                                                <span className="text-[#AAAAAA] flex gap-2">{video.creator.name} {video.creator.verified && <Image src="/icons/verified.svg" alt="" width={16} height={16} />}</span>
                                                <p className="text-[#AAAAAA]">{formatViews(video.views)} • {timeElapsed(video.publishedDate)}</p>
                                            </div>
                                            <Image className="w-6 h-6 cursor-pointer hover:bg-white/20 rounded-full transition-colors" src="/icons/vertical-menu.svg" alt="Menu" width={25} height={24} />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
