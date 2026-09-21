"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Students Guided",
  },
  {
    value: 95,
    suffix: "%",
    label: "Academic Focus",
  },
  {
    value: 3,
    suffix: "",
    label: "Academic Streams",
  },
  {
    value: 2,
    suffix: "",
    label: "Boards",
  },
];

const results = [
  {
    id: 1,
    number: "01",
    score: "98%",
    title: "Outstanding Academic Performance",
    description:
      "A strong academic foundation combined with consistent practice can help students aim higher.",
    category: "Board Excellence",
    type: "blue",
  },
  {
    id: 2,
    number: "02",
    score: "95%",
    title: "Consistent Progress",
    description:
      "Regular guidance, assessment and focused preparation create measurable academic improvement.",
    category: "Student Growth",
    type: "yellow",
  },
  {
    id: 3,
    number: "03",
    score: "90%+",
    title: "Focused Preparation",
    description:
      "Structured preparation helps students approach important examinations with greater confidence.",
    category: "Exam Preparation",
    type: "black",
  },
];

const journey = [
  {
    number: "01",
    title: "LEARN",
    text: "Build a strong understanding of the fundamentals.",
  },
  {
    number: "02",
    title: "PRACTISE",
    text: "Apply concepts through regular questions and revision.",
  },
  {
    number: "03",
    title: "IMPROVE",
    text: "Identify gaps and continuously work on them.",
  },
  {
    number: "04",
    title: "ACHIEVE",
    text: "Turn preparation into confidence and performance.",
  },
];

