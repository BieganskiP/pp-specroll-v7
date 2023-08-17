import data from "@/staticData/companyInfo.json";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="uppercase text-3xl font-extrabold z-10">
      {data.fullCompanyName}
    </Link>
  );
}
