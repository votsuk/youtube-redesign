import Image from "next/image";

export default function HeaderIcon({
    icon,
    alt,
}: {
    icon: string;
    alt: string;
}) {
    return <Image className="cursor-pointer hover:opacity-70 transition-opacity w-auto h-auto" src={icon} alt={alt} width={24} height={24} />
}