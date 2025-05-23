"use client";

import Hamburger from "@/_components/humMenu";
import { navLinks } from "@/_content/nav_content";
import { font_header } from "@/app/fonts/fonts";
import { removeAllWhitespace } from "@/utils/sanitizer";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  // prevent scroll when sidebar is open
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <aside>
      <section className="relative z-50 md:hidden">
        <Hamburger onClick={toggle} open={open} className="cursor-pointer" />
      </section>

      <div
        className={`fixed inset-0 bg-black opacity-[70%] transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggle}
      />

      <div
        className={`z-10 md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 mt-16 flex-grow flex justify-center">
          <ul className="space-y-2">
            {navLinks?.map((link, key) => (
              <li className="text-" key={key}>
                <Link
                  href={removeAllWhitespace(link).toLowerCase()}
                  className={`${font_header.className} font-regular text-base text-gray-600`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`${font_header.className} p-4 border-t border-primary-600 w-full text-primary-600 text-base font-bold `}
        >
          Contact Us
        </button>
      </div>

      {/* large screen */}
      <ul className="hidden md:flex gap-6 items-center ml-auto">
        {navLinks?.map((link, key) => (
          <li key={key}>
            <Link
              href={removeAllWhitespace(link).toLowerCase()}
              className={`${font_header} font-regular text-base text-gray-600`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
