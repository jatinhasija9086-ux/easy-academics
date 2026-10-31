
"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* FACULTY — 8 CARDS, NO NAMES */

const faculty = [
  { number: "01", subject: "ACCOUNTANCY SPECIALIST", image: "/images/faculty-1.jpg" },
  { number: "02", subject: "BUSINESS STUDIES SPECIALIST", image: "/images/faculty-2.jpg" },
  { number: "03", subject: "ECONOMICS SPECIALIST", image: "/images/faculty-3.jpg" },
  { number: "04", subject: "MATHEMATICS SPECIALIST", image: "/images/faculty-4.jpg" },
  { number: "05", subject: "SCIENCE SPECIALIST", image: "/images/faculty-5.jpg" },
  { number: "06", subject: "ENGLISH SPECIALIST", image: "/images/faculty-6.jpg" },
  { number: "07", subject: "FINANCIAL ACCOUNTING SPECIALIST", image: "/images/faculty-7.jpg" },
  { number: "08", subject: "ACADEMIC GUIDANCE SPECIALIST", image: "/images/faculty-8.jpg" },
];

const benefits = [
  {
    number: "01",
    title: "Conceptual Clarity",
    description: "Understand the fundamentals instead of relying only on memorisation.",
  },
  {
    number: "02",
    title: "Personal Attention",
    description: "An encouraging environment where questions and individual learning needs matter.",
  },
  {
    number: "03",
    title: "Structured Learning",
    description: "Follow a learning plan that supports consistency and academic progress.",
  },
  {
    number: "04",
    title: "Regular Practice",
    description: "Reinforce understanding through revision, questions and application.",
  },
  {
    number: "05",
    title: "Progress Tracking",
    description: "Identify areas for improvement and use feedback to guide the next steps.",
  },
  {
    number: "06",
    title: "Confidence Building",
    description: "Develop the confidence to approach subjects and examinations with clarity.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description: "Start with the student's learning needs, existing knowledge and academic goals.",
  },
  {
    number: "02",
    title: "Explain",
    description: "Break down topics into understandable concepts and build a strong foundation.",
  },
  {
    number: "03",
    title: "Practice",
    description: "Apply what has been learned through questions, exercises and revision.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Review progress, resolve doubts and focus on areas that need further attention.",
  },
];

