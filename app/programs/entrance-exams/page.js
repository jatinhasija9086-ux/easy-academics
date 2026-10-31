
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const exams = [
  {
    number: "01",
    title: "CUET",
    subtitle: "Common University Entrance Test",
    description:
      "Prepare for university admissions through structured learning, subject-based preparation, aptitude practice and examination strategies.",
    topics: [
      "Domain Subjects",
      "Language Preparation",
      "General Aptitude",
      "Mock Tests",
    ],
  },
  {
    number: "02",
    title: "IPMAT",
    subtitle: "Integrated Programme in Management Aptitude Test",
    description:
      "Build quantitative, verbal and analytical abilities through focused preparation for integrated management entrance examinations.",
    topics: [
      "Quantitative Aptitude",
      "Verbal Ability",
      "Problem Solving",
      "Mock Tests",
    ],
  },
  {
    number: "03",
    title: "Other Entrance Exams",
    subtitle: "College Entrance Preparation",
    description:
      "Explore preparation support for other college entrance examinations through conceptual learning, regular practice and academic guidance.",
    topics: [
      "Exam Strategy",
      "Concept Clarity",
      "Practice Sessions",
      "Academic Guidance",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Concept Clarity",
    description:
      "Develop strong foundations in the subjects and aptitude areas relevant to your examination.",
  },
  {
    number: "02",
    title: "Exam Strategy",
    description:
      "Understand examination patterns, question approaches and effective preparation techniques.",
  },
  {
    number: "03",
    title: "Regular Practice",
    description:
      "Build accuracy and confidence through consistent practice and assessments.",
  },
  {
    number: "04",
    title: "Performance Review",
    description:
      "Identify areas for improvement and refine your preparation with structured feedback.",
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

export default function EntranceExamsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      <Header />

      {/* HERO SECTION */}
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
              EASY ACADEMICS / ENTRANCE EXAMS
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Prepare
              <br />
              Smarter.
              <br />
              <span className="text-[#062DA0]">
                Aim Higher.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
              Take the next step towards your academic goals
              with focused entrance exam preparation,
              conceptual learning and the right guidance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#exams"
                className="rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
              >
                Explore Exams
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
                ENTRANCE PREPARATION
              </span>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  Prepare • Practice • Achieve
                </p>

                <h2 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
                  Your next opportunity begins with the right preparation.
                </h2>
              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/70">
                  CUET • IPMAT • More
                </span>
                <div className="h-10 w-10 rounded-full bg-[#FFD43A]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#FFD43A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Beyond Board Examinations
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              Entrance examinations require more than
              memorization. Build the understanding,
              preparation strategy and confidence
              needed for your next academic milestone.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ENTRANCE EXAMS */}
      <section
        id="exams"
        className="scroll-mt-28 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              What We Prepare You For
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Explore Entrance{" "}
              <span className="text-[#062DA0]">
                Examinations.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              Focused preparation for university and college
              entrance examinations.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {exams.map((exam, index) => (
              <motion.article
                key={exam.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col border-2 border-black/10 bg-white p-8 transition-colors hover:border-[#062DA0] hover:bg-[#062DA0] hover:text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#062DA0] group-hover:text-[#FFD43A]">
                    {exam.number}
                  </span>
                  <span className="text-2xl">↗</span>
                </div>

                <div className="mt-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#062DA0] group-hover:text-[#FFD43A]">
                    {exam.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {exam.title}
                  </h3>

                  <p className="mt-5 leading-7 text-black/60 group-hover:text-white/75">
                    {exam.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {exam.topics.map((topic) => (
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
                  Enquire About Exam →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EASY ACADEMICS */}
      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              Why Easy Academics
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Preparation with{" "}
              <span className="text-[#062DA0]">
                purpose.
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

      {/* PREPARATION APPROACH */}
      <section className="bg-[#062DA0] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD43A]">
              Our Preparation Approach
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
              Learn. Practice.
              Analyze. Improve.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A structured learning approach focused on
              understanding concepts, practicing questions
              and continuously improving examination readiness.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Understand the Exam",
              "Build Strong Concepts",
              "Practice & Assess",
              "Improve Performance",
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

      {/* CONTACT CTA */}
      <section className="bg-[#FFD43A] py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Start Your Preparation
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Your next academic opportunity starts here.
            </h2>

            <p className="mt-5 text-lg text-black/70">
              Connect with Easy Academics to explore
              entrance examination preparation options.
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

      {/* SHARED FOOTER */}
      <Footer />
    </main>
  );
}
