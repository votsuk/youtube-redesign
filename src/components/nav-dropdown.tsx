"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function NavDropdown({
    icon,
    text,
    href,
}: Readonly<{
    icon?: string;
    text: string;
    href: string;
}>) {
    const path = usePathname();
    const isActive = path === href;

    return (
        <div className="group/nav-item flex justify-between w-full">
            <Link href={href} className={`flex items-center gap-4 group cursor-pointer rounded-lg p-2.5 font-medium text-lg transition-all hover:bg-selected flex-grow-1 ${isActive && `bg-selected`}  `}>
                {(icon && text) && (
                    <Image
                        src={icon}
                        alt={text}
                        width={24}
                        height={24}
                        className={!isActive ? "group-hover/nav-item:filter-none filter invert brightness-0 w-auto h-auto": "w-auto h-auto"}
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
        </div>
    )
}
