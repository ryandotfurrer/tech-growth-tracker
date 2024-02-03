import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <p className="text-sm">
        Made by{" "}
        <Link
          className="text-sm"
          href="https://ryanfurrer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ryan Furrer
        </Link>
      </p>
    </footer>
  );
}
