import { Workout } from "@/types/workout";
import LibraryClient from "./LibraryClient";
import React from "react";

const getDatas = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: Workout[] = await res.json();
  return data;
};

const Library = async () => {
  const workouts = await getDatas();
  // console.log("data :", workoutData)

  return (
    <section id = "library" 
    className="bg-[#0d0f12] px-4 py-16 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h4 className="text-[30px] font-bold">THE LIBRARY</h4>
           <p className="text-slate-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* card */}
        <LibraryClient workouts={workouts} />

      </div>
    </section>
  );
};

export default Library;
