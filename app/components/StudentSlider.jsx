
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const demoStudents = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  image: `https://images.unsplash.com/photo-${[
    "1523050854058-8df90110c9f1",
    "1506794778202-cad84cf45f1d",
    "1534528741775-53994a69daeb",
    "1500648767791-00dcc994a43e",
    "1531123897727-8f129e1688ce",
    "1517841905240-472988babdf9",
    "1507003211169-0a1dd7228f2d",
    "1535713875002-d1d0cf377fde",
    "1524504388940-b1c1722653e1",
    "1527980965255-d3b416303d12",
  ][i]}?w=1200&auto=format&fit=crop`,
}));

export default function StudentSlider({ activeClass = "12th" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % demoStudents.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#062DA0]">
      <div className="relative h-[350px] sm:h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={demoStudents[current].image}
              alt={`Demo student ${current + 1}`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062DA0]/90 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 text-white sm:bottom-12 sm:left-12">
              <span className="rounded-full bg-[#FFD43A] px-4 py-2 text-xs font-bold text-[#062DA0]">
                CLASS {activeClass}
              </span>

              <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                Celebrating Our Achievers
              </h3>

              <p className="mt-3 text-sm text-white/80">
                Demo Student {current + 1} / 10
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() =>
          setCurrent((prev) =>
            (prev - 1 + demoStudents.length) % demoStudents.length
          )
        }
        aria-label="Previous student"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white px-4 py-3 font-bold text-[#062DA0]"
      >
        ←
      </button>

      <button
        type="button"
        onClick={() =>
          setCurrent((prev) => (prev + 1) % demoStudents.length)
        }
        aria-label="Next student"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white px-4 py-3 font-bold text-[#062DA0]"
      >
        →
      </button>

      <div className="absolute bottom-4 right-6 z-10 flex gap-1.5">
        {demoStudents.map((student, index) => (
          <button
            key={student.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to student ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              current === index
                ? "w-6 bg-[#FFD43A]"
                : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
