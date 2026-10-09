import { howItWorks } from "@/content/site";
import { Container, Section, SectionHeader } from "@/components/site/primitives";
import { StepsTrack } from "@/components/sections/steps-track";

export function HowItWorks() {
  return (
    <Section id="how-it-works" aria-labelledby="how-heading" className="border-t border-border">
      <Container>
        <SectionHeader
          id="how-heading"
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          subhead={howItWorks.subhead}
        />
        <StepsTrack />
      </Container>
    </Section>
  );
}
