"use client";
import { Details } from "@/components/Details";
import { Navbar } from "@/components/Navbar";
import Options from "@/components/Options";
import { Sidebar } from "@/components/Sidebar";
import Taste from "@/components/Taste";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col-2 w-full pt-5">
      <Sidebar />
      <Navbar />
      <main className="relative flex flex-col gap-60 ml-20 mt-60 w-full">
        <img src="/beer.png" alt="Hero Image" className="absolute inset-0 w-[580px] h-auto top-[-190px] left-[420px] rotate-15" />
        <div className="flex flex-col items-center justify-center gap-5">
          <h1>UNLIMITED</h1>
          <h1>RELEASE IPA</h1>
        </div>
        <Details />
        <Taste />
        <Options />
      </main>
    </div>
  );
}
