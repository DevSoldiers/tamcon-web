"use client";

import Container from "@/_components/container";
import Image from "next/image";
import Sidebar from "./sidebar.ui";
import { font_header } from "@/app/fonts/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  let lastPart = "";
  if (pathname) {
    const cleanPath =
      pathname.endsWith("/") && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;
    lastPart = cleanPath.split("/").pop() || "";
  }

  return (
    <Container
      className={`${
        lastPart !== "services" ? "bg-primary-25" : "bg-primary-600"
      } pt-6 pb-11`}
    >
      <nav className="flex justify-between items-center">
        <Link className="w-[173px] aspect-auto-1" href={"/"}>
          <Image
            alt="Tamcon Software Solutions"
            width={0}
            height={0}
            src={`${
              lastPart === "services"
                ? "/Logo/tamcon_white_logo.svg"
                : "/Logo/tamcon.logo.svg"
            }`}
            className="w-[173px] aspect-auto-1"
          />
        </Link>
        <Sidebar services={lastPart === "services"} />
        <button
          className={`${font_header.className} contact_btn
        ${
          lastPart !== "services"
            ? "text-primary-600"
            : "border-primary-25 text-primary-25 hover:bg-primary-25 hover:text-primary-600"
        }
        `}
        >
          <Link href={"/contactus"}>Contact Us</Link>
        </button>
      </nav>
    </Container>
  );
}
