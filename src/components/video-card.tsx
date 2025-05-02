import { Video } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import { formatVideoDuration, formatViews, timeElapsed } from "@/utils/video-utils";

export default function VideoCard({ 
    video, 
    width, 
    height 
}: { 
    video: Video;
    width?: number;
    height?: number;
}) {
    return (
        <Link href={`/video/${video.id}`} key={video.id} className="space-y-3">
            <div className={`relative ${width && `w-[${width}px]`} ${height && `h-[${height}px]`}`}>
                <Image className="rounded-2xl w-full h-full" src={video.thumbnail} alt="thumbnail" width={width ? width : 354} height={height ? height : 199} />
                <span className="absolute bottom-2 right-2 bg-black/60 rounded-md px-2 py-0.5">
                    {formatVideoDuration(video.length)}
                </span>
            </div>
            <div className={`flex gap-2 ${width && ` max-w-[${width}px]`}`}>
                <Image className="w-7.5 h-7.5 md:w-12 md:h-12 rounded-full" src={video.creator.profilePicture} alt={`${video.creator.name} profile picture`} width={48} height={48} />
                <div className="flex flex-col gap-1 w-full">
                    <h3 className="font-medium md:text-lg">{video.title}</h3>
                    <span className="text-[#AAAAAA] flex gap-2">{video.creator.name} {video.creator.verified && <Image src="/icons/verified.svg" alt="" width={16} height={16} />}</span>
                    <p className="text-[#AAAAAA]">{formatViews(video.views)} • {timeElapsed(video.publishedDate)}</p>
                </div>
                <Image className="w-6 h-6 cursor-pointer hover:bg-white/20 rounded-full transition-colors" src="/icons/vertical-menu.svg" alt="Menu" width={24} height={24} />
            </div>
        </Link>
    )
}
