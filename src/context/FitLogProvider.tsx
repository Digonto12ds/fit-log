"use client"
import { Workout } from "@/types/workout";
import React, { createContext, ReactNode, useState } from "react";

interface IfitLogContext {
  plan: Workout[];
  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const FitLogContext = createContext<IfitLogContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const FitLogProvider = ({children}:{children : ReactNode}) => {
        const [plan, setPlan] = useState<Workout[]>([]);
        const [saved, setSaved] = useState<Workout[]>([]);

        const shareData = {
            plan,setPlan,saved,setSaved,
        };

  return (
    <FitLogContext.Provider value={shareData}>{children}</FitLogContext.Provider>
  );
};

export default FitLogProvider;
