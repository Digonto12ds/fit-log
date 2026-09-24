import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";
import WorkoutActions from "@/component/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const workouts: Workout[] = await response.json();

  const workout = workouts.find((item) => item.id.toString() === id);

  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white">WORKOUT NOT FOUND</h1>

          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-black uppercase text-black"
          >
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0d0f12] px-4 py-12 md:px-6 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* LEFT SIDE - IMAGE */}
          <div className="overflow-hidden rounded-2xl bg-zinc-900">
            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={900}
              className="h-full min-h-[500px] w-full object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
              {workout.description}
            </p>

            {/* Category Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#ccff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* KEY SPECS */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#15181c]">
              <div className="border-b border-zinc-800 px-5 py-4">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
                  Key Specs
                </h2>
              </div>

              <div className="divide-y divide-zinc-800">
                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">
                    Equipment
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">
                    Difficulty
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">Sets</span>

                  <span className="text-sm font-bold text-white">
                    {workout.sets}
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">Reps</span>

                  <span className="text-sm font-bold text-white">
                    {workout.reps}
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">
                    Duration
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">
                    Calories
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm uppercase text-zinc-500">
                    Rating
                  </span>

                  <span className="text-sm font-bold text-white">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-8">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-zinc-400">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* BUTTONS */}
            <WorkoutActions workout = {workout}></WorkoutActions>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
