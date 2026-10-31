
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";

const subjects = [
  {
    number: "01",
    title: "Accountancy",
    subtitle: "Financial Foundations",
    description:
      "Build a strong understanding of accounting principles, financial statements, journal entries and financial reporting.",
    topics: ["Accounting Basics", "Financial Statements", "Journal Entries", "Practical Problems"],
  },
  {
    number: "02",
    title: "Economics",
    subtitle: "Understand the Economy",
    description:
      "Explore how markets, businesses and economies work through conceptual learning and practical examples.",
    topics: ["Microeconomics", "Macroeconomics", "Economic Concepts", "Case Studies"],
  },
  {
    number: "03",
    title: "Business Studies",
    subtitle: "Business & Management",
    description:
      "Understand business operations, management principles, marketing and organizational decision-making.",
    topics: ["Management", "Business Environment", "Marketing", "Business Operations"],
  },
  {
    number: "04",
    title: "Entrepreneurship",
    subtitle: "Think Like an Entrepreneur",
    description:
      "Develop entrepreneurial thinking through business ideas, planning, innovation and opportunity identification.",
    topics: ["Business Ideas", "Planning", "Innovation", "Entrepreneurial Skills"],
  },
  {
    number: "05",
    title: "Mathematics",
    subtitle: "Analytical Thinking",
    description:
      "Strengthen mathematical understanding, problem-solving abilities and analytical skills through structured practice.",
    topics: ["Core Concepts", "Problem Solving", "Regular Practice", "Exam Preparation"],
  },
  {
    number: "06",
    title: "English",
    subtitle: "Language & Communication",
    description:
      "Improve comprehension, writing skills, grammar and examination confidence through focused learning.",
    topics: ["Reading", "Writing", "Grammar", "Exam Preparation"],
  },
];

const benefits = [
  {
    number: "01",
    title: "Concept Clarity",
    description:
      "Understand commerce subjects through strong fundamentals and practical explanations.",
  },
  {
    number: "02",
    title: "Practical Learning",
    description:
      "Connect classroom concepts with real-world business and economic situations.",
  },
  {
    number: "03",
    title: "Regular Practice",
    description:
      "Improve accuracy, understanding and confidence through consistent practice.",
  },
  {
    number: "04",
    title: "Exam Readiness",
    description:
      "Prepare with structured revision, assessments and examination strategies.",
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

export default function CommercePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        <motion.div
          animate={{ rotate: [0, 10, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border-[35px] border-[#FFD43A]/30"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              EASY ACADEMICS / COMMERCE
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Understand
              <br />
              Business.
              <br />
              <span className="text-[#062DA0]">
                Shape Your Future.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
              Discover the world of business, finance and economics
              with structured commerce education designed to
              build strong concepts and academic confidence.
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
                COMMERCE STREAM
              </span>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  Learn • Understand • Achieve
                </p>

                <h2 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
                  Big opportunities begin with strong knowledge.
                </h2>
              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/70">
                  Commerce Education
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
              Commerce Excellence
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              Commerce is more than numbers and theories.
              It's about understanding how the world of
              business, finance and economics works.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="scroll-mt-28 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              What We Teach
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Explore Commerce{" "}
              <span className="text-[#062DA0]">
                Subjects.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              Focused academic support across the key subjects
              of the Commerce stream.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <motion.article
                key={subject.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col border-2 border-black/10 bg-white p-8 transition-colors hover:border-[#062DA0] hover:bg-[#062DA0] hover:text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#062DA0] group-hover:text-[#FFD43A]">
                    {subject.number}
                  </span>
                  <span className="text-2xl">↗</span>
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

      {/* WHY CHOOSE COMMERCE */}
      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              Why Easy Academics
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Learn with{" "}
              <span className="text-[#062DA0]">
                confidence.
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
              Practice. Achieve.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              We combine conceptual learning, practical examples
              and consistent academic preparation to help
              students develop confidence in Commerce.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Understand Concepts",
              "Explore Applications",
              "Practice Regularly",
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
              Start Your Journey
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Build your future with the right Commerce education.
            </h2>

            <p className="mt-5 text-lg text-black/70">
              Connect with Easy Academics to explore your
              Commerce learning opportunities.
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

      {/* FOOTER */}
      <footer className="bg-black py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xl font-black">
              EASY{" "}
              <span className="text-[#FFD43A]">
                ACADEMICS
              </span>
            </p>

            <p className="mt-3 text-sm text-white/60">
              Udaipur, Rajasthan
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <Link href="/">Home</Link>
            <Link href="/about-us">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <p className="text-sm text-white/50">
            © 2026 Easy Academics
          </p>
        </div>
      </footer>
    </main>
  );
}
