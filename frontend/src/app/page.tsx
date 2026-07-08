"use client";
import { Details } from "@/components/Details";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Options from "@/components/Options";
import { Sidebar } from "@/components/Sidebar";
import Taste from "@/components/Taste";
import { easeInOut, motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });

  const y = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [-190, 474, 948, 1422, 2190], { ease: easeInOut });
  const rotate = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [15, 0, 0, 0, 0]);
  const scale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1, 1, 1, 0.6], { ease: easeInOut });

  return (
    <div className="min-h-screen">
      <div className=" flex flex-col-2 w-full pt-5">
        <Sidebar />
        <Navbar />
        <main ref={imageRef} className="relative flex flex-col gap-50 ml-20 mt-60 w-full">
          <motion.img src="/beer.png" style={{ y, rotate, scale }} alt="Hero Image" className="absolute inset-0 w-[580px] h-auto left-[430px] " />
          <div className="flex flex-col items-center justify-center gap-5">
            <h1>UNLIMITED</h1>
            <h1>RELEASE IPA</h1>
          </div>
          <Details />
          <Taste />
          <Options />
        </main>
      </div>
      <Footer />
    </div>
  );
}
