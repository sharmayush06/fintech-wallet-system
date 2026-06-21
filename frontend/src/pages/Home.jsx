import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Headphones,
  Zap,
  Users,
  Play,
} from "lucide-react";
import StatCard from "../components/StatCard";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-br from-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              ✨ Fast. Secure. Reliable.
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Send Money
              <br />
              <span className="text-blue-600">Instantly.</span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg max-w-lg">
              PayWallet is a secure digital wallet that makes sending,
              receiving and managing money simple and fast.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/register" className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition shadow-lg">
                Get Started
              </Link>

              <Link to="/about" className="px-7 py-3 border border-slate-400 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition hover:text-white">
                <Play size={16} />
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            {/* Background Blur */}
            <div className="absolute w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>

            {/* Floating Icons */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl">
              ₹
            </div>

            <div className="absolute right-8 top-24 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
              ₹
            </div>

            <div className="absolute right-16 bottom-28 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100">
              ✈
            </div>

            {/* Mobile Mockup */}
            <div className="relative rotate-12">
              <div className="w-70 h-140 bg-white rounded-[40px] border-10 border-slate-900 shadow-2xl overflow-hidden">
                <div className="h-full bg-linear-to-b from-white to-blue-50 p-5">
                  <div className="w-24 h-3 bg-slate-300 rounded-full mx-auto mb-6"></div>

                  <p className="text-sm text-slate-600">Balance</p>
                  <h2 className="text-3xl font-bold mt-1 text-slate-900">
                    ₹ 48,250.50
                  </h2>

                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {["Send", "Receive", "Transfer"].map((item) => (
                      <div
                        key={item}
                        className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100"
                      >
                        <div className="w-10 h-10 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center">
                          •
                        </div>
                        <p className="text-xs mt-2 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4 text-slate-900">
                      Recent Transactions
                    </h4>

                    {[
                      "Amazon Purchase",
                      "Salary Received",
                      "Netflix Subscription",
                      "Mobile Recharge",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-slate-200"
                      >
                        <span className="text-sm text-slate-700">{item}</span>
                        <span
                          className={`font-medium ${
                            index === 1
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {index === 1 ? "+₹30,000" : "-₹999"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-4">
            <StatCard
              icon={<Users size={24} />}
              value="10M+"
              label="Happy Users"
            />
            <StatCard
              icon={<ShieldCheck size={24} />}
              value="100%"
              label="Secure Payments"
            />
            <StatCard
              icon={<Zap size={24} />}
              value="Instant"
              label="Money Transfer"
            />
            <StatCard
              icon={<Headphones size={24} />}
              value="24/7"
              label="Customer Support"
            />
          </div>
        </div>
      </div>
    </section>
  );
}