const achievers = [
  {
    id: 1,
    score: "98%",
    className: "Class XII",
    stream: "Science",
  },
  {
    id: 2,
    score: "96%",
    className: "Class XII",
    stream: "Commerce",
  },
  {
    id: 3,
    score: "94%",
    className: "Class X",
    stream: "CBSE",
  },
  {
    id: 4,
    score: "92%",
    className: "Class XII",
    stream: "Arts",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
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
  visible: {
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
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   ANIMATED NUMBER
========================================================= */

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 4);

      start = Math.floor(eased * value);

      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AchievementsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

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


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b-2 border-black">

        {/* Giant background number */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="pointer-events-none absolute right-[-30px] top-10 hidden text-[260px] font-black leading-none text-black/[0.035] lg:block"
        >
          01
        </motion.div>

        {/* Yellow square */}

        <motion.div
          animate={{
            rotate: [0, 8, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[7%] top-24 hidden h-16 w-16 border-2 border-[#FFD43A] lg:block"
        />

        {/* Blue circle */}

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[10%] bottom-20 hidden h-20 w-20 rounded-full border-2 border-[#062DA0] lg:block"
        />

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl"
          >

            <motion.p
              variants={fadeUp}
              className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[#062DA0]"
            >
              Achievements at Easy Academics
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-6xl font-black leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[110px]"
            >
              RESULTS
              <br />

              <span className="relative inline-block text-[#062DA0]">

                THAT SPEAK.

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-3 left-0 h-3 bg-[#FFD43A] sm:-bottom-5 sm:h-5"
                />

              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start"
            >

              <div className="h-1 w-14 shrink-0 bg-black sm:mt-3" />

              <p className="text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                Every achievement represents dedication, consistency and a
                student moving one step closer to their goals.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          IMPACT / BIG NUMBERS
      ===================================================== */}

      <section className="relative overflow-hidden bg-black text-white">

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border border-white/10"
        />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
          >

            <motion.p
              variants={fadeUp}
              className="text-xs font-black uppercase tracking-[0.3em] text-[#FFD43A]"
            >
              Our Impact
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl"
            >
              Numbers are important.
              <br />
              <span className="text-white/40">
                The journey behind them matters more.
              </span>
            </motion.h2>

          </motion.div>


          <div className="mt-16 grid grid-cols-2 border-t border-white/20 sm:grid-cols-4">

            {stats.map((stat, index) => (

              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                className={`border-b border-white/20 px-4 py-10 sm:border-b-0 sm:px-7 ${
                  index !== 3
                    ? "sm:border-r"
                    : ""
                } ${
                  index >= 2
                    ? "border-t sm:border-t-0"
                    : ""
                }`}
              >

                <div className="text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">

                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                  />

                </div>

                <div className="mt-5 h-1 w-10 bg-[#FFD43A]" />

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          JOURNEY TIMELINE
      ===================================================== */}

      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
            className="max-w-3xl"
          >

            <motion.p
              variants={fadeLeft}
              className="text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
            >
              The Journey
            </motion.p>

            <motion.h2
              variants={fadeLeft}
              className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl"
            >
              SUCCESS ISN&apos;T
              <br />
              A MOMENT.
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="mt-7 max-w-xl text-base leading-7 text-black/60"
            >
              It is built through small improvements, consistent practice
              and the right guidance over time.
            </motion.p>

          </motion.div>


          <div className="relative mt-20">

            {/* Connecting line */}

            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-black/10 lg:left-0 lg:top-10 lg:block lg:h-0.5 lg:w-full" />

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-10 hidden h-0.5 w-full origin-left bg-[#FFD43A] lg:block"
            />

            <div className="grid gap-10 lg:grid-cols-4">

              {journey.map((item, index) => (

                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    delay: index * 0.16,
                    duration: 0.7,
                  }}
                  className="relative"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className={`relative z-10 flex h-20 w-20 items-center justify-center border-2 border-black text-xl font-black ${
                      index % 2 === 0
                        ? "bg-[#FFD43A]"
                        : "bg-[#062DA0] text-white"
                    }`}
                  >
                    {item.number}
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-black/60">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RESULTS SHOWCASE
      ===================================================== */}

      <section className="bg-[#F8F8F8] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <div>

              <motion.p
                variants={fadeLeft}
                className="text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
              >
                Results Showcase
              </motion.p>

              <motion.h2
                variants={fadeLeft}
                className="mt-4 text-5xl font-black tracking-tight sm:text-6xl"
              >
                PROGRESS
                <br />
                <span className="text-[#062DA0]">
                  IN ACTION.
                </span>
              </motion.h2>

            </div>

            <motion.p
              variants={fadeRight}
              className="max-w-md text-sm leading-6 text-black/60"
            >
              Real achievements will be featured here as Easy Academics
              continues to build its collection of student success stories.
            </motion.p>

          </motion.div>


          <div className="grid gap-6 lg:grid-cols-2">

            {results.map((result, index) => {

              const isBlue = result.type === "blue";
              const isYellow = result.type === "yellow";

              return (
                <motion.article
                  key={result.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.7,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`group relative min-h-[360px] overflow-hidden border-2 border-black p-8 sm:p-10 ${
                    index === 0
                      ? "lg:row-span-2 lg:min-h-[736px]"
                      : ""
                  } ${
                    isBlue
                      ? "bg-[#062DA0] text-white"
                      : isYellow
                        ? "bg-[#FFD43A] text-black"
                        : "bg-black text-white"
                  }`}
                >

                  {/* Giant background number */}

                  <div className="pointer-events-none absolute right-[-10px] top-[-30px] text-[180px] font-black leading-none opacity-10">
                    {result.number}
                  </div>


                  <div className="relative flex h-full flex-col">

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-black uppercase tracking-[0.25em] opacity-60">
                        {result.category}
                      </span>

                      <span className="text-xs font-black">
                        {result.number}
                      </span>

                    </div>


                    <div className="mt-auto">

                      <motion.div
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="text-7xl font-black tracking-[-0.06em] sm:text-8xl"
                      >
                        {result.score}
                      </motion.div>

                      <div className="mt-5 h-1 w-12 bg-[#FFD43A]" />

                      <h3 className="mt-5 max-w-lg text-2xl font-black leading-tight sm:text-3xl">
                        {result.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-6 opacity-65">
                        {result.description}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-wide">
                        Explore Achievement

                        <motion.span
                          className="text-lg"
                          whileHover={{
                            x: 6,
                          }}
                        >
                          →
                        </motion.span>
                      </div>

                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          BEYOND MARKS
      ===================================================== */}

      <section className="border-y-2 border-black bg-[#FFD43A] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.p
              variants={fadeUp}
              className="text-xs font-black uppercase tracking-[0.3em]"
            >
              Beyond Marks
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              ACHIEVEMENT
              <br />
              IS MORE THAN
              <br />
              A SCORE.
            </motion.h2>

          </motion.div>


          <div className="mt-20 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "CONFIDENCE",
                text: "Students should feel capable of facing challenges independently.",
              },
              {
                number: "02",
                title: "CONSISTENCY",
                text: "Small improvements repeated every day create meaningful progress.",
              },
              {
                number: "03",
                title: "CLARITY",
                text: "Understanding what you learn creates stronger long-term foundations.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.14,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                }}
                className="border-2 border-black bg-white p-7 sm:p-8"
              >

                <div className="text-sm font-black text-[#062DA0]">
                  {item.number}
                </div>

                <h3 className="mt-10 text-3xl font-black tracking-tight">
                  {item.title}
                </h3>

                <div className="mt-4 h-1 w-10 bg-[#FFD43A]" />

                <p className="mt-5 text-sm leading-6 text-black/60">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          ACHIEVERS
      ===================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <div>

              <motion.p
                variants={fadeLeft}
                className="text-xs font-black uppercase tracking-[0.3em] text-[#062DA0]"
              >
                Student Achievements
              </motion.p>

              <motion.h2
                variants={fadeLeft}
                className="mt-4 text-5xl font-black tracking-tight sm:text-6xl"
              >
                MEET THE
                <br />
                <span className="text-[#062DA0]">
                  ACHIEVERS.
                </span>
              </motion.h2>

            </div>

            <motion.p
              variants={fadeRight}
              className="max-w-md text-sm leading-6 text-black/60"
            >
              A dedicated space for real Easy Academics students, their
              achievements and the stories behind their success.
            </motion.p>

          </motion.div>


          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {achievers.map((student, index) => (

              <motion.article
                key={student.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group border-2 border-black bg-white"
              >

                {/* Placeholder visual */}

                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-black">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="text-[110px] font-black leading-none text-white/10"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <div className="absolute bottom-4 left-4 bg-[#FFD43A] px-3 py-2 text-[10px] font-black uppercase tracking-widest">
                    Student Achievement
                  </div>

                </div>


                <div className="p-6">

                  <div className="text-5xl font-black tracking-[-0.05em] text-[#062DA0]">
                    {student.score}
                  </div>

                  <div className="mt-4 h-1 w-8 bg-[#FFD43A]" />

                  <h3 className="mt-4 text-lg font-black">
                    Student Name
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-black/45">
                    {student.className} • {student.stream}
                  </p>

                  <p className="mt-5 text-xs leading-5 text-black/50">
                    Achievement details will be updated with verified student
                    results.
                  </p>

                </div>

              </motion.article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          STUDENT STORIES
      ===================================================== */}

      <section className="overflow-hidden border-y-2 border-black bg-[#062DA0] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
          >

            <motion.p
              variants={fadeUp}
              className="text-xs font-black uppercase tracking-[0.3em] text-[#FFD43A]"
            >
              Student Stories
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl"
            >
              THE BEST RESULTS
              <br />
              HAVE A STORY.
            </motion.h2>

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-16 border-2 border-white/30 bg-black p-8 sm:p-12 lg:p-16"
          >

            <div className="text-6xl font-black leading-none text-[#FFD43A] sm:text-8xl">
              “
            </div>

            <blockquote className="mt-5 max-w-5xl text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
              My biggest improvement wasn&apos;t just in my marks. I finally
              understood what I was studying.
            </blockquote>

            <div className="mt-10">

              <p className="text-sm font-black uppercase tracking-widest">
                Student Name
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/45">
                Class XII • Commerce
              </p>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        id="start"
        className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-36"
      >

        {/* Giant EA */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[-40px] top-1/2 -translate-y-1/2 text-[260px] font-black leading-none text-white/[0.035] lg:text-[420px]"
        >
          EA
        </motion.div>


        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
          >

            <motion.p
              variants={fadeUp}
              className="text-xs font-black uppercase tracking-[0.3em] text-[#FFD43A]"
            >
              Your Journey Starts Here
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              YOUR RESULT
              <br />
              <span className="text-[#FFD43A]">
                STARTS HERE.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-7 text-white/55"
            >
              Ready to take the next step? Talk to Easy Academics about the
              right academic programme for you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9"
            >

              <Link
                href="tel:7877973935"
                className="inline-flex items-center gap-4 border-2 border-[#FFD43A] bg-[#FFD43A] px-7 py-4 text-xs font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-white"
              >
                Talk To Easy Academics

                <span className="text-lg">
                  →
                </span>
              </Link>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

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