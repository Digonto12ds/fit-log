import { Workout } from "@/types/workout";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const getDatas = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: Workout[] = await res.json();
  return data;
};

const Library = async () => {
  const workouts = await getDatas();
  // console.log("data :", workoutData)

  return (
    <section id="laibary" className="bg-[#0d0f12] px-4 py-16 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* heding */}
        <div className="mb-10">
          <h4 className="font-bold text-[30px]">THE LIBRARY</h4>
          <p className=" text-slate-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* workoutcard */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <Link
              key={workout.id}
              href={`/workout/${workout.id}`}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#15181c] transition hover:-translate-y-1 hover:border-[#ccff00]"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden bg-zinc-900">
                <Image src={workout.image} alt={workout.name} width={400} height={300}
                className="h-full w-full object-cover"
                ></Image>
                {/* <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                /> */}
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-bold uppercase text-zinc-300"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-xl font-black uppercase text-white">
                  {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-zinc-500">
                  {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center gap-2 border-t border-zinc-800 pt-4 text-sm text-zinc-400">
                  <span>⏱ {workout.duration} min</span>

                  <span>🔥 {workout.caloriesBurned} kcal</span>

                  <span>★ {workout.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
