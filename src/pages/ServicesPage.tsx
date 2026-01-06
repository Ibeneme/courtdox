import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  UserCheck,
  AlertCircle,
  PlusCircle,
  Scale,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useAppNavigation } from "../hooks/useAppNavigation";

const BASIC_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800";
const ADVANCED_IMAGE =
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800";

const ServicesPage: React.FC = () => {
  const { goToBooking } = useAppNavigation();

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const basicDocs = [
    "Demand Letter / Cease & Desist",
    "Petition / Answer",
    "Discovery Questions (Going out)",
    "Evidence Labeling",
    "Jury Instructions",
    "Findings of Fact & Conclusions of Law",
    "Instructions for Use",
  ];

  const advancedDocs = [
    "Motions (General)",
    "Default Judgment (Motion)",
    "Summary Judgment",
    "Traditional MSJ",
    "Response to Traditional MSJ",
    "No Evidence MSJ",
    "Response to No Evidence MSJ",
    "Temporary Restraining Orders (Non-family)",
    "Stowers Demand",
    "Construction Lien Release",
    "Jury Request",
  ];

  return (
    <div className="bg-white text-gray-900 selection:bg-blue-100">
      {/* --- SECTION 1: DOCUMENT CATALOG --- */}
      <section className="py-20 lg:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Basic Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-blue-900/5 order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <FileText size={32} />
                </div>
                <h2 className="text-4xl font-black tracking-tight">
                  Basic <span className="text-blue-600">Documents</span>
                </h2>
              </div>
              <p className="text-gray-500 mb-8 font-bold uppercase text-xs tracking-widest">
                Standard Litigation Package
              </p>
              <ul className="grid grid-cols-1 gap-5">
                {basicDocs.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-center gap-4 text-gray-700 font-bold group"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-blue-600 flex-shrink-0"
                    />
                    {doc}
                  </li>
                ))}
              </ul>
              <button
                onClick={goToBooking}
                className="mt-10 w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Start Basic Package <ArrowRight size={18} />
              </button>
            </motion.div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-blue-600/10 rounded-[3.5rem] translate-x-4 translate-y-4 -z-10" />
              <img
                src={BASIC_IMAGE}
                alt="Legal Prep"
                className="rounded-[3.5rem] shadow-2xl object-cover h-[500px] w-full border-8 border-white"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-10 rounded-3xl hidden md:block shadow-2xl">
                {/* UPDATED PRICE */}
                <p className="font-black text-4xl mb-1 tracking-tighter">
                  $399
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-80">
                  Flat Rate Standard
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-slate-900/10 rounded-[3.5rem] -translate-x-4 translate-y-4 -z-10" />
              <img
                src={ADVANCED_IMAGE}
                alt="Advanced Docs"
                className="rounded-[3.5rem] shadow-2xl object-cover h-[500px] w-full border-8 border-white"
              />
              <div className="absolute -top-8 -right-8 bg-slate-950 text-white p-10 rounded-3xl hidden md:block shadow-2xl border border-white/10">
                <p className="font-black text-2xl mb-1 tracking-tighter uppercase">
                  On-Demand
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-400">
                  Specialized Drafting
                </p>
              </div>
            </div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-950 p-10 lg:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-500 p-4 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  <PlusCircle size={32} />
                </div>
                <h2 className="text-4xl font-black tracking-tight">
                  Advanced <span className="text-blue-400">Documents</span>
                </h2>
              </div>
              <p className="text-gray-400 mb-8 font-bold uppercase text-xs tracking-widest">
                Available specialized filings
              </p>
              <div className="grid grid-cols-1 gap-y-4">
                {advancedDocs.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-4 text-sm text-gray-200 font-bold bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {doc}
                  </div>
                ))}
              </div>
              <button
                onClick={goToBooking}
                className="mt-10 w-full bg-white text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl"
              >
                Inquire Advanced <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROFESSIONAL REVIEW --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-none tracking-tighter">
              Professional Review
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-bold max-w-3xl mx-auto">
              CourtDox offers on-demand consultation-only support from
              experienced contract paralegals and attorneys.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Paralegal */}
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col hover:border-blue-200 transition-all">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                <UserCheck size={32} />
              </div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">
                Paralegal Review
              </h4>
              <ul className="space-y-6 flex-grow">
                {[
                  "Review for formatting, clarity, and completeness",
                  "Direct evidence citation to support your specific claims",
                  "Professional document polishing for court readiness",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base font-bold text-gray-700"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-blue-600 flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-4xl font-black text-gray-900 tracking-tighter">
                  $199{" "}
                  <span className="text-sm text-gray-400 uppercase tracking-widest ml-2">
                    Flat Fee
                  </span>
                </p>
              </div>
            </div>

            {/* Attorney - UPDATED COPY */}
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col hover:border-blue-200 transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200">
                <Scale size={32} />
              </div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">
                Attorney Review
              </h4>
              <ul className="space-y-6 flex-grow">
                {[
                  "Jurisdiction-specific legal research (No AI-generated content)",
                  "Substantive edits for legal accuracy",
                  "Citation of applicable case law and local statutes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base font-bold text-gray-700"
                  >
                    <ShieldCheck
                      size={22}
                      className="text-blue-600 flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-4xl font-black text-gray-900 tracking-tighter">
                  $299{" "}
                  <span className="text-sm text-gray-400 uppercase tracking-widest ml-2">
                    Flat Fee
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PRICING TIERS --- */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Card - UPDATED PRICE */}
            <div className="bg-white rounded-[3rem] p-12 text-gray-900 flex flex-col shadow-2xl">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-blue-600">
                Standard
              </h4>
              <div className="text-6xl font-black mb-8 tracking-tighter">
                $399
              </div>
              <p className="text-sm font-bold text-gray-500 mb-10 leading-relaxed flex-grow">
                Full standard litigation suite including Petition, Answer,
                Discovery, and Jury Instructions with clear usage guides.
              </p>
              <button
                onClick={goToBooking}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all"
              >
                Select Basic
              </button>
            </div>

            {/* Advanced Card */}
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col shadow-2xl border border-white/10">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-blue-400">
                On-Demand
              </h4>
              <div className="text-4xl font-black mb-8 tracking-tight">
                Custom Quote
              </div>
              <p className="text-sm font-bold text-gray-400 mb-10 leading-relaxed flex-grow">
                Special document needed? Request a custom filing. 48-hour
                delivery into your secure client portal.
              </p>
              <button
                onClick={goToBooking}
                className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-all"
              >
                Select Advanced
              </button>
            </div>

            {/* Premium Card */}
            <div className="bg-white rounded-[3rem] p-12 text-gray-900 flex flex-col shadow-2xl border-4 border-blue-400 scale-105">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-blue-600">
                Professional Review
              </h4>
              <div className="space-y-2 mb-8">
                <p className="font-black text-3xl tracking-tighter">
                  $199{" "}
                  <span className="text-xs text-gray-400 uppercase font-black tracking-widest">
                    Paralegal
                  </span>
                </p>
                <p className="font-black text-3xl tracking-tighter">
                  $299{" "}
                  <span className="text-xs text-gray-400 uppercase font-black tracking-widest">
                    Attorney
                  </span>
                </p>
              </div>
              <p className="text-sm font-bold text-gray-500 mb-10 leading-relaxed flex-grow">
                Seasoned professionals provide strategic insights and detailed
                review to ensure your goals are met.
              </p>
              <button
                onClick={goToBooking}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all"
              >
                Book Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: RESPONSIBILITY NOTICE --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 text-amber-600 mb-10 bg-amber-50 px-6 py-2 rounded-full border border-amber-200">
            <AlertCircle size={20} />
            <h5 className="font-black uppercase tracking-[0.2em] text-[10px]">
              Legal Responsibility Notice
            </h5>
          </div>
          <div className="bg-white border border-gray-100 rounded-[3.5rem] p-12 lg:p-16 text-left shadow-xl shadow-blue-900/5">
            <p className="text-gray-900 font-black text-xl mb-8 leading-relaxed">
              You are ultimately responsible for reviewing and verifying the
              accuracy and completeness of any legal documents you file.
            </p>
            <div className="space-y-6 text-gray-500 font-bold leading-relaxed">
              <p>
                CourtDox provides assistance in generating legal documents based
                on the information you provide; however, CourtDox does not and
                cannot verify the truth or legal sufficiency of those facts.
              </p>
              <p>
                We strongly recommend that you consult with a licensed attorney
                in your jurisdiction who can independently review the facts and
                legal arguments presented in your documents.
              </p>
              <p className="text-blue-600 uppercase text-xs tracking-[0.2em] pt-4">
                Texas Based • Serving Nationwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
