
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const programs = [
  {
    number: "01",
    title: "BBA",
    fullName: "Bachelor of Business Administration",
    subtitle: "Business & Management",
    description:
      "Build a strong understanding of business administration, management principles, marketing, finance and organizational operations.",
    topics: [
      "Management Principles",
      "Business Economics",
      "Marketing",
      "Business Finance",
    ],
  },
  {
    number: "02",
    title: "B.Com",
    fullName: "Bachelor of Commerce",
    subtitle: "Commerce & Finance",
    description:
      "Strengthen your understanding of accounting, commerce, taxation, economics and financial concepts through structured academic support.",
    topics: [
      "Financial Accounting",
      "Business Law",
      "Economics",
      "Taxation",
    ],
  },
  {
    number: "03",
    title: "MBA",
    fullName: "Master of Business Administration",
    subtitle: "Advanced Management",
    description:
      "Develop deeper understanding of business strategy, management, organizational behavior and analytical decision-making.",
    topics: [
      "Strategic Management",
      "Marketing Management",
      "Financial Management",
      "Business Strategy",
    ],
  },
  {
    number: "04",
    title: "M.Com",
    fullName: "Master of Commerce",
    subtitle: "Advanced Commerce",
    description:
      "Explore advanced commerce concepts, financial management, business research and economic analysis through focused learning.",
    topics: [
      "Advanced Accounting",
      "Financial Management",
      "Business Research",
      "Economic Analysis",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Concept Clarity",
    description:
      "Understand complex college-level topics through structured explanations and focused learning.",
  },
  {
    number: "02",
    title: "Subject Guidance",
    description:
      "Receive academic support in relevant subjects and strengthen areas that require attention.",
  },
  {
    number: "03",
    title: "Practical Understanding",
    description:
      "Connect theoretical concepts with business, commerce and management applications.",
  },
  {
    number: "04",
    title: "Academic Confidence",
    description:
      "Develop better understanding, consistent study habits and confidence for examinations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
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

export default function CollegeUniversitiesPage() {
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
              EASY ACADEMICS / COLLEGE & UNIVERSITIES
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Higher
              <br />
              Education.
              <br />
              <span className="text-[#062DA0]">
                Greater Possibilities.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
              Take your academic journey further with
              structured learning support for undergraduate
              and postgraduate programs in business,
              commerce and management.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
              >
                Explore Programs
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
                UNDERGRADUATE & POSTGRADUATE
              </span>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  Learn • Advance • Achieve
                </p>

                <h2 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
                  Your academic ambitions deserve the right direction.
                </h2>
              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/70">
                  BBA • B.Com • MBA • M.Com
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
              Higher Education Support
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              College education is about more than
              earning a degree. It's about developing
              knowledge, confidence and the skills
              to move towards your future goals.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="scroll-mt-28 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              Our Academic Programs
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Explore College{" "}
              <span className="text-[#062DA0]">
                Programs.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              Academic support for undergraduate and
              postgraduate courses in commerce,
              business and management.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <motion.article
                key={program.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: (index % 2) * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col border-2 border-black/10 bg-white p-8 transition-colors hover:border-[#062DA0] hover:bg-[#062DA0] hover:text-white sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#062DA0] group-hover:text-[#FFD43A]">
                    {program.number}
                  </span>

                  <span className="text-2xl">
                    ↗
                  </span>
                </div>

                <div className="mt-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#062DA0] group-hover:text-[#FFD43A]">
                    {program.subtitle}
                  </p>

                  <h3 className="mt-3 text-5xl font-black">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm font-bold text-black/70 group-hover:text-white/80">
                    {program.fullName}
                  </p>

                  <p className="mt-6 leading-7 text-black/60 group-hover:text-white/75">
                    {program.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {program.topics.map((topic) => (
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
                  Enquire About Program →
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
              Academic support{" "}
              <span className="text-[#062DA0]">
                that matters.
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

      {/* LEARNING APPROACH */}
      <section className="bg-[#062DA0] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD43A]">
              Our Learning Approach
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
              Understand. Apply.
              Advance. Achieve.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              We focus on helping students strengthen
              academic understanding, explore practical
              applications and prepare confidently
              for college-level examinations.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Understand Concepts",
              "Develop Knowledge",
              "Practice & Apply",
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

      {/* CONTACT CTA */}
      <section className="bg-[#FFD43A] py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Take the Next Step
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Take your higher education journey forward.
            </h2>

            <p className="mt-5 text-lg text-black/70">
              Connect with Easy Academics and explore
              academic support for your college program.
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
