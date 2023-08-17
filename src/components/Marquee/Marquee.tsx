import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function MarqueeComponent() {
  return (
    <div className="w-full h-80">
      <Marquee className="h-full">
        <Image
          alt="img1"
          src="/images/bramy.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
        <Image
          alt="img2"
          src="/images/markizy.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
        <Image
          alt="img3"
          src="/images/moskitiery.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
        <Image
          alt="img4"
          src="/images/plisy.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
        <Image
          alt="img5"
          src="/images/roletki.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
        <Image
          alt="img6"
          src="/images/zaluzje.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
        <Image
          alt="img7"
          src="/images/rolety.jpg"
          loading="lazy"
          width={300}
          height={300}
        />
      </Marquee>
    </div>
  );
}
