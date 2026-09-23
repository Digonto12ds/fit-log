import React from "react";
import logo from "@/assets/Vector.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#0d0f12]">
      <div className="containe mx-auto">
        <div className="mx-auto flex  flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" />
            <p className="text-sm font-black tracking-tight text-white">
              FITLOGO
            </p>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-zinc-500 md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
