
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  MessagesSquare,
  Target,
  UserRound,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ease = [0.22, 1, 0.36, 1];

// SAME SPACING SYSTEM THROUGHOUT THE WEBSITE
const container =
  "mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20";

const revealUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function Reveal({ children, delay = 0, className = "" }) {
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


// ==========================================
// ANIMATED STATISTICS
// ==========================================

function AnimatedStat({ value, label, index }) {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const numericValue = Number(value.replace(/[^0-9]/g, ""));
    const duration = 2000;
    const startTime = performance.now();

    let frame;

    const animate = (time) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(numericValue * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  let displayValue;

  if (value === "1:1") {
    displayValue = started ? "1:1" : "0:0";
  } else if (value === "5000+") {
    displayValue = `${count.toLocaleString("en-IN")}+`;
  } else if (value === "360°") {
    displayValue = `${count}°`;
  } else {
    displayValue = `${count}+`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 55, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => setStarted(true)}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease,
      }}
      className="group text-center"
    >
      <motion.p
        className="text-5xl font-black tracking-tight text-[#FFD43A] sm:text-6xl lg:text-7xl"
        whileHover={{ scale: 1.08 }}
      >
        {displayValue}
      </motion.p>

      <p className="mt-4 text-base font-medium text-white/70 transition-colors group-hover:text-[#FFD43A] sm:text-lg">
        {label}
      </p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        className="mx-auto mt-5 h-1 rounded-full bg-[#FFD43A]"
      />
    </motion.div>
  );
}


// ==========================================
// PROGRAMS
// ==========================================

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


// ==========================================
// WHY EASY ACADEMICS
// ==========================================

const whyItems = [
  {
    number: "01",
    title: "Concept Clarity",
    text: "Strong fundamentals that make advanced topics easier to understand.",
    icon: Lightbulb,
    tone: "light",
  },
  {
    number: "02",
    title: "Personal Guidance",
    text: "Focused support to identify strengths, gaps and areas of improvement.",
    icon: UserRound,
    tone: "yellow",
  },
  {
    number: "03",
    title: "Regular Assessments",
    text: "Consistent testing and feedback to track academic progress.",
    icon: ClipboardCheck,
    tone: "light",
  },
  {
    number: "04",
    title: "Doubt Solving",
    text: "A learning environment where students can ask questions without hesitation.",
    icon: MessagesSquare,
    tone: "dark",
  },
  {
    number: "05",
    title: "Exam Strategy",
    text: "Practical preparation to approach important examinations with confidence.",
    icon: Target,
    tone: "light",
  },
  {
    number: "06",
    title: "Career Guidance",
    text: "Helping students understand their options and make informed decisions.",
    icon: GraduationCap,
    tone: "light",
  },
];


// ==========================================
// ACHIEVEMENTS
// ==========================================

const achievements = [
  {
    tag: "STUDENT SUCCESS",
    title: "Boards Results",
    text: "Celebrating students who continue to push their academic boundaries.",
    top: "bg-[#062DA0]",
    background: "bg-white",
    tagStyle: "text-[#062DA0]",
  },
  {
    tag: "PERFORMANCE",
    title: "Hall of Fame",
    text: "Progress built through discipline, preparation and continuous improvement.",
    top: "bg-black",
    background: "bg-[#FFD43A]",
    tagStyle: "text-black",
  },
  {
    tag: "FUTURE READY",
    title: "Success Stories",
    text: "Preparing students not only for examinations, but for the opportunities ahead.",
    top: "bg-[#FFD43A]",
    background: "bg-white",
    tagStyle: "text-[#062DA0]",
  },
];


// ==========================================
// TESTIMONIALS
// ==========================================

