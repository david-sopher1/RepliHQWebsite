import type { Metadata } from "next";

import { legal } from "@/content/site";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: legal.privacy.title,
  description: legal.privacy.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={legal.privacy} />;
}
