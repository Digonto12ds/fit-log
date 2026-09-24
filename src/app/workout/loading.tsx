import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* Logo / Icon */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-zinc-800 border-t-[#ccff00]"></div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ccff00]">
            <span className="text-xl font-black text-black">F</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-[0.2em] text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Preparing your workout...
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#ccff00]"></span>

          <span className="h-2 w-2 animate-bounce rounded-full bg-[#ccff00] [animation-delay:150ms]"></span>

          <span className="h-2 w-2 animate-bounce rounded-full bg-[#ccff00] [animation-delay:300ms]"></span>
        </div>
      </div>
    </div>
  );
};

export default loading;
