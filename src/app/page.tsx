"use client";
import AllVideos from "@/components/all-videos";
import LatestVideos from "@/components/latest-videos";
import Tags from "@/components/tags";
import { useIsTablet } from "@/hooks/use-tablet";

export default function Home() {
    const isTablet = useIsTablet();

    return (
        <div className="flex flex-col gap-4">
            <Tags />
            {!isTablet && <LatestVideos />}
            <AllVideos />
        </div>
    );
}
