"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useIsTablet } from "@/hooks/use-tablet";

export default function NavLink({
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
    const isTablet = useIsTablet();

    return (
        <Link
            href={href}
            className={`group/nav-item py-3 xl:p-2.5 flex flex-col xl:flex-row items-center gap-2.5 xl:gap-4 cursor-pointer w-full rounded-lg font-medium text-lg transition-all xl:hover:bg-selected ${isActive && `xl:bg-selected`} ${!isActive && "opacity-70 xl:opacity-100 hover:opacity-100"}`}
        >
            {icon && (
                <div className={`${(isActive && isTablet) && "relative before:absolute before:inset-0 before:-mt-1 before:block before:bg-selected before:w-full before:rounded-full before:py-4 w-full flex items-center justify-center"}`}>
                    <Image
                        src={icon}
                        alt={text}
                        width={24}
                        height={24}
                        className={isActive ? "": "group-hover/nav-item:filter-none filter invert brightness-0"}
                    />
                </div>
            )}
            <span className={`group-data-[collapsible=icon]:hidden text-xs xl:text-base ${isActive && "font-bold"}`}>{text}</span>
        </Link>
    )
}
