"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";

const faqs = [
  {
    question: "What courses does Easy Academics offer?",
    answer:
      "Easy Academics offers academic programmes for students across different streams, along with CUET preparation and academic guidance.",
  },
  {
    question: "How can I enquire about admission?",
    answer:
      "You can fill out the enquiry form on this page or contact our team directly at 78779 73935.",
  },
  {
    question: "Do you provide CUET preparation?",
    answer:
      "Yes, CUET preparation is one of the programmes offered by Easy Academics.",
  },
  {
    question: "Where is Easy Academics located?",
    answer:
      "Easy Academics is located at 2nd Floor, 159-B, Lane No. 5, Shakti Nagar Road, Udaipur, Rajasthan 313001.",
  },
  {
    question: "Can I visit the centre before enrolling?",
    answer:
      "Yes. You can contact the Easy Academics team to discuss your requirements and plan a visit to the centre.",
  },
  {
    question: "How can I contact Easy Academics?",
    answer:
      "You can call us directly at 78779 73935 or connect with us through WhatsApp and Instagram.",
  },
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

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* ===================================================== */}
      {/* REUSABLE HEADER */}
      {/* ===================================================== */}

      <Header />

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden border-b border-black/10">

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="absolute right-[7%] top-20 hidden h-32 w-32 rounded-full bg-[#FFD43A] lg:block"
        />

        <motion.div
          initial={{ opacity: 0, rotate: -45, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
          }}
          className="absolute bottom-12 left-[5%] hidden h-16 w-16 bg-[#062DA0] lg:block"
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <span className="h-[3px] w-12 bg-[#FFD43A]" />

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Contact Easy Academics
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[17vw] font-black leading-[0.8] tracking-[-0.08em] sm:text-[120px] lg:text-[155px]"
            >
              LET&apos;S
              <br />
              <span className="text-[#062DA0]">TALK.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-10 max-w-2xl"
            >

              <p className="text-xl font-bold leading-8 sm:text-2xl">
                Your questions.
                <br />
                Your goals.
                <br />
                <span className="text-[#062DA0]">
                  Your next step.
                </span>
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
                Whether you are looking for the right course, need
                admission guidance or simply want to know more about
                Easy Academics, we are here to help.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTACT FORM + DETAILS */}
      {/* ===================================================== */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* FORM */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-[2rem] bg-[#062DA0] p-8 text-white sm:p-10 lg:p-12"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                  Send An Enquiry
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Tell Us What You Need.
                </h2>

              </div>

              <span className="hidden text-6xl font-black text-white/10 sm:block">
                ?
              </span>

            </div>

            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Name + Phone */}

              <div className="grid gap-6 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#FFD43A]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#FFD43A]"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#FFD43A]"
                />

              </div>

              {/* Programme */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                  I&apos;m Interested In
                </label>

                <select
                  defaultValue=""
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none transition focus:border-[#FFD43A]"
                >

                  <option
                    value=""
                    disabled
                    className="text-black"
                  >
                    Select a programme
                  </option>

                  <option className="text-black">
                    Classes 9th–10th
                  </option>

                  <option className="text-black">
                    Science
                  </option>

                  <option className="text-black">
                    Commerce
                  </option>

                  <option className="text-black">
                    Arts
                  </option>

                  <option className="text-black">
                    CUET Preparation
                  </option>

                  <option className="text-black">
                    General Enquiry
                  </option>

                </select>

              </div>

              {/* Message */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#FFD43A]"
                />

              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full bg-[#FFD43A] px-7 py-4 text-sm font-black text-black transition hover:bg-black hover:text-white"
              >
                Send Enquiry →
              </motion.button>

            </form>

          </motion.div>

          {/* CONTACT DETAILS */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-between rounded-[2rem] bg-black p-8 text-white sm:p-10 lg:p-12"
          >

            <div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                We&apos;re just
                <br />
                a conversation
                <br />
                away.
              </h2>

            </div>

            <div className="mt-12 space-y-8">

              {/* CALL */}

              <motion.a
                href="tel:7877973935"
                whileHover={{ x: 8 }}
                className="group block border-t border-white/10 pt-6"
              >

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                  Call Us
                </p>

                <p className="mt-2 text-xl font-bold transition group-hover:text-[#FFD43A]">
                  78779 73935
                </p>

              </motion.a>

              {/* WHATSAPP */}

              <motion.a
                href="https://wa.me/917877973935"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 8 }}
                className="group block border-t border-white/10 pt-6"
              >

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                  WhatsApp
                </p>

                <p className="mt-2 text-xl font-bold transition group-hover:text-[#FFD43A]">
                  Chat With Us →
                </p>

              </motion.a>

              {/* INSTAGRAM */}

              <motion.a
                href="https://instagram.com/academicseasy"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 8 }}
                className="group block border-t border-white/10 pt-6"
              >

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                  Instagram
                </p>

                <p className="mt-2 text-xl font-bold transition group-hover:text-[#FFD43A]">
                  @academicseasy
                </p>

              </motion.a>

              {/* LOCATION */}

              <div className="border-t border-white/10 pt-6">

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                  Location
                </p>

                <p className="mt-2 text-lg font-bold leading-7">
                  2nd Floor, Easy Academics
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  159-B, Lane No. 5,
                  <br />
                  Shakti Nagar Road,
                  <br />
                  Udaipur, Rajasthan 313001
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* WHY CONTACT US */}
      {/* ===================================================== */}

      <section className="bg-[#FFD43A] px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
              Why Reach Out?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Sometimes the
              <br />
              right conversation
              <br />
              changes everything.
            </h2>

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >

            {[
              [
                "01",
                "COURSE GUIDANCE",
                "Understand which programme can fit your academic goals and future plans.",
              ],
              [
                "02",
                "ADMISSION ENQUIRY",
                "Get information about programmes, batches and the admission process.",
              ],
              [
                "03",
                "ACADEMIC GUIDANCE",
                "Talk with the team about your academic journey and the next step.",
              ],
            ].map(([number, title, text]) => (

              <motion.div
                key={number}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[1.5rem] bg-white p-7"
              >

                <div className="flex items-center justify-between">

                  <span className="text-5xl font-black tracking-[-0.06em] text-[#062DA0]/15">
                    {number}
                  </span>

                  <span className="h-3 w-3 rounded-full bg-[#062DA0]" />

                </div>

                <h3 className="mt-8 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {text}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* GOOGLE MAP */}
      {/* ===================================================== */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >

            <div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Find Us
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Come Visit Us.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-black/50">
              Find Easy Academics in Udaipur and get directions to
              our centre.
            </p>

          </motion.div>

          {/* MAP CONTAINER */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-sm"
          >

            <iframe
              src="https://www.google.com/maps?q=2nd+Floor,+EASY+ACADEMICS+-+By+Umang+Khatri,+159-B,+Lane+no.5,+Shakti+Nagar+Rd,+Udaipur,+Rajasthan+313001&output=embed"
              width="100%"
              height="500"
              style={{
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Easy Academics Location"
              className="block w-full"
            />

            {/* MAP LOCATION CARD */}

            <div className="absolute bottom-5 left-5 max-w-[calc(100%-40px)] rounded-2xl bg-white p-5 shadow-xl sm:max-w-sm">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFD43A] text-lg font-black">
                  E
                </div>

                <div>

                  <p className="text-sm font-black">
                    Easy Academics
                  </p>

                  <p className="mt-1 text-xs leading-5 text-black/50">
                    2nd Floor, 159-B, Lane No. 5,
                    <br />
                    Shakti Nagar Road, Udaipur
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* MAP ACTIONS */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 flex flex-col gap-4 sm:flex-row"
          >

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="https://maps.app.goo.gl/nVv851ZiFPtr1fJt7?g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#062DA0] px-7 py-4 text-sm font-black text-white transition hover:bg-black"
            >
              Get Directions →
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="tel:7877973935"
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-sm font-black transition hover:bg-[#FFD43A]"
            >
              Call 78779 73935
            </motion.a>

          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}

      <section className="bg-black px-6 py-20 text-white lg:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
              Frequently Asked
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Got Questions?
            </h2>

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="border-t border-white/15"
          >

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="border-b border-white/15"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >

                    <span className="text-base font-bold sm:text-lg">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="shrink-0 text-3xl font-light text-[#FFD43A]"
                    >
                      +
                    </motion.span>

                  </button>

                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >

                        <p className="max-w-3xl pb-6 text-sm leading-7 text-white/50">
                          {faq.answer}
                        </p>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#FFD43A]"
        >

          <div className="relative px-8 py-16 sm:px-12 lg:px-16 lg:py-20">

            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-50px] top-[-80px] h-64 w-64 rounded-full border-[40px] border-black/10"
            />

            <div className="relative z-10 max-w-3xl">

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Take The Next Step
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Ready to start
                <br />
                your next
                <span className="text-[#062DA0]">
                  {" "}chapter?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
                Let&apos;s talk about your goals, your questions and
                where you want to go next.
              </p>

              <motion.a
                href="https://wa.me/917877973935"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-8 inline-flex rounded-full bg-[#062DA0] px-7 py-4 text-sm font-black text-white transition hover:bg-black"
              >
                Start A Conversation →
              </motion.a>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer
        id="contact"
        className="bg-black px-5 pb-10 text-white sm:px-8 lg:px-10"
      >

        <div className="mx-auto max-w-7xl border-t border-white/15 pt-10">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}

            <div>

              <div className="text-2xl font-black tracking-tight">
                EASY{" "}
                <span className="text-[#FFD43A]">
                  ACADEMICS
                </span>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
                A leading coaching institute in Udaipur focused on
                academic excellence and meaningful student growth.
              </p>

            </div>

            {/* EXPLORE */}

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

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">

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

          {/* FOOTER BOTTOM */}

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