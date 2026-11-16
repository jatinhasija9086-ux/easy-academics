"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

const BLUE = "#062DA0";
const YELLOW = "#FFD43A";

const ease = [0.22, 1, 0.36, 1];

const revealUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const revealLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const whyItems = [
  {
    number: "01",
    title: "Concept Clarity",
    text: "Strong fundamentals that make advanced topics easier to understand.",
  },
  {
    number: "02",
    title: "Personal Guidance",
    text: "Focused support to identify strengths, gaps and areas of improvement.",
  },
  {
    number: "03",
    title: "Regular Assessments",
    text: "Consistent testing and feedback to track academic progress.",
  },
  {
    number: "04",
    title: "Doubt Solving",
    text: "A learning environment where students can ask questions without hesitation.",
  },
  {
    number: "05",
    title: "Exam Strategy",
    text: "Practical preparation to approach important examinations with confidence.",
  },
  {
    number: "06",
    title: "Career Guidance",
    text: "Helping students understand their options and make informed decisions.",
  },
];

const learningItems = [
  {
    number: "01",
    title: "Learn",
    text: "Understand concepts through structured classroom learning.",
    style: "bg-[#062DA0] text-white",
    numberStyle: "text-[#FFD43A]",
  },
  {
    number: "02",
    title: "Practice",
    text: "Reinforce knowledge through questions, assignments and tests.",
    style: "bg-[#FFD43A] text-black",
    numberStyle: "text-black",
  },
  {
    number: "03",
    title: "Improve",
    text: "Identify mistakes and continuously improve academic performance.",
    style: "border-2 border-black bg-white text-black",
    numberStyle: "text-[#062DA0]",
  },
  {
    number: "04",
    title: "Achieve",
    text: "Turn consistent preparation into meaningful academic results.",
    style: "bg-black text-white",
    numberStyle: "text-[#FFD43A]",
  },
];

// SIX ACADEMIC PROGRAMS
const academicPaths = [
  {
    number: "01",
    title: "Secondary Education",
    text: "Build strong academic foundations with focused learning and structured school examination preparation.",
    href: "/programs/school-academics",
    symbol: "▤",
    accent: "blue",
  },
  {
    number: "02",
    title: "Commerce",
    text: "Explore business, economics, accounts and finance through practical learning.",
    href: "/programs/commerce",
    symbol: "↗",
    accent: "yellow",
  },
  {
    number: "03",
    title: "Arts",
    text: "Develop analytical thinking, creativity and a deeper understanding of society.",
    href: "/programs/arts",
    symbol: "✧",
    accent: "blue",
  },
  {
    number: "04",
    title: "Cambridge",
    text: "Explore Cambridge curriculum with conceptual learning and academic guidance.",
    href: "/programs/cambridge",
    symbol: "◎",
    accent: "yellow",
  },
  {
    number: "05",
    title: "Entrance Exams",
    text: "Prepare strategically for competitive entrance examinations with focused practice.",
    href: "/programs/entrance-exams",
    symbol: "✎",
    accent: "blue",
  },
  {
    number: "06",
    title: "College & Universities",
    text: "Discover higher education opportunities and find the right direction for your future.",
    href: "/programs/college-universities",
    symbol: "⌂",
    accent: "yellow",
  },
];

const boards = [
  {
    number: "01",
    title: "CBSE",
    text: "Structured preparation aligned with CBSE curriculum and examination requirements.",
    style: "bg-white text-black",
    numberStyle: "text-[#062DA0]",
  },
  {
    number: "02",
    title: "Cambridge",
    text: "Strong academic support for students following Cambridge curriculum and learning pathways.",
    style: "bg-[#FFD43A] text-black",
    numberStyle: "text-black",
  },
  {
    number: "03",
    title: "CUET",
    text: "Focused entrance preparation to help students approach CUET with better strategy and confidence.",
    style: "border border-white/20 text-white",
    numberStyle: "text-[#FFD43A]",
  },
];

