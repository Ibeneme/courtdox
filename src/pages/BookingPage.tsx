import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Video,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const BookingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-950 selection:bg-blue-100 overflow-x-hidden">
      {/* --- Navigation --- */}
      <header className="py-8 px-6 lg:px-12 border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <a
            href="/"
            className="group flex items-center gap-3 text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] transition-all"
          >
            <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ArrowLeft size={14} />
            </div>
            Back to services
          </a>
          <p className="font-black text-2xl tracking-tighter">
            CourtDox<span className="text-blue-600">.</span>
          </p>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24 relative">
        {/* Section Liquid Background Orbs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-10"
        />

        {/* --- Main 50/50 Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* --- Left Column: Context & Trust --- */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-8">
                Schedule your{" "}
                <span className="text-blue-600">appointment.</span>
              </h1>
              <p className="text-xl text-slate-500 font-bold leading-relaxed max-w-xl">
                Leverage expert insights to drive your case forward. Our team is
                ready to analyze your unique litigation needs.
              </p>
            </motion.div>

            {/* Feature List */}
            <div className="space-y-10">
              {[
                {
                  icon: <Clock />,
                  title: "Tailored solutions",
                  desc: "Dedicated sessions built around your specific case goals.",
                },
                {
                  icon: <Video />,
                  title: "Virtual consultation",
                  desc: "Encrypted video or phone sessions via our secure portal.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "Confidential and secure",
                  desc: "Your data is protected by attorney-grade security protocols.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="bg-slate-950 text-white p-4 rounded-2xl h-fit group-hover:bg-blue-600 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest mb-2 text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 font-bold leading-relaxed max-w-[320px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-50 border border-slate-100 rounded-[3rem] p-10 lg:p-12 relative overflow-hidden max-w-xl"
            >
              <h5 className="font-black text-xl mb-8 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-blue-600" /> Pre-session
                checklist
              </h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Case number (if filed)",
                  "Relevant court documents",
                  "Key evidence files",
                  "List of specific questions",
                ].map((li, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-tighter"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* --- Right Column: Scheduler --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative rounded-[4rem] p-4 lg:p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden min-h-[850px]">
              {/* Dynamic Glows inside the Scheduler Container */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] pointer-events-none"
              />

              {/* The Iframe Container */}
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden bg-white min-h-[780px]">
                {/* <iframe
                  src="https://app.acuityscheduling.com/schedule.php?owner=YOUR_OWNER_ID_HERE"
                  title="Schedule Appointment"
                  width="100%"
                  height="780"
                  frameBorder="0"
                  className="w-full h-full"
                ></iframe> */}
              </div>

              {/* Loading State Animation */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="flex flex-col items-center gap-8">
                  <div className="relative">
                    <Calendar
                      className="text-slate-800 animate-pulse"
                      size={80}
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border-t-4 border-blue-600 rounded-full scale-[1.8]"
                    />
                  </div>
                  <p className="text-slate-500 font-black uppercase tracking-[0.6em] text-[10px]">
                    Initializing secure portal
                  </p>
                </div>
              </div>
            </div>

            {/* Support Note */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="text-slate-400 font-bold text-sm ">
                Having trouble booking?
              </p>
              <a
                href="mailto:support@courtdox.com"
                className="text-blue-600 font-black text-sm uppercase tracking-widest hover:text-slate-950 transition-colors"
              >
                support@courtdox.com
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* --- Footer Branding --- */}
      <footer className="py-12 border-t border-slate-50 mt-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="font-black text-[10px] uppercase tracking-[0.5em]">
            Texas rooted litigation tech
          </p>
          <p className="font-black text-[10px] uppercase tracking-[0.5em]">
            ©2026 CourtDox
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
