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
          className="m-2 hover:text-secondary transition-all"
        >
          Strona Główna
        </Link>
      </li>
      <li>
        <Link href="/contacts" className="m-2">
          Kontakty
        </Link>
      </li>
      <li>
        <Link href="/services" className="m-2">
          Nasze Usługi
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="m-2">
          O nas
        </Link>
      </li>
    </ul>
  );
}
