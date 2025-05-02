import { Creator } from "@/utils/types"
import Image from "next/image"

export default function Subscriptions() {
    const subscriptions: Creator[] = [
        {
            name: "Juxtopposed",
            profilePicture: "/profile-photos/Juxtopposed.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Auto Focus",
            profilePicture: "/profile-photos/Autofocus.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Fortnite",
            profilePicture: "/profile-photos/fortnite.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Daniel Krafft",
            profilePicture: "/profile-photos/DanielKrafft.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Marques Brownlee",
            profilePicture: "/profile-photos/MarquesBrownlee.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Dave2D",
            profilePicture: "/profile-photos/dave2d.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Linus Tech Tips",
            profilePicture: "/profile-photos/LinusTechTips.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "The Game Theorists",
            profilePicture: "/profile-photos/TheGameTheorists.png",
            verified: true,
            hasNewVideo: true,
        },
        {
            name: "Fireship",
            profilePicture: "/profile-photos/Fireship.png",
            verified: true,
            hasNewVideo: true,
        },
    ]

    function getConciseProfileName(name: string) {
        if (name.length < 10) {
            return name;
        }

        const shortenedName = name.substring(0, 7);
        return shortenedName + "...";
    }

    return (
        <div className="flex gap-2.5">
            {subscriptions.map((subscription: Creator) => (
                <div key={subscription.name} className="flex flex-col items-center justify-center gap-1">
                    <div className="relative">
                        <Image
                            src={subscription.profilePicture}
                            alt={subscription.name}
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                        {subscription.hasNewVideo && <div className="w-3 h-3 bg-red rounded-full border-2 border-black absolute bottom-1 right-0"></div>}
                    </div>
                    {getConciseProfileName(subscription.name)}
                </div>
            ))}
        </div>
    )
}
