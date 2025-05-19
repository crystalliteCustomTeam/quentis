"use client";
// Components
// import { Button, WhiteLogo } from "@/components";
import CTA from "../CTA";
import Navbar from "./Navbar";
import MobileNavbar from "./Mobile_Navbar";
// Framer
import { motion } from "framer-motion";
// React
import { useEffect, useState } from "react";
// Next
import Image from "next/image";
// Media
import logo from "media/logo.gif";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleIsMobile = () => {
      setIsMobile(window.innerWidth <= 1199);
    };
    handleIsMobile();
    window.addEventListener("resize", handleIsMobile);
    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);
  return (
    <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <div className="absolute top-5 left-0 right-0 z-50">
        <div className="container">
          <div className="flex items-center">
            <Image src={logo} alt="logo" className="max-w-[230px]" />
            {isMobile ? <MobileNavbar /> : <Navbar />}
            <div className="hidden md:flex items-center gap-5">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<a class='flex items-center gap-2 font-semibold transition-all hover:gap-3 bg-primary text-white w-[200px] justify-center h-[45px] rounded-md hover:bg-black/80' href="javascript:;">Let's Talk</a>`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
