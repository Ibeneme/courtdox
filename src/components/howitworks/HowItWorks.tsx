import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FileText,
  PhoneCall,
  Rocket,
  UserCheck,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

// Optional illustrative images
import img1 from "../../assets/works/start.jpg";
import img2 from "../../assets/works/phone.jpg";
import img3 from "../../assets/works/doc.jpg";
import img4 from "../../assets/works/add.jpg";

const HowItWorks: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const steps = [
    {
      number: "01",
      title: "Where to Start?",
      badge: "Preparation",
      description:
        "You need to sue someone or you have been sued. Gather everything you need to tell your story: write out the facts, gather the pictures, gather the documents, write out the names and contact info for all witnesses.",
      icon: <FileText className="w-7 h-7" />,
      img: img1,
    },
    {
      number: "02",
      title: "Making the Call",
      badge: "Intake",
      description:
        "Fill out the intake form on this website. Set a time for a CourtDox rep to call you. The rep will ask you to tell the story and ask detailed questions about the witnesses, documents and pictures in your possession.",
      icon: <PhoneCall className="w-7 h-7" />,
      img: img2,
    },
    {
      number: "03",
      title: "What Happens Next?",
      badge: "Generation",
      description:
        "CourtDox generates the documents needed for your lawsuit (powered by CaseCreate). Within 48 hours you’ll get access to your secure client portal (powered by Lawmatics) with generated documents and instructions.",
      icon: <Rocket className="w-7 h-7" />,
      img: img3,
      alert:
        "PLEASE REVIEW YOUR DOCUMENTS! You are responsible to the court for accuracy. No one knows your story better than you!",
    },
    {
      number: "04",
      title: "Need Additional Help?",
      badge: "Human Expertise",
      description:
        "Access paralegals for formatting and evidence citation, or licensed attorneys for real legal research and substantive edits. High-level expertise with absolutely no AI-generated law.",
      icon: <UserCheck className="w-7 h-7" />,
      img: img4,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-6xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-8 ">
              How It <span className="text-blue-600">Works.</span>
            </h2>
            <p className="text-xl text-slate-500 font-bold leading-relaxed">
              Transforming your dispute into professional, court-ready
              litigation in four strategic steps.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:block pb-4"
          >
            <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs">
              Simple • Fast • Reliable
            </div>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex flex-col"
            >
              {/* Image Container with Floating Number */}
              <div className="relative mb-10 overflow-hidden rounded-[3rem] border-8 border-slate-50 shadow-2xl">
                <div className="absolute top-6 left-6 z-20 bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl shadow-blue-600/30">
                  {step.number}
                </div>
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Block */}
              <div className="px-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-950 mb-6 uppercase tracking-tight">
                  {step.title}
                </h3>

                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Step 3 Special Alert */}
                {step.alert && (
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl mb-6">
                    <div className="flex items-center gap-2 text-amber-800 font-black text-[10px] uppercase tracking-widest mb-2">
                      <ShieldAlert size={14} /> Attention
                    </div>
                    <p className="text-sm font-bold text-amber-900 leading-relaxed">
                      {step.alert}
                    </p>
                  </div>
                )}

                <div className="h-px w-full bg-slate-100 group-hover:bg-blue-600 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <button className="inline-flex items-center gap-4 bg-slate-950 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-2xl">
            Start Your Intake Process <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
