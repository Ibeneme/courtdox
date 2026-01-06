import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Cpu,
  ShieldCheck,
  Briefcase,
  Globe,
  BarChart3,
  ArrowRight,
  PieChart,
  Target,
  Zap,
  TrendingUp,
  Scale,
} from "lucide-react";
import { useAppNavigation } from "../hooks/useAppNavigation";
import type { Variants } from "framer-motion";

const InvestorPage: React.FC = () => {
  const { goToBooking } = useAppNavigation();

  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100">
      {/* --- HERO --- */}
      <section className="relative pt-32 pb-40 bg-[#0B1120] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-blue-500/10 text-blue-400 px-5 py-2 rounded-full mb-10 border border-blue-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Series Alpha Opportunity
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
              Disrupting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Legal Access Gap.
              </span>
            </h1>

            {/* REMOVED "high-margin" */}
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-2xl font-medium">
              CourtDox is a LegalTech platform enabling individuals and
              attorneys to effectively pursue legal claims at a fraction of
              traditional costs.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-[2rem] min-w-[200px]">
                <p className="text-white font-black text-4xl mb-1 tracking-tighter">
                  $145B
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                  Total Market (TAM)
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-[2rem] min-w-[200px]">
                <p className="text-white font-black text-4xl mb-1 tracking-tighter">
                  AI-Native
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                  CaseCreate™ Engine
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE ECOSYSTEM --- */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Users size={32} />,
                title: "Simple Intake",
                desc: "Proprietary guided questionnaires that translate human stories into structured legal data.",
              },
              {
                icon: <Cpu size={32} />,
                title: "CaseCreate™ AI", // UPDATED
                desc: "CaseCreate AI drafts petitions, motions, discovery, and more tailored to individual matters.",
              },
              {
                icon: <Globe size={32} />,
                title: "Step-by-Step Instructions", // UPDATED
                desc: "We empower users to understand and file their case—even if they’ve never set foot in a courthouse.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all group"
              >
                <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter ">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: MARKET ANALYSIS (EXPANDED DATA) --- */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight ">
                Market Snapshot.
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                The current legal system serves only those at the extreme ends
                of the spectrum. CourtDox captures the massive middle-market of
                $145B currently priced out of justice.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
              <TrendingUp className="text-blue-400" size={20} />
              <span className="text-sm font-black uppercase tracking-widest">
                Growth Forecast: 22% CAGR
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-20">
            {[
              { val: "$145B", label: "Total Addressable Market" }, // UPDATED
              { val: "$45B+", label: "Latent Demand Segment" }, // UPDATED
              { val: "77%", label: "US Households with Unmet Legal Needs" }, // UPDATED
              { val: "$399", label: "CourtDox Starting Rate" }, // UPDATED
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-5xl font-black mb-3 group-hover:text-blue-400 transition-colors tracking-tighter">
                  {stat.val}
                </p>
                <div className="h-1 w-12 bg-blue-600 mb-4" />
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h4 className="text-3xl font-black flex items-center gap-4">
                <BarChart3 className="text-blue-400" /> Latent Market Insight
              </h4>
              <p className="text-slate-300 text-lg font-medium leading-relaxed">
                The "Latent Market" for legal services refers to those with real
                legal problems who take no action due to prohibitive costs. In
                the US, nearly 80% of middle-income legal issues go unaddressed.
                CourtDox converts this massive segment of "inaction" into active
                revenue.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <Target className="text-blue-400 shrink-0" size={24} />
                  <p className="text-sm font-medium text-slate-400">
                    Targeting $45B in dormant litigation value from individual
                    and small business claimants.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <Zap className="text-blue-400 shrink-0" size={24} />
                  <p className="text-sm font-medium text-slate-400">
                    Scaling through technology to handle 10x the volume of a
                    traditional boutique law firm.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <PieChart className="text-white/20 mb-6" size={64} />
                <h5 className="text-3xl font-black mb-4 tracking-tight  text-white">
                  Equity Advantage
                </h5>
                <p className="text-blue-50 text-lg mb-8 font-medium">
                  10% – 22% Equity currently available for aligned partners in
                  the CaseCreate™ litigation engine.
                </p>
                <button
                  onClick={goToBooking}
                  className="w-full bg-white text-blue-600 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  Request Cap Table <ArrowRight size={18} />
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PARTNERSHIP STRATEGY --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-blue-600" />
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Investment Philosophy
                </span>
              </div>
              <h2 className="text-5xl font-black mb-10 tracking-tight leading-tight ">
                Mission-Driven <br /> Capital.
              </h2>
              <div className="space-y-8 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  We seek partners who understand the{" "}
                  <span className="text-blue-600 font-black ">
                    Sustainable Scale
                  </span>{" "}
                  model. We are not looking for hyper-dilution; we are looking
                  for alignment.
                </p>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border-l-8 border-blue-600">
                  <p className=" text-slate-900">
                    "No billion-dollar burn—just sustainable, revenue-first
                    growth that solves a massive societal problem."
                  </p>
                </div>
                <p>
                  Capital commitment should be accessible on an as-needed and
                  investor-approved basis, specifically to support expansion and
                  key channel partnerships.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              {[
                {
                  icon: <ShieldCheck className="text-blue-600" />,
                  title: "Attorney Founded",
                  text: "Founded by practicing litigators who understand the nuances of court requirements.",
                },
                {
                  icon: <Scale className="text-blue-600" />,
                  title: "Proprietary Data",
                  text: "Trained on real litigation data—not generic language models. Unmatched precision.",
                },
                {
                  icon: <Briefcase className="text-blue-600" />,
                  title: "Self-Sustaining",
                  text: "Revenue-generating by design. We are scaling from a position of strength.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-8 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-colors"
                >
                  <div className="bg-white shadow-md p-4 rounded-2xl h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-black text-lg mb-2 uppercase  tracking-tighter">
                      {item.title}
                    </h5>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION (CENTERED) --- */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black mb-8  tracking-tighter">
            Accelerate the <br /> Future of Justice.
          </h2>
          <p className="text-xl text-blue-100 mb-12 font-medium">
            Join us in building a profitable, high-impact platform serving
            nationwide.
          </p>
          {/* CENTERED SINGLE BUTTON */}
          <div className="flex justify-center">
            <button
              onClick={() =>
                (window.location.href = "mailto:investors@courtdox.com")
              }
              className="bg-slate-950 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-2xl"
            >
              Contact Investor Relations
            </button>
          </div>
          <p className="mt-12 text-blue-300 font-black text-xs uppercase tracking-[0.3em]">
            Based in Texas • Serving Nationwide
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full pointer-events-none" />
      </section>
    </div>
  );
};

export default InvestorPage;
