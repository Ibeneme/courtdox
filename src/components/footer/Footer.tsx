import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom"; // For routing links

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Only include links for pages with routes
  const footerLinks = [
    {
      title: "Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "For Investors", path: "/investors" },
        { name: "Book Now", path: "/booking" },
      ],
    },
  ];

  return (
    <footer className="bg-[#050b1a] text-gray-300 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-gray-800/50">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Court<span className="text-blue-500">Dox</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
              Empowering individuals and small businesses with lawyer-led AI
              document preparation. Closing the justice gap through CaseCreate™
              technology.
            </p>
          </div>

          <div className="relative">
            <h4 className="text-white font-bold mb-4">
              Stay updated on legal trends
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 group">
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
                {column.title}
              </h5>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact/Trust Info */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Trust & Security
            </h5>
            <div className="bg-white/5 border border-gray-800 p-4 rounded-2xl">
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">SSL Secured</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-tight">
                Your data is encrypted and managed through our secure client
                portal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-500 space-y-2">
            <p>© {currentYear} CourtDox LLC. All rights reserved.</p>
            <p className="max-w-2xl italic">
              Disclaimer: CourtDox is not a law firm and does not provide legal
              advice. Our services are limited to document preparation at your
              specific direction.
            </p>
          </div>

          <div className="flex gap-4">
            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -3, color: "#3b82f6" }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
