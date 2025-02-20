"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // ⭐ State for Google Reviews Rating
  const [rating, setRating] = useState(4.6);
  const [reviewCount, setReviewCount] = useState(3177);

  // Handle Rating Update
  const updateRating = (newRating: number) => {
    setRating(newRating);
    setReviewCount((prev) => prev + 1); // Increase total reviews count
  };

  return (
    <main className="min-h-screen bg-green-900 text-white">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-green-950">
        <div className="text-xl font-bold text-green-400 cursor-pointer" >
          Better
        </div>
        <div className="hidden md:flex space-x-6">
          <span
            className={`cursor-pointer ${pathname === "/" ? "text-white font-semibold" : "text-gray-300 hover:text-green-400"}`}
            onClick={() => router.push("/home")}
          >
            Home
          </span>
          <span
            className={`cursor-pointer ${pathname === "/about" ? "text-white font-semibold" : "text-gray-300 hover:text-green-400"}`}
            onClick={() => router.push("/about-us")}
          >
            About
          </span>
          <span
            className={`cursor-pointer ${pathname === "/mortgage-calculator" ? "text-white font-semibold" : "text-gray-300 hover:text-green-400"}`}
            onClick={() => router.push("/mortgage-calculator")}
          >
            Mortgage Calculator
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-400 rounded-full p-2">📞</button>
          <span className="text-white cursor-pointer">Sign in</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 py-16">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold text-green-300">
            Mortgages <br /> made simple
          </h1>
          <button
            className="mt-6 px-8 py-4 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition"
            onClick={() => router.push("/start")}
          >
            Start my approval
          </button>
          
        </div>

        {/* Placeholder for Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0"></div>
      </div>

      {/* Google Reviews (Dynamic Rating) */}
      <div className="flex flex-col items-center space-y-3 mt-10">
        {/* Stars */}
        <div className="flex space-x-1 text-yellow-400 text-2xl">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer ${index < Math.round(rating) ? "text-yellow-400" : "text-gray-500"}`}
              onClick={() => updateRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Rating & Review Count */}
        <span className="text-gray-300">
          {rating.toFixed(1)} Stars | {reviewCount} Google reviews
        </span>
      </div>
    </main>
  );
}
