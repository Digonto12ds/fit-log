// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// // ⭐ CHANGED: Suspense is already imported here
// import React, { Suspense, useContext, useState } from "react";

// import { toast } from "react-toastify";
// import { TiTick } from "react-icons/ti";
// import { FitLogContext } from "@/context/FitLogProvider";

// type Tab = "plan" | "saved";
// type SortOption = "duration" | "calories" | "rating";

// // ⭐ CHANGED:
// // Renamed MyPlanPage → MyPlanContent
// // because this component contains useSearchParams()
// const MyPlanContent = () => {
//   const { plan, setPlan, saved, setSaved } = useContext(FitLogContext);

//   const searchParams = useSearchParams();
//   const tab = searchParams.get("tab");
//   const activeTab: Tab = tab === "saved" ? "saved" : "plan";

//   const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);
//   const [sortBy, setSortBy] = useState<SortOption>("duration");
//   const [searchText, setSearchText] = useState("");

//   const currentList = activeTab === "plan" ? plan : saved;

//   const filteredList = currentList.filter((workout) => {
//     const searchValue = searchText.toLowerCase();
//     const workoutName = workout.name.toLowerCase();

//     const tags = workout.muscleGroups.join(" ").toLowerCase();

//     return workoutName.includes(searchValue) || tags.includes(searchValue);
//   });

//   // sort
//   const sortedList = [...filteredList].sort((var1, var2) => {
//     if (sortBy === "duration") {
//       return var1.duration - var2.duration;
//     }

//     if (sortBy === "calories") {
//       return var1.caloriesBurned - var2.caloriesBurned;
//     }

//     if (sortBy === "rating") {
//       return var1.rating - var2.rating;
//     }

//     return 0;
//   });

//   // metrix
//   const totalExercises = currentList.length;

//   const totalMinutes = currentList.reduce(
//     (total, workout) => total + workout.duration,
//     0,
//   );

//   const totalCalories = currentList.reduce(
//     (total, workout) => total + workout.caloriesBurned,
//     0,
//   );

//   // Mark as done
//   const handleMarkAsDone = (id: number) => {
//     const workout = plan.find((item) => item.id === id);

//     if (!workout) {
//       return;
//     }

//     setCompletedWorkouts([...completedWorkouts, id]);
//     toast.success(`${workout.name} marked as done`);
//   };

//   // remove
//   const handleRemove = (id: number) => {
//     const workout = currentList.find((item) => item.id === id);

//     if (!workout) {
//       return;
//     }

//     if (activeTab === "plan") {
//       setPlan(plan.filter((item) => item.id !== id));
//       setCompletedWorkouts(
//         completedWorkouts.filter((itemId) => itemId !== id),
//       );

//       toast.success(`${workout.name} removed from today's plan`);
//     } else {
//       setSaved(saved.filter((item) => item.id !== id));

//       toast.success(`${workout.name} removed from saved`);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#0d0f12] px-4 py-12 text-white md:px-6 lg:px-8 lg:py-20">
//       <div className="mx-auto max-w-[1200px]">
//         {/* header */}
//         <div className="mb-10">
//           <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
//             YOUR WORKOUTS
//           </p>

//           <h1 className="text-4xl font-black tracking-tight md:text-5xl">
//             MY PLAN
//           </h1>

//           <p className="mt-3 max-w-xl text-sm text-zinc-400 md:text-base">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>

//         {/* metrics */}
//         <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
//           {/* exercises */}
//           <div className="rounded-2xl border border-zinc-800 bg-[#15181c] p-5">
//             <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
//               Exercises
//             </p>

//             <p className="mt-3 text-3xl font-black">{totalExercises}</p>
//           </div>

//           {/* minutes */}
//           <div className="rounded-2xl border border-zinc-800 bg-[#15181c] p-5">
//             <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
//               Minutes
//             </p>

//             <p className="mt-3 text-3xl font-black">{totalMinutes}</p>
//           </div>

//           {/* calories */}
//           <div className="rounded-2xl border border-zinc-800 bg-[#15181c] p-5">
//             <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
//               Calories
//             </p>

//             <p className="mt-3 text-3xl font-black">{totalCalories}</p>
//           </div>
//         </div>

//         {/* tab + sort */}
//         <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           {/* tab */}
//           <div className="flex w-fit rounded-full border border-zinc-800 bg-[#15181c] p-1">
//             <Link
//               href="/my-plan?tab=plan"
//               className={`flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition ${
//                 activeTab === "plan"
//                   ? "bg-[#ccff00] text-black"
//                   : "text-zinc-400 hover:text-white"
//               }`}
//             >
//               Today's Plan
//             </Link>

//             <Link
//               href="/my-plan?tab=saved"
//               className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
//                 activeTab === "saved"
//                   ? "bg-[#ccff00] text-black"
//                   : "text-zinc-400 hover:text-white"
//               }`}
//             >
//               Saved
//             </Link>
//           </div>

//           {/* search */}
//           <div className="relative flex-1">
//             <input
//               type="text"
//               value={searchText}
//               onChange={(event) => setSearchText(event.target.value)}
//               placeholder="Search workout or muscle..."
//               className="w-full rounded-full border border-zinc-700 bg-[#15181c] px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#ccff00]"
//             />
//           </div>

