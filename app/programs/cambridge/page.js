"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const highlights = [
  {
    title: "International Curriculum",
    description:
      "Structured academic support aligned with internationally recognised Cambridge learning outcomes.",
  },
  {
    title: "Concept-Focused Learning",
    description:
      "Students build strong understanding, improve analytical thinking and strengthen exam readiness.",
  },
  {
    title: "Personal Guidance",
    description:
      "Regular feedback and focused mentoring help each learner progress with clarity and confidence.",
  },
];

export default function CambridgePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full border-[28px] border-[#FFD43A]/35" />
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[#062DA0]/5" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-[#062DA0]">
              EASY ACADEMICS / CAMBRIDGE
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Learn with
              <br />
              <span className="text-[#062DA0]">global confidence.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">
              Our Cambridge pathway blends conceptual clarity, guided practice and examination mindset to help students thrive in an international academic setting.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#program-details"
                className="rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
              >
                Explore Program
              </a>
              <Link
                href="/contact"
                className="rounded-full border-2 border-black px-8 py-4 font-bold transition hover:bg-[#FFD43A]"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#062DA0] p-8 text-white sm:p-12">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#FFD43A]" />

            <div className="relative flex min-h-[360px] flex-col justify-between">
              <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-bold text-[#062DA0]">
                INTERNATIONAL CURRICULUM
              </span>

              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  Think • Learn • Excel
                </p>
                <h2 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
                  Academic excellence built for future-ready learners.
                </h2>
              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/75">Classes 9–12</span>
                <div className="h-10 w-10 rounded-full bg-[#FFD43A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program-details" className="bg-[#FFD43A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-black/70">
            Why Cambridge at Easy Academics
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
            Clear academic direction, stronger subject understanding and confident exam preparation.
          </h2>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border-2 border-black/10 bg-[#F8F9FC] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-[#062DA0]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#062DA0] text-lg font-black text-[#FFD43A]">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-[#062DA0]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FF] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">
            Build a stronger academic future with expert guidance.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/70">
            We support learners with structure, accountability and consistent academic mentoring to help them stay confident and perform their best.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#062DA0] px-8 py-4 font-bold text-white transition hover:bg-black"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