const instagramReels = [
  {
    url: "https://www.instagram.com/reel/DZwcWSIBZgI/?exln=MXNrcWRka2dsYjE5dg==",
    imagePosition: "42% center",
  },
  {
    url: "https://www.instagram.com/reel/DZtrTxXBewH/?psln=MTBzbGpicTBheDhlOA==",
    imagePosition: "58% center",
  },
  {
    url: "https://www.instagram.com/reel/DYKAz00hsWj/?rpxt=MTh2dzhuYXlpdm1lNg==",
    imagePosition: "72% center",
  },
  {
    url: "https://www.instagram.com/reel/DcWPvAIhzDS/?obrf=MXdwZGF5azFyOGk3OA==",
    imagePosition: "88% center",
  },
  {
    url: "https://www.instagram.com/reel/Db7o3kDBkg8/?vrfl=MTVsOHIxeDRiZ212Mg==",
    imagePosition: "64% center",
  },
  {
    url: "https://www.instagram.com/reel/DWlf6MpgdAW/?mdxt=MWFnbXQyc2Rpa2RqYg==",
    imagePosition: "50% center",
  },
];


// ==========================================
// HOME PAGE
// ==========================================

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">

      <Header />


      {/* ====================================== */}
      {/* HERO BANNER */}
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
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-12 top-20 z-20 hidden h-24 w-24 rounded-full border-[12px] border-[#FFD43A]/50 lg:block"
        />

        <div className={`relative z-30 ${container} py-24 lg:py-28`}>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >

            <motion.div variants={revealUp} className="mb-6 flex items-center gap-2.5">
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
              className="mt-7 h-2 w-32 bg-[#FFD43A]"
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

            <motion.div variants={revealUp} className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/programs/commerce"
                className="rounded-full bg-[#FFD43A] px-6 py-3 text-sm font-bold text-[#062DA0] shadow-lg transition hover:bg-white"
              >
                Explore Courses →
              </Link>

              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#062DA0]"
              >
                Contact Us ↗
              </Link>

            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-1.5 w-full bg-[#FFD43A]" />
      </section>


      {/* ====================================== */}
      {/* ABOUT EASY ACADEMICS */}
      {/* ====================================== */}

      <section className="relative isolate overflow-hidden bg-[#FFD63B] text-black">

        <div className="pointer-events-none absolute -right-44 -top-64 h-[560px] w-[560px] rounded-full border-[84px] border-[#E8C432]/20" />

        <div className={`${container} relative py-20 sm:py-24 lg:py-28`}>

          <Reveal>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="text-[#0739B8]">
                Easy Academics
              </span>
            </h2>

            <div className="mt-5 flex h-[5px] w-32">
              <span className="w-2/3 bg-[#0739B8]" />
              <span className="w-1/3 bg-[#E8C432]" />
            </div>
          </Reveal>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <Reveal className="flex justify-center">
              <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center">

                <div className="absolute inset-0 rounded-full bg-[#FFE879]/40" />

                <Image
                  src="/easy-academics-logo.png"
                  alt="Easy Academics logo"
                  width={500}
                  height={285}
                  className="relative h-auto w-full max-w-[460px] object-contain"
                />

              </div>
            </Reveal>

            <Reveal delay={0.1}>

              <p className="text-lg leading-8 sm:text-xl sm:leading-9 lg:text-[22px]">
                Easy Academics is a leading coaching institute in Udaipur,
                founded by Dr. Umang Khatri with a vision to make learning
                more meaningful, focused and effective. What began with a
                simple aim to help students understand concepts rather than
                simply memorise them has grown into a trusted space for
                academic learning and guidance.
              </p>

              <Link
                href="/about-us"
                className="mt-8 inline-flex rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-[#062DA0]"
              >
                About Us →
              </Link>

            </Reveal>
          </div>
        </div>
      </section>


      {/* ====================================== */}
      {/* PROGRAMS - THREE CARDS PER ROW */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-[#062DA0] text-white">

        <div className="pointer-events-none absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full border-[70px] border-white/[0.04]" />

        <div className={`${container} relative py-20 sm:py-24 lg:py-28`}>

          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">

              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                  Academic Preparation
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  One institute.
                  <br />
                  Multiple academic
                  <br />
                  opportunities.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                Whether your goal is academic excellence, board preparation
                or entrance examinations, our programs are designed to help
                you move forward with clarity and confidence.
              </p>

            </div>
          </Reveal>


          {/* THREE COLUMNS ON DESKTOP, TWO ON TABLET */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-20 lg:grid-cols-3 lg:gap-6 xl:gap-8"
          >

            {academicPaths.map((item) => {

              const isYellow = item.accent === "yellow";

              return (
                <motion.div
                  key={item.number}
                  variants={revealUp}
                  className="h-full min-w-0"
                >

                  <Link
                    href={item.href}
                    className={`group relative flex h-full min-h-[337px] flex-col overflow-hidden rounded-[20px] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:p-8 lg:p-9 ${
                      isYellow
                        ? "border-[#FFD43A] bg-[#FFD43A] text-black"
                        : item.number === "03"
                          ? "border-white/20 bg-[#062DA0] text-white"
                          : "border-white bg-white text-black"
                    }`}
                  >

                    {/* ANIMATED TOP LINE */}

                    <div
                      className={`absolute left-0 top-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full ${
                        isYellow
                          ? "bg-black"
                          : "bg-[#FFD43A]"
                      }`}
                    />

                    {/* NUMBER AND PLUS */}

                    <div className="flex items-center justify-between">

                      <span
                        className={`text-2xl font-black ${
                          item.number === "03"
                            ? "text-[#FFD43A]"
                            : isYellow
                              ? "text-black"
                              : "text-[#062DA0]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span className="text-2xl font-bold transition-transform duration-300 group-hover:rotate-90">
                        +
                      </span>

                    </div>


                    {/* ICON */}

                    <div
                      className={`mt-7 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                        isYellow
                          ? "bg-black text-[#FFD43A]"
                          : item.number === "03"
                            ? "bg-[#FFD43A] text-[#062DA0]"
                            : "bg-[#062DA0] text-[#FFD43A]"
                      }`}
                    >
                      {item.symbol}
                    </div>


                    {/* TITLE */}

                    <h3 className="mt-7 text-xl font-black leading-tight sm:text-2xl">
                      {item.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p
                      className={`mt-4 text-sm leading-7 sm:text-base ${
                        item.number === "03"
                          ? "text-white/70"
                          : "text-black/65"
                      }`}
                    >
                      {item.text}
                    </p>


                    {/* EXPLORE */}

                    <div className="mt-auto flex items-center justify-between pt-7">

                      <span className="text-sm font-black">
                        Explore →
                      </span>

                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>

                    </div>

                  </Link>

                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>


      {/* ====================================== */}
      {/* WHY EASY ACADEMICS */}
      {/* ====================================== */}

      <section className="bg-white">

        <div className={`${container} py-20 sm:py-24 lg:py-28`}>

          <Reveal>
            <div className="max-w-4xl">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Why Easy Academics
              </p>

              <div className="mt-3 flex h-1 w-44 overflow-hidden rounded-full">
                <span className="w-3/4 bg-[#062DA0]" />
                <span className="flex-1 bg-[#FFD43A]" />
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[1.08] sm:text-5xl lg:text-6xl">
                Learning should be <span className="text-[#062DA0]">clear.</span>
                <br />
                Not complicated.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                We focus on creating an environment where students can understand
                concepts, ask questions and continuously improve.
              </p>

            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">

            {whyItems.map((item, index) => {
              const Icon = item.icon;
              const isDark = item.tone === "dark";
              const isYellow = item.tone === "yellow";

              return (
                <Reveal key={item.number} delay={index * 0.05}>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`flex h-full min-h-[145px] items-center gap-4 rounded-2xl border p-5 sm:gap-5 sm:p-6 ${
                      isDark
                        ? "border-black bg-black text-white"
                        : isYellow
                          ? "border-[#FFD43A] bg-[#FFD43A] text-black"
                          : "border-[#D9E4FF] bg-white text-black"
                    }`}
                  >

                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black ${
                        isDark
                          ? "bg-[#FFD43A] text-black"
                          : isYellow
                            ? "bg-[#FFE98C] text-black"
                            : "bg-[#EAF0FF] text-[#062DA0]"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black leading-snug sm:text-xl">
                        {item.title}
                      </h3>

                      <p className={`mt-2 text-sm leading-6 ${isDark ? "text-white/70" : "text-black/65"}`}>
                        {item.text}
                      </p>
                    </div>

                    <Icon
                      aria-hidden="true"
                      className={`h-9 w-9 shrink-0 ${
                        isDark
                          ? "text-[#FFD43A]"
                          : isYellow
                            ? "text-black"
                            : "text-[#062DA0]"
                      }`}
                      strokeWidth={2}
                    />

                  </motion.div>

                </Reveal>
              );
            })}

          </div>
        </div>
      </section>


      {/* ====================================== */}
      {/* STATISTICS SCROLLER */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-black text-white">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border-[25px] border-[#FFD43A]/20"
        />

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[20px] border-[#FFD43A]/10"
        />

        <div className={`${container} relative py-20 sm:py-24`}>

          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {[
              { value: "20+", label: "Expert Faculties" },
              { value: "1:1", label: "Mentoring & Guidance" },
              { value: "5000+", label: "Students Passed Out" },
              { value: "360°", label: "Education" },
            ].map((item, index) => (

              <AnimatedStat
                key={item.label}
                value={item.value}
                label={item.label}
                index={index}
              />

            ))}

          </div>
        </div>
      </section>


      {/* ====================================== */}
      {/* ACHIEVEMENTS */}
      {/* ====================================== */}

      <section className="bg-[#F8F8F8]">

        <div className={`${container} py-20 sm:py-24 lg:py-28`}>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Achievements
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-5xl">
                Results that
                <br />
                speak for themselves.
              </h2>
            </Reveal>

            <Reveal>
              <Link
                href="/results"
                className="font-bold text-[#062DA0] transition hover:text-black"
              >
                View All Results →
              </Link>
            </Reveal>

          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">

            {achievements.map((item, index) => (

              <Reveal key={item.title} delay={index * 0.08}>

                <Link
                  href="/results"
                  aria-label={`View ${item.title} on the results page`}
                  className="block h-full"
                >

                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`h-full overflow-hidden rounded-xl p-7 shadow-sm sm:p-8 ${item.background}`}
                  >

                    <div className={`h-40 rounded-lg ${item.top}`} />

                    <p className={`mt-7 text-sm font-bold ${item.tagStyle}`}>
                      {item.tag}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/60">
                      {item.text}
                    </p>

                  </motion.div>

                </Link>

              </Reveal>

            ))}

          </div>
        </div>
      </section>


      {/* ====================================== */}
      {/* TESTIMONIALS */}
      {/* ====================================== */}

      <section className="bg-[#FFD43A]">

        <div className={`${container} py-20 sm:py-24 lg:py-28`}>

          <Reveal>
            <div className="max-w-3xl">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Student Voices
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-5xl">
                Learning experiences
                <span className="text-[#062DA0]"> that matter.</span>
              </h2>

            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {instagramReels.map((reel, index) => (

              <Reveal key={reel.url} delay={index * 0.08}>

                <motion.a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch Instagram reel ${index + 1} in a new tab`}
                  whileHover={{ y: -8 }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-black"
                >

                  <Image
                    src="/images/hero-banner.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectPosition: reel.imagePosition }}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <p className="text-sm font-black uppercase tracking-[0.25em]">
                      Instagram Reel {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-lg font-bold">
                      Watch on Instagram <span aria-hidden="true">→</span>
                    </p>
                  </div>

                </motion.a>

              </Reveal>

            ))}

          </div>
        </div>
      </section>


      {/* ====================================== */}
      {/* FOOTER */}
      {/* ====================================== */}

      <Footer />

    </main>
  );
}
