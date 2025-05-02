import allVideos from "@/data/allVideos.json";
import { Video } from "@/utils/types";
import VideoCard from "@/components/video-card";

export default function AllVideos() {
    return (
        <div className="relative rounded-2xl space-y-4 overflow-hidden mb-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-20">
                {allVideos.map((video: Video) => {
                    return (
                        <VideoCard key={video.id} video={video} />
                    )
                })}
            </div>
        </div>
    )
}
