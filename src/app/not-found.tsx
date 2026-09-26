import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-8xl font-black text-[#ccff00]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#ccff00] px-7 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#b8e600]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;