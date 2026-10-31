
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const aboutSections = [
  { label: "Our Story", id: "our-story" },
  { label: "Founder", id: "founder" },
  { label: "Faculty", id: "faculty" },
  { label: "Why Easy Academics?", id: "why-easy-academics" },
  { label: "Our Approach", id: "our-approach" },
  { label: "Testimonials", id: "testimonials" },
];

const programItems = [
  ["School Academics", "/programs/school-academics"],
  ["Commerce", "/programs/commerce"],
  ["Arts", "/programs/arts"],
  ["Entrance Exams", "/programs/entrance-exams"],
  ["College & Universities", "/programs/college-universities"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const navItems = [
    ["Home", "/"],
    ["About", "/about-us"],
    ["Programs", "/programs"],
    ["Results", "/results"],
    ["Student Resources", "/student-resources"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setProgramsOpen(false);
  };

  const linkClass =
    "group relative shrink-0 whitespace-nowrap text-sm font-medium lg:text-base";

  const underline = (
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#FFD43A] transition-all duration-300 group-hover:w-full" />
  );

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-black/10 bg-white"
    >
      {/* HEADER BAR */}
      <div className="mx-auto flex h-[84px] w-full max-w-[1600px] items-center justify-between px-5 sm:h-[90px] sm:px-6 lg:h-[100px] lg:px-8">
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
            className="h-[60px] w-auto object-contain sm:h-[68px] lg:h-[76px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex lg:gap-5 xl:gap-6">
          {navItems.map(([name, href]) => {
            /* ABOUT DROPDOWN */
            if (name === "About") {
              return (
                <div
                  key={name}
                  className="group relative shrink-0"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <Link
                    href={href}
                    aria-haspopup="true"
                    aria-expanded={aboutOpen}
                    onFocus={() => setAboutOpen(true)}
                    className={`${linkClass} block`}
                  >
                    {name}
                    {underline}
                  </Link>

                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full z-[60] w-[280px] -translate-x-1/2 pt-4"
                      >
                        <div className="overflow-hidden border-t-2 border-[#062DA0] bg-white shadow-xl ring-1 ring-black/5">
                          {aboutSections.map((section) => (
                            <Link
                              key={section.id}
                              href={`/about-us#${section.id}`}
                              onClick={() => setAboutOpen(false)}
                              className="block border-b border-gray-200 px-6 py-4 text-sm text-gray-800 transition-colors last:border-b-0 hover:bg-[#FFF8D9] hover:text-[#062DA0]"
                            >
                              {section.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            /* PROGRAMS DROPDOWN */
            if (name === "Programs") {
              return (
                <div
                  key={name}
                  className="group relative shrink-0"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <button
  type="button"
  aria-haspopup="true"
  aria-expanded={programsOpen}
  onFocus={() => setProgramsOpen(true)}
  className={`${linkClass} block cursor-default`}
>
  {name}
  {underline}
</button>

                  <AnimatePresence>
                    {programsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full z-[60] w-[300px] -translate-x-1/2 pt-4"
                      >
                        <div className="overflow-hidden border-t-2 border-[#062DA0] bg-white shadow-xl ring-1 ring-black/5">
                          {programItems.map(([label, url]) => (
                            <Link
                              key={label}
                              href={url}
                              onClick={() => setProgramsOpen(false)}
                              className="block border-b border-gray-200 px-6 py-4 text-sm text-gray-800 transition-colors last:border-b-0 hover:bg-[#FFF8D9] hover:text-[#062DA0]"
                            >
                              {label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            /* OTHER NAVIGATION LINKS */
            return (
              <Link key={name} href={href} className={linkClass}>
                {name}
                {underline}
              </Link>
            );
          })}

          {/* CONTACT BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0"
          >
            <Link
              href="/contact"
              className="block whitespace-nowrap rounded-full bg-[#062DA0] px-7 py-4 text-sm font-bold text-white transition hover:bg-black lg:px-8 lg:py-4 lg:text-base"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setAboutOpen(false);
            setProgramsOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white md:hidden"
        >
          <span className="flex w-5 flex-col gap-[5px]">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 origin-center rounded-full bg-black"
            />

            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="block h-[2px] w-5 rounded-full bg-black"
            />

            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
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
                <div key={name}>
                  <div className="flex items-center border-b border-black/10">
                    {name === "Programs" ? (
  <button
    type="button"
    aria-expanded={programsOpen}
    onClick={() => {
      setProgramsOpen((prev) => !prev);
      setAboutOpen(false);
    }}
    className="flex-1 py-4 text-left text-base font-semibold transition-colors hover:text-[#062DA0]"
  >
    {name}
  </button>
) : (
  <Link
    href={href}
    onClick={closeMenu}
    className="flex-1 py-4 text-base font-semibold transition-colors hover:text-[#062DA0]"
  >
    {name}
  </Link>
)}

                    {name === "About" && (
                      <button
                        type="button"
                        aria-label="Toggle About sections"
                        aria-expanded={aboutOpen}
                        onClick={() => {
                          setAboutOpen((prev) => !prev);
                          setProgramsOpen(false);
                        }}
                        className="px-3 py-3 text-[#062DA0]"
                      >
                        <motion.span
                          animate={{ rotate: aboutOpen ? 180 : 0 }}
                          className="block text-xl"
                        >
                          ⌄
                        </motion.span>
                      </button>
                    )}

                    {name === "Programs" && (
                      <button
                        type="button"
                        aria-label="Toggle Programs submenu"
                        aria-expanded={programsOpen}
                        onClick={() => {
                          setProgramsOpen((prev) => !prev);
                          setAboutOpen(false);
                        }}
                        className="px-3 py-3 text-[#062DA0]"
                      >
                        <motion.span
                          animate={{ rotate: programsOpen ? 180 : 0 }}
                          className="block text-xl"
                        >
                          ⌄
                        </motion.span>
                      </button>
                    )}
                  </div>

                  {/* MOBILE ABOUT SUBMENU */}
                  {name === "About" && (
                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-3 border-l-2 border-[#062DA0] bg-[#FFF8D9]">
                            {aboutSections.map((section) => (
                              <Link
                                key={section.id}
                                href={`/about-us#${section.id}`}
                                onClick={closeMenu}
                                className="block px-5 py-3 text-sm text-gray-700 transition-colors hover:text-[#062DA0]"
                              >
                                {section.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* MOBILE PROGRAMS SUBMENU */}
                  {name === "Programs" && (
                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-3 border-l-2 border-[#062DA0] bg-[#FFF8D9]">
                            {programItems.map(([label, url]) => (
                              <Link
                                key={label}
                                href={url}
                                onClick={closeMenu}
                                className="block px-5 py-3 text-sm text-gray-700 transition-colors hover:text-[#062DA0]"
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* MOBILE CONTACT BUTTON */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="my-4 block rounded-full bg-[#062DA0] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-black"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
