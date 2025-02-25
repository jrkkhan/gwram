
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon, IconArrowRight, IconChevronDown } from "@tabler/icons-react";
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change color after 50px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`w-full  h-24  transition-all duration-300  top-0  z-20 flex items-center gg-header font-[family-name:var(--font-inter-sans)] ${isScrolled ? "bg-white shadow-md text-[#212121]" : "bg-transparent text-white"
                }`}
        // className="bg-transparent w-full  h-24  transition-all duration-300  top-0  z-20 flex items-center gg-header font-[family-name:var(--font-inter-sans)] "
        >
            <div className="container mx-auto flex items-center justify-between w-full">
                {!isScrolled ? <img src="./images/GG_logo-light.3e73a610e7ab339b18642a95553f7f32.svg" className="w-[200px]" /> :
                    <img src="https://growthgrids.com/static/media/logo.ffb3db8fc023cfa9a2e3.png" className="w-[50px]"/>}
                <div className="flex items-center space-x-8 ">
                    <div className="flex items-center justify-end">
                        <span>
                            Our Products
                        </span>
                        <IconChevronDown stroke={2} />
                    </div>
                    <Link href="/#">About Company</Link>
                    <Link href="/#">Services </Link>
                    <Link href="/#">Careers</Link>

                    <button className="bg-[#cd1f7c] px-2 py-2 rounded-full flex items-center space-x-2 pr-4 text-lg text-white">
                        <span className="bg-white rounded-full p-1.5 ">
                            <IconArrowRight stroke={2} color="#212121" size={'20'} />
                        </span>
                        <span>Contact us</span>
                    </button>
                </div>
            </div>
        </header>

    );
}
export default Header;