const testimonials = [
  {
    number: "01",
    quote: "Add a genuine student testimonial here describing their experience at Easy Academics.",
    name: "Student Name",
    detail: "Course or Class",
  },
  {
    number: "02",
    quote: "Add a genuine parent testimonial here describing their child's learning experience.",
    name: "Parent Name",
    detail: "Parent",
  },
  {
    number: "03",
    quote: "Add a genuine student testimonial here about teaching, concept clarity or academic support.",
    name: "Student Name",
    detail: "Course or Class",
  },
];

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* WEBSITE HEADER */}
      <Header />

      {/* ========================================
          1. OUR STORY
      ======================================== */}

      <section
        id="our-story"
        className="relative scroll-mt-24 overflow-hidden bg-[#062DA0] px-6 pb-24 pt-24 text-white md:pb-32 md:pt-32"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-20 top-36 h-[350px] w-[350px] rounded-full border border-[#FFD43A]/30"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FFD43A]">
              <span className="h-[2px] w-10 bg-[#FFD43A]" />
              01 — Our Story
            </p>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Every student
              <br />
              has the potential
              <br />
              to <span className="text-[#FFD43A]">achieve.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
              Easy Academics is a student-focused academic institute in
              Udaipur, Rajasthan, built around the belief that effective
              education begins with clear concepts, consistent practice and
              the right guidance.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-white/65">
              Our focus is to help students strengthen their fundamentals,
              approach learning with confidence and work towards their
              academic goals through a structured learning experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative flex min-h-[380px] items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[#FFD43A] p-5 shadow-2xl sm:h-96 sm:w-96"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#062DA0] bg-white p-8 text-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#062DA0]">
                    EASY ACADEMICS
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight text-black sm:text-5xl">
                    Learn.
                    <br />
                    Grow.
                    <br />
                    <span className="text-[#062DA0]">Achieve.</span>
                  </h2>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-3 right-0 rounded-2xl bg-black px-5 py-4 shadow-xl sm:right-4"
            >
              <p className="text-xs uppercase tracking-wider text-white/60">
                Our Belief
              </p>

              <p className="mt-1 font-bold text-[#FFD43A]">
                Potential into Progress
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          2. FOUNDER
      ======================================== */}

      <section
        id="founder"
        className="scroll-mt-24 px-6 py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative flex justify-center"
          >
            <div className="relative flex aspect-square w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[40%_40%_35%_35%] bg-[#062DA0] p-8">
              <div className="absolute inset-5 rounded-[40%_40%_35%_35%] border border-[#FFD43A]/60" />

              <div className="relative text-center">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
                  The Founder
                </span>

                <h3 className="mt-5 text-4xl font-black text-white sm:text-5xl">
                  Umang Khatri
                </h3>

                <p className="mt-3 text-white/65">
                  Easy Academics
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[#FFD43A]" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#062DA0]">
              02 — Founder
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-6xl">
              A vision for
              <br />
              <span className="text-[#062DA0]">
                better learning.
              </span>
            </h2>

            <div className="mt-7 h-1 w-20 bg-[#FFD43A]" />

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Umang Khatri founded Easy Academics with a focus on creating a
              supportive academic environment where students can strengthen
              their understanding and work towards their goals.
            </p>

            <p className="mt-5 leading-8 text-gray-500">
              The vision is to make learning more structured, approachable
              and focused on genuine understanding, helping students develop
              the knowledge and confidence they need for the next stage of
              their education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          3. FACULTY
      ======================================== */}

      <section
        id="faculty"
        className="scroll-mt-24 bg-[#F7F8FC] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#062DA0]">
              03 — Faculty
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Guidance that
              <br />
              supports <span className="text-[#062DA0]">growth.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              Strong academic guidance starts with clear explanations,
              subject understanding and a commitment to student progress.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {faculty.map((item) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-[#E9EDF6] sm:h-60 lg:h-64">
                  <img
                    src={item.image}
                    alt={item.subject}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD43A] text-sm font-black text-[#062DA0] shadow-md">
                    {item.number}
                  </div>

                  <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#FFD43A] transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="flex min-h-[145px] flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    Subject Expertise
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-snug text-black transition-colors duration-300 group-hover:text-[#062DA0]">
                    {item.subject}
                  </h3>

                  <div className="mt-auto pt-5">
                    <div className="h-1 w-12 bg-[#FFD43A] transition-all duration-300 group-hover:w-24" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================
          4. WHY EASY ACADEMICS?
      ======================================== */}

      <section
        id="why-easy-academics"
        className="scroll-mt-24 bg-[#FFD43A] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em]">
              04 — Why Easy Academics?
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Learning with
              <br />
              <span className="text-[#062DA0]">
                a clear purpose.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              A learning environment built around understanding, consistency
              and the support students need to make progress.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((item) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="rounded-3xl bg-white p-8 transition-shadow duration-300 hover:shadow-xl"
              >
                <span className="text-sm font-black text-[#062DA0]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================
          5. OUR APPROACH
      ======================================== */}

      <section
        id="our-approach"
        className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-24 text-white md:py-32"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#062DA0]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FFD43A]">
              05 — Our Approach
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Learn with clarity.
              <br />
              <span className="text-[#FFD43A]">
                Progress with purpose.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Our learning approach follows a structured process that helps
              students build understanding, practise consistently and improve
              step by step.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14"
          >
            {approach.map((item) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                className="grid gap-4 border-t border-white/15 py-8 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center"
              >
                <span className="text-3xl font-black text-[#FFD43A]">
                  {item.number}
                </span>

                <h3 className="text-2xl font-black md:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-2xl leading-7 text-white/55">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================
          6. TESTIMONIALS
      ======================================== */}

      <section
        id="testimonials"
        className="scroll-mt-24 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#062DA0]">
              06 — Testimonials
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Stories of learning
              <br />
              and <span className="text-[#062DA0]">progress.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              Hear from students and parents about their experiences with
              Easy Academics.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-6 lg:grid-cols-3"
          >
            {testimonials.map((item) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-9"
              >
                <span className="text-6xl font-black leading-none text-[#FFD43A]">
                  “
                </span>

                <p className="mt-4 min-h-28 leading-8 text-gray-600">
                  {item.quote}
                </p>

                <div className="mt-7 border-t border-gray-100 pt-6">
                  <p className="font-black text-[#062DA0]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================
          SHARED FOOTER
      ======================================== */}

      <Footer />

    </main>
  );
}
