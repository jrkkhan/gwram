import React from "react";
import Link from "next/link";
import { Icon, IconArrowRight, IconChevronDown } from "@tabler/icons-react";
function Header() {
    return (
        <header className="bg-transparent w-full  h-24  transition-all duration-300  top-0  z-20 flex items-center gg-header font-[family-name:var(--font-inter-sans)]  ">
            <div className="container mx-auto flex items-center justify-between w-full">
                <img src="./images/GG_logo-light.3e73a610e7ab339b18642a95553f7f32.svg" />
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

                    <button className="bg-[#cd1f7c] px-2 py-2 rounded-full flex items-center space-x-2 pr-4 text-lg">
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