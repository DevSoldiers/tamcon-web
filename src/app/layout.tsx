import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/_ui/navbar.ui";
import Footer from "@/_ui/footer";
import Footer_Logo_section from "@/_ui/footer.logo.ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tamcon Software Solutions | Best Software Company in Ethiopia",
  description:
    "Tamcon Software Solutions is a leading software company in Addis Ababa, Ethiopia. We provide innovative software development, cloud, DevOps, UI/UX, and consulting services. Recognized among the best software companies in Ethiopia and top software companies in Addis Ababa.",
  keywords: [
    "Tamcon Software Solutions",
    "Best software companies in Ethiopia",
    "Top software companies in Addis Ababa",
    "Software development Ethiopia",
    "IT consulting Addis Ababa",
    "Cloud solutions Ethiopia",
    "UI/UX design Ethiopia",
    "DevOps Ethiopia",
    "Tech companies Ethiopia",
    "Custom software Addis Ababa",
  ],
  openGraph: {
    title: "Tamcon Software Solutions | Best Software Company in Ethiopia",
    description:
      "Tamcon Software Solutions is a leading software company in Addis Ababa, Ethiopia. We provide innovative software development, cloud, DevOps, UI/UX, and consulting services. Recognized among the best software companies in Ethiopia and top software companies in Addis Ababa.",
    url: "https://tamcon.software/",
    siteName: "Tamcon Software Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamcon Software Solutions | Best Software Company in Ethiopia",
    description:
      "Tamcon Software Solutions is a leading software company in Addis Ababa, Ethiopia. We provide innovative software development, cloud, DevOps, UI/UX, and consulting services. Recognized among the best software companies in Ethiopia and top software companies in Addis Ababa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-25 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <Footer_Logo_section />
        {/* {children} */}
      </body>
    </html>
  );
}
