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
    ["Blog", "/blog"],
    ["Boards", "/boards"],
    ["College & Universities", "/college-universities"],
    ["Commerce", "/commerce"],
    ["Easy Economics (Online)", "/easy-economics-online"],
    ["Entrance Exams", "/entrance-exams"],
    ["Junior-EA", "/junior-ea"],
    ["Results", "/results"],
    ["School Programs", "/school-programmes"],
    ["Testimonials", "/testimonials"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-black/10 bg-white"
    >
      {/* HEADER BAR */}
      <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-5 sm:h-[78px] sm:px-6 lg:h-[88px] lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex h-full shrink-0 items-center"
        >
          <Image
            src="/easy-academics-logo.png"
            alt="Easy Academics"
            width={190}
            height={80}
            priority
            className="h-[52px] w-auto object-contain sm:h-[58px] lg:h-[68px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 md:flex lg:gap-4 xl:gap-5">

          {navItems.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="group relative shrink-0 whitespace-nowrap text-xs font-medium lg:text-sm"
            >
              {name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#FFD43A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* CONTACT BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0"
          >
            <Link
              href="/contact"
              className="block whitespace-nowrap rounded-full bg-[#062DA0] px-5 py-3 text-xs font-bold text-white transition hover:bg-black lg:px-6 lg:text-sm"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white md:hidden"
        >
          <span className="flex w-5 flex-col gap-[5px]">

            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 origin-center rounded-full bg-black"
            />

            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
              className="block h-[2px] w-5 rounded-full bg-black"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 origin-center rounded-full bg-black"
            />

          </span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-black/10 bg-white md:hidden"
          >
            <div className="px-5 py-3 sm:px-6">

              {navItems.map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  onClick={closeMenu}
                  className="block border-b border-black/10 py-4 text-base font-semibold transition-colors hover:text-[#062DA0]"
                >
                  {name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="my-4 block rounded-full bg-[#062DA0] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-black"
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