import Image from "next/image";
import Link from "next/link";

export default function NavDropdown({
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
    return (
        <li className="flex justify-between w-full">
            <Link href={link} className="flex items-center gap-4 group cursor-pointer rounded-lg p-2.5 font-medium text-lg transition-all hover:bg-[#FFAABB]/14 flex-grow-1">
                {(src && alt) && (
                    <Image
                        src={src}
                        alt={alt}
                        width={24}
                        height={24}
                        className="group-hover:filter-none filter invert brightness-0"
                    />
                )}
                {children}
            </Link>
            <div className="flex items-center gap-3">
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
