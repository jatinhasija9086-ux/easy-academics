"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    category: "Education",
    date: "12 Sep 2026",
    title: "Why Strong Basics Matter More Than Ever",
    excerpt:
      "A strong academic foundation doesn't just help students score better — it builds confidence, clarity and the ability to learn independently.",
    tag: "FOUNDATION",
    number: "01",
  },
  {
    id: 2,
    category: "Study Tips",
    date: "08 Sep 2026",
    title: "How to Study Smarter, Not Just Longer",
    excerpt:
      "Discover practical ways to structure your study sessions, stay focused and make your preparation more effective.",
    tag: "PRODUCTIVITY",
    number: "02",
  },
  {
    id: 3,
    category: "Career",
    date: "04 Sep 2026",
    title: "Choosing the Right Career After School",
    excerpt:
      "Career decisions become easier when students understand their strengths, interests and the opportunities available to them.",
    tag: "CAREER",
    number: "03",
  },
  {
    id: 4,
    category: "CUET",
    date: "30 Aug 2026",
    title: "A Practical Approach to CUET Preparation",
    excerpt:
      "From understanding the exam structure to creating a preparation routine, here's how students can approach CUET with clarity.",
    tag: "CUET",
    number: "04",
  },
  {
    id: 5,
    category: "Student Life",
    date: "25 Aug 2026",
    title: "Balancing Academics, Friends & Personal Growth",
    excerpt:
      "Academic success is important, but so is building healthy habits, confidence and experiences outside the classroom.",
    tag: "STUDENT LIFE",
    number: "05",
  },
  {
    id: 6,
    category: "Education",
    date: "20 Aug 2026",
    title: "The Role of Teachers in Student Success",
    excerpt:
      "Great teachers do more than explain concepts. They help students ask better questions, overcome challenges and believe in themselves.",
    tag: "MENTORSHIP",
    number: "06",
  },
];

