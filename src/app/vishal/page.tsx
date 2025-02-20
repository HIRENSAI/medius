"use client";

import { useRouter } from "next/navigation";

export default function VishalStory() {
  const router = useRouter();

  return (
    <main className="min-h-screen text-black">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-md">
        <div className="text-xl font-bold text-black cursor-pointer">Better</div>
        <div className="hidden md:flex space-x-6 text-black">
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/home")}>home</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/")}>start</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/about-us")}>about</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/mortgage-calculator")}>mortgage calculator</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-400 rounded-full p-2">📞</button>
          <span className="cursor-pointer">Sign in</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-green-700 text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Why I Started Better Mortgage</h1>
        <p className="mt-2">Published June 28, 2021 • Updated February 20, 2025</p>
        <p className="mt-2">By Vishal Garg</p>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 md:px-20 text-black">
        <h2 className="text-2xl font-bold text-white">Get A Better Mortgage</h2>
        <p className="mt-4 text-white">Like most business ideas, Better Mortgage was born out of necessity. It began when my wife and I applied for our first mortgage and got to experience firsthand the inefficient processes, outdated technology, and general frustration that have characterized this industry for decades.</p>
        <p className="mt-4 text-white">In 2012, we were expecting our second child. Like most Americans, we knew what a great investment buying a home could be. We had rented for ages, but we felt like it was time to start building up equity in a home. So we started house hunting.
        We saw a few nice places and talked to a few brokers. Then, after months of searching, we fell in love with a beautiful home that checked all our boxes.</p>
        <p className="text-2xl font-bold text-white">That’s where things started to go downhill</p>
        <p className="mt-4 text-white">Excited and anxious, we reached out to the broker about this place...and got no response despite multiple calls and emails. We knew we needed to move fast. We loved the place so much that we contacted the owner directly, but without a broker we didn’t seem like the most legitimate buyers.

He asked that we provide a mortgage pre-approval, so we went online and searched all the big comparison websites. We put in all the required information, but didn’t get the pre-approval we were searching for. Instead, we were contacted by dozens of loan brokers from companies that all sounded similar — some combination of generic terms in their name (First, American, Home, Mortgage, Finance...).

We were overwhelmed by options. No one had a secure website where we could complete the process ourselves. All these lenders wanted to give us a sales pitch over the phone. Each one promised amazing service, but we weren’t sure who to trust.

Then my wife stumbled across a program run through her employer that helped employees get competitive rates on home loans. Since she worked for a big bank we knew it would be somewhat more rigid and expensive, but it didn’t feel like we had a choice. We just wanted to nail down a lender we could trust that wouldn’t totally mess up our chances of getting the home we wanted.</p>
        <p className="text-2xl font-bold text-white">With a lender lined up, I thought the worst had passed</p>
        <p className="mt-4 text-white">As working parents with another kid on the way, time was a precious commodity. Our loan officer required extensive information and details about our financial histories. He asked us repeated complex questions about the minutiae of our income and jobs. After that process was done, I expected to get a rate and an approval. Instead he said that “they” would follow up in a few weeks, but provided no further details.

I wondered: if a bank treats its senior employees this way, what happens to a regular customer?

Meanwhile, the seller was getting anxious. He wanted to close before the end of the year. Several weeks later the bank mailed us paper packets that included a long list of fees associated with our loan. It wasn’t until that point in the process that we also learned there were no recent appraisals on any units in the building; we were informed that this could take us back to the pre-approval drawing board. The seller told our broker that the delays were “not my problem.” He threatened to withhold the purchase contract unless we promised to buy the home regardless of whether or not we could get a mortgage. In the meantime, the bank wouldn’t move forward with a valuation of the home until we had a purchase contract in place. I felt like a dog chasing my own tail. We really wanted this home, but we also didn’t want to be pressured into making the biggest purchase of our lives without the proper paperwork in place.

In the end, the homeowner got fed up and moved on to the next-highest bidder.</p>
        <p className="text-2xl font-bold text-white">We still rent to this day</p>
        <p className="mt-4 text-white">I remember thinking to myself: “there must be a better way.” But with a little more research into the market, it seemed like there wasn’t.

How could it be this difficult to find a mortgage lender that offered pre-approval online without antiquated paper and phone communication? That worked with my busy schedule, with efficiency and transparency that gave me peace of mind.? Frankly, it was depressing. But there was a silver lining.
I started looking at the things that mortgage investors actually cared about when pricing, approving, and underwriting a mortgage. I realized these data points were available in most cases via an API and could be automatically filled for most consumers. From there, I knew we could put the consumer in control, providing a platform that could fetch data automatically and verify it instantly. We could take the current pre-approval process — 3 weeks of phone tag, runaround, and miscommunication — and reduce it down to the point where you could get a pre-approval on your mobile phone in about 3 minutes.

In doing so, we could solve a problem that over 7 million consumers face every year. We could improve the experience surrounding the biggest financial decision most people will ever make. The mortgage industry is huge ($12 trillion), old (people have been lending money against land for the bulk of human history), regulated, and ultimately broken (see housing credit crisis 2007–2009). Taking it apart was going to be a tough job, and I knew it would require a crack team.

In 2013, I began assembling a team from the best companies in tech, marketing, and finance. Engineers from Google, Spotify, and Microsoft, financial analysts from Blackstone, marketing talent from JetBlue, and executives from Provident and PHH Mortgage.

We also made the critical decision to purchase a small but well-established mortgage originator based in Silicon Valley. Our product team took that lender apart and completely re-engineered it, challenging every industry assumption in order to truly digitize the mortgage process.Today, we’ve done over $46.9 BN in home loans through Better Mortgage and provided over $16B in cumulative coverage through Better Cover and Better Settlement Services, the insurance affiliates of Better.

Owning a home is a huge accomplishment for anyone. It takes planning and consideration, but the final part of the journey shouldn’t be a needlessly expensive and time-consuming hassle of phone calls and paperwork. If you’re going through the process, try us out, and tell me what you think. Help make us even better.</p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-2xl font-bold">Get pre-approved in as little as 3 minutes</h2>
        <button 
          className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold rounded hover:bg-green-600 transition"
          onClick={() => router.push("/")}
        >
          Start Now
        </button>
      </section>

      {/* Back Button */}
      <div className="text-center mt-6">
        <button 
          onClick={() => router.back()} 
          className="px-6 py-3 bg-gray-300 text-black font-semibold rounded hover:bg-gray-400 transition"
        >
          ← Back to About Us
        </button>
      </div>
    </main>
  );
}
