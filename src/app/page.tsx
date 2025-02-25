import Image from "next/image";
import { IconArrowRight, IconChevronDown, } from "@tabler/icons-react";
import Link from "next/link";
import { url } from "inspector";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <div className=" bg-no-repeat bg-[#d5d2ec] hero"
        style={{ backgroundImage: "url('./images/bg_shape.39b75cfa769164d5a083.svg')", }}

      >
        <div className="video_wrapper">
          <video autoPlay muted loop playsInline className="!aspect-video absolute top-0 left-0 object-fill z-10 ">
            <source src="https://growthgrids.com/static/media/heroVideo2.35e600ac6feb8b986d50.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


        <section className="container mx-auto h-[calc(100vh-6rem)] flex items-center ">
          <div className="w-6/12 space-y-12 z-20">
            <h1 className="text-7xl font-semibold font-[family-name:var(--font-outfit-sans)] leading-[110%]  ">Code Towards a
              Progressive Future.</h1>
            <button className="bg-[#cd1f7c] px-2 py-3 rounded-full flex items-center space-x-2 pr-4 text-lg">
              <span className="bg-white rounded-full p-1.5 ">
                <IconArrowRight stroke={2} color="#212121" size={'20'} />
              </span>
              <span>Access Our Expertise Now!</span>
            </button>
          </div>


        </section>
      </div>
    </div>
  );
}
