import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <p>
        <small>
          Made by{" "}
          <Link
            href="https://ryanfurrer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ryan Furrer
          </Link>
        </small>
      </p>
    </footer>
  );
}
