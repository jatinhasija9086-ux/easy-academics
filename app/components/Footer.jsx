
"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const whatsappMessage =
  "Hello! 👋 Greetings from Easy Academics!\n\nWelcome! We're happy to connect with you.\n\nWould you like to know more about our courses, admissions or upcoming batches? Feel free to share your query, and we'll be happy to assist you.";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/academicseasy?obrf=ZTFid3R6NDVzZDZt",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19uzG1um8A/?mibextid=wwXIfr",
    Icon: FacebookIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@easyeconomics18",
    Icon: YouTubeIcon,
  },
  {
    label: "Google Business",
    href: "https://share.google/2sMWc8FzjyovpQRCl",
    Icon: GoogleIcon,
  },
];

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEDA75" />
          <stop offset=".35" stopColor="#FA7E1E" />
          <stop offset=".65" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="url(#instagram-gradient)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="4" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.25" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.8" r="1" fill="white" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M13.7 24v-9h3l.45-3.5H13.7V9.25c0-1.01.28-1.7 1.73-1.7h1.84V4.42c-.32-.04-1.42-.14-2.7-.14-2.68 0-4.52 1.64-4.52 4.65v2.57H7v3.5h3.05v9h3.65Z"
        fill="white"
      />
    </svg>
  );
}

function YouTubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8Z"
        fill="#FF0033"
      />
      <path d="m9.55 15.6 6.28-3.6-6.28-3.6v7.2Z" fill="white" />
    </svg>
  );
}

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.78-.07-1.53-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v2.96h3.87c2.27-2.1 3.58-5.18 3.58-8.6Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.93l-3.87-2.96c-1.08.72-2.46 1.14-4.08 1.14-3.14 0-5.8-2.12-6.75-4.97H1.26v3.05A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.25 14.28a7.2 7.2 0 0 1 0-4.56V6.67H1.26a12 12 0 0 0 0 10.66l3.99-3.05Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.96 1.15 15.24 0 12 0A12 12 0 0 0 1.26 6.67l3.99 3.05c.95-2.85 3.61-4.97 6.75-4.97Z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 1C5.93 1 1 5.93 1 12c0 1.91.5 3.78 1.46 5.42L.9 23.1l5.82-1.56A10.94 10.94 0 0 0 12 23c6.07 0 11-4.93 11-11S18.07 1 12 1Z"
        fill="white"
      />
      <path
        d="M12 3.2a8.8 8.8 0 0 0-7.49 13.42l.23.36-.9 3.3 3.4-.9.35.2a8.8 8.8 0 1 0 4.41-16.38Z"
        fill="#25D366"
      />
      <path
        d="M8.46 7.1c-.2-.45-.4-.46-.6-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.81c.14.18 1.87 3 4.61 4.08 2.28.9 2.75.72 3.24.67.49-.05 1.58-.65 1.8-1.27.22-.63.22-1.16.15-1.27-.07-.11-.25-.18-.53-.32-.27-.14-1.57-.78-1.81-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.34-1.58-1.5-1.85-.15-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.86-2.01Z"
        fill="white"
      />
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = `https://wa.me/919653903204?text=${encodeURIComponent(whatsappMessage)}`;

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

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-[#FFD43A]">
              Contact
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-base text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#FFD43A]" aria-hidden="true" />
                <address className="not-italic leading-7">
                  Easy Academics
                  <br />
                  159 B, Shakti Nagar, Lane Number 5,
                  <br />
                  Near Electric Power House,
                  <br />
                  Udaipur (Rajasthan)
                </address>
              </div>

              <a
                href="tel:+917877973935"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#FFD43A]" aria-hidden="true" />
                +91 78779 73935
              </a>

              <a
                href="tel:+919653903204"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#FFD43A]" aria-hidden="true" />
                +91 96539 03204
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +91 96539 03204"
                className="flex items-center gap-3 hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                +91 96539 03204
              </a>

              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-opacity hover:opacity-75"
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
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
