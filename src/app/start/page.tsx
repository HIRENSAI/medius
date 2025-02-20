"use client";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  const handleOptionClick = () => {
    router.push("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center relative">
      {/* Top Bar with Phone Number */}
      <div className="absolute top-4 right-6 text-gray-600 text-sm">
        📞 Need help? Call (415) 987-6543
      </div>

      <h1 className="text-3xl font-bold">Hi, I'm Betsy!</h1>
      <p className="text-lg">What can I help you with?</p>

      <div className="mt-6 space-y-4 w-72">
        <button
          onClick={handleOptionClick}
          className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg text-green-600 font-medium shadow-sm hover:bg-white hover:text-green-600 transition-all duration-300"
        >
          <span className="mr-2">🏠</span> Buying a home
        </button>
        <button
          onClick={() => router.push("/mortgage-calculator")}
          className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg text-green-600 font-medium shadow-sm hover:bg-white hover:text-green-600 transition-all duration-300"
        >
          <span className="mr-2">💰</span> Refinance my mortgage
        </button>
        <button
          onClick={handleOptionClick}
          className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg text-green-600 font-medium shadow-sm hover:bg-white hover:text-green-600 transition-all duration-300"
        >
          <span className="mr-2">🏡</span> Get cash from my home
        </button>
      </div>

      <div className="mt-6 flex gap-8 text-lg font-semibold">
        <div>
          <p className="text-2xl">$100B</p>
          <p className="text-gray-500 text-sm">home loans funded entirely online</p>
        </div>
        <div>
          <p className="text-2xl">400K</p>
          <p className="text-gray-500 text-sm">Customers who chose a Better Mortgage</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md text-sm">
        <p className="font-semibold">After a few questions, you'll unlock:</p>
        <ul className="mt-2 space-y-1 text-green-600">
          <li>✅ Custom mortgage rates</li>
          <li>💲 Exclusive offers</li>
          <li>📱 A personalized dashboard</li>
        </ul>
      </div>
    </main>
  );
}
