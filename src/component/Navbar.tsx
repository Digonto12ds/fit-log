'use client'
import React, { useContext }from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FitLogContext } from "@/context/FitLogProvider";

const Navbar = () => {
    const pathname = usePathname();
    const {plan , saved } = useContext(FitLogContext);
  return (
    <nav className="boborder-b border-zinc-800 bg-[#0d0f12]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" />
          <p className="text-sm font-black tracking-tight text-white">
            FITLOGO
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link className={`text-sm font-semibold  ${pathname === '/'? 'text-[#ccff00]' : ''}`} href="/">Workout</Link>
          <Link className={`text-sm font-semibold ${pathname === '/my-plan'? 'text-[#ccff00]' : ''}`}  href="/my-plan">My Plan</Link>
        </div>
        <div className="flex items-center gap-3">
            <Link className="text-sm font-semibold"
            href="/my-plan?tab=plan"
          >
            Plan <span>{plan.length}</span>
          </Link>

          {/* Saved */}
          <Link className="text-sm font-semibold"
            href="/my-plan?tab=saved"
          >
            Saved <span>{saved.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
