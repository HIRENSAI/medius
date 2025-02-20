"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen text-black">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-md">
        <div className="text-xl font-bold text-black cursor-pointer" >Better</div>
        <div className="hidden md:flex space-x-6 text-black">
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/home")}>home</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/about-us")}>about</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/mortgage-calculator")}>mortgage calculator</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-400 rounded-full p-2">📞</button>
          <span className="text- cursor-pointer">Sign in</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-green-700 text-xl font-semibold">Our mission</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 text-white">
          We’re making homeownership simpler, faster — <br /> 
          and most importantly, more accessible for all Americans.
        </h1>
      </section>

      {/* The Status Quo is Broken */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12">
        <div className="md:w-1/2 text-left">
          <h2 className="text-lg font-bold text-white">The status quo is broken</h2>
          <p className="text-gray-600 mt-4">
            The traditional processes around homeownership are opaque and difficult.
            Fees aren’t transparent and loans are simply underpriced in risk.
            Traditional mortgage lending is rife with unnecessary fees and slow,
            outdated processes. This system isn’t set up to benefit lenders – not you.
            At Better.com, CEO Vishal Garg set out to change that.
          </p>
          <button 
  className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold rounded hover:bg-green-600 transition"
  onClick={() => router.push("/vishal")}  // Ensure correct route
>
  Read Vishal’s Story
</button>


        </div>

        {/* Video Embed */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
  <iframe
    className="w-full md:w-3/4 h-48 md:h-64 rounded-lg"
    src="https://youtu.be/1KjYlLBM9j4"
    title="Better.com Story"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </section>

      {/* How We're Changing Things */}
      <section className="bg-green-900 text-white py-12 px-6 md:px-20">
        <h2 className="text-2xl font-bold">How we’re changing things</h2>
        <p className="text-gray-300 mt-4">
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business,
          and mortgages account for $15 trillion. Yet home finance operates in the same way it has
          for decades – through opaque systems and expensive intermediaries whose incentives are misaligned
          with consumers.
        </p>
        <p className="text-gray-300 mt-4">
          That’s why Better.com is redefining the homeownership process from the ground up.
          We’re using technology to make it faster and more efficient, and humans to help make it
          friendly and enjoyable.
        </p>
      </section>
    </main>
  );
}
