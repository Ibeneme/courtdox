import React from "react";
import { motion } from "framer-motion";
import { Scale, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import type { Variants } from "framer-motion";
import { useAppNavigation } from "../../hooks/useAppNavigation";

const AboutUs: React.FC = () => {
  const { goToBooking } = useAppNavigation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

  const values = [
    {
      title: "Lawyer-Led Design",
      // UPDATED COPY BELOW
      desc: "Built by practicing attorneys who understand the nuances of getting to trial.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: "Precision AI",
      desc: "Powered by CaseCreate™ algorithms for accurate, court-ready drafting.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Universal Access",
      desc: "Making elite litigation tools affordable for everyone.",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100">
      {/* --- SECTION 1: HERO (THE ORIGIN) --- */}
      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:w-3/5"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full mb-8"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  Established Excellence
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-10  "
              >
                Lawyers <span className="text-blue-600">—</span> <br />
                <span className="text-slate-400">For Everyone.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-500 font-bold leading-relaxed mb-12 max-w-xl"
              >
                CourtDox was built to solve a single problem: the high cost of
                entry into the legal system. We combine veteran legal expertise
                with CaseCreate™ AI to empower those the system often ignores.
              </motion.p>

              <motion.div variants={itemVariants}>
                <button
                  onClick={goToBooking}
                  className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black tracking-widest text-sm hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-3"
                >
                  Consult Our Team <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Image with Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-2/5 relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
                  alt="Legal professionals collaborating"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20 -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: MISSION (DATA & VALUES) --- */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight  ">
                  Closing the <br />
                  <span className="text-blue-600">Justice Gap.</span>
                </h2>
                <div className="h-2 w-24 bg-slate-950 rounded-full" />
              </div>

              {/* UPDATED COPY BELOW */}
              <p className="text-2xl text-slate-600 leading-relaxed font-bold">
                Access to justice shouldn't be a luxury. CourtDox is
                democratizing the courtroom by making professional litigation
                affordable, accessible, and understandable for small businesses
                and individuals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-4">
                {[
                  "Human Review Safeguards",
                  "Professional Case Formatting",
                  "Customized Discovery", // UPDATED COPY
                  "Clear, Step-by-Step Instructions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="bg-blue-600 rounded-full p-1 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-black text-xs  tracking-widest text-slate-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Value Cards */}
            <div className="lg:col-span-5 space-y-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 12 }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 group hover:border-blue-200 transition-all"
                >
                  <div className="bg-white text-blue-600 p-4 rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-2  tracking-tight ">
                      {val.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-bold leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: FOOTER NOTE --- */}
      <div className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 ">
          Texas Rooted • Nationwide Reach • Attorney Driven
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
