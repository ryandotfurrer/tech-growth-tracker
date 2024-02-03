import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Tech Growth Tracker",
  description:
    "Track activities, ideas, and projects to help push your tech career forward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flow mx-auto grid max-h-screen max-w-screen-lg text-pretty bg-white px-4 py-6 leading-relaxed text-neutral-500 dark:bg-black dark:text-neutral-400">
        <NavBar />
        <Hero
          title="Tech Growth Tracker"
          description="Track activities, ideas, and projects to help push your tech career forward."
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
