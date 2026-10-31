
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  CirclePlay,
  Clock3,
  FileText,
  Filter,
  GraduationCap,
  Lightbulb,
  Play,
  Search,
  Sparkles,
  Video,
  ExternalLink,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const BLUE = "#062DA0";
const YELLOW = "#FFD43A";

// REPLACE THIS WITH YOUR OFFICIAL CHANNEL LINK LATER
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/";

// Demo videos — replace with your actual video links later.
const youtubeVideos = [
  {
    id: 1,
    title: "Study Tips & Learning Strategies",
    category: "Study Tips",
    description:
      "Explore effective learning techniques and improve your study habits.",
    url: "https://www.youtube.com/results?search_query=study+tips+for+students",
    color: "#EAF0FF",
  },
  {
    id: 2,
    title: "Class 12 Board Exam Preparation",
    category: "Board Exams",
    description:
      "Discover useful lessons and revision strategies for board examinations.",
    url: "https://www.youtube.com/results?search_query=class+12+board+exam+preparation",
    color: "#FFF5D2",
  },
  {
    id: 3,
    title: "Career Guidance After Class 10",
    category: "Career Guidance",
    description:
      "Explore streams, career choices and future academic opportunities.",
    url: "https://www.youtube.com/results?search_query=career+guidance+after+class+10",
    color: "#EAF6F1",
  },
];

const resources = [
  {
    id: 1,
    type: "blog",
    title: "How to Build a Smarter Study Routine",
    description:
      "Practical ways to organize your day, revise effectively and stay consistent.",
    tag: "Study Tips",
    meta: "5 min read",
    icon: BookOpen,
    color: "#EEF2FF",
  },
  {
    id: 2,
    type: "blog",
    title: "Preparing for Board Exams with Confidence",
    description:
      "A simple approach to revision, practice papers and managing exam pressure.",
    tag: "Board Exams",
    meta: "7 min read",
    icon: FileText,
    color: "#FFF5D2",
  },
  {
    id: 3,
    type: "career",
    title: "Choosing the Right Stream After Class 10",
    description:
      "Explore Science, Commerce and Arts based on your interests and goals.",
    tag: "After Class 10",
    meta: "Career Guide",
    icon: GraduationCap,
    color: "#E9F5F1",
  },
  {
    id: 4,
    type: "career",
    title: "Explore Career Paths After Class 12",
    description:
      "Understand different courses, entrance exams and higher education options.",
    tag: "After Class 12",
    meta: "Career Guide",
    icon: BriefcaseBusiness,
    color: "#F1ECFF",
  },
  {
    id: 5,
    type: "material",
    title: "Class 10 Revision Resources",
    description:
      "A dedicated space for subject notes, revision sheets and practice material.",
    tag: "Class 10",
    meta: "Coming Soon",
    icon: FileText,
    color: "#EEF2FF",
  },
  {
    id: 6,
    type: "material",
    title: "Class 12 Practice Resources",
    description:
      "Subject-wise learning resources and exam preparation material.",
    tag: "Class 12",
    meta: "Coming Soon",
    icon: BookOpen,
    color: "#FFF5D2",
  },
  {
    id: 7,
    type: "videos",
    title: "Study Tips & Learning Strategies",
    description:
      "Explore video lessons and study techniques on YouTube.",
    tag: "YouTube",
    meta: "Watch Online",
    icon: Video,
    color: "#F1ECFF",
    url: youtubeVideos[0].url,
  },
  {
    id: 8,
    type: "videos",
    title: "Class 12 Exam Preparation",
    description:
      "Find board exam preparation videos and revision lessons.",
    tag: "YouTube",
    meta: "Watch Online",
    icon: Video,
    color: "#E9F5F1",
    url: youtubeVideos[1].url,
  },
];

const categories = [
  { id: "all", label: "All Resources" },
  { id: "blog", label: "Blog" },
  { id: "career", label: "Career Guidance" },
  { id: "material", label: "Study Material" },
  { id: "videos", label: "YouTube Videos" },
];

