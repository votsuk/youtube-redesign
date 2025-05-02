"use client";
import { useState } from "react";
import Image from "next/image";
import { useNav } from "@/components/nav";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTablet } from "@/hooks/use-tablet";
import HeaderIcon from "@/components/header-icon";

export default function TopHeader() {
    const [searchInput, setSearchInput] = useState("");
    const { toggleNav } = useNav();
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchInput(e.target.value);
    }

    return (
        <header className="py-3 md:pl-5 xl:pl-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <button
                        className="w-10 h-10 cursor-pointer hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        onClick={toggleNav}
                    >
                        <Image className="w-6 h-6" src="/icons/hamburger.svg" alt="menu icon" width={24} height={24} />
                    </button>
                    <Image className="h-full" src="/logo.svg" alt="menu icon" width={112} height={24} />
                </div>
                {!isTablet && (
                    <form className="flex border border-white/20 rounded-full py-2 p-4 w-full max-w-2xl">
                        <Image
                            className="flex-shrink-0"
                            src="/icons/search.svg"
                            alt="Search"
                            width={24}
                            height={24}
                        />
                        <input
                            type="text"
                            className="ml-2 outline-none flex-grow"
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => handleSearchInput(e)}
                        />
                        {searchInput && (
                            <Image 
                                className="flex-shrink-0 cursor-pointer"
                                src="/icons/cross.svg"
                                alt="Cancel"
                                width={24}
                                height={24}
                                onClick={() => setSearchInput("")}
                            />
                        )}
                        <Image 
                            className="flex-shrink-0"
                            src="/icons/microphone.svg"
                            alt="Microphone"
                            width={24}
                            height={24}
                        />
                    </form>
                )}
                <div className="flex gap-6">
                    {!isMobile && <HeaderIcon icon="/icons/add.svg" alt="Add video icon" />}
                    {!isMobile && <HeaderIcon icon="/icons/screen-share.svg" alt="Screen Sharing" />}
                    <HeaderIcon icon="/icons/bell.svg" alt="Notifications menu icon" />
                    {!isMobile && <HeaderIcon icon="/icons/gear.svg" alt="Settings Icon" />}
                    <div className="w-7.5 h-7.5 bg-gray-500 p-3 flex items-center justify-center text-sm rounded-full cursor-pointer hover:opacity-70 transition-opacity">U</div>
                </div>
            </div>
        </header>
    )
}
