
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  Camera,
  Video,
  MapPin,
  MessageCircle,
  Send,
  ExternalLink,
  ChevronDown,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

// ============================================
// CONTACT DETAILS
// ============================================

const CONTACT = {
  phone: "7877973935",
  displayPhone: "78779 73935",
  whatsapp: "917877973935",

  // Add official email later
  email: "",

  instagram: "https://www.instagram.com/academicseasy/",
  instagramHandle: "@academicseasy",

  // Demo YouTube link
  youtube: "https://www.youtube.com/",

  address:
    "2nd Floor, 159-B, Lane No. 5, Shakti Nagar Road, Udaipur, Rajasthan 313001",

  maps:
    "https://maps.app.goo.gl/nVv851ZiFPtr1fJt7?g_st=ic",
};

// ============================================
// FAQ DATA
// ============================================

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

// ============================================
// ANIMATION COMPONENT
// ============================================

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// CONTACT CARD
// ============================================

function ContactCard({
  icon: Icon,
  number,
  label,
  title,
  description,
  href,
  action,
  external = false,
  dark = false,
}) {
  const content = (
    <>
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            dark
              ? "bg-[#FFD43A] text-[#062DA0]"
              : "bg-[#EEF2FF] text-[#062DA0]"
          }`}
        >
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span
          className={`text-xs font-black ${
            dark ? "text-white/35" : "text-slate-300"
          }`}
        >
          {number}
        </span>
      </div>

      <div className="mt-9">
        <p
          className={`text-xs font-black uppercase tracking-[0.18em] ${
            dark ? "text-[#FFD43A]" : "text-[#062DA0]"
          }`}
        >
          {label}
        </p>

        <h3 className="mt-3 break-words text-xl font-black leading-snug sm:text-2xl">
          {title}
        </h3>

        <p
          className={`mt-3 text-sm leading-7 ${
            dark ? "text-white/65" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>

      <div
        className={`mt-8 flex items-center justify-between border-t pt-5 ${
          dark ? "border-white/15" : "border-slate-100"
        }`}
      >
        <span className="text-sm font-bold">{action}</span>

        <ArrowUpRight
          size={20}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
    </>
  );

  const styles = `group flex h-full min-h-[300px] flex-col justify-between rounded-[1.5rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
    dark
      ? "bg-[#062DA0] text-white"
      : "border border-slate-200 bg-white text-slate-900"
  }`;

  if (!href) {
    return <div className={styles}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={styles}
    >
      {content}
    </a>
  );
}

