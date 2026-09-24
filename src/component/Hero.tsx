import Image from "next/image";
import Link from "next/link";
import himg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className=" bg-[#0d0f12] p-8">
      <div className="container mx-auto flex items-center justify-between gap-2 p-16 bg-[#15171D] rounded-2xl">
        <div className="ml-4">
          <p className="mb-4 text-sm font-bold text-[11px] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>
          <h1 className=" mb-4 font-bold text-4xl">
            TRAIN WITH INTENT.
            LOG  <br />EVERY SET.
          </h1>
          <p className="mb-4 text-slate-400">
           {` FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.`}
          </p>

          <Link
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#d9ff4d]"
            href="#laibary"
          >
            Browse Workouts
          </Link>
        </div>

        <div>
          <Image src={himg} alt="Hero Image"></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