const quickLinks = [
  {
    id: "blog",
    number: "01",
    title: "Blog",
    subtitle: "Ideas, insights & study tips",
    icon: BookOpen,
    bg: "bg-[#FFD43A]",
    text: "text-[#062DA0]",
  },
  {
    id: "career",
    number: "02",
    title: "Career Guidance",
    subtitle: "Find your next direction",
    icon: GraduationCap,
    bg: "bg-[#062DA0]",
    text: "text-white",
  },
  {
    id: "material",
    number: "03",
    title: "Study Material",
    subtitle: "Resources for better learning",
    icon: FileText,
    bg: "bg-[#EEF2FF]",
    text: "text-[#062DA0]",
  },
  {
    id: "videos",
    number: "04",
    title: "YouTube Videos",
    subtitle: "Learn beyond the classroom",
    icon: CirclePlay,
    bg: "bg-[#172554]",
    text: "text-white",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ResourceCard({ resource }) {
  const Icon = resource.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl"
    >
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden"
        style={{ background: resource.color }}
      >
        <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border-[30px] border-white/50" />

        <Icon
          size={72}
          strokeWidth={1.2}
          className="relative text-[#062DA0]"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#062DA0]">
          {resource.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Clock3 size={14} />
          {resource.meta}
        </div>

        <h3 className="text-xl font-extrabold leading-snug tracking-tight text-slate-900">
          {resource.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
          {resource.description}
        </p>

        {resource.type === "videos" && resource.url ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#062DA0] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173FC4]"
          >
            <Play size={16} />
            Watch on YouTube
            <ExternalLink size={15} />
          </a>
        ) : (
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#062DA0]">
              Coming Soon
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-[#062DA0]">
              <ArrowUpRight size={19} />
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function YouTubeVideoCard({ video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden"
        style={{ background: video.color }}
      >
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[35px] border-white/50" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#062DA0] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play size={30} fill="currentColor" />
        </div>

        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#062DA0]">
          {video.category}
        </span>

        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600">
          Demo YouTube Search
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-extrabold text-slate-900">
          {video.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {video.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="font-bold text-[#062DA0]">
            Watch on YouTube
          </span>

          <ArrowUpRight
            size={21}
            className="text-[#062DA0] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </div>
    </a>
  );
}

export default function StudentResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "all" ||
        resource.type === activeCategory;

      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        `${resource.title} ${resource.description} ${resource.tag}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const selectCategory = (category) => {
    setActiveCategory(category);

    document
      .getElementById("resource-library")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F7F9FF]">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#FFD43A]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#062DA0]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#062DA0]">
                <Sparkles size={15} />
                The Student Learning Hub
              </div>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Learn More.
                <br />
                Explore More.
                <br />
                <span className="text-[#062DA0]">
                  Become More.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Your space for study resources, academic
                insights, career guidance and learning
                beyond the classroom.
              </p>

              <a
                href="#resource-library"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#062DA0] px-7 py-4 font-bold text-white transition hover:bg-[#173FC4]"
              >
                Explore Resources
                <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>

          {/* DECORATIVE DASHBOARD */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#FFD43A]" />
              <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full border-[20px] border-[#062DA0]/10" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-950/10 sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Easy Academics
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Learning Dashboard
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD43A] text-[#062DA0]">
                    <GraduationCap size={25} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: BookOpen,
                      title: "Read",
                      desc: "Articles & Tips",
                      bg: "#EEF2FF",
                    },
                    {
                      icon: Lightbulb,
                      title: "Discover",
                      desc: "Career Paths",
                      bg: "#FFF4BD",
                    },
                    {
                      icon: FileText,
                      title: "Practice",
                      desc: "Study Material",
                      bg: "#E9F5F1",
                    },
                    {
                      icon: CirclePlay,
                      title: "Watch",
                      desc: "Video Lessons",
                      bg: "#F1ECFF",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl p-5"
                        style={{ background: item.bg }}
                      >
                        <Icon
                          size={26}
                          className="text-[#062DA0]"
                        />

                        <h3 className="mt-7 text-lg font-extrabold">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#062DA0] p-5 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Sparkles size={22} />
                  </div>

                  <div>
                    <p className="font-bold">
                      Keep Learning Every Day
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Small steps lead to big progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUR CATEGORY CARDS */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#062DA0]">
              Everything in One Place
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              What are you looking for?
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Choose a category and explore resources
              designed to support your learning journey.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.id} delay={index * 0.07}>
                  <button
                    type="button"
                    onClick={() => selectCategory(item.id)}
                    className={`group flex min-h-[230px] w-full flex-col justify-between rounded-2xl p-6 text-left transition duration-300 hover:-translate-y-2 hover:shadow-xl ${item.bg} ${item.text}`}
                  >
                    <div className="flex items-start justify-between">
                      <Icon size={32} strokeWidth={1.7} />

                      <span className="text-xs font-black opacity-50">
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm opacity-70">
                        {item.subtitle}
                      </p>

                      <ArrowUpRight
                        size={22}
                        className="mt-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESOURCE LIBRARY */}
      <section
        id="resource-library"
        className="scroll-mt-28 bg-[#F6F8FC] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#062DA0]">
                  Browse & Discover
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Resource Library
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-600">
                  Explore our growing collection of
                  learning and career resources.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-[#062DA0]">
                <Filter size={17} />
                {filteredResources.length} Resources
              </div>
            </div>
          </Reveal>

          {/* SEARCH */}
          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <Search
              size={21}
              className="shrink-0 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search study tips, careers, notes, videos..."
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              aria-label="Search student resources"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                  activeCategory === category.id
                    ? "border-[#062DA0] bg-[#062DA0] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#062DA0] hover:text-[#062DA0]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* RESOURCE CARDS */}
          <motion.div
            layout
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search
                size={36}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-5 text-xl font-bold">
                No matching resources
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Try a different search term or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
                className="mt-6 rounded-full bg-[#062DA0] px-6 py-3 text-sm font-bold text-white"
              >
                Clear Filters
              </button>
            </div>
          )}

          <p className="mt-8 text-sm text-slate-500">
            Blog posts and study material shown here are
            demonstration resources. Actual content can
            be added when available.
          </p>
        </div>
      </section>

      {/* CAREER GUIDANCE FEATURE */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#062DA0] p-9 text-white sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[50px] border-white/10" />

              <div className="relative">
                <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD43A] text-[#062DA0]">
                  <Lightbulb size={31} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
                  Your Future Matters
                </p>

                <h2 className="mt-5 max-w-lg text-4xl font-black leading-tight sm:text-5xl">
                  Confused About What Comes Next?
                </h2>

                <p className="mt-6 max-w-md leading-8 text-white/70">
                  Whether you're choosing a stream,
                  preparing for entrance exams or
                  exploring higher education, the
                  right guidance makes a difference.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#062DA0]">
                Career Guidance
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Make Informed Choices.
                <br />
                <span className="text-[#062DA0]">
                  Build Your Future.
                </span>
              </h2>

              <div className="mt-9 space-y-5">
                {[
                  "Explore streams after Class 10",
                  "Understand courses after Class 12",
                  "Learn about entrance examinations",
                  "Discover college and university options",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-slate-100 pb-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4BD] text-[#062DA0]">
                      <ChevronRight size={18} />
                    </span>

                    <p className="font-semibold text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FFD43A] px-7 py-4 font-bold text-[#062DA0] transition hover:bg-[#ffe16a]"
              >
                Get Career Guidance
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YOUTUBE VIDEO SECTION */}
      <section
        id="youtube-videos"
        className="scroll-mt-28 bg-[#F6F8FC] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#062DA0]">
                  Learn by Watching
                </p>

                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  Video Learning Hub
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-600">
                  Watch lessons, concept explanations
                  and revision videos directly on YouTube.
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD43A] text-[#062DA0]">
                <Video size={28} />
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video, index) => (
              <Reveal key={video.id} delay={index * 0.07}>
                <YouTubeVideoCard video={video} />
              </Reveal>
            ))}
          </div>

          {/* FULL CHANNEL LINK */}
          <Reveal>
            <div className="mt-12 flex flex-col items-center rounded-3xl bg-[#062DA0] px-6 py-12 text-center text-white">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD43A] text-[#062DA0]">
                <Video size={30} />
              </div>

              <h3 className="text-3xl font-black sm:text-4xl">
                Explore More on YouTube
              </h3>

              <p className="mt-4 max-w-lg leading-8 text-white/70">
                Discover more educational videos,
                lessons and learning resources.
              </p>

              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFD43A] px-8 py-4 font-bold text-[#062DA0] transition hover:bg-white"
              >
                <Video size={20} />
                Visit YouTube Channel
                <ExternalLink size={17} />
              </a>

              <p className="mt-4 text-xs text-white/50">
                Demo link — official channel will be added later.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062DA0] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD43A]">
              Keep Moving Forward
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Your learning journey doesn't stop
              at the classroom.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Explore academic programs and discover
              more ways to grow with Easy Academics.
            </p>
          </Reveal>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#FFD43A] px-8 py-5 font-bold text-[#062DA0] transition hover:bg-white"
          >
            Connect With Us
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      {/* SHARED FOOTER */}
      <Footer />
    </main>
  );
}
