"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";

const courses = [
  {
    id: 1,
    category: "Classes 9–10",
    title: "Foundation Programme",
    description:
      "Build strong academic fundamentals with focused concepts, regular practice and personal guidance.",
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "Science • Classes 11–12",
    title: "Science Excellence",
    description:
      "A structured programme designed to strengthen Physics, Chemistry, Mathematics and Biology concepts.",
    accent: "yellow",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "Commerce • Classes 11–12",
    title: "Commerce Mastery",
    description:
      "Develop a clear understanding of Accounts, Economics, Business Studies and core commerce concepts.",
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    category: "Arts • Classes 11–12",
    title: "Arts & Humanities",
    description:
      "Explore humanities with conceptual clarity, analytical thinking and effective exam preparation.",
    accent: "yellow",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    category: "CUET",
    title: "CUET Preparation",
    description:
      "Prepare strategically for CUET with subject-focused learning, practice sessions and test preparation.",
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    category: "Classes 9–12",
    title: "Personalised Learning",
    description:
      "Focused academic support designed around individual learning needs, strengths and improvement areas.",
    accent: "yellow",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  {
    number: "01",
    title: "Conceptual Clarity",
    text: "We focus on understanding concepts rather than simply memorising answers.",
  },
  {
    number: "02",
    title: "Personal Attention",
    text: "Students receive focused guidance to identify gaps and improve consistently.",
  },
  {
    number: "03",
    title: "Structured Learning",
    text: "A planned academic approach keeps learning organised and goal-oriented.",
  },
  {
    number: "04",
    title: "Regular Practice",
    text: "Continuous practice and assessment help students build confidence for exams.",
  },
];

const stats = [
  {
    value: "9–12",
    label: "Classes Covered",
  },
  {
    value: "3",
    label: "Academic Streams",
  },
  {
    value: "2",
    label: "Boards",
  },
  {
    value: "CUET",
    label: "Entrance Preparation",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">

      {/* =========================================================
          REUSABLE HEADER
      ========================================================= */}

      <Header />

      {/* =========================================================
          HERO / PAGE INTRO
      ========================================================= */}

      <section className="relative border-b-2 border-black">

        {/* Decorative geometry */}

        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-[-50px] top-20 hidden h-32 w-32 border-[18px] border-[#FFD43A] lg:block"
        />

        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-10 top-20 hidden h-20 w-20 border-2 border-[#062DA0] lg:block"
        />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >

            <motion.div
              variants={fadeUp}
              className="mx-auto mb-6 h-1.5 w-20 bg-[#062DA0]"
            />

            <motion.p
              variants={fadeUp}
              className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
            >
              Courses at Easy Academics
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              LEARN.
              <span className="text-[#062DA0]"> GROW.</span>
              <br />

              <span className="relative inline-block">
                ACHIEVE.

                <span className="absolute -bottom-2 left-0 h-2 w-full bg-[#FFD43A] sm:-bottom-3 sm:h-3" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-9 max-w-2xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8"
            >
              Explore focused academic programmes for Classes 9th–12th,
              Science, Commerce, Arts and CUET preparation — designed to build
              strong concepts, confidence and consistent results.
            </motion.p>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          COURSE GRID
      ========================================================= */}

      <section className="relative bg-[#F8F8F8] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >

            <div>

              <motion.p
                variants={fadeLeft}
                className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
              >
                Our Programmes
              </motion.p>

              <motion.h2
                variants={fadeLeft}
                className="text-4xl font-black tracking-tight sm:text-5xl"
              >
                Choose Your
                <br />
                <span className="text-[#062DA0]">
                  Academic Path.
                </span>
              </motion.h2>

            </div>

            <motion.p
              variants={fadeRight}
              className="max-w-md text-sm leading-6 text-black/60"
            >
              From foundational learning to senior secondary preparation,
              choose a programme that matches your academic goals.
            </motion.p>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >

            {courses.map((course) => (

              <motion.article
                key={course.id}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative overflow-hidden border-2 border-black bg-white"
              >

                {/* Top accent */}

                <div
                  className={`absolute left-0 top-0 z-10 h-1.5 w-full ${
                    course.accent === "yellow"
                      ? "bg-[#FFD43A]"
                      : "bg-[#062DA0]"
                  }`}
                />

                {/* Image */}

                <div className="relative h-60 overflow-hidden">

                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                    whileHover={{
                      scale: 1.07,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

                  <div
                    className={`absolute bottom-4 left-4 px-3 py-2 text-[10px] font-black uppercase tracking-widest ${
                      course.accent === "yellow"
                        ? "bg-[#FFD43A] text-black"
                        : "bg-[#062DA0] text-white"
                    }`}
                  >
                    {course.category}
                  </div>

                </div>

                {/* Content */}

                <div className="flex min-h-[285px] flex-col p-7">

                  <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-black/45">

                    <span className="h-2 w-2 bg-[#062DA0]" />

                    Easy Academics

                  </div>

                  <h3 className="text-2xl font-black leading-tight tracking-tight">
                    {course.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/60">
                    {course.description}
                  </p>

                  <div className="mt-auto pt-7">

                    <Link
                      href="#enquire"
                      className="group/button inline-flex items-center gap-4 border-2 border-black bg-[#062DA0] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#FFD43A] hover:text-black"
                    >
                      View Programme

                      <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>

                    </Link>

                  </div>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          STATS STRIP
      ========================================================= */}

      <section className="relative overflow-hidden border-y-2 border-black bg-[#062DA0] text-white">

        {/* Decorative shapes */}

        <div className="pointer-events-none absolute inset-0 opacity-20">

          <div className="absolute left-[8%] top-5 h-12 w-12 rotate-45 border-2 border-white" />

          <div className="absolute right-[12%] top-10 h-20 w-20 rounded-full border-2 border-white" />

          <div className="absolute bottom-4 left-[45%] h-8 w-8 border-2 border-[#FFD43A]" />

        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/20 sm:grid-cols-4">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              className={`px-5 py-10 text-center ${
                index >= 2
                  ? "border-t border-white/20 sm:border-t-0"
                  : ""
              }`}
            >

              <div className="text-3xl font-black tracking-tight sm:text-4xl">
                {stat.value}
              </div>

              <div className="mx-auto mt-3 h-1 w-8 bg-[#FFD43A]" />

              <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                {stat.label}
              </div>

            </motion.div>

          ))}

        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE
      ========================================================= */}

      <section className="relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="lg:sticky lg:top-28"
          >

            <motion.p
              variants={fadeLeft}
              className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
            >
              Why Easy Academics
            </motion.p>

            <motion.h2
              variants={fadeLeft}
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl"
            >
              More Than
              <br />

              <span className="relative inline-block">
                Just Classes.

                <span className="absolute -bottom-2 left-0 h-2 w-full bg-[#FFD43A]" />
              </span>

            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="mt-7 max-w-md text-base leading-7 text-black/60"
            >
              Great academic results start with the right learning environment.
              Our approach combines strong concepts, personal attention,
              structured practice and consistent guidance.
            </motion.p>

            <motion.div
              variants={fadeLeft}
              className="mt-8 inline-flex border-2 border-black bg-[#FFD43A] px-5 py-3 text-xs font-black uppercase tracking-widest"
            >
              Built for Better Learning
            </motion.div>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="border-t-2 border-black"
          >

            {benefits.map((benefit) => (

              <motion.div
                key={benefit.number}
                variants={fadeRight}
                className="group grid gap-5 border-b-2 border-black py-8 sm:grid-cols-[80px_1fr]"
              >

                <div className="text-2xl font-black text-[#062DA0]">
                  {benefit.number}
                </div>

                <div>

                  <h3 className="text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-[#062DA0]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
                    {benefit.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          PROGRAMME HIGHLIGHT
      ========================================================= */}

      <section className="border-y-2 border-black bg-[#FFD43A] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >

            <motion.p
              variants={fadeLeft}
              className="mb-4 text-xs font-black uppercase tracking-[0.3em]"
            >
              Designed Around Students
            </motion.p>

            <motion.h2
              variants={fadeLeft}
              className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              The right course can change the way you learn.
            </motion.h2>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeRight}
            className="border-2 border-black bg-white p-7"
          >

            <p className="text-sm leading-6 text-black/65">
              Whether you are strengthening your foundation, preparing for
              board examinations or working towards CUET, Easy Academics
              provides a focused environment for academic growth.
            </p>

            <Link
              href="#enquire"
              className="mt-6 inline-flex items-center gap-3 bg-[#062DA0] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:bg-black"
            >
              Talk To Us
              <span>→</span>
            </Link>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          ENQUIRY SECTION
      ========================================================= */}

      <section
        id="enquire"
        className="relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >

            <motion.p
              variants={fadeLeft}
              className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
            >
              Start Your Journey
            </motion.p>

            <motion.h2
              variants={fadeLeft}
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl"
            >
              Request a
              <br />
              <span className="text-[#062DA0]">
                Free Counselling.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="mt-6 max-w-md text-base leading-7 text-black/60"
            >
              Tell us a little about your academic goals. Our team can help
              you understand the right programme for your needs.
            </motion.p>

            <motion.div
              variants={fadeLeft}
              className="mt-8 border-l-4 border-[#FFD43A] pl-5"
            >

              <p className="text-sm font-bold leading-6">
                Classes 9th–12th
                <br />
                Science • Commerce • Arts
                <br />
                CBSE • Cambridge • CUET
              </p>

            </motion.div>

          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            onSubmit={(e) => e.preventDefault()}
            className="border-2 border-black bg-white p-6 shadow-[10px_10px_0_0_#FFD43A] sm:p-9"
          >

            <div className="mb-8 border-b-2 border-black pb-6">

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Free Counselling
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight">
                Let&apos;s discuss your goals.
              </h3>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Student Name */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Student Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-2 border-black px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-[#062DA0]"
                />

              </div>

              {/* Phone */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border-2 border-black px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-[#062DA0]"
                />

              </div>

              {/* Class */}

              <div>

                <label
                  htmlFor="class"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Class
                </label>

                <select
                  id="class"
                  defaultValue=""
                  className="w-full border-2 border-black bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#062DA0]"
                >

                  <option value="" disabled>
                    Select class
                  </option>

                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>

                </select>

              </div>

              {/* Stream */}

              <div>

                <label
                  htmlFor="stream"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Stream
                </label>

                <select
                  id="stream"
                  defaultValue=""
                  className="w-full border-2 border-black bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#062DA0]"
                >

                  <option value="" disabled>
                    Select stream
                  </option>

                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                  <option>Not Decided</option>

                </select>

              </div>

              {/* Message */}

              <div className="sm:col-span-2">

                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us what you are looking for..."
                  className="w-full resize-none border-2 border-black px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-[#062DA0]"
                />

              </div>

            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 border-2 border-black bg-[#062DA0] px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#FFD43A] hover:text-black"
            >
              Request Free Counselling
              <span className="text-base">
                →
              </span>
            </button>

          </motion.form>

        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="relative overflow-hidden border-y-2 border-black bg-[#062DA0] px-5 py-14 text-white sm:px-8 lg:px-10">

        <motion.div
          animate={{
            x: [0, 25, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-10 top-1/2 hidden h-32 w-32 -translate-y-1/2 border-2 border-white/20 lg:block"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-2xl font-black sm:text-3xl">
              Stay connected with Easy Academics.
            </p>

            <p className="mt-2 text-sm text-white/65">
              Get useful academic updates and important announcements.
            </p>

          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >

            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 border-2 border-white bg-white px-5 py-4 text-sm text-black outline-none placeholder:text-black/40"
            />

            <button
              type="submit"
              className="border-2 border-black bg-[#FFD43A] px-7 py-4 text-xs font-black uppercase tracking-wide text-black transition-all duration-300 hover:bg-white"
            >
              Subscribe
            </button>

          </form>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer
        id="contact"
        className="bg-black px-5 py-14 text-white sm:px-8 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}

            <div>

              <div className="text-2xl font-black tracking-tight">
                EASY{" "}
                <span className="text-[#FFD43A]">
                  ACADEMICS
                </span>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                A leading coaching institute in Udaipur focused on academic
                excellence and meaningful student growth.
              </p>

            </div>

            {/* EXPLORE */}

            <div>

              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD43A]">
                Explore
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">

                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/about-us"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>

                <Link
                  href="/courses"
                  className="transition-colors hover:text-white"
                >
                  Courses
                </Link>

                <Link
                  href="/achievements"
                  className="transition-colors hover:text-white"
                >
                  Achievements
                </Link>

                <Link
                  href="/blog"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </Link>

              </div>

            </div>

            {/* PROGRAMMES */}

            <div>

              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD43A]">
                Programmes
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">

                <span>Classes 9th–10th</span>
                <span>Science</span>
                <span>Commerce</span>
                <span>Arts</span>
                <span>CUET Preparation</span>

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD43A]">
                Contact
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">

                <a
                  href="tel:7877973935"
                  className="transition-colors hover:text-white"
                >
                  78779 73935
                </a>

                <span>
                  Udaipur, Rajasthan
                </span>

                <a
                  href="https://instagram.com/academicseasy"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @academicseasy
                </a>

              </div>

            </div>

          </div>

          {/* FOOTER BOTTOM */}

          <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

            <span>
              © {new Date().getFullYear()} Easy Academics. All rights reserved.
            </span>

            <span>
              Udaipur, Rajasthan
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}