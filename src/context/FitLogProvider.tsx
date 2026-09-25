"use client"
import { Workout } from "@/types/workout";
import React, { createContext, ReactNode, useEffect, useState } from "react";

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
        const [isloaded, setIsloaded] = useState(false);


        // load data from localStorage
        useEffect(() => {
          try{
            const storedPlan = localStorage.getItem("fitlog-plan");
            const storeSaved = localStorage.getItem("fitlog-saved");

            if(storedPlan){
              const parsedPlan = JSON.parse(storedPlan);

              if(Array.isArray(parsedPlan)){
                setPlan(parsedPlan);
              }
            }
            
            if(storeSaved){
              const parsedSaved = JSON.parse(storeSaved);

              if(Array.isArray(parsedSaved)){
                setSaved(parsedSaved);
              }
            }
          }finally {
            setIsloaded(true);
          }
        }, []);

        //save plan whenever plan changes
        useEffect(() => {
          if(!isloaded){
            return;
          }
          localStorage.setItem("fitlog-plan", JSON.stringify(plan));
        }, [plan, isloaded]);

        //save saved workouts whenever saved changes
        useEffect(() => {
          if(!isloaded){
            return
          }
          localStorage.setItem("fitlog-saved", JSON.stringify(saved));
        }, [saved, isloaded]);


        const shareData = {
            plan,setPlan,saved,setSaved,
        };

  return (
    <FitLogContext.Provider value={shareData}>{children}</FitLogContext.Provider>
  );
};

export default FitLogProvider;
