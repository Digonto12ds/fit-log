export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

// {
//   "id": 4,
//   "name": "Overhead Press",
//   "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666703.jpg?w=740",
//   "muscleGroups": [
//     "Shoulders",
//     "Arms"
//   ],
//   "equipment": "Barbell",
//   "difficulty": "Intermediate",
//   "duration": 20,
//   "caloriesBurned": 150,
//   "sets": 4,
//   "reps": "6-8",
//   "rating": 4.6,
//   "description": "Strict standing press that builds delts, triceps, and overhead stability without leg drive.",
//   "instructions": [
//     "Hold the bar at the front rack with a vertical forearm.",
//     "Brace abs and glutes, then press the bar over the crown of the head.",
//     "Lock out with biceps by the ears and a stacked ribcage.",
//     "Lower to the clavicle under control before the next rep."
//   ]
// }