import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import courtdox from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      "/": "Home",
      "/about": "About",
      "/how-it-works": "How it works",
      "/services": "Services",
      "/investors": "For investors",
      "/booking": "Book now",
    };
    setActiveItem(pathMap[location.pathname] || "Home");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How it works", path: "/how-it-works" },
    { name: "Services", path: "/services" },
    { name: "For investors", path: "/investors" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-900/5 py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="group flex items-center">
                <img
                  src={courtdox}
                  alt="Courtdox"
                  className="h-10 lg:h-12 w-auto transition-all duration-500 group-hover:brightness-110"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-5 py-2 text-[13px] font-black tracking-widest uppercase transition-all duration-300 group ${
                    activeItem === item.name
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-5 right-5 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </Link>
              ))}

              <div className="h-6 w-px bg-slate-100 mx-4" />

              <div className="flex items-center gap-4">
                <a
                  href="https://www.lawmatics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-[11px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors"
                >
                  Portal <ExternalLink size={12} />
                </a>

                <Link
                  to="/booking"
                  className="bg-slate-950 text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 active:scale-95"
                >
                  Book now
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-slate-950 bg-slate-50 rounded-2xl transition-all active:scale-90"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed inset-x-0 top-[88px] z-50 lg:hidden bg-white border-t border-slate-50 overflow-y-auto h-[calc(100vh-88px)] px-6 py-12 pb-24"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-between items-center py-6 border-b border-slate-50 text-3xl font-black tracking-tighter ${
                        activeItem === item.name
                          ? "text-blue-600"
                          : "text-slate-950"
                      }`}
                    >
                      {item.name}
                      <ArrowRight
                        size={24}
                        className={
                          activeItem === item.name
                            ? "opacity-100"
                            : "opacity-10"
                        }
                      />
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-12 space-y-4">
                  <Link
                    to="/booking"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-blue-600 text-white text-center py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm active:scale-[0.98] transition-transform"
                  >
                    Book now
                  </Link>
                  <a
                    href="https://www.lawmatics.com/"
                    className="block w-full bg-slate-50 text-slate-950 text-center py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm active:scale-[0.98] transition-transform"
                  >
                    Portal login
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className={scrolled ? "h-[88px]" : "h-[104px]"} />
    </>
  );
};

export default Navbar;
