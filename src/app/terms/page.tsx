import type { Metadata } from "next";

import { legal } from "@/content/site";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: legal.terms.title,
  description: legal.terms.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={legal.terms} />;
}
