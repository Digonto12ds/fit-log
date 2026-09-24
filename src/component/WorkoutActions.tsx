"use client";
import { FitLogContext } from "@/context/FitLogProvider";
import { Workout } from "@/types/workout";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WorkoutActions = ({ workout }: { workout: Workout }) => {
  const { plan, setPlan, saved, setSaved } = useContext(FitLogContext);

  const handleAddToPlan = () => {
    setPlan([...plan, workout]);
    toast.success(`${workout.name} added to today's plan`);
  };

  const handleSaveWorkout = () => {
    setSaved([...saved, workout]);
    toast.success(`${workout.name} saved for later`);
  };

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => handleAddToPlan()}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 font-black uppercase text-black transition hover:bg-[#d9ff4d]"
      >
        Add to today;s plan
      </button>

      <button
        onClick={() => handleSaveWorkout()}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
