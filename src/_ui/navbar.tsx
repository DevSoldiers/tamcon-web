import Container from "@/_components/container";
import Image from "next/image";
import Sidebar from "./sidebar";
import { font_header } from "@/app/fonts/fonts";

export default function Navbar() {
  return (
    <Container>
      <nav className="flex justify-between items-center mt-6 mb-11">
        <Image
          alt="tamcon logo"
          width={0}
          height={0}
          src="/Logo/tamcon.logo.svg"
          className="w-[173px] aspect-auto-1"
        />
        <Sidebar />
        <button
          className={`${font_header.className} contact_btn`}
        >
          Contact Us
        </button>
      </nav>
    </Container>
  );
}
