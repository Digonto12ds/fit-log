"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Workout } from "@/types/workout";

interface LibraryClientProps {
  workouts: Workout[];
}

const LibraryClient = ({ workouts }: LibraryClientProps) => {
  const [searchText, setSearchText] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchValue = searchText.toLowerCase();

    const workoutName = workout.name.toLowerCase();

    const tags = workout.muscleGroups
      .join(" ")
      .toLowerCase();

    return (
      workoutName.includes(searchValue) ||
      tags.includes(searchValue)
    );
  });

  return (
    <>
      {/* Search */}
      <div className="mb-8 max-w-md">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search workout or muscle..."
          className="w-full rounded-full border border-zinc-700 bg-[#15181c] px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#ccff00]"
        />
      </div>

      {/* Workout Cards */}
      {filteredWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <Link
              key={workout.id}
              href={`/workout/${workout.id}`}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#15181c] transition hover:-translate-y-1 hover:border-[#ccff00]"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden bg-zinc-900">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
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
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-800 px-6 py-16 text-center">
          <p className="text-sm font-black tracking-[0.2em] text-[#ccff00]">
            NO WORKOUTS FOUND
          </p>

          <p className="mt-3 text-sm text-zinc-500">
            Try another workout name or muscle group.
          </p>
        </div>
      )}
    </>
  );
};

export default LibraryClient;