const achievements = [
  {
    tag: "STUDENT SUCCESS",
    title: "Academic Excellence",
    text: "Celebrating students who continue to push their academic boundaries.",
    top: "bg-[#062DA0]",
    background: "bg-white",
    tagStyle: "text-[#062DA0]",
  },
  {
    tag: "PERFORMANCE",
    title: "Consistent Growth",
    text: "Progress built through discipline, preparation and continuous improvement.",
    top: "bg-black",
    background: "bg-[#FFD43A]",
    tagStyle: "text-black",
  },
  {
    tag: "FUTURE READY",
    title: "Beyond The Classroom",
    text: "Preparing students not only for examinations, but for the opportunities ahead.",
    top: "bg-[#FFD43A]",
    background: "bg-white",
    tagStyle: "text-[#062DA0]",
  },
];

const testimonials = [
  {
    text: "Student testimonial will be added here.",
    name: "Student Name",
    role: "Class / Stream",
    style: "border-2 border-black",
    quoteStyle: "text-[#FFD43A]",
    roleStyle: "text-black/50",
  },
  {
    text: "Parent or student testimonial will be added here.",
    name: "Student / Parent",
    role: "Class / Stream",
    style: "bg-[#062DA0] text-white",
    quoteStyle: "text-[#FFD43A]",
    roleStyle: "text-white/50",
  },
  {
    text: "A genuine success story can be featured in this section.",
    name: "Student Name",
    role: "Class / Stream",
    style: "bg-[#FFD43A]",
    quoteStyle: "text-black",
    roleStyle: "text-black/50",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">

      {/* ====================================== */}
      {/* SHARED HEADER */}
      {/* ====================================== */}

      <Header />

      {/* ====================================== */}
      {/* FULL WIDTH HERO BANNER */}
      {/* ====================================== */}

      <section className="relative isolate flex min-h-[700px] w-full items-center overflow-hidden bg-[#062DA0] lg:min-h-[calc(100svh-80px)]">

        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-banner.png"
            alt="Easy Academics students"
            className="h-full w-full scale-[1.08] object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#062DA0]/90 via-[#062DA0]/70 to-[#062DA0]/20" />

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-12 top-20 z-20 hidden h-24 w-24 rounded-full border-[12px] border-[#FFD43A]/50 lg:block"
        />

        <div className="relative z-30 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-28">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="max-w-4xl"
          >

            <motion.div
              variants={revealUp}
              className="mb-6 inline-flex items-center gap-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#FFD43A]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                A Leading Coaching Institute
              </p>
            </motion.div>

            <motion.h1
              variants={revealUp}
              className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Learn Better.
              <br />

              <span className="text-[#FFD43A]">
                Understand Deeper.
              </span>

              <br />

              Achieve More.
            </motion.h1>

            <motion.div
              variants={revealUp}
              className="mt-6 h-2 w-32 bg-[#FFD43A]"
            />

            <motion.p
              variants={revealUp}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8"
            >
              At Easy Academics, we help students focus on strong concepts,
              prepare according to exams and stay consistent with their goals
              throughout their journey. We offer CBSE and Cambridge coaching
              for Classes 9 to 12, along with CUET, IPMAT and other college
              exams preparation, with expert teachers, focused classroom
              learning and individual academic guidance.
            </motion.p>

            <motion.div
              variants={revealUp}
              className="mt-8 flex flex-wrap gap-3"
            >

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/programs/commerce"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFD43A] px-6 py-3 text-sm font-bold text-[#062DA0] shadow-lg transition hover:bg-white"
                >
                  Explore Courses
                  <span>→</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#062DA0]"
                >
                  Contact Us
                  <span>↗</span>
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-1.5 w-full bg-[#FFD43A]" />

      </section>

      {/* ====================================== */}
      {/* INTRODUCTION */}
      {/* ====================================== */}

      <section className="relative isolate overflow-hidden bg-[#FFD63B] text-black">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 -top-64 h-[560px] w-[560px] rounded-full border-[84px] border-[#E8C432]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-72 -left-48 h-[520px] w-[520px] rounded-full bg-[#FFE879]/20"
        />

        <div className="relative mx-auto max-w-[1584px] pb-12 pl-10 pr-6 pt-[104px] sm:pb-[56px] sm:pl-16 sm:pr-12 sm:pt-[112px] lg:pl-16 lg:pr-14 2xl:pl-16 2xl:pr-8">

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-6xl lg:text-6xl xl:text-[68px] 2xl:text-[76px]">
            About{" "}
            <span className="text-[#0739B8]">
              Easy Academics
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mt-5 flex h-[5px] w-32 overflow-hidden"
          >
            <span className="w-2/3 bg-[#0739B8]" />
            <span className="w-1/3 bg-[#E8C432]" />
          </div>

          <div className="mt-10 grid items-center gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-12 xl:gap-24">

            <div className="flex justify-center">
              <div className="relative flex aspect-square w-full max-w-[380px] items-center justify-center">

                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[#FFE879]/35"
                />

                <Image
                  src="/easy-academics-logo.png"
                  alt="Easy Academics logo"
                  width={500}
                  height={285}
                  className="relative h-auto w-[126%] max-w-[480px] shrink-0 translate-x-[16.5%] object-contain"
                  style={{ height: "auto" }}
                />

              </div>
            </div>

            <div className="max-w-[700px]">

              <p className="text-lg leading-8 sm:text-xl sm:leading-9 lg:text-[25px] lg:leading-[1.8]">
                Easy Academics is a leading coaching institute in Udaipur,
                founded by Dr. Umang Khatri with a vision to make learning more
                meaningful, focused and effective. What began with a simple aim
                to help students understand concepts rather than simply memorise
                them has grown into a trusted space for academic learning and
                guidance.
              </p>

              <Link
                href="/about-us"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-lg font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                About Us
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* ACADEMIC PROGRAMS - TIMELINE DESIGN */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1580px] px-6 py-24 lg:px-10">

          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Explore Our Programs
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Choose your
                <span className="text-[#062DA0]">{" "}academic path.</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/60">
                Discover programs designed to match your interests,
                strengthen your knowledge and prepare you for the future.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-20">

            {/* Connecting timeline line on desktop */}
            <div className="absolute left-[8.33%] right-[8.33%] top-5 hidden h-[2px] bg-[#062DA0]/20 xl:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5"
            >
              {academicPaths.map((item) => (
                <motion.div
                  key={item.number}
                  variants={revealUp}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="relative h-full pt-10"
                >

                  {/* Timeline node */}
                  <div className="absolute left-1/2 top-0 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-white bg-[#062DA0] shadow-md">
                    <div className="h-2 w-2 rounded-full bg-[#FFD43A]" />
                  </div>

                  {/* Entire card is clickable */}
                  <Link
                    href={item.href}
                    className="group relative flex h-full min-h-[355px] flex-col overflow-hidden rounded-[22px] border border-black/10 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(6,45,160,0.14)] sm:p-6"
                  >

                    {/* Top accent */}
                    <div
                      className={`absolute left-0 top-0 h-1.5 w-full ${
                        item.accent === "blue"
                          ? "bg-[#062DA0]"
                          : "bg-[#FFD43A]"
                      }`}
                    />

                    {/* Number and plus */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black tracking-tight text-[#062DA0]">
                        {item.number}
                      </span>

                      <span className="text-xl font-bold text-[#062DA0] transition-transform duration-300 group-hover:rotate-90">
                        +
                      </span>
                    </div>

                    {/* Icon block */}
                    <div
                      className={`mt-7 flex h-24 w-24 items-center justify-center rounded-[20px] shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 ${
                        item.accent === "blue"
                          ? "bg-[#062DA0] text-[#FFD43A]"
                          : "bg-[#FFD43A] text-[#062DA0]"
                      }`}
                    >
                      <span className="text-5xl font-light">
                        {item.symbol}
                      </span>
                    </div>

                    {/* Program information */}
                    <div className="mt-7">
                      <h3 className="text-xl font-black leading-tight text-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black/60">
                        {item.text}
                      </p>
                    </div>

                    {/* Explore link */}
                    <div className="mt-auto flex items-center justify-between pt-7">
                      <span className="text-sm font-black text-[#062DA0]">
                        Explore Program
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#062DA0] text-lg text-white transition-all duration-300 group-hover:bg-[#FFD43A] group-hover:text-[#062DA0]">
                        →
                      </span>
                    </div>

                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* BOARDS & CUET */}
      {/* ====================================== */}

      <section className="bg-[#062DA0] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                Academic Preparation
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                One institute.
                <br />
                Multiple academic
                <br />
                opportunities.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg leading-8 text-white/70">
                Whether your goal is academic excellence,
                board preparation or entrance examinations,
                our programs are designed to help you move
                forward with clarity and confidence.
              </p>
            </Reveal>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {boards.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`h-full rounded-2xl p-8 ${item.style}`}
                >

                  <span
                    className={`text-sm font-black ${item.numberStyle}`}
                  >
                    {item.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 opacity-70">
                    {item.text}
                  </p>

                </motion.div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* WHY EASY ACADEMICS */}
      {/* ====================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Why Easy Academics
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Learning should be
                <br />

                <span className="text-[#062DA0]">
                  clear.
                </span>

                <br />
                Not complicated.
              </h2>

              <p className="mt-6 leading-7 text-black/60">
                We focus on creating an environment
                where students can understand concepts,
                ask questions and continuously improve.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">

              {whyItems.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.05}>
                  <motion.div
                    whileHover={{
                      y: -7,
                      paddingLeft: 20,
                    }}
                    className="border-t-2 border-black pt-6"
                  >

                    <span className="text-sm font-black text-[#062DA0]">
                      {item.number}
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {item.text}
                    </p>

                  </motion.div>
                </Reveal>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* STATISTICS */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-black text-white">

        <motion.div
          animate={{
            x: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-[#FFD43A]/20"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

            {[
              ["9–12", "Classes Covered"],
              ["3", "Academic Streams"],
              ["2", "Boards"],
              ["1", "Goal — Student Success"],
            ].map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.08}>

                <motion.p
                  initial={{ scale: 0.85 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-black text-[#FFD43A]"
                >
                  {value}
                </motion.p>

                <p className="mt-3 text-sm text-white/60">
                  {label}
                </p>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* LEARNING EXPERIENCE */}
      {/* ====================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <Reveal>
            <div className="text-center">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                The Easy Academics Experience
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
                Everything students need
                <span className="text-[#062DA0]">
                  {" "}to move ahead.
                </span>
              </h2>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {learningItems.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.07}>
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className={`h-full p-8 ${item.style}`}
                >

                  <div
                    className={`text-4xl font-black ${item.numberStyle}`}
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-20 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 opacity-70">
                    {item.text}
                  </p>

                </motion.div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* ACHIEVEMENTS */}
      {/* ====================================== */}

      <section className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Achievements
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Results that
                <br />
                speak for themselves.
              </h2>
            </Reveal>

            <Reveal>
              <Link
                href="/achievements"
                className="font-bold text-[#062DA0]"
              >
                View All Achievements →
              </Link>
            </Reveal>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`h-full p-8 shadow-sm ${item.background}`}
                >

                  <div className={`h-40 ${item.top}`} />

                  <p
                    className={`mt-6 text-sm font-bold ${item.tagStyle}`}
                  >
                    {item.tag}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {item.text}
                  </p>

                </motion.div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* TESTIMONIALS */}
      {/* ====================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <Reveal>
            <div className="max-w-2xl">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Student Voices
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Learning experiences
                <span className="text-[#062DA0]">
                  {" "}that matter.
                </span>
              </h2>

            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {testimonials.map((item, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotate: 0.5,
                  }}
                  className={`h-full p-8 ${item.style}`}
                >

                  <div
                    className={`text-4xl font-black ${item.quoteStyle}`}
                  >
                    “
                  </div>

                  <p className="mt-5 leading-7 opacity-70">
                    {item.text}
                  </p>

                  <p className="mt-8 font-black">
                    {item.name}
                  </p>

                  <p className={`text-sm ${item.roleStyle}`}>
                    {item.role}
                  </p>

                </motion.div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* CONTACT CTA */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-[#FFD43A]">

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[30px] border-black/10"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em]">
                Start Your Journey
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Your future deserves
                <br />
                the right foundation.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-7 text-black/70">
                Connect with Easy Academics and discover
                the right academic path for your goals.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <motion.div
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
              >

                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
                >
                  Contact Easy Academics →
                </Link>

              </motion.div>

              <p className="mt-5 text-center font-bold">
                78779 73935
              </p>

            </Reveal>

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* SHARED FOOTER */}
      {/* ====================================== */}

      <Footer />

    </main>
  );
}