//           {/* sort */}
//           <div className="relative">
//             <select
//               value={sortBy}
//               onChange={(event) =>
//                 setSortBy(event.target.value as SortOption)
//               }
//               className="appearance-none rounded-full border border-zinc-700 bg-[#15181c] px-5 py-3 pr-10 text-sm font-semibold text-white outline-none transition focus:border-[#ccff00]"
//             >
//               <option value="duration">Sort By: Duration</option>

//               <option value="calories">Sort By: Calories</option>

//               <option value="rating">Sort By: Rating</option>
//             </select>

//             {/* Chevron */}
//             <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
//               ↓
//             </span>
//           </div>
//         </div>

//         {/* Workout List */}
//         <div className="space-y-4">
//           {sortedList.map((workout) => {
//             const isCompleted = completedWorkouts.includes(workout.id);

//             return (
//               <div
//                 key={workout.id}
//                 className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-[#15181c] p-4 transition hover:border-zinc-700 md:flex-row md:items-center"
//               >
//                 {/* Image */}
//                 <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-28 md:w-40">
//                   <Image
//                     src={workout.image}
//                     alt={workout.name}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 160px"
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Information */}
//                 <div className="min-w-0 flex-1">
//                   <h2 className="truncate text-lg font-black uppercase">
//                     {workout.name}
//                   </h2>

//                   <p className="mt-1 text-sm text-zinc-400">
//                     {workout.equipment}
//                   </p>

//                   <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-zinc-400">
//                     <span>⏱ {workout.duration} min</span>

//                     <span>🔥 {workout.caloriesBurned} kcal</span>

//                     <span>★ {workout.rating}</span>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap gap-2">
//                   {/* View Details */}
//                   <Link
//                     href={`/workout/${workout.id}`}
//                     className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-bold uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
//                   >
//                     View Details
//                   </Link>

//                   {/* Mark as Done */}
//                   {activeTab === "plan" && (
//                     <button
//                       onClick={() => handleMarkAsDone(workout.id)}
//                       disabled={isCompleted}
//                       className={`flex items-center gap-1 rounded-full px-4 py-2 text-xs font-black uppercase transition ${
//                         isCompleted
//                           ? "cursor-default bg-zinc-700 text-[#ccff00]"
//                           : "bg-[#ccff00] text-black hover:bg-[#d9ff4d]"
//                       }`}
//                     >
//                       <TiTick size={18} />

//                       {isCompleted ? "Done" : "Mark as Done"}
//                     </button>
//                   )}

//                   {/* Remove */}
//                   <button
//                     onClick={() => handleRemove(workout.id)}
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
//                     aria-label={`Remove ${workout.name}`}
//                   >
//                     X
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* No search result */}
//         {currentList.length > 0 && filteredList.length === 0 && (
//           <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 px-6 py-16 text-center">
//             <p className="text-sm font-black tracking-[0.2em] text-[#ccff00]">
//               NO WORKOUTS FOUND
//             </p>

//             <p className="mt-3 text-sm text-zinc-500">
//               Try another workout name or muscle group.
//             </p>
//           </div>
//         )}

//         {/* Empty State */}
//         {currentList.length === 0 && (
//           <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 px-6 py-20 text-center">
//             <p className="text-sm font-black tracking-[0.2em] text-[#ccff00]">
//               NOTHING HERE YET
//             </p>

//             <p className="mt-3 max-w-md text-sm text-zinc-500">
//               {activeTab === "plan"
//                 ? "Browse the library and add a lift to get today moving."
//                 : "Save a workout from the library to see it here."}
//             </p>

//             <Link
//               href="/"
//               className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-[#d9ff4d]"
//             >
//               Go to workouts
//             </Link>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// // ⭐⭐⭐ CHANGED: NEW wrapper component
// // This creates the required Suspense boundary
// const MyPlanPage = () => {
//   return (
//     <Suspense fallback={null}>
//       <MyPlanContent />
//     </Suspense>
//   );
// };

// // ⭐ CHANGED: Export the wrapper instead of MyPlanContent
// export default MyPlanPage;
// ```

// ### 🔴 The 3 important changes

// **1. Your import already has `Suspense`**

// You already had this:

// ```tsx
// import React, { Suspense, useContext, useState } from "react";
// ```

// So **you don't need to change this line**.

// **2. Rename the original component**

// From:

// ```tsx
// const MyPlanPage = () => {
// ```

// to:

// ```tsx
// const MyPlanContent = () => {
// ```

// This component is the one using `useSearchParams()`.

// **3. Add the Suspense wrapper at the bottom**

// ```tsx
// const MyPlanPage = () => {
//   return (
//     <Suspense fallback={null}>
//       <MyPlanContent />
//     </Suspense>
//   );
// };

// export default MyPlanPage;
// ```

// That's the actual fix.

// ### One small correction I made

// Your original code had:

// ```tsx
// py-2.
// ```

// in the Today's Plan button. I changed it to:

// ```tsx
// py-2.5
// ```

// This isn't related to the build error, but `py-2.` is an accidental Tailwind class and `py-2.5` is the valid class you appear to intend. Your original line is visible in the uploaded code.

// Now save the file and run:

// ```bash
// npm run build
// ```

// If it succeeds, **then we can move on to Vercel deployment**.
