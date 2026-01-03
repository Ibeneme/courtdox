import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/hero.png";
import type { Variants } from "framer-motion";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { ShieldCheck, ChevronRight, Activity } from "lucide-react";

const Hero: React.FC = () => {
  const { goToBooking } = useAppNavigation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] md:mt-[-100px] mt-[0px]"
    >
      {/* --- Background Layer --- */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Sophisticated Editorial Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/40 to-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]/40" />

      {/* --- AI Scanline Animation --- */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
      />

      {/* --- Main Content --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Elite Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-blue-500/5 backdrop-blur-xl border border-blue-500/20 px-5 py-2 rounded-full shadow-2xl">
            <Activity size={14} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-100">
              Next-Gen Litigation Support
            </span>
          </div>
        </motion.div>

        {/* Updated Header */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-5xl lg:text-[5.6rem] font-black text-white leading-[0.95] tracking-tighter mb-10"
        >
          Bringing the Power of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
            Artificial Intelligence
          </span>{" "}
          <br />
          to Your Lawsuit
        </motion.h1>

        {/* Matched Description */}


        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={goToBooking}
            className="group relative bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-blue-500 active:scale-95 shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Book a Demo{" "}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <div className="flex items-center gap-5 px-8 py-4 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5">
            <ShieldCheck size={24} className="text-blue-400" />
            <div className="text-left">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                Security First
              </p>
              <p className="text-xs font-bold text-white uppercase tracking-tighter">
                Lawmatics Protected Portal
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Blur Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />


    </section>
  );
};

export default Hero;
