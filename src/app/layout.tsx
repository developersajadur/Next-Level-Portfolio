// import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Md Sajadur Rahman – Full Stack Developer",
  description:
    "Portfolio of Md Sajadur Rahman, a full-stack developer specializing in Next.js, React, Node.js, TypeScript, golang, and scalable web applications with modern UI/UX and secure backend systems.",
  keywords: [
    "Md Sajadur Rahman",
    "Full Stack Developer",
    "Backend Developer",
     "Software Engineer",
      "Golang Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Md Sajadur Rahman" }],
  creator: "Md Sajadur Rahman",
  openGraph: {
    title: "Md Sajadur Rahman – Full Stack Developer",
    description:
      "Full-stack developer building scalable, secure, and high-performance web applications using modern technologies.",
    type: "website",
    siteName: "Md Sajadur Rahman Portfolio",
  },
  metadataBase: new URL("https://your-domain.com"), // replace with live domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        {/* <PostHogProvider> */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {/* </PostHogProvider> */}
      </body>
    </html>
  );
}
