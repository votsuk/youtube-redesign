import LatestVideos from "@/components/latest-videos";
import Tags from "@/components/tags";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <Tags />
            <LatestVideos />
        </div>
    );
}
