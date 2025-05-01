import allVideos from "@/data/allVideos.json";
import { Video } from "@/utils/types";
import VideoCard from "./video-card";

export default function AllVideos() {
    return (
        <div className="relative rounded-2xl space-y-4 overflow-hidden mb-5">
            <div className="grid md:grid-cols-3 3xl:grid-cols-4 gap-5">
                {allVideos.map((video: Video) => {
                    return (
                        <VideoCard key={video.id} video={video} />
                    )
                })}
            </div>
        </div>
    )
}
