
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const subjects = [
  {
    number: "01",
    title: "Geography",
    subtitle: "Explore Our World",
    description:
      "Understand the relationship between people, places and the environment through physical and human geography.",
    topics: [
      "Physical Geography",
      "Human Geography",
      "Map Work",
      "Environmental Studies",
    ],
  },
  {
    number: "02",
    title: "History",
    subtitle: "Discover the Past",
    description:
      "Explore important historical events, civilizations and social developments to understand how the world has evolved.",
    topics: [
      "World History",
      "Indian History",
      "Historical Analysis",
      "Exam Preparation",
    ],
  },
  {
    number: "03",
    title: "Psychology",
    subtitle: "Understand Human Behavior",
    description:
      "Develop an understanding of human behavior, mental processes, emotions and psychological concepts.",
    topics: [
      "Human Behavior",
      "Cognitive Processes",
      "Psychological Concepts",
      "Case Studies",
    ],
  },
  {
    number: "04",
    title: "Political Science",
    subtitle: "Politics & Governance",
    description:
      "Learn about political systems, democratic institutions, government structures and contemporary political developments.",
    topics: [
      "Political Theory",
      "Indian Politics",
      "International Relations",
      "Governance",
    ],
  },
  {
    number: "05",
    title: "English",
    subtitle: "Language & Literature",
    description:
      "Strengthen reading comprehension, literary analysis, writing abilities and communication skills.",
    topics: [
      "Literature",
      "Writing Skills",
      "Reading Comprehension",
      "Grammar",
    ],
  },
  {
    number: "06",
    title: "Economics",
    subtitle: "Understanding Economies",
    description:
      "Explore economic principles, markets and policies to better understand the financial and social world.",
    topics: [
      "Microeconomics",
      "Macroeconomics",
      "Economic Development",
      "Case Studies",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Critical Thinking",
    description:
      "Develop the ability to analyze information, evaluate perspectives and form informed conclusions.",
  },
  {
    number: "02",
    title: "Concept Clarity",
    description:
      "Understand humanities subjects through structured explanations and meaningful examples.",
  },
  {
    number: "03",
    title: "Analytical Skills",
    description:
      "Strengthen interpretation, reasoning and answer-writing abilities through regular practice.",
  },
  {
    number: "04",
    title: "Exam Confidence",
    description:
      "Prepare effectively through revision, assessments and focused examination strategies.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
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

export default function ArtsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">

      <Header />

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="relative overflow-hidden bg-white">
        <motion.div
          animate={{
            rotate: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border-[35px] border-[#FFD43A]/30"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              EASY ACADEMICS / ARTS & HUMANITIES
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Explore Ideas.
              <br />
              Understand
              <br />
              <span className="text-[#062DA0]">
                The World.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
              Discover society, culture, history and human
              behavior through structured humanities education
              designed to inspire curiosity, critical thinking
              and academic confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#subjects"
                className="rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
              >
                Explore Subjects
              </a>

              <Link
                href="/contact"
                className="rounded-full border-2 border-black px-8 py-4 font-bold transition hover:bg-[#FFD43A]"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#062DA0] p-8 text-white sm:p-12"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#FFD43A]" />

            <div className="relative flex min-h-[370px] flex-col justify-between">
              <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-bold text-[#062DA0]">
                HUMANITIES STREAM
              </span>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  Explore • Think • Achieve
                </p>

                <h2 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
                  Great minds begin with great questions.
                </h2>
              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/70">
                  Arts & Humanities
                </span>

                <div className="h-10 w-10 rounded-full bg-[#FFD43A]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <section className="bg-[#FFD43A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Humanities Excellence
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              Humanities is more than studying society.
              It's about understanding people, exploring
              perspectives and developing ideas that
              shape our future.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ========================================
          SUBJECTS
      ======================================== */}

      <section
        id="subjects"
        className="scroll-mt-28 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              What We Teach
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Explore Arts{" "}
              <span className="text-[#062DA0]">
                Subjects.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              Focused academic support across the major
              subjects of the Arts and Humanities stream.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <motion.article
                key={subject.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col border-2 border-black/10 bg-white p-8 transition-colors hover:border-[#062DA0] hover:bg-[#062DA0] hover:text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#062DA0] group-hover:text-[#FFD43A]">
                    {subject.number}
                  </span>

                  <span className="text-2xl">
                    ↗
                  </span>
                </div>

                <div className="mt-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#062DA0] group-hover:text-[#FFD43A]">
                    {subject.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {subject.title}
                  </h3>

                  <p className="mt-5 leading-7 text-black/60 group-hover:text-white/75">
                    {subject.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {subject.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-black/15 px-3 py-2 text-xs font-medium group-hover:border-white/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-auto pt-10 font-bold text-[#062DA0] group-hover:text-[#FFD43A]"
                >
                  Enquire About Subject →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          WHY EASY ACADEMICS
      ======================================== */}

      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              Why Easy Academics
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Learn to think.{" "}
              <span className="text-[#062DA0]">
                Learn to grow.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-8 ${
                  index === 1
                    ? "bg-[#FFD43A]"
                    : index === 3
                    ? "bg-[#062DA0] text-white"
                    : "bg-white"
                }`}
              >
                <span className="text-4xl font-black">
                  {benefit.number}
                </span>

                <h3 className="mt-16 text-2xl font-black">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 opacity-70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          LEARNING APPROACH
      ======================================== */}

      <section className="bg-[#062DA0] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD43A]">
              Our Learning Approach
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
              Explore. Understand.
              Analyze. Achieve.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              We combine conceptual understanding, analytical
              thinking and consistent academic preparation
              to help humanities students succeed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Explore Concepts",
              "Understand Perspectives",
              "Develop Analysis",
              "Build Confidence",
            ].map((item, index) => (
              <Reveal
                key={item}
                className="border-t border-white/30 pt-6"
              >
                <span className="text-3xl font-black text-[#FFD43A]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT CTA
      ======================================== */}

      <section className="bg-[#FFD43A] py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Start Your Journey
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Turn your curiosity into academic confidence.
            </h2>

            <p className="mt-5 text-lg text-black/70">
              Connect with Easy Academics and discover
              the right Arts and Humanities learning path.
            </p>
          </Reveal>

          <Link
            href="/contact"
            className="w-fit shrink-0 rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
          >
            Contact Easy Academics →
          </Link>
        </div>
      </section>

      {/* ========================================
          SHARED FOOTER
      ======================================== */}

      <Footer />

    </main>
  );
}
