import ContactForm from "@/_components/Contact.form";
import ContactLeftSection from "@/_components/Contact.leftsection";
import Divider from "@/_components/Divider";
import Head from "next/head";
import Script from "next/script";

export default function ContactUI() {
  return (
    <Divider className="gap-x-10 max-md:gap-y-12">
      <ContactLeftSection className="bg-primary-600 h-full flex justify-center items-center">
        <Head>
          <title>First Post</title>
        </Head>
        <canvas id="a" width="500" height="500" className="w-full" />

        {/* Load external scripts after the page is interactive */}
        <Script src="/js/unminified/lib.js" strategy="afterInteractive" />
        <Script src="/js/unminified/index.js" strategy="afterInteractive" />
      </ContactLeftSection>
      <ContactForm className="max-w-[592px]" />
    </Divider>
  );
}
