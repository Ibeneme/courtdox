import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Gavel,
  Home,
  Calendar,
  AlertCircle,
} from "lucide-react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100">
      {/* --- Header --- */}
      <header className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-black text-2xl tracking-tighter">
            CourtDox<span className="text-blue-600">.</span>
          </p>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Large Decorative Number */}
            <div className="relative inline-block mb-8">
              <h1 className="text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-slate-50 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <Gavel className="text-blue-600 opacity-20" size={120} />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Case <span className="text-blue-600">Dismissed.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              The page you are looking for has been moved, removed, or never
              existed in the first place. Let's get your legal strategy back on
              track.
            </p>

            {/* Path Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href="/"
                className="group flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-600 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <Home size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-widest">
                      Main Services
                    </p>
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Back to start
                    </p>
                  </div>
                </div>
                <ArrowLeft
                  className="rotate-180 text-slate-300 group-hover:text-blue-600 transition-colors"
                  size={20}
                />
              </a>

              <a
                href="/appointments"
                className="group flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-600 hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-widest">
                      Bookings
                    </p>
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Talk to an expert
                    </p>
                  </div>
                </div>
                <ArrowLeft
                  className="rotate-180 text-slate-300 group-hover:text-blue-600 transition-colors"
                  size={20}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* --- Footer Note --- */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100 pt-8">
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle size={16} />
            <span className="text-xs font-black uppercase tracking-widest">
              Missing Link Detected
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
            Error Code: 0x404_COURTDOX_NOT_FOUND
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
