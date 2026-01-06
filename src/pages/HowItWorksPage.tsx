import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Search,
  PhoneCall,
  Rocket,
  LifeBuoy,
  AlertTriangle,
  Scale,
  BookOpen,
  CheckCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const HowItWorksPage: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          >
            How It <span className="text-blue-600">Works</span>
          </motion.h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            A simple, transparent process to get your legal documents
            court-ready with the power of CaseCreate™ and professional review.
          </p>
        </div>
      </section>

      {/* --- Steps Timeline --- */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative space-y-32"
          >
            {/* Step 1 */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group"
            >
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl group-hover:bg-blue-600 transition-colors duration-500">
                  01
                </div>
                <div className="w-px h-full bg-slate-100 hidden md:block mt-8" />
              </div>
              <div className="md:col-span-11 pt-2">
                <div className="flex items-center gap-4 mb-6 text-blue-600 font-black tracking-widest text-[10px] uppercase">
                  <Search size={18} /> Phase: Initial Prep
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 tracking-tighter">
                  Gather your facts.
                </h3>
                <p className="text-xl text-slate-500 font-bold leading-relaxed mb-8 max-w-3xl">
                  Whether you are suing or being sued, you must gather
                  everything. Write out the facts, collect photos and documents,
                  and compile witness contact details. Your story begins with
                  the data you provide.
                </p>
              </div>
            </motion.div>

            {/* Step 2 - UPDATED COPY */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group"
            >
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-blue-600 transition-colors">
                  02
                </div>
                <div className="w-px h-full bg-slate-100 hidden md:block mt-8" />
              </div>
              <div className="md:col-span-11 pt-2">
                <div className="flex items-center gap-4 mb-6 text-blue-600 font-black tracking-widest text-[10px] uppercase">
                  <PhoneCall size={18} /> Phase: Intake Interview
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 tracking-tighter">
                  Complete the interview.
                </h3>
                <p className="text-xl text-slate-500 font-bold leading-relaxed mb-8 max-w-3xl">
                  Fill out our intake form. A CourtDox representative will call
                  at your scheduled time to conduct a detailed interview
                  regarding your case including goals, witnesses, evidence, and
                  events. Precision here ensures stronger documents for filing.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group"
            >
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-blue-600 transition-colors">
                  03
                </div>
                <div className="w-px h-full bg-slate-100 hidden md:block mt-8" />
              </div>
              <div className="md:col-span-11 pt-2">
                <div className="flex items-center gap-4 mb-6 text-blue-600 font-black tracking-widest text-[10px] uppercase">
                  <Rocket size={18} /> Phase: Asset Generation
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 tracking-tighter">
                  Secure portal access.
                </h3>
                <p className="text-xl text-slate-500 font-bold leading-relaxed mb-10 max-w-3xl">
                  CourtDox generates your documents via CaseCreate. Within 48
                  hours, you will receive access to your secure portal with
                  custom filings and clear instructions for use.
                </p>
                <div className="bg-slate-50 border-l-8 border-blue-600 p-8 rounded-2xl max-w-3xl shadow-xl shadow-slate-200/50">
                  <div className="flex items-center gap-3 mb-4 text-slate-950 font-black tracking-tight text-sm">
                    <AlertTriangle className="text-blue-600" size={24} />{" "}
                    Critical Review Protocol
                  </div>
                  <p className="text-slate-600 font-bold leading-relaxed">
                    Review your documents carefully. You are responsible to the
                    court for accuracy. Do not forget: no one knows your story
                    better than you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 - UPDATED COPY */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group"
            >
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  04
                </div>
              </div>
              <div className="md:col-span-11 pt-2">
                <div className="flex items-center gap-4 mb-6 text-blue-600 font-black tracking-widest text-[10px] uppercase">
                  <LifeBuoy size={18} /> Phase: Expert Support
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 tracking-tighter">
                  Consultation support.
                </h3>
                <p className="text-xl text-slate-500 font-bold leading-relaxed mb-12 max-w-3xl">
                  Request consultation-only support from our network. Our
                  network of para-professionals and attorneys review the
                  documents you provide to ensure they meet your specific goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group/card hover:border-blue-200 transition-all">
                    <UserCheck className="text-blue-600 mb-6" size={32} />
                    <h4 className="text-xl font-black text-slate-950 mb-4 tracking-tight">
                      Para-Professional Review
                    </h4>
                    <p className="text-slate-500 font-bold text-sm leading-relaxed">
                      We focus on formatting and clarity, citing directly to
                      your evidence for a flawless professional presentation.
                    </p>
                  </div>
                  <div className="p-8 bg-slate-950 rounded-3xl group/card shadow-2xl">
                    <Scale className="text-blue-400 mb-6" size={32} />
                    <h4 className="text-xl font-black text-white mb-4 tracking-tight">
                      Attorney Research
                    </h4>
                    <p className="text-slate-400 font-bold text-sm leading-relaxed">
                      Real research in your state using real legal resources.
                      Absolutely no law is generated using artificial
                      intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Professional Detail Section --- */}
      <section className="py-24 bg-[#050b1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Expert Review Tiers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">
              Professional oversight for those who need an extra layer of
              precision and legal research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Paralegal Card - REMOVED Evidence Mapping */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col transition-all"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
                <BookOpen size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                Paralegal Assistance
              </h4>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow font-medium">
                Our contract paralegals review for formatting, clarity, and
                detail. We cite directly to your evidence to ensure your story
                is understood by the court.
              </p>
              <div className="space-y-3 pt-6 border-t border-white/5 font-bold text-sm text-blue-400/80 uppercase tracking-widest">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} /> Formatting & Clarity
                </div>
              </div>
            </motion.div>

            {/* Attorney Card - UPDATED Research Copy, REMOVED Content/Strategy */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-blue-600 p-10 rounded-[2.5rem] flex flex-col shadow-2xl shadow-blue-600/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                <Scale size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                Attorney Consultation
              </h4>
              <p className="text-blue-50 leading-relaxed mb-8 flex-grow font-medium">
                Licensed attorneys research law for your matter and cite to
                filings. Our attorneys use real resources to obtain real cases
                in your state.
                <span className="block mt-4 text-white font-black underline decoration-white/30 underline-offset-4 uppercase text-xs tracking-widest">
                  Law cited is NOT generated using AI.
                </span>
              </p>
              <div className="space-y-3 pt-6 border-t border-white/20 font-bold text-sm text-white uppercase tracking-widest">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} /> Substantive Legal Research and
                  citation to case law
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      </section>
    </div>
  );
};

export default HowItWorksPage;