const categories = [
  "All",
  "Education",
  "Career",
  "CUET",
  "Study Tips",
  "Student Life",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
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
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <Link href="/" className="flex items-center">
            <Image
              src="/easy-academics-logo.png"
              alt="Easy Academics"
              width={190}
              height={80}
              priority
              className="h-auto w-[190px]"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">

            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Courses", "/courses"],
              ["Achievements", "/achievements"],
              ["Blog", "/blog"],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="group relative text-sm font-medium"
              >
                {name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#FFD43A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="rounded-full bg-[#062DA0] px-6 py-3 text-sm font-bold text-white transition hover:bg-black"
              >
                Contact Us
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.nav>


      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-black/10">

        {/* Decorative shapes */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-[8%] top-16 hidden h-28 w-28 rounded-full bg-[#FFD43A] lg:block"
        />

        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-10 left-[5%] hidden h-16 w-16 bg-[#062DA0] lg:block"
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-5xl"
          >

            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-[3px] w-12 bg-[#FFD43A]" />

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Ideas • Insights • Guidance
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[16vw] font-black leading-[0.78] tracking-[-0.08em] sm:text-[120px] lg:text-[150px]"
            >
              BLOG
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-10 max-w-3xl"
            >
              <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                THINK.
                <br />
                LEARN.
                <br />
                <span className="text-[#062DA0]">GROW.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
                Ideas, strategies and insights designed to help students
                learn better, think bigger and move confidently towards
                their goals.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* ================= FEATURED BLOG ================= */}

      <section className="bg-[#062DA0] px-6 py-20 text-white lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 flex items-end justify-between gap-6"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                Featured
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Worth Reading.
              </h2>
            </div>

            <span className="hidden text-7xl font-black leading-none text-white/10 sm:block">
              01
            </span>
          </motion.div>


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid overflow-hidden rounded-[2rem] bg-black lg:grid-cols-[1.05fr_0.95fr]"
          >

            {/* Visual */}

            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#FFD43A] p-10 lg:min-h-[500px]">

              <motion.div
                animate={{
                  rotate: [0, 4, 0, -4, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-64 w-64 rounded-full border-[35px] border-black sm:h-80 sm:w-80"
              />

              <div className="relative z-10 text-center">
                <div className="text-sm font-black uppercase tracking-[0.3em]">
                  Easy Academics
                </div>

                <div className="mt-3 text-7xl font-black tracking-[-0.08em] sm:text-9xl">
                  THINK
                </div>

                <div className="mt-2 text-lg font-bold">
                  BEYOND THE CLASSROOM
                </div>
              </div>
            </div>


            {/* Content */}

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                <span>Education</span>
                <span className="h-1 w-1 rounded-full bg-[#FFD43A]" />
                <span>12 Sep 2026</span>
              </div>

              <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Why Strong Basics Matter More Than Ever
              </h3>

              <p className="mt-6 leading-7 text-white/55">
                A strong academic foundation doesn't just help students
                score better — it builds confidence, clarity and the
                ability to learn independently.
              </p>

              <motion.div
                whileHover={{ x: 8 }}
                className="mt-8"
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em] text-[#FFD43A]"
                >
                  Read Article
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </section>


      {/* ================= ARTICLES ================= */}

      <section
        id="articles"
        className="px-6 py-20 lg:px-8 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
              Latest Articles
            </p>

            <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Explore Our Ideas.
              </h2>

              <p className="max-w-md text-sm leading-6 text-black/50">
                Practical knowledge and useful perspectives for students,
                parents and anyone invested in academic growth.
              </p>

            </div>
          </motion.div>


          {/* Category Filter */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 flex flex-wrap gap-3 border-y border-black/10 py-5"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-[#062DA0] text-white"
                    : "bg-black/5 text-black hover:bg-[#FFD43A]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>


          {/* Blog Grid */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >

            {filteredBlogs.map((blog) => (
              <motion.article
                key={blog.id}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm"
              >

                {/* Blog Visual */}

                <div className="relative h-64 overflow-hidden bg-[#FFD43A]">

                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >

                    {blog.id % 3 === 1 && (
                      <>
                        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border-[30px] border-[#062DA0]" />
                        <div className="absolute bottom-0 left-0 h-20 w-20 bg-black" />
                      </>
                    )}

                    {blog.id % 3 === 2 && (
                      <>
                        <div className="absolute left-8 top-8 h-32 w-32 rotate-12 bg-[#062DA0]" />
                        <div className="absolute bottom-[-40px] right-[-20px] h-52 w-52 rounded-full bg-black" />
                      </>
                    )}

                    {blog.id % 3 === 0 && (
                      <>
                        <div className="absolute left-[-40px] top-[-40px] h-52 w-52 rounded-full bg-black" />
                        <div className="absolute bottom-8 right-8 h-24 w-24 rotate-45 bg-[#062DA0]" />
                      </>
                    )}

                  </motion.div>


                  <div className="absolute left-6 top-6 z-10">
                    <span className="rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em]">
                      {blog.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-[-8px] right-5 z-10 text-[110px] font-black leading-none tracking-[-0.1em] text-black/10">
                    {blog.number}
                  </div>

                </div>


                {/* Blog Content */}

                <div className="p-7">

                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-black/40">
                    <span>{blog.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#FFD43A]" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/55">
                    {blog.excerpt}
                  </p>


                  <motion.div
                    whileHover={{ x: 6 }}
                    className="mt-7"
                  >
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#062DA0]"
                    >
                      Read More
                      <span>→</span>
                    </Link>
                  </motion.div>

                </div>

              </motion.article>
            ))}

          </motion.div>


          {/* Empty State */}

          {filteredBlogs.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-bold">
                No articles found in this category.
              </p>

              <button
                onClick={() => setActiveCategory("All")}
                className="mt-5 rounded-full bg-[#062DA0] px-6 py-3 text-sm font-bold text-white"
              >
                View All Articles
              </button>
            </div>
          )}

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 pb-20 lg:px-8 lg:pb-28">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#FFD43A]"
        >

          <div className="relative px-8 py-16 sm:px-12 lg:px-16 lg:py-20">

            <div className="absolute right-[-50px] top-[-70px] h-64 w-64 rounded-full border-[40px] border-black/10" />

            <div className="relative z-10 max-w-3xl">

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Keep Growing
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Your next chapter
                <br />
                starts with
                <span className="text-[#062DA0]"> learning.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
                Have questions about courses, preparation or your academic
                journey? Let's start a conversation.
              </p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#062DA0] px-7 py-4 text-sm font-black text-white transition hover:bg-black"
                >
                  Talk To Us →
                </Link>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer
        id="contact"
        className="bg-black px-5 pb-10 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl border-t border-white/15 pt-10">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="text-2xl font-black tracking-tight">
                EASY{" "}
                <span className="text-[#FFD43A]">
                  ACADEMICS
                </span>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
                A leading coaching institute in Udaipur focused on academic
                excellence and meaningful student growth.
              </p>
            </div>


            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD43A]">
                Explore
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">

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

              </div>
            </div>


            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD43A]">
                Programmes
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">

                <span>Classes 9th–10th</span>
                <span>Science</span>
                <span>Commerce</span>
                <span>Arts</span>
                <span>CUET Preparation</span>

              </div>
            </div>


            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFD43A]">
                Contact
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">

                <a
                  href="tel:7877973935"
                  className="transition-colors hover:text-white"
                >
                  78779 73935
                </a>

                <span>Udaipur, Rajasthan</span>

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


          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

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