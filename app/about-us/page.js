"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[90vh] overflow-hidden bg-[#062DA0] pt-28">

        {/* Background circles */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 top-20 h-[550px] w-[550px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-20 top-40 h-[400px] w-[400px] rounded-full border border-[#FFD43A]/20"
        />

        <div className="absolute left-[-100px] top-[30%] h-72 w-72 rounded-full bg-[#FFD43A] opacity-10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[75vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >

            <div className="mb-7 flex items-center gap-3">

              <span className="h-[2px] w-12 bg-[#FFD43A]" />

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
                About Easy Academics
              </p>

            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">

              Education

              <br />

              <span className="text-[#FFD43A]">
                beyond
              </span>

              <br />

              classrooms.

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70 md:text-xl">

              A modern academic environment designed to help students
              learn with clarity, grow with confidence and prepare for
              the future.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/courses"
                className="rounded-full bg-[#FFD43A] px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Courses
              </Link>

              <Link
                href="/contact-us"
                className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                Talk To Us
              </Link>

            </div>

          </motion.div>


          {/* RIGHT VISUAL */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative flex min-h-[500px] items-center justify-center"
          >

            {/* Rotating outer ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#FFD43A]/50 md:h-[500px] md:w-[500px]"
            />

            {/* Main circle */}

            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-white shadow-2xl md:h-[390px] md:w-[390px]">

              <div className="absolute inset-5 rounded-full border-[3px] border-[#FFD43A]" />

              <Image
                src="/easy-academics-logo.png"
                alt="Easy Academics"
                width={260}
                height={260}
                className="relative z-10 w-[190px] md:w-[240px]"
              />

            </div>


            {/* Floating card */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-0 rounded-2xl bg-[#FFD43A] px-6 py-5 shadow-xl md:left-4"
            >

              <p className="text-xs font-bold uppercase tracking-wider">
                Our Philosophy
              </p>

              <p className="mt-1 text-xl font-black">
                Learn. Grow. Achieve.
              </p>

            </motion.div>


            {/* Floating number */}

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-20 rounded-2xl bg-black px-6 py-5 text-white shadow-xl md:right-2"
            >

              <p className="text-3xl font-black text-[#FFD43A]">
                9–12
              </p>

              <p className="text-xs text-white/60">
                Academic Classes
              </p>

            </motion.div>

          </motion.div>

        </div>


        {/* Bottom wave */}

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white [clip-path:ellipse(65%_100%_at_50%_100%)]" />

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative px-6 py-24 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#062DA0]">
                Who We Are
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight md:text-6xl">

                More than
                <br />

                <span className="text-[#062DA0]">
                  just coaching.
                </span>

              </h2>

            </motion.div>


            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >

              <p className="text-xl leading-9 text-gray-600 md:text-2xl">

                Easy Academics is a student-focused coaching institute
                based in Udaipur, Rajasthan. We believe that education
                should not simply prepare students for examinations —
                it should prepare them for the opportunities ahead.

              </p>

              <p className="mt-7 text-lg leading-8 text-gray-500">

                Our approach combines academic discipline, conceptual
                clarity, regular practice, personal guidance and
                continuous assessment to create a stronger learning
                experience.

              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="relative overflow-hidden bg-black px-6 py-24 md:py-32">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
              Our Philosophy
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl">

              Simple principles.
              <br />

              <span className="text-[#FFD43A]">
                Serious results.
              </span>

            </h2>

          </motion.div>


          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20 grid gap-5 md:grid-cols-4"
          >

            {[
              {
                number: "01",
                title: "Learn",
                text: "Build strong academic foundations.",
              },
              {
                number: "02",
                title: "Understand",
                text: "Focus on concepts, not memorisation.",
              },
              {
                number: "03",
                title: "Practice",
                text: "Turn knowledge into confidence.",
              },
              {
                number: "04",
                title: "Achieve",
                text: "Work consistently towards your goals.",
              },
            ].map((item) => (

              <motion.div
                key={item.number}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  borderColor: "#FFD43A",
                }}
                className="group border border-white/15 p-8 transition"
              >

                <span className="text-sm font-bold text-[#FFD43A]">
                  {item.number}
                </span>

                <h3 className="mt-16 text-3xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  {item.text}
                </p>

                <div className="mt-8 h-[2px] w-0 bg-[#FFD43A] transition-all duration-500 group-hover:w-full" />

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="bg-[#FFD43A] px-6 py-24 md:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em]">
              Why Easy Academics
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Designed around
              <br />
              the student.
            </h2>

          </motion.div>


          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {[
              ["01", "Expert Guidance", "Structured teaching designed around academic requirements."],
              ["02", "Personal Attention", "A learning environment where students can ask and improve."],
              ["03", "Concept Clarity", "Understanding concepts before moving towards advanced learning."],
              ["04", "Regular Assessment", "Continuous testing and feedback to track progress."],
              ["05", "Doubt Solving", "Dedicated support to overcome difficult topics."],
              ["06", "Career Direction", "Helping students make better academic decisions."],
            ].map(([number, title, text]) => (

              <motion.div
                key={number}
                variants={fadeUp}
                whileHover={{
                  scale: 1.02,
                  y: -6,
                }}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-black text-[#062DA0]">
                    {number}
                  </span>

                  <span className="h-3 w-3 rounded-full bg-[#062DA0]" />

                </div>

                <h3 className="mt-10 text-2xl font-black">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {text}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="bg-white px-6 py-24 md:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#062DA0]">
              At A Glance
            </p>

            <h2 className="mt-5 text-5xl font-black md:text-6xl">
              The Easy Academics
              <br />
              <span className="text-[#062DA0]">
                ecosystem.
              </span>
            </h2>

          </motion.div>


          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 gap-y-16 md:grid-cols-4"
          >

            {[
              ["9–12", "Classes"],
              ["03", "Streams"],
              ["CBSE", "Board"],
              ["CUET", "Preparation"],
            ].map(([number, label]) => (

              <motion.div
                key={label}
                variants={fadeUp}
                className="text-center"
              >

                <p className="text-5xl font-black text-[#062DA0] md:text-6xl">
                  {number}
                </p>

                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {label}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062DA0] px-6 py-24 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center"
          >

            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-[360px] w-[360px] items-center justify-center rounded-full bg-[#FFD43A] md:h-[440px] md:w-[440px]"
            >

              <div className="flex h-[280px] w-[280px] items-center justify-center rounded-full bg-black text-center md:h-[350px] md:w-[350px]">

                <div>

                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
                    Founder
                  </p>

                  <h3 className="mt-4 text-5xl font-black text-white">
                    Umang
                    <br />
                    Khatri
                  </h3>

                </div>

              </div>

            </motion.div>

          </motion.div>


          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
              The Founder
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">

              Building an institution
              <br />

              <span className="text-[#FFD43A]">
                with purpose.
              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-white/65">
              Easy Academics was founded by Umang Khatri with the vision of
              creating a learning environment where academic excellence,
              discipline and individual guidance come together.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/65">
              The goal is to help students discover their potential,
              strengthen their fundamentals and move confidently towards
              their future.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-black px-6 py-24 text-center md:py-32">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#062DA0] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD43A]">
              Your Next Chapter
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">

              Your future deserves
              <br />

              <span className="text-[#FFD43A]">
                the right beginning.
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
              Discover the Easy Academics approach and take the next step
              towards your academic goals.
            </p>

            <Link
              href="/contact-us"
              className="mt-10 inline-flex rounded-full bg-[#FFD43A] px-9 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-white"
            >
              Get In Touch
            </Link>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-white px-6 py-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">

          <div className="flex items-center">

            <Image
              src="/easy-academics-logo.png"
              alt="Easy Academics"
              width={160}
              height={70}
              className="w-[130px]"
            />

          </div>

          <p className="text-sm text-gray-500">
            © 2026 Easy Academics. All rights reserved.
          </p>

          <p className="text-sm font-medium">
            Udaipur, Rajasthan
          </p>

        </div>

      </footer>

    </main>
  );
}