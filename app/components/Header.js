"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "/"],
    ["About Us", "/about-us"],
    ["Courses", "/courses"],
    ["Achievements", "/achievements"],
    ["Blog", "/blog"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
          onClick={closeMenu}
        >
          <Image
            src="/easy-academics-logo.png"
            alt="Easy Academics"
            width={190}
            height={80}
            priority
            className="h-auto w-[150px] sm:w-[170px] md:w-[190px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          {navItems.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="group relative text-sm font-medium"
            >
              {name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#FFD43A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#062DA0] px-6 py-3 text-sm font-bold text-white transition hover:bg-black"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">

            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-5 bg-black"
            />

            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              className="block h-0.5 w-5 bg-black"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-5 bg-black"
            />

          </div>
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-black/10 bg-white md:hidden"
          >
            <div className="flex flex-col px-6 py-5">

              {navItems.map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  onClick={closeMenu}
                  className="border-b border-black/10 py-4 text-base font-semibold transition hover:text-[#062DA0]"
                >
                  {name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-5 rounded-full bg-[#062DA0] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-black"
              >
                Contact Us
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}