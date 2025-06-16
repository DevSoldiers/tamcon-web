"use client";

import Hamburger from "@/_components/humMenu";
import { navLinks } from "@/_content/nav_content";
import { font_header, the_header } from "@/app/fonts/fonts";
import { removeAllWhitespace } from "@/utils/sanitizer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar({ services = false }: { services?: boolean }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  // prevent scroll when sidebar is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "auto";
    }

    // Clean up when component
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  console.log("services-->", services);
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
                  className={`${the_header.className} font-regular text-base ${
                    services ? "text-primary-25" : "text-gray-600"
                  }`}
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
              className={`${the_header.className} font-normal text-base ${
                services ? "text-primary-25" : "text-gray-600"
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
