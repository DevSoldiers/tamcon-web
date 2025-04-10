import Container from "@/_components/container";
import Image from "next/image";
import Sidebar from "./sidebar.ui";
import { font_header } from "@/app/fonts/fonts";
import Link from "next/link";
import { headers } from "next/headers";

export default async function Navbar() {
  return (
    <Container className="bg-primary-25">
      <nav className="flex justify-between items-center mt-6 mb-11">
        <Link className="w-[173px] aspect-auto-1" href={"/"}>
          <Image
            alt="tamcon logo"
            width={0}
            height={0}
            src="/Logo/tamcon.logo.svg"
            className="w-[173px] aspect-auto-1"
          />
        </Link>
        <Sidebar />
        <button className={`${font_header.className} contact_btn`}>
          <Link href={"/contactus"}>Contact Us</Link>
        </button>
      </nav>
    </Container>
  );
}
