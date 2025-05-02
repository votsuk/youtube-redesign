"use client";
import AllVideos from "@/components/all-videos";
import LatestVideos from "@/components/latest-videos";
import Tags from "@/components/tags";
import { useIsTablet } from "@/hooks/use-tablet";
import Subscriptions from "@/components/subscriptions";

export default function Home() {
    const isTablet = useIsTablet();

    return (
        <div className="flex flex-col gap-4">
            {isTablet && <Subscriptions />}
            <Tags />
            {!isTablet && <LatestVideos />}
            <AllVideos />
        </div>
    );
}
