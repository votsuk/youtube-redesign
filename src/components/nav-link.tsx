"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function NavLink({
    children,
    src,
    alt,
    link,
}: Readonly<{
    children: React.ReactNode;
    src?: string;
    alt?: string;
    link: string;
}>) {
    const path = usePathname();
    const isActive = path === link;

    return (
        <li className={`group cursor-pointer w-full rounded-lg font-medium text-lg transition-all hover:bg-[#FFAABB]/14 ${isActive && `bg-[#FFAABB]/14`}`}>
            <Link href={link} className="p-2.5 flex items-center gap-4 ">
                {(src && alt) && (
                    <Image
                        src={src}
                        alt={alt}
                        width={24}
                        height={24}
                        className={!isActive ? "group-hover:filter-none filter invert brightness-0": ""}
                    />
                )}
                {children}
            </Link>
        </li>
    )
}