// ============================================
// MAIN CONTACT PAGE
// ============================================

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    programme: "",
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // WhatsApp enquiry submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Hello Easy Academics,",
      "",
      "I would like to enquire about admission.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Programme: ${formData.programme || "General Enquiry"}`,
      `Message: ${formData.message || "Not provided"}`,
    ].join("\n");

    const url = `https://wa.me/${
      CONTACT.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Header />

      {/* ===================================== */}
      {/* HERO SECTION */}
      {/* ===================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="absolute right-[7%] top-20 hidden h-32 w-32 rounded-full bg-[#FFD43A] lg:block"
        />

        <motion.div
          initial={{ opacity: 0, rotate: -45, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="absolute bottom-12 left-[5%] hidden h-16 w-16 bg-[#062DA0] lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-[#FFD43A]" />

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Contact Easy Academics
              </span>
            </div>

            <h1 className="mt-7 text-[17vw] font-black leading-[0.85] tracking-[-0.08em] sm:text-[120px] lg:text-[155px]">
              LET&apos;S
              <br />
              <span className="text-[#062DA0]">TALK.</span>
            </h1>

            <div className="mt-10 max-w-2xl">
              <p className="text-xl font-bold leading-8 sm:text-2xl">
                Your questions.
                <br />
                Your goals.
                <br />
                <span className="text-[#062DA0]">
                  Your next step.
                </span>
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Whether you are looking for the right course,
                need admission guidance or simply want to
                know more about Easy Academics, we are
                here to help.
              </p>

              <a
                href="#contact-options"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#062DA0] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#173FC4]"
              >
                Explore Contact Options
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================== */}
      {/* CONTACT OPTIONS */}
      {/* ===================================== */}

      <section
        id="contact-options"
        className="scroll-mt-28 bg-[#F7F9FD] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#062DA0]">
                  Connect With Us
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Reach Us Your Way.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-600">
                  Have a question? Choose whichever
                  way is most convenient for you.
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD43A] text-[#062DA0]">
                <MessageCircle size={28} />
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <ContactCard
                icon={Phone}
                number="01"
                label="Admissions / Contact Number"
                title={CONTACT.displayPhone}
                description="Speak directly with our team about courses, batches and admissions."
                href={`tel:${CONTACT.phone}`}
                action="Call Now"
                dark
              />
            </Reveal>

            <Reveal delay={0.05}>
              <ContactCard
                icon={Mail}
                number="02"
                label="Gmail / Email"
                title={CONTACT.email || "Email Coming Soon"}
                description="Send us your academic questions and enquiries through email."
                href={
                  CONTACT.email
                    ? `mailto:${CONTACT.email}`
                    : undefined
                }
                action={
                  CONTACT.email
                    ? "Send Email"
                    : "Email Will Be Added"
                }
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ContactCard
                icon={Camera}
                number="03"
                label="Instagram Page"
                title={CONTACT.instagramHandle}
                description="Follow Easy Academics for educational content, updates and announcements."
                href={CONTACT.instagram}
                action="Visit Instagram"
                external
              />
            </Reveal>

            <Reveal delay={0.05}>
              <ContactCard
                icon={Video}
                number="04"
                label="YouTube Channel"
                title="Learn With Easy Academics"
                description="Explore educational videos and learning resources. The official channel link will be added later."
                href={CONTACT.youtube}
                action="Open YouTube (Demo)"
                external
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ContactCard
                icon={MessageCircle}
                number="05"
                label="WhatsApp"
                title="Chat With Our Team"
                description="Send a quick message for admission enquiries and course information."
                href={`https://wa.me/${CONTACT.whatsapp}`}
                action="Start WhatsApp Chat"
                external
              />
            </Reveal>

            <Reveal delay={0.15}>
              <ContactCard
                icon={MapPin}
                number="06"
                label="Our Location"
                title="Easy Academics, Udaipur"
                description={CONTACT.address}
                href={CONTACT.maps}
                action="Get Directions"
                external
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* ENQUIRY FORM */}
      {/* ===================================== */}

      <section id="enquiry" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-[#062DA0] p-8 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                Send An Enquiry
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Tell Us What You Need.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                Fill out the details below. We'll prepare
                your enquiry and open it in WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60"
                    >
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#FFD43A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value)
                      }
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#FFD43A]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#FFD43A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-programme"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60"
                  >
                    I&apos;m Interested In
                  </label>

                  <select
                    id="contact-programme"
                    value={formData.programme}
                    onChange={(e) =>
                      updateField("programme", e.target.value)
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#062DA0] px-5 py-4 text-sm text-white outline-none focus:border-[#FFD43A]"
                  >
                    <option value="">Select a programme</option>
                    <option value="Classes 9th–10th">
                      Classes 9th–10th
                    </option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                    <option value="CUET Preparation">
                      CUET Preparation
                    </option>
                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#FFD43A]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 rounded-full bg-[#FFD43A] px-8 py-4 text-sm font-black text-[#062DA0] transition hover:bg-white"
                >
                  Send Enquiry via WhatsApp
                  <Send size={17} />
                </motion.button>

                <p className="text-xs leading-6 text-white/45">
                  WhatsApp will open with your details.
                  Review the message and press Send
                  to submit your enquiry.
                </p>
              </form>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#080D1D] p-8 text-white sm:p-10 lg:p-12">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
                  Get In Touch
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight">
                  We&apos;re just
                  <br />
                  a conversation
                  <br />
                  away.
                </h2>

                <p className="mt-6 max-w-sm leading-8 text-white/55">
                  Have questions about admissions,
                  programmes or your academic future?
                  Connect with the Easy Academics team.
                </p>
              </div>

              <div className="mt-12 space-y-7">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="group block border-t border-white/15 pt-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Call Us
                  </p>

                  <p className="mt-2 flex items-center gap-3 text-xl font-bold group-hover:text-[#FFD43A]">
                    {CONTACT.displayPhone}
                    <ArrowUpRight size={18} />
                  </p>
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-white/15 pt-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    WhatsApp
                  </p>

                  <p className="mt-2 flex items-center gap-3 text-xl font-bold group-hover:text-[#FFD43A]">
                    Chat With Us
                    <ArrowUpRight size={18} />
                  </p>
                </a>

                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-white/15 pt-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Instagram
                  </p>

                  <p className="mt-2 flex items-center gap-3 text-xl font-bold group-hover:text-[#FFD43A]">
                    {CONTACT.instagramHandle}
                    <ArrowUpRight size={18} />
                  </p>
                </a>

                <div className="border-t border-white/15 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Location
                  </p>

                  <p className="mt-3 text-base font-bold leading-8">
                    Easy Academics
                  </p>

                  <p className="mt-2 text-sm leading-7 text-white/55">
                    {CONTACT.address}
                  </p>

                  <a
                    href={CONTACT.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FFD43A]"
                  >
                    Open in Google Maps
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================== */}
      {/* WHY CONTACT US */}
      {/* ===================================== */}

      <section className="bg-[#FFD43A] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
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
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "COURSE GUIDANCE",
                text: "Understand which programme can fit your academic goals and future plans.",
              },
              {
                number: "02",
                title: "ADMISSION ENQUIRY",
                text: "Get information about programmes, batches and the admission process.",
              },
              {
                number: "03",
                title: "ACADEMIC GUIDANCE",
                text: "Talk with the team about your academic journey and the next step.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full rounded-[1.5rem] bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black text-[#062DA0]/15">
                      {item.number}
                    </span>

                    <span className="h-3 w-3 rounded-full bg-[#062DA0]" />
                  </div>

                  <h3 className="mt-8 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* GOOGLE MAP */}
      {/* ===================================== */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                  Find Us
                </p>

                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                  Come Visit Us.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                Find Easy Academics in Udaipur
                and get directions to our centre.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=2nd+Floor,+EASY+ACADEMICS+-+By+Umang+Khatri,+159-B,+Lane+no.5,+Shakti+Nagar+Rd,+Udaipur,+Rajasthan+313001&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Easy Academics Location"
                className="block w-full"
              />

              <div className="absolute bottom-5 left-5 max-w-[calc(100%-40px)] rounded-2xl bg-white p-5 shadow-xl sm:max-w-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFD43A] text-lg font-black">
                    E
                  </div>

                  <div>
                    <p className="text-sm font-black">
                      Easy Academics
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      2nd Floor, 159-B, Lane No. 5,
                      <br />
                      Shakti Nagar Road, Udaipur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={CONTACT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#062DA0] px-7 py-4 text-sm font-black text-white transition hover:bg-black"
            >
              Get Directions
              <ArrowUpRight size={18} />
            </a>

            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 px-7 py-4 text-sm font-black transition hover:bg-[#FFD43A]"
            >
              <Phone size={17} />
              Call {CONTACT.displayPhone}
            </a>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* FAQ */}
      {/* ===================================== */}

      <section className="bg-[#080D1D] px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFD43A]">
              Frequently Asked
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Got Questions?
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-white/15">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/15"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-bold sm:text-lg">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-[#FFD43A]"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-6 text-sm leading-7 text-white/55">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* FINAL CTA */}
      {/* ===================================== */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#FFD43A] px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[40px] border-black/10" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#062DA0]">
                Take The Next Step
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Ready to start
                <br />
                your next{" "}
                <span className="text-[#062DA0]">
                  chapter?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
                Let&apos;s talk about your goals,
                your questions and where you want to go next.
              </p>

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#062DA0] px-7 py-4 text-sm font-black text-white transition hover:bg-black"
              >
                Start A Conversation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================================== */}
      {/* SHARED FOOTER */}
      {/* ===================================== */}

      <Footer />
    </main>
  );
}
