import {
  address,
  email,
  footer_nav_links,
  phoneNumber,
} from "@/_content/footer_content";
import Container from "../_components/container";
import { font_accent, font_body } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <Container className="pt-[71.5px] pb-16 md:pt-[93.5px] md:pb-[90px] border-y-[1px] border-primary-25">
      <footer className="grid md:grid-cols-2 justify-baseline md:justify-center">
        <article className="mb-9 md:mb-8 address_wrapper grid gap-y-1">
          <p
            className={`${font_accent.className} text-4xl font-semibold text-gray-600 mb-6`}
          >
            {email}
          </p>
          <p
            className={`${font_body.className} text-base font-medium text-gray-600 mb-3`}
          >
            {address}
          </p>
          <p
            className={`${font_body.className} text-base font-medium text-gray-600`}
          >
            {phoneNumber}
          </p>
        </article>
        <article className="links_wrapper grid grid-cols-2">
          {footer_nav_links?.map((link, key) => (
            <Link
              key={key}
              href={"/"}
              className={`${font_accent.className} text-base font-regular text-gray-600`}
            >
              {link}
            </Link>
          ))}
        </article>
      </footer>
    </Container>
  );
}
