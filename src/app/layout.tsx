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
  title: "Tamcon Software Solutions",
  description:
    "TAMCON is a cutting-edge software solutions company specializing in the design, development, and marketing of innovative tech projects. We disrupt industries, streamline processes, and create IMPACT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-25`}
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
