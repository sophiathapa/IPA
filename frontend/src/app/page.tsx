"use client";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col-2 w-full pt-5">
      <Sidebar />
      <div className="relative flex flex-col gap-10 w-full">
        <Navbar />
        <img src="/beer.png" alt="Hero Image" className="absolute inset-0 w-[580px] h-auto object-cover rotate-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="flex flex-col items-center justify-center leading-none gap-5 w-full h-full">
          <h1>UNLIMITED</h1>
          <h1>RELEASE IPA</h1>
        </div>
      </div>
    </div>
  );
}
