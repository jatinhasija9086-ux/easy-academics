
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">

          {/* ABOUT */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">EASY </span>
              <span className="text-[#FFD43A]">
                ACADEMICS
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-400">
              A leading coaching institute in Udaipur,
              Rajasthan, helping students build strong
              academic foundations and prepare for
              their future.
            </p>

            <p className="mt-7 text-base text-gray-400">
              Founded by Umang Khatri
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:pl-12">
            <h3 className="text-xl font-bold text-[#FFD43A]">
              Quick Links
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-base text-gray-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <Link
                href="/about-us"
                className="hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/courses"
                className="hover:text-white"
              >
                Courses
              </Link>

              <Link
                href="/results"
                className="hover:text-white"
              >
                Results
              </Link>

              <Link
                href="/student-resources"
                className="hover:text-white"
              >
                Student Resources
              </Link>

              <Link
                href="/contact"
                className="hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-[#FFD43A]">
              Contact
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-base text-gray-400">
              <p>Udaipur, Rajasthan</p>

              <a
                href="tel:+917877973935"
                className="hover:text-white"
              >
                78779 73935
              </a>

              <a
                href="https://www.instagram.com/academicseasy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram: @academicseasy
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                YouTube (Demo Link)
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 border-t border-white/15 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Easy Academics.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
