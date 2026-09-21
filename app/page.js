"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";

const ease = [0.22, 1, 0.36, 1];

const revealUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const revealLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

function AnimatedSection({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={revealUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.p
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="text-5xl font-black text-[#FFD43A]"
      >
        {value}
      </motion.p>

      <p className="mt-3 text-sm text-white/60">{label}</p>
    </motion.div>
  );
}

export default function Home() {
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
      className: "bg-[#062DA0] text-white",
      numberClass: "text-[#FFD43A]",
    },
    {
      number: "02",
      title: "Practice",
      text: "Reinforce knowledge through questions, assignments and tests.",
      className: "bg-[#FFD43A] text-black",
      numberClass: "text-black",
    },
    {
      number: "03",
      title: "Improve",
      text: "Identify mistakes and continuously improve academic performance.",
      className: "border-2 border-black bg-white text-black",
      numberClass: "text-[#062DA0]",
    },
    {
      number: "04",
      title: "Achieve",
      text: "Turn consistent preparation into meaningful academic results.",
      className: "bg-black text-white",
      numberClass: "text-[#FFD43A]",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

     <Header />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative geometry */}

        <motion.div
          animate={{
            rotate: [0, 8, 0, -8, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border-[35px] border-[#FFD43A]/40"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-[45%] top-20 hidden h-8 w-8 rotate-45 bg-[#FFD43A] lg:block"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* Hero text */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >

            <motion.div variants={revealUp} className="mb-6 inline-flex items-center gap-3">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#FFD43A]"
              />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#062DA0]">
                A Leading Coaching Institute
              </p>
            </motion.div>

            <motion.h1
              variants={revealUp}
              className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Build Your
              <br />

              <span className="text-[#062DA0]">
                Future.
              </span>

              <br />

              Shape Your
              <br />

              <span className="relative inline-block">
                Success.

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.8,
                    duration: 0.9,
                    ease,
                  }}
                  className="absolute -bottom-1 left-0 h-2 bg-[#FFD43A]"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={revealUp}
              className="mt-8 max-w-xl text-lg leading-8 text-black/70"
            >
              Quality education and expert guidance for students of Classes
              9th to 12th, with CBSE, Cambridge and CUET preparation under
              one roof.
            </motion.p>

            <motion.div
              variants={revealUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/courses"
                  className="inline-block rounded-full bg-[#062DA0] px-7 py-4 font-bold text-white transition hover:bg-black"
                >
                  Explore Courses
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-block rounded-full border-2 border-black px-7 py-4 font-bold transition hover:bg-[#FFD43A]"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="mt-12 grid max-w-xl grid-cols-3 border-t border-black/10 pt-8"
            >
              <div>
                <p className="text-2xl font-black text-[#062DA0]">
                  9th–12th
                </p>
                <p className="mt-1 text-sm text-black/60">
                  Classes
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-[#062DA0]">
                  3
                </p>
                <p className="mt-1 text-sm text-black/60">
                  Streams
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-[#062DA0]">
                  CUET
                </p>
                <p className="mt-1 text-sm text-black/60">
                  Preparation
                </p>
              </div>
            </motion.div>

          </motion.div>


          {/* Hero visual */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease,
            }}
            className="relative"
          >

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] bg-[#062DA0] p-8 sm:p-12"
            >

              {/* Yellow circle */}

              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFD43A]"
              />

              {/* Small geometric square */}

              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-20 right-8 h-8 w-8 border-4 border-[#FFD43A]"
              />

              <div className="relative z-10 flex min-h-[450px] flex-col justify-between">

                <div className="flex justify-between">

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#062DA0]"
                  >
                    EASY ACADEMICS
                  </motion.span>

                  <motion.span
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="text-5xl font-black text-[#FFD43A]"
                  >
                    EA
                  </motion.span>

                </div>

                <div>

                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
                    Learn • Grow • Achieve
                  </p>

                  <h2 className="max-w-lg text-4xl font-black leading-tight text-white sm:text-5xl">
                    Education that builds confidence.
                  </h2>

                  <p className="mt-5 max-w-md text-white/75">
                    Strong concepts. Personal guidance. Better preparation.
                  </p>

                </div>

                <div className="flex items-center justify-between border-t border-white/20 pt-5">

                  <span className="text-sm text-white/70">
                    Udaipur, Rajasthan
                  </span>

                  <motion.span
                    animate={{
                      scale: [1, 1.25, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="h-10 w-10 rounded-full bg-[#FFD43A]"
                  />

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="border-y border-black/10 bg-[#FFD43A]">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_2fr] lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealLeft}
          >
            <p className="text-sm font-black uppercase tracking-[0.25em]">
              About Easy Academics
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              More than coaching.
              <br />
              A foundation for
              <br />
              your future.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealRight}
            className="max-w-3xl"
          >
            <p className="text-xl font-medium leading-8">
              Easy Academics is a coaching institute based in Udaipur,
              Rajasthan, focused on helping students build strong academic
              foundations and prepare confidently for their next stage.
            </p>

            <p className="mt-6 leading-7">
              Founded by <strong>Umang Khatri</strong>, Easy Academics brings
              together structured learning, expert guidance, regular
              assessments and individual attention for students from Classes
              9th to 12th.
            </p>

            <motion.div
              whileHover={{ x: 6 }}
              className="mt-8 inline-block"
            >
              <Link
                href="/about-us"
                className="inline-block rounded-full bg-black px-6 py-3 font-bold text-white"
              >
                Discover Our Story →
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          ACADEMIC PATHS
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <AnimatedSection>

            <div className="max-w-2xl">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Choose Your Path
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Find the right direction
                <span className="text-[#062DA0]"> for you.</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/60">
                Focused academic programs designed around different interests,
                strengths and future goals.
              </p>

            </div>

          </AnimatedSection>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >

            {/* Science */}

            <motion.div
              variants={cardReveal}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
              transition={{ duration: 0.3 }}
              className="group border-2 border-black p-8 transition-colors hover:bg-[#062DA0] hover:text-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black">01</span>

                <motion.span
                  whileHover={{ rotate: 90 }}
                  className="text-3xl"
                >
                  +
                </motion.span>
              </div>

              <h3 className="mt-16 text-3xl font-black">
                Science
              </h3>

              <p className="mt-4 leading-7 opacity-70">
                Build strong conceptual foundations and prepare for academic
                excellence with focused science learning.
              </p>

              <div className="mt-8 font-bold">
                Explore Science →
              </div>
            </motion.div>


            {/* Commerce */}

            <motion.div
              variants={cardReveal}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
              transition={{ duration: 0.3 }}
              className="group border-2 border-[#062DA0] bg-[#062DA0] p-8 text-white transition-colors hover:bg-black"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black text-[#FFD43A]">
                  02
                </span>

                <motion.span
                  whileHover={{ rotate: 90 }}
                  className="text-3xl"
                >
                  +
                </motion.span>
              </div>

              <h3 className="mt-16 text-3xl font-black">
                Commerce
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                Understand business, economics, accounts and finance through
                practical and structured learning.
              </p>

              <div className="mt-8 font-bold text-[#FFD43A]">
                Explore Commerce →
              </div>
            </motion.div>


            {/* Arts */}

            <motion.div
              variants={cardReveal}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
              transition={{ duration: 0.3 }}
              className="group border-2 border-black p-8 transition-colors hover:bg-[#FFD43A]"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black">03</span>

                <motion.span
                  whileHover={{ rotate: 90 }}
                  className="text-3xl"
                >
                  +
                </motion.span>
              </div>

              <h3 className="mt-16 text-3xl font-black">
                Arts
              </h3>

              <p className="mt-4 leading-7 opacity-70">
                Develop analytical thinking, creativity and a deeper
                understanding of society and the world.
              </p>

              <div className="mt-8 font-bold">
                Explore Arts →
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          BOARDS + CUET
      ===================================================== */}

      <section className="bg-[#062DA0] text-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid gap-14 lg:grid-cols-2 lg:items-end"
          >

            <motion.div variants={revealLeft}>

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

            </motion.div>

            <motion.p
              variants={revealRight}
              className="text-lg leading-8 text-white/70"
            >
              Whether your goal is academic excellence, board preparation or
              entrance examinations, our programs are designed to help you
              move forward with clarity and confidence.
            </motion.p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-16 grid gap-5 md:grid-cols-3"
          >

            {[
              {
                number: "01",
                title: "CBSE",
                text: "Structured preparation aligned with CBSE curriculum and examination requirements.",
                className: "bg-white text-black",
                numberClass: "text-[#062DA0]",
              },
              {
                number: "02",
                title: "Cambridge",
                text: "Strong academic support for students following Cambridge curriculum and learning pathways.",
                className: "bg-[#FFD43A] text-black",
                numberClass: "text-black",
              },
              {
                number: "03",
                title: "CUET",
                text: "Focused entrance preparation to help students approach CUET with better strategy and confidence.",
                className: "border border-white/20 text-white",
                numberClass: "text-[#FFD43A]",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                }}
                className={`rounded-2xl p-8 ${item.className}`}
              >
                <span className={`text-sm font-black ${item.numberClass}`}>
                  {item.number}
                </span>

                <h3 className="mt-12 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 opacity-70">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHY EASY ACADEMICS
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={revealLeft}
            >

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Why Easy Academics
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Learning should be
                <br />
                <span className="text-[#062DA0]">clear.</span>
                <br />
                Not complicated.
              </h2>

              <p className="mt-6 leading-7 text-black/60">
                We focus on creating an environment where students can
                understand concepts, ask questions and continuously improve.
              </p>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="grid gap-5 sm:grid-cols-2"
            >

              {whyItems.map((item) => (
                <motion.div
                  key={item.number}
                  variants={cardReveal}
                  whileHover={{
                    y: -7,
                    paddingLeft: 30,
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
              ))}

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

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

          <div className="grid gap-10 md:grid-cols-4">

            <AnimatedCounter
              value="9–12"
              label="Classes Covered"
            />

            <AnimatedCounter
              value="3"
              label="Academic Streams"
            />

            <AnimatedCounter
              value="2"
              label="Boards"
            />

            <AnimatedCounter
              value="1"
              label="Goal — Student Success"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          LEARNING EXPERIENCE
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <AnimatedSection>

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

          </AnimatedSection>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >

            {learningItems.map((item) => (
              <motion.div
                key={item.number}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`p-8 ${item.className}`}
              >

                <div
                  className={`text-4xl font-black ${item.numberClass}`}
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
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="bg-[#F8F8F8]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <motion.div variants={revealLeft}>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Achievements
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Results that
                <br />
                speak for themselves.
              </h2>

            </motion.div>

            <motion.div
              variants={revealRight}
              whileHover={{ x: 5 }}
            >
              <Link
                href="/achievements"
                className="font-bold text-[#062DA0]"
              >
                View All Achievements →
              </Link>
            </motion.div>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >

            {[
              {
                tag: "STUDENT SUCCESS",
                title: "Academic Excellence",
                text: "Celebrating students who continue to push their academic boundaries.",
                top: "bg-[#062DA0]",
                background: "bg-white",
                tagClass: "text-[#062DA0]",
              },
              {
                tag: "PERFORMANCE",
                title: "Consistent Growth",
                text: "Progress built through discipline, preparation and continuous improvement.",
                top: "bg-black",
                background: "bg-[#FFD43A]",
                tagClass: "text-black",
              },
              {
                tag: "FUTURE READY",
                title: "Beyond The Classroom",
                text: "Preparing students not only for examinations, but for the opportunities ahead.",
                top: "bg-[#FFD43A]",
                background: "bg-white",
                tagClass: "text-[#062DA0]",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                }}
                className={`p-8 shadow-sm ${item.background}`}
              >

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`h-40 ${item.top}`}
                />

                <p
                  className={`mt-6 text-sm font-bold ${item.tagClass}`}
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
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <AnimatedSection>

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

          </AnimatedSection>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >

            {[
              {
                text: "Student testimonial will be added here.",
                name: "Student Name",
                role: "Class / Stream",
                className: "border-2 border-black",
                quoteClass: "text-[#FFD43A]",
                roleClass: "text-black/50",
              },
              {
                text: "Parent or student testimonial will be added here.",
                name: "Student / Parent",
                role: "Class / Stream",
                className: "bg-[#062DA0] text-white",
                quoteClass: "text-[#FFD43A]",
                roleClass: "text-white/50",
              },
              {
                text: "A genuine success story can be featured in this section.",
                name: "Student Name",
                role: "Class / Stream",
                className: "bg-[#FFD43A]",
                quoteClass: "text-black",
                roleClass: "text-black/50",
              },
            ].map((item) => (
              <motion.div
                key={`${item.name}-${item.role}-${item.text}`}
                variants={cardReveal}
                whileHover={{
                  y: -10,
                  rotate: 0.5,
                }}
                className={`p-8 ${item.className}`}
              >

                <div className={`text-4xl font-black ${item.quoteClass}`}>
                  “
                </div>

                <p className="mt-5 leading-7 opacity-70">
                  {item.text}
                </p>

                <p className="mt-8 font-black">
                  {item.name}
                </p>

                <p className={`text-sm ${item.roleClass}`}>
                  {item.role}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FFD43A]">

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[30px] border-black/10"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealLeft}
            >

              <p className="text-sm font-black uppercase tracking-[0.25em]">
                Start Your Journey
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Your future deserves
                <br />
                the right foundation.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-7 text-black/70">
                Connect with Easy Academics and discover the right academic
                path for your goals.
              </p>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealRight}
            >

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

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-12 md:grid-cols-4">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2"
            >

              <div className="text-2xl font-black">
                EASY{" "}
                <span className="text-[#FFD43A]">
                  ACADEMICS
                </span>
              </div>

              <p className="mt-5 max-w-md leading-7 text-white/60">
                A leading coaching institute in Udaipur, Rajasthan, helping
                students build strong academic foundations and prepare for
                their future.
              </p>

              <p className="mt-6 text-sm text-white/50">
                Founded by Umang Khatri
              </p>

            </motion.div>


            <div>

              <h3 className="font-black text-[#FFD43A]">
                Quick Links
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">

                <Link
                  href="/"
                  className="transition hover:text-[#FFD43A]"
                >
                  Home
                </Link>

                <Link
                  href="/about-us"
                  className="transition hover:text-[#FFD43A]"
                >
                  About Us
                </Link>

                <Link
                  href="/courses"
                  className="transition hover:text-[#FFD43A]"
                >
                  Courses
                </Link>

                <Link
                  href="/achievements"
                  className="transition hover:text-[#FFD43A]"
                >
                  Achievements
                </Link>

                <Link
                  href="/blog"
                  className="transition hover:text-[#FFD43A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="transition hover:text-[#FFD43A]"
                >
                  Contact
                </Link>

              </div>

            </div>


            <div>

              <h3 className="font-black text-[#FFD43A]">
                Contact
              </h3>

              <div className="mt-5 space-y-3 text-sm text-white/60">

                <p>
                  Udaipur, Rajasthan
                </p>

                <p>
                  <a
                    href="tel:7877973935"
                    className="transition hover:text-[#FFD43A]"
                  >
                    78779 73935
                  </a>
                </p>

                <p>
                  Instagram: @academicseasy
                </p>

              </div>

            </div>

          </div>


          <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/40">
            © 2026 Easy Academics. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}