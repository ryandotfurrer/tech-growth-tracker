import Image from "next/image";
import logo from "/public/tgt-logo.webp";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flow">
      <ul className="flex items-center gap-3">
        <div id="logo-container" className="mr-auto">
          <li className="justify-start">
            <Link className="no-underline" href="/">
              <Image
                className="rounded-full"
                src={logo}
                width={65}
                height={65}
                alt="ryan furrer memoji logo"
                priority
              />
            </Link>
          </li>
        </div>
        <li>
          <Link
            className="no-underline hover:underline"
            href="https://github.com/ryanfurrer/tech-growth-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="no-underline hover:underline"
            href="https://ryanfurrer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
}
