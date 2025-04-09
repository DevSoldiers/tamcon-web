import { font_body, font_header } from "@/app/fonts/fonts";
import Container from "./container";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(...inputs));
}

export default function ContactForm({
  className,
  hide = false,
}: {
  hide?: boolean;
  className?: string;
}) {
  return (
    <Container className={cn("max-w-[unset]", className)}>
      {!hide && (
        <article className="intro_wrapper mb-12">
          <p
            className={`${font_header.className} text-4xl font-bold text-primary-600 mb-3.5 uppercase`}
          >
            Contact Us
          </p>
          <p className={`${font_body} font-regular text-base `}>
            Let’s build the future together. Drop us a message.
          </p>
        </article>
      )}
      <form action="" className="flex flex-col gap-y-12">
        <div className="field_items">
          <p
            className={`${font_header.className} text-base font-bold text-gray-600 uppercase `}
          >
            Name
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Insert Your Name"
            className={`${font_body.className} text-base font-regular text-gray-400 w-full border-b-gray-400 border-b-[1px] py-3`}
          />
        </div>
        {/* email */}
        <div className="field_items">
          <p
            className={`${font_header.className} text-base font-bold text-gray-600 uppercase `}
          >
            Name
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Insert Your Name"
            className={`${font_body.className} text-base font-regular text-gray-400 w-full border-b-gray-400 border-b-[1px] py-3`}
          />
        </div>
        {/* message */}
        <div className="field_items">
          <p
            className={`${font_header.className} text-base font-bold text-gray-600 uppercase `}
          >
            Message
          </p>
          <textarea
            name=""
            id=""
            placeholder="Insert Your Message"
            className={`${font_body.className} text-base font-regular text-gray-400 w-full border-b-gray-400 border-b-[1px] py-3 min-h-16`}
          />
        </div>
        <button
          className={`${font_header.className} text-base font-bold py-6 bg-primary-600 text-gray-25 rounded-xs`}
        >
          Send Message
        </button>
      </form>
    </Container>
  );
}
