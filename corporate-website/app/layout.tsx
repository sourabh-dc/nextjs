import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TechCo | Frontend & AI Developer Staffing",
  description:
    "TechCo is a professional staffing company specializing in Frontend Developers, AI Engineers, and full-stack talent for web and mobile app development.",
  keywords: [
    "frontend developers",
    "AI developers",
    "MERN stack",
    "React developers",
    "mobile app development",
    "staff augmentation",
    "TechCo",
  ],
  openGraph: {
    title: "TechCo | Frontend & AI Developer Staffing",
    description:
      "Staff augmentation and dedicated teams for frontend, AI, web, and mobile development.",
    url: "https://techco.dev",
    siteName: "TechCo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
