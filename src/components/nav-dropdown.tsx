"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function NavDropdown({
    icon,
    text,
    link,
}: Readonly<{
    icon?: string;
    text: string;
    link: string;
}>) {
    const path = usePathname();
    const isActive = path === link;

    return (
        <li className="group/nav-item flex justify-between w-full">
            <Link href={link} className={`flex items-center gap-4 group cursor-pointer rounded-lg p-2.5 font-medium text-lg transition-all hover:bg-[#FFAABB]/14 flex-grow-1 ${isActive && `bg-[#FFAABB]/14`}  `}>
                {(icon && text) && (
                    <Image
                        src={icon}
                        alt={text}
                        width={24}
                        height={24}
                        className={!isActive ? "group-hover/nav-item:filter-none filter invert brightness-0": ""}
                    />
                )}
                <span className="group-data-[collapsible=icon]:hidden">{text}</span>
            </Link>
            <div className="group-data-[collapsible=icon]:hidden flex items-center gap-3">
                <div className="w-[1px] h-7 bg-white/15 ml-3"></div>
                <Image
                    src="/icons/arrow-down.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                />
            </div>
        </li>
    )
}
