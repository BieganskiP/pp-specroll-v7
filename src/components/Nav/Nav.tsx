"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const location = usePathname();

  return (
    <ul className="flex justify-center items-center flex-row text-lg lg:text-2xl font-semibold">
      <li>
        <Link
          href="/"
          className={`m-2 hover:text-secondary transition-all ${
            location === "/" ? "text-secondary" : ""
          }`}
        >
          Strona Główna
        </Link>
      </li>
      <li>
        <Link
          href="/contacts"
          className={`m-2 hover:text-secondary transition-all ${
            location === "/contacts" ? "text-secondary" : ""
          }`}
        >
          Kontakty
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className={`m-2 hover:text-secondary transition-all ${
            location === "/services" ? "text-secondary" : ""
          }`}
        >
          Nasze Usługi
        </Link>
      </li>
      <li>
        <Link
          href="/about-us"
          className={`m-2 hover:text-secondary transition-all ${
            location === "/about" ? "text-secondary" : ""
          }`}
        >
          O nas
        </Link>
      </li>
    </ul>
  );
}
