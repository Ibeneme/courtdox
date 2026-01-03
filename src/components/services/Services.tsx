import React from "react";
import { motion } from "framer-motion";
import { Scale, FilePlus, Users, ArrowRight } from "lucide-react";
import type { Variants } from "framer-motion";
import { useAppNavigation } from "../../hooks/useAppNavigation";

const Services: React.FC = () => {
  const services = [
    {
      title: "Basic Document Preparation",
      price: "$299",
      description:
        "CourtDox will provide you with Demand Letter, Petition, Answer, Cease & Desist, Discovery (Out), Jury Instructions, Findings of Fact and Conclusions of Law for your lawsuit along with instructions on how to use them.",
      icon: <Scale className="w-8 h-8" />,
      features: ["Demand Letters", "Petitions/Answers", "Discovery Out"],
    },
    {
      title: "Special Document Request",
      price: "$TBD",
      description:
        "Special document needed? CourtDox can produce it. Complete the request process and within 48 hours, CourtDox will provide the requested document inside of your client portal.",
      icon: <FilePlus className="w-8 h-8" />,
      features: ["Custom Drafting", "48-Hour Delivery", "Portal Access"],
    },
    {
      title: "Attorney & Paralegal Drafting Assistance",
      price: "$250/Document",
      description:
        "Our team of seasoned professionals offers strategic insights and tailored solutions to allow you to successfully navigate your lawsuit. Trust our expertise to review your documents to better achieving your goals.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Strategic Insights",
        "Professional Review",
        "Tailored Solutions",
      ],
    },
  ];
  const { goToBooking } = useAppNavigation();
  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const blinkVariants: Variants = {
    initial: { opacity: 1 },
    // This key "whileHover" will be triggered by the parent card's whileHover="hover"
    hover: {
      opacity: [1, 0.4, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-widest py-1.5 px-5 inline-block rounded-full mb-6 border text-blue-600 border-blue-100 bg-blue-50"
          >
            AI for Legal Excellence
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover" // Triggers children variants named "hover"
              className="group relative bg-white rounded-[2.5rem] p-10 border border-gray-100 
                         hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] 
                         transition-all duration-500 flex flex-col"
            >
              {/* Icon & Price Row */}
              <div className="flex items-start justify-between mb-10">
                <div
                  className="flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl 
                                group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500"
                >
                  {service.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Investment
                  </span>
                  <span className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Blinking Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      variants={blinkVariants}
                      className="text-[11px] font-bold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100/50"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Footer Button */}
              <div
                onClick={goToBooking}
                className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between text-blue-600 font-bold group/btn"
              >
                <span className="text-sm uppercase tracking-wider">
                  Request Service
                </span>
                <div className="p-2 bg-blue-50 rounded-full group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
