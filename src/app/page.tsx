import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Invest from "@/components/Invest/Invest";
import MarqueeComponent from "@/components/Marquee/Marquee";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <MarqueeComponent />
      <Invest />
      <WhyUs />
    </main>
  );
}
