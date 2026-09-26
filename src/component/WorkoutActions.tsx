"use client";
import { FitLogContext } from "@/context/FitLogProvider";
import { Workout } from "@/types/workout";
import React, { useContext } from "react";
import { BiSolidAddToQueue, BiSolidSave } from "react-icons/bi";
import { toast } from "react-toastify";

const WorkoutActions = ({ workout }: { workout: Workout }) => {
  const { plan, setPlan, saved, setSaved } = useContext(FitLogContext);

  const alreadyAdded = plan.some((item) => item.id === workout.id);
  const planFull = plan.length === 5;

  const handleAddToPlan = () => {
    if (alreadyAdded) {
      toast.error(`${workout.name} is already in today's plan`);
      return;
    }

    if (planFull) {
      toast.error("Today's plan is full. Maximum 5 workouts allowed.");
      return;
    }

    setPlan([...plan, workout]);
    toast.success(`${workout.name} added to today's plan`);
  };

  const handleSaveWorkout = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.error(`${workout.name} is already saved`);
      return;
    }

    setSaved([...saved, workout]);

    toast.success(`${workout.name} saved for later`);
  };

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        disabled={alreadyAdded || planFull}
        className={` flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-black text-black transition ${
          alreadyAdded || planFull
            ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
            : "bg-[#ccff00] text-black hover:bg-[#d9ff4d]"
        }`}
      >
        {alreadyAdded ? (
          "✓ Added to today's plan"
        ) : planFull ? (
          "Plan Full (5/5)"
        ) : (
          <>
            <BiSolidAddToQueue size={20} /> {` Add to today's plan `}
          </>
        )}
      </button>

      <button
        onClick={handleSaveWorkout}
        className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-black transition ${
          saved.some((item) => item.id === workout.id)
            ? "cursor-default border border-zinc-700 bg-zinc-700 text-zinc-400"
            : "border border-zinc-600 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
        }`}
      >
        {saved.some((item) => item.id === workout.id) ? (
          "✓ Saved"
        ) : (
          <>
            <BiSolidSave size={20} />
            Save for later
          </>
        )}
      </button>
    </div>
  );
};

export default WorkoutActions;
