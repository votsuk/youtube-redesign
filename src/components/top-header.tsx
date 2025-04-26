"use client";
import { useState } from "react";
import Image from "next/image";
import { useNav } from "@/components/nav";

export default function TopHeader() {
    const [searchInput, setSearchInput] = useState("");
    const { toggleNav } = useNav();

    function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchInput(e.target.value);
    }

    return (
        <header className="py-3">
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
                <div className="flex gap-6">
                    <Image className="cursor-pointer hover:opacity-70 transition-opacity" src="/icons/add.svg" alt="Add video icon" width={24} height={24} />
                    <Image className="cursor-pointer hover:opacity-70 transition-opacity" src="/icons/bell.svg" alt="Notifications menu icon" width={24} height={24} />
                    <Image className="cursor-pointer hover:opacity-70 transition-opacity" src="/icons/gear.svg" alt="Settings Icon" width={24} height={24} />
                    <div className="w-7.5 h-7.5 bg-gray-500 p-3 flex items-center justify-center text-sm rounded-full cursor-pointer hover:opacity-70 transition-opacity">U</div>
                </div>
            </div>
        </header>
    )
}
