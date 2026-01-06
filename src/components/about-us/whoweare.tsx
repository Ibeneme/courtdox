import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Shield,
  ArrowRight,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { useAppNavigation } from "../../hooks/useAppNavigation";

const WhoWeAreContact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { goToBooking } = useAppNavigation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-gray-50/50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* --- LEFT SIDE: WHO WE ARE --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">
                Our Identity
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mt-4 mb-6 leading-[1.1]">
                Who we{" "}
                <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">
                  are
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-600 leading-relaxed text-lg"
            >
              <p className="font-bold text-gray-900 text-xl">
                CourtDox was created by lawyers—for everyone.
              </p>
              <p>
                Built on a foundation of legal expertise and powered by advanced
                AI, CourtDox empowers individuals and small businesses to take
                control of their lawsuits—whether filing a claim or defending
                one.
              </p>
              {/* UPDATED COPY BELOW */}
              <p>
                At the heart of our platform is{" "}
                <span className="text-blue-600 font-bold">CaseCreate</span>, a
                world’s first solution for efficiently drafting and automating
                pleadings and documents for various stages of litigation.
              </p>

              <motion.div variants={itemVariants} className="pt-4">
                <button
                  onClick={goToBooking}
                  className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Ready to start? Book Now <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-gray-200 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white">
                  <Shield size={16} />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white">
                  <CheckCircle size={16} />
                </div>
              </div>
              {/* REMOVED CLIENT COUNT TEXT */}
              <p className="text-sm font-bold text-gray-900 italic">
                Empowering your legal journey with precision.
              </p>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTACT FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                Contact us
              </h3>
              <p className="text-gray-500 font-medium">
                Interested in working together? Fill out some info and we will
                be in touch shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      required
                      type="text"
                      className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-medium"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Last Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    required
                    type="email"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                  Your Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-gray-400 w-4 h-4" />
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-medium"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 transition-all"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors font-medium">
                  Sign up for news and updates
                </span>
              </label>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitted ? "Message Sent!" : "Submit Message"}
                {!isSubmitted && <Send size={18} />}
              </motion.button>
            </form>

            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreContact;
