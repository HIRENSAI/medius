"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MortgageCalculator() {
  const router = useRouter();
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Function to calculate the mortgage payment
  useEffect(() => {
    const calculatePayment = () => {
      const principal = homePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const totalPayments = loanTerm * 12;

      if (monthlyRate === 0) {
        setMonthlyPayment(principal / totalPayments);
      } else {
        const monthly = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
        setMonthlyPayment(parseFloat(monthly.toFixed(2)));
      }
    };

    calculatePayment();
  }, [homePrice, downPayment, interestRate, loanTerm]);

  return (
    <main className="min-h-screen bg-gray-100 text-black">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-md">
        <div className="text-xl font-bold text-black cursor-pointer">Better</div>
        <div className="hidden md:flex space-x-6 text-black">
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/home")}>home</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/about-us")}>About</span>
          <span className="cursor-pointer hover:text-green-600" onClick={() => router.push("/mortgage-calculator")}>Mortgage Calculator</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-400 rounded-full p-2">📞</button>
        </div>
      </nav>

      {/* Mortgage Calculator Section */}
      <section className="p-8 bg-green-100">
        <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
        <p className="text-gray-700 mt-2">
          Our mortgage calculator includes key factors like homeowners association fees, 
          property taxes, and private mortgage insurance (PMI). Get the whole picture and 
          calculate your total monthly payment.
        </p>

        {/* Inputs */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col">
            <label className="text-gray-700">Home price</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="border p-3 w-40 rounded-md text-lg"
            />
          </div>

          <span className="text-2xl font-semibold">= ${monthlyPayment}/mo</span>

          <button className="bg-green-600 text-white px-6 py-3 rounded-md" onClick={() => router.push("/start")}>
            Get pre-approved
          </button>
        </div>

        {/* Additional Inputs */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700">Zipcode</label>
            <input type="text" placeholder="92102" className="border p-3 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Down payment</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="border p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Interest rate</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="border p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Loan length</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="border p-3 rounded-md"
            >
              <option value={30}>30 years</option>
              <option value={15}>15 years</option>
            </select>
          </div>
        </div>
      </section>

      {/* Monthly Payment Breakdown */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold">Monthly Payment Breakdown</h2>
        <span className="text-xl font-bold">${monthlyPayment}/mo</span>

        {/* Breakdown Chart */}
        <div className="flex items-center mt-4">
          <div className="h-6 w-32 bg-green-700 rounded-l-full"></div>
          <div className="h-6 w-6 bg-blue-500"></div>
          <div className="h-6 w-6 bg-orange-500"></div>
          <div className="h-6 w-6 bg-purple-500"></div>
          <div className="h-6 w-6 bg-red-500 rounded-r-full"></div>
        </div>

        {/* Breakdown Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Principal & Interest</span>
            <span className="font-semibold">$1,757</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Property Taxes</span>
            <span className="font-semibold">$268</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Homeowner Insurance</span>
            <span className="font-semibold">$132</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">HOA Fees</span>
            <span className="font-semibold">$132</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Utilities</span>
            <span className="font-semibold">$100</span>
          </div>
        </div>

        {/* Copy Estimate Button */}
        <button className="mt-6 bg-gray-300 px-6 py-3 rounded-md">
          Copy estimate link
        </button>
      </section>
    </main>
  );
}
