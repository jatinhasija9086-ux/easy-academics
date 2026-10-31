
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import StudentSlider from "../components/StudentSlider";
import Footer from "../components/Footer";

const classOptions = ["9th", "10th", "11th", "12th"];

const classDescriptions = {
  "9th":
    "Building strong academic foundations through curiosity, confidence and consistent learning.",
  "10th":
    "Celebrating dedication and progress during an important year of academic achievement.",
  "11th":
    "Recognizing students who embrace new subjects, new challenges and new opportunities.",
  "12th":
    "Celebrating hard work, determination and the milestones that shape brighter futures.",
};

const sectionLinks = [
  {
    number: "01",
    title: "Board Results",
    subtitle: "Classes 9th–12th",
    href: "#board-results",
    icon: "🎓",
    background: "bg-[#FFD43A]",
    text: "text-[#062DA0]",
    circle: "bg-[#062DA0]/10",
  },
  {
    number: "02",
    title: "Hall of Fame",
    subtitle: "Our Top Achievers",
    href: "#toppers",
    icon: "🏆",
    background: "bg-white",
    text: "text-[#062DA0]",
    circle: "bg-[#EEF2FF]",
  },
  {
    number: "03",
    title: "Success Stories",
    subtitle: "Student Journeys",
    href: "#success-stories",
    icon: "✦",
    background: "bg-[#173FC4]",
    text: "text-white",
    circle: "bg-white/15",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-32 w-32 sm:h-44 sm:w-44"
      aria-hidden="true"
    >
      <path d="M28 14h44v24c0 19-9 29-22 29S28 57 28 38V14Z" />
      <path d="M28 23H15v10c0 13 6 19 18 19M72 23h13v10c0 13-6 19-18 19" />
      <path d="M50 67v15M35 84h30M30 92h40" />
      <path d="m50 27 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1 4-8Z" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#062DA0]">
          {eyebrow}
        </p>

        <h2 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {title}{" "}
          <span className="text-[#062DA0]">
            {accent}
          </span>
        </h2>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function ResultsPage() {
  const [activeClass, setActiveClass] = useState("12th");

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-950">
      <Header />

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#062DA0] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full border-[100px] border-white/[0.06]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:pb-28 lg:pt-32">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-9 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFD43A]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/75">
                Easy Academics / Results
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-5xl text-[clamp(3.7rem,8vw,7.5rem)] font-black leading-[0.98] tracking-[-0.055em]"
            >
              HARD WORK
              <br />
              DESERVES
              <br />
              <span className="text-[#FFD43A]">
                THE SPOTLIGHT.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.65,
              }}
              className="mt-9 max-w-xl text-base leading-8 text-white/70 sm:text-lg"
            >
              Behind every result is a story of dedication,
              discipline and determination. Celebrating
              students and the milestones that make their
              academic journeys meaningful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10"
            >
              <a
                href="#board-results"
                className="inline-flex items-center gap-5 rounded-full bg-[#FFD43A] px-7 py-4 text-sm font-bold text-[#062DA0] transition hover:bg-white"
              >
                Explore Achievements
                <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </div>

          {/* TROPHY VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.85,
            }}
            className="relative mx-auto flex aspect-square w-full max-w-[400px] items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-[12%] rounded-full border border-white/20" />
            <div className="absolute inset-[25%] rounded-full bg-[#FFD43A]" />

            <div className="relative z-10 text-[#062DA0]">
              <TrophyIcon />
            </div>

            <span className="absolute left-0 top-[12%] rounded-full border border-white/20 bg-[#062DA0] px-5 py-3 text-xs font-bold tracking-wider">
              DEDICATION
            </span>

            <span className="absolute bottom-[12%] right-0 rounded-full bg-white px-5 py-3 text-xs font-bold tracking-wider text-[#062DA0]">
              ACHIEVEMENT
            </span>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM SECTION NAVIGATION BUTTONS */}
      <section className="bg-[#F4F6FB] px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {sectionLinks.map((item, index) => (
            <motion.a
              key={item.number}
              href={item.href}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-md transition-shadow duration-300 hover:shadow-xl ${item.background} ${item.text}`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.circle}`}
                >
                  {item.icon}
                </div>

                <span className="text-xs font-black tracking-widest opacity-60">
                  {item.number}
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm opacity-70">
                    {item.subtitle}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowIcon className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* BOARD RESULTS WITH AUTOMATIC SLIDER */}
      <section
        id="board-results"
        className="scroll-mt-28 bg-[#F6F8FC] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="01 / Academic Performance"
              title="Every Class."
              accent="Every Milestone."
              description="Explore academic journeys across Classes 9th to 12th. Select a class to discover its achievement spotlight."
            />

            {/* CLASS FILTERS */}
            <div
              className="flex flex-wrap gap-2"
              aria-label="Select class"
            >
              {classOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveClass(item)}
                  aria-pressed={activeClass === item}
                  className={`min-w-[72px] rounded-full border px-5 py-3 text-sm font-bold transition-all ${
                    activeClass === item
                      ? "border-[#062DA0] bg-[#062DA0] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#062DA0]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* SELECTED CLASS PANEL */}
          <div className="mt-12 overflow-hidden border border-slate-200 bg-white">
            <div className="flex flex-col gap-4 border-b border-slate-200 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#062DA0]">
                  Selected Category
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Class {activeClass} Results
                </h3>
              </div>

              <span className="w-fit rounded-full bg-[#FFF4BD] px-4 py-2 text-xs font-bold text-[#062DA0]">
                10 Student Slides • Demo
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeClass}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-8"
              >
                <StudentSlider activeClass={activeClass} />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Demo photographs are currently displayed.
            Actual student photographs and verified results
            can be added later.
          </p>

          {/* CLASS MESSAGE */}
          <Reveal className="mt-8">
            <div className="flex flex-col gap-5 border-l-4 border-[#FFD43A] bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#062DA0]">
                  Class {activeClass} Spotlight
                </p>

                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                  {classDescriptions[activeClass]}
                </p>
              </div>

              <span className="shrink-0 text-3xl font-black text-[#062DA0]">
                ↗
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section
        id="toppers"
        className="scroll-mt-28 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="02 / Student Recognition"
              title="The Hall"
              accent="of Fame."
              description="A dedicated spotlight for academic excellence and the students whose achievements deserve recognition."
            />

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FFD43A] text-[#062DA0]">
              <ArrowIcon className="h-7 w-7" />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="relative flex min-h-[450px] flex-col justify-between overflow-hidden bg-[#062DA0] p-9 text-white sm:p-12">
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[45px] border-white/10" />

                <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  The Achievement Spotlight
                </p>

                <div className="relative">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/25 text-4xl">
                    ★
                  </div>

                  <h3 className="max-w-lg text-4xl font-black leading-tight sm:text-5xl">
                    A place for our brightest achievements.
                  </h3>

                  <p className="mt-6 max-w-md leading-7 text-white/65">
                    Student photographs, verified marks
                    and academic achievements will be
                    featured here.
                  </p>
                </div>

                <span className="relative text-sm font-semibold text-[#FFD43A]">
                  EASY ACADEMICS / HALL OF FAME
                </span>
              </div>
            </Reveal>

            <div className="grid gap-6">
              {[1, 2].map((item) => (
                <Reveal key={item}>
                  <div className="flex min-h-[210px] items-center gap-6 border border-slate-200 bg-[#F6F8FC] p-7">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-[#E2E9F8] text-4xl font-black text-[#062DA0]/20">
                      {String(item).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#062DA0]">
                        Student Spotlight
                      </p>

                      <h3 className="mt-3 text-xl font-bold">
                        Achievement Coming Soon
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        Verified student details will
                        be added here.
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT SUCCESS STORIES */}
      <section
        id="success-stories"
        className="scroll-mt-28 bg-[#F6F8FC] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="03 / Beyond the Marks"
            title="Every Student"
            accent="Has a Story."
            description="Results tell us what students achieved. Their journeys tell us how they got there."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="flex min-h-[390px] flex-col justify-between bg-[#FFD43A] p-9 sm:p-12">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#062DA0]">
                  Stories That Inspire
                </span>

                <div>
                  <span className="text-7xl font-black text-[#062DA0]/25">
                    “
                  </span>

                  <h3 className="mt-2 max-w-xl text-3xl font-black leading-tight text-[#062DA0] sm:text-4xl">
                    Every achievement begins with
                    someone who kept trying.
                  </h3>

                  <p className="mt-6 max-w-lg leading-7 text-[#062DA0]/75">
                    Real student experiences and testimonials
                    will be published here as they
                    become available.
                  </p>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#062DA0]">
                  Student Stories / Coming Soon
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex min-h-[390px] flex-col justify-between border border-slate-200 bg-white p-9">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#062DA0]">
                  Student Perspectives
                </span>

                <div>
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF2FF] text-3xl text-[#062DA0]">
                    ▶
                  </div>

                  <h3 className="text-3xl font-black">
                    Their Words.
                    <br />
                    Their Journey.
                  </h3>

                  <p className="mt-5 leading-7 text-slate-500">
                    Space for student interviews,
                    video testimonials and personal
                    learning experiences.
                  </p>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Video Stories / Coming Soon
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#062DA0] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#FFD43A]">
              Your Journey Starts Here
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The next success story could be yours.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Explore the right learning path and take
              your next step with Easy Academics.
            </p>
          </Reveal>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-5 rounded-full bg-[#FFD43A] px-8 py-5 font-bold text-[#062DA0] transition hover:bg-white"
          >
            Get in Touch
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* SHARED FOOTER */}
      <Footer />
    </main>
  );
}
