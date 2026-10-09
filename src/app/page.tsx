import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Included } from "@/components/sections/included";
import { Results } from "@/components/sections/results";
import { Comparison } from "@/components/sections/comparison";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Problem />
      <HowItWorks />
      <Included />
      <Results />
      <Comparison />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
