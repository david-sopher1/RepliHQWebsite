/**
 * All site copy lives here. Edit text in this file — components only render it.
 *
 * Search for "TODO" to find every placeholder that needs real content before launch.
 * Anything with `placeholder: true` also renders a visible "Placeholder" label on
 * the page, so unfinished content can't ship unnoticed. Set it to `false` (or remove
 * it) once you've put real content in.
 */

export const site = {
  name: "RepliHQ",
  // Production domain (used for canonical URLs, sitemap, OG, JSON-LD).
  url: "https://replihq.com",
  // Contact address shown in the footer, FAQ, legal pages, and JSON-LD.
  email: "jaxon@replihq.com",
  title: "RepliHQ — Done-for-you cold email that books meetings",
  description:
    "RepliHQ runs fully managed, AI-automated cold email campaigns for B2B companies and books qualified meetings straight onto your calendar. You just show up.",
  keywords: [
    "cold email agency",
    "done-for-you outbound",
    "B2B lead generation",
    "appointment setting",
    "AI cold email",
    "email deliverability",
  ],
  // Text on the generated social share image (src/app/opengraph-image.tsx).
  og: {
    tagline: "Done-for-you cold email · AI-automated · Fully managed",
    badge: "Meeting booked",
  },
  booking: {
    // Calendly event link — embedded in the "Book a call" section and used as the
    // "open in new tab" fallback.
    url: "https://calendly.com/jaxon-replihq/30min",
  },
  socials: [
    // TODO: replace with your real profile URLs (remove any you don't use).
    { label: "LinkedIn", href: "https://www.linkedin.com/company/replihq", icon: "linkedin" },
    { label: "X", href: "https://x.com/replihq", icon: "x" },
  ],
} as const;

export const nav = {
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "What's included", href: "#included" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Book a call", href: "#book" },
};

export const hero = {
  badge: "AI + human",
  eyebrow: "Done-for-you cold email",
  headline: {
    lead: "Your calendar, filled.",
    prefix: "You just ",
    emphasis: "show up.",
  },
  // Alternatives considered:
  //   "Booked meetings, on autopilot."
  //   "Qualified meetings on your calendar. Every week."
  subhead:
    "RepliHQ runs your entire cold email operation — strategy, infrastructure, AI-personalized campaigns, and reply handling — and books qualified prospects straight onto your calendar. Fully managed, start to finish.",
  primaryCta: { label: "Book a strategy call", href: "#book" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  // TODO: confirm call length / offer.
  note: "Free 30-minute call. Leave with a plan, whether or not we work together.",
};

/**
 * Animated hero visual. These replies are illustrative sample data for the
 * animation — not real prospects or clients. `day` is 0–4 (Mon–Fri), `hour` is 9–16.
 */
export const heroDemo = {
  inboxLabel: "Inbox",
  calendarLabel: "This week",
  bookedLabel: "Meetings booked",
  positiveLabel: "Positive",
  bookedTag: "Booked",
  replies: [
    { initials: "JM", name: "Jordan M.", role: "VP Sales · Fintech", message: "Sounds interesting — Thursday works.", day: 3, hour: 14 },
    { initials: "PR", name: "Priya R.", role: "Head of Growth · SaaS", message: "Happy to chat. Can you do Tuesday at 10?", day: 1, hour: 10 },
    { initials: "DK", name: "Daniel K.", role: "COO · Logistics", message: "Timely — we're reviewing vendors now. Monday afternoon?", day: 0, hour: 15 },
    { initials: "SA", name: "Sofia A.", role: "Founder · Agency", message: "Open to a quick call. Send an invite for Wednesday.", day: 2, hour: 11 },
    { initials: "MT", name: "Marcus T.", role: "CRO · HR Tech", message: "Yes — I'll loop in our Head of Ops. Friday at 1?", day: 4, hour: 13 },
    { initials: "EL", name: "Emma L.", role: "Director of Sales · IT Services", message: "Good timing. Thursday morning works for me.", day: 3, hour: 9 },
  ],
};

export const logos = {
  // TODO: replace with real client logos (SVG preferred) and set placeholder: false.
  placeholder: true,
  heading: "Trusted by B2B teams",
  items: ["Client logo", "Client logo", "Client logo", "Client logo", "Client logo", "Client logo"],
};

export const problem = {
  eyebrow: "The problem",
  heading: "Outbound works. Running it in-house doesn't.",
  subhead:
    "Most B2B teams know cold email can fill a pipeline. Few have the time, tooling, or expertise to do it without wrecking their domain.",
  items: [
    {
      icon: "hourglass",
      title: "Slow to start",
      body: "Hiring an SDR takes months. Ramping them takes months more. Your pipeline waits the whole time.",
    },
    {
      icon: "dollar",
      title: "Expensive to run",
      body: "Salary, commission, data, sending tools, domains, and a manager's attention — all before the first meeting.",
    },
    {
      icon: "flame",
      title: "Easy to break",
      body: "One careless campaign burns a domain. Burn your main one and even your everyday email starts landing in spam.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  heading: "From kickoff to booked calls in four steps.",
  subhead: "You give us one call's worth of context. We handle everything after that.",
  effortLabel: "Your effort",
  steps: [
    {
      title: "Strategy & ICP",
      body: "We define exactly who you sell to, what they care about, and the offer most likely to earn a reply. You approve it before anything sends.",
      effort: "One kickoff call",
    },
    {
      title: "Infrastructure",
      body: "We set up dedicated domains and inboxes, configure SPF, DKIM, and DMARC, and warm everything up. Your primary domain is never touched.",
      effort: "None",
    },
    {
      title: "AI-personalized campaigns",
      body: "We source and verify leads, then write emails tailored to each prospect's company, role, and timing — at a volume no manual team can match.",
      effort: "None",
    },
    {
      title: "Meetings on your calendar",
      body: "We handle every reply, answer questions, and book interested prospects straight onto your calendar with context on who they are.",
      effort: "Show up",
    },
  ],
};

export const included = {
  eyebrow: "What's included",
  heading: "Everything outbound needs. Nothing you have to run.",
  subhead: "One team, one monthly engagement, every piece of the machine.",
  features: {
    personalization: {
      title: "AI personalization at scale",
      body: "Every email references something real about the prospect and their company — not just a first name in a template.",
      demo: {
        greeting: "Hi Priya —",
        lines: [
          { text: "Saw the team just opened an Austin office", personalized: true },
          { text: "— congrats. Scaling outbound across a new region usually means", personalized: false },
          { text: "hiring SDRs before pipeline justifies it.", personalized: true },
        ],
        tag: "Personalized from public signals",
      },
    },
    leads: {
      title: "Lead sourcing & verification",
      body: "Targeted lists built to your ICP, with every address verified before it goes anywhere near a send.",
      demo: ["Matches ICP", "Valid mailbox", "Not a catch-all", "No recent bounces"],
    },
    deliverability: {
      title: "Deliverability infrastructure",
      body: "Dedicated domains and inboxes, authentication, warmup, and daily monitoring — kept separate from your main domain.",
      demo: ["SPF", "DKIM", "DMARC", "Warmup", "Monitoring"],
    },
    replies: {
      title: "Reply handling & meeting booking",
      body: "We answer every reply quickly, handle objections and questions, and book meetings directly onto your calendar.",
      demo: {
        inbound: "Interesting. What does pricing look like?",
        outbound: "Depends on scope — easiest to walk through live. Does Tuesday at 10 work?",
        booked: "Booked · Tue 10:00",
      },
    },
    copy: {
      title: "Copywriting & A/B testing",
      body: "Sequences written by people who do this daily, tested continuously, and rewritten around what actually gets replies.",
      demo: ["Variant A", "Variant B"],
    },
    reporting: {
      title: "Reporting dashboard",
      body: "Sends, replies, and meetings booked in one live view. No spreadsheets, no chasing updates.",
      demo: ["Sent", "Replies", "Meetings"],
    },
  },
};

export const results = {
  eyebrow: "Results",
  heading: "Numbers we're accountable for.",
  subhead: "Every client sees the same metrics we do, updated live.",
  // TODO: replace every value below with real, verifiable numbers and set placeholder: false.
  // Until then the section shows a visible "Placeholder figures" label.
  placeholder: true,
  placeholderLabel: "Placeholder figures — replace before launch",
  stats: [
    { value: 1000, prefix: "", suffix: "+", label: "Meetings booked for clients" }, // TODO: real number
    { value: 10, prefix: "", suffix: "%", label: "Average positive reply rate" }, // TODO: real number
    { value: 14, prefix: "", suffix: " days", label: "Average time to first meeting" }, // TODO: real number
    { value: 99, prefix: "", suffix: "%", label: "Average inbox placement" }, // TODO: real number
  ],
};

export type Verdict = "good" | "neutral" | "bad";

export const comparison = {
  eyebrow: "Compare",
  heading: "The honest math on outbound.",
  subhead: "Three ways to get meetings from cold email. Only one of them leaves you free to run your business.",
  recommendedLabel: "Recommended",
  columns: ["RepliHQ", "Hire an SDR", "Do it yourself"],
  rows: [
    {
      label: "Cost",
      cells: [
        // TODO: adjust once pricing is final.
        { text: "One predictable monthly fee", verdict: "good" },
        { text: "Salary, commission, tools, and management", verdict: "bad" },
        { text: "Tools, data, domains — plus your time", verdict: "neutral" },
      ],
    },
    {
      label: "Time to first meeting",
      cells: [
        // TODO: confirm with your real onboarding timeline.
        { text: "Weeks, not months", verdict: "good" },
        { text: "Months of hiring and ramp", verdict: "bad" },
        { text: "Unpredictable — learning as you go", verdict: "bad" },
      ],
    },
    {
      label: "Effort from you",
      cells: [
        { text: "Show up to the calls", verdict: "good" },
        { text: "Recruit, train, and manage", verdict: "bad" },
        { text: "All of it, on top of your day job", verdict: "bad" },
      ],
    },
    {
      label: "Infrastructure",
      cells: [
        { text: "Included and managed", verdict: "good" },
        { text: "You buy and maintain it", verdict: "neutral" },
        { text: "You buy, configure, and maintain it", verdict: "bad" },
      ],
    },
    {
      label: "Risk",
      cells: [
        { text: "Separate domains; your main one stays safe", verdict: "good" },
        { text: "A mis-hire costs months", verdict: "bad" },
        { text: "Burned domains and spam-folder placement", verdict: "bad" },
      ],
    },
  ] satisfies { label: string; cells: { text: string; verdict: Verdict }[] }[],
};

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "What clients say.",
  // TODO: replace with real client testimonials (with permission) and set placeholder: false.
  placeholder: true,
  placeholderLabel: "Placeholder testimonials",
  items: [
    {
      quote: "Placeholder — add a real client quote here. One or two sentences on the specific result they got.",
      name: "Client name",
      role: "Title, Company",
    },
    {
      quote: "Placeholder — add a real client quote here. Specific beats glowing: a number, a timeframe, a before-and-after.",
      name: "Client name",
      role: "Title, Company",
    },
    {
      quote: "Placeholder — add a real client quote here. Ideally from a different industry than the other two.",
      name: "Client name",
      role: "Title, Company",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Questions, answered.",
  contactPrompt: "Something else on your mind?",
  contactCta: "Ask us on a call",
  items: [
    {
      q: "How do you protect deliverability?",
      a: "We never send from your primary domain. Campaigns run on dedicated domains and inboxes with SPF, DKIM, and DMARC configured, fully warmed before sending, and kept within conservative daily volumes. Every address is verified, placement is monitored daily, and inboxes are rested or rotated at the first sign of trouble.",
    },
    {
      q: "How fast will I see meetings?",
      // TODO: confirm with your real onboarding timeline.
      a: "New inboxes need to warm up before they can send safely, so campaigns typically go live a few weeks after kickoff. Replies start arriving once they do, and we book meetings as they come in.",
    },
    {
      q: "Who is this for?",
      // TODO: tailor to your ideal client profile.
      a: "B2B companies with a clear offer and a deal size that justifies outbound — typically SaaS, agencies, and service businesses. If your team can close a qualified meeting, we can help you get more of them.",
    },
    {
      q: "Do we own the domains and inboxes?",
      // TODO: confirm this matches your actual policy.
      a: "Yes. The sending domains and inboxes we set up are registered for your business, and they stay yours if we ever part ways.",
    },
    {
      q: "How does pricing work?",
      // TODO: confirm pricing model.
      a: "A monthly fee based on volume and scope, with domains, inboxes, data, and tooling included. We'll give you an exact quote on the strategy call.",
    },
    {
      q: "Is there a long-term contract?",
      // TODO: confirm contract terms.
      a: "No long lock-ins. We work month to month after an initial onboarding period — we'd rather earn your business every month.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Book a call",
  headline: { lead: "Let's fill your ", emphasis: "calendar." },
  // TODO: confirm call length / agenda.
  subhead:
    "Pick a time that works. In 30 minutes we'll map your ideal customer, your offer, and what a campaign would look like for you.",
  points: ["Your ICP and offer, pressure-tested", "A campaign outline you can keep", "No obligation"],
  fallback: "Calendar not loading?",
  fallbackLink: "Open the booking page",
  loading: "Loading calendar…",
};

export const footer = {
  tagline: "Done-for-you cold email that books qualified meetings on your calendar.",
  signoff: "Built for replies.",
  groups: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "What's included", href: "/#included" },
        { label: "Results", href: "/#results" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Book a call", href: "/#book" },
        { label: "Contact", href: `mailto:${site.email}` },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
};

export const notFound = {
  heading: "This page didn't get a reply.",
  body: "The page you're looking for doesn't exist or has moved.",
  cta: "Back to home",
};

/**
 * Legal pages. TODO: these are starting templates only — have them reviewed by a
 * lawyer for your jurisdiction and business before launch, then set placeholder: false.
 */
export const legal = {
  placeholder: true,
  placeholderLabel: "Template — pending legal review",
  // TODO: set to the date your final policies take effect.
  lastUpdated: "TODO: date",
  privacy: {
    title: "Privacy Policy",
    description: "How RepliHQ collects, uses, and protects personal information.",
    sections: [
      {
        heading: "Who we are",
        body: [
          `${site.name} provides managed outbound email services to businesses. This policy explains how we handle personal information collected through this website and in delivering our services. TODO: add your legal entity name and registered address.`,
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "Information you give us: your name, email, company, and anything you share when booking a call or contacting us.",
          "Information collected automatically: basic technical data such as browser type, pages visited, and approximate location, collected through standard server logs and any analytics tools we use. TODO: list the analytics tools you actually use.",
          "Business contact data: to run campaigns for clients, we process professional contact information (such as name, job title, company, and work email) from publicly available and licensed data sources.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "To schedule and hold calls, respond to inquiries, deliver and improve our services, and meet legal obligations. We do not sell personal information.",
        ],
      },
      {
        heading: "Legal basis and your rights",
        body: [
          "Where applicable law requires it, we rely on legitimate interests, contract, or consent to process personal information. Depending on where you live, you may have the right to access, correct, delete, or object to the processing of your data. Every outbound email we send on behalf of clients includes a way to opt out, and we honor opt-outs promptly.",
          `To exercise your rights, email ${site.email}.`,
        ],
      },
      {
        heading: "Service providers",
        body: [
          "We use trusted third parties to operate our business, including scheduling (Calendly), hosting, and email infrastructure providers. They process data only on our instructions. TODO: list your actual subprocessors.",
        ],
      },
      {
        heading: "Retention and security",
        body: [
          "We keep personal information only as long as needed for the purposes above and protect it with reasonable technical and organizational measures.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about this policy? Email ${site.email}.`],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "The terms that govern use of the RepliHQ website and services.",
    sections: [
      {
        heading: "Agreement",
        body: [
          `By using this website you agree to these terms. Services provided to clients are governed by a separate written agreement, which takes precedence over these terms where they conflict. TODO: add your legal entity name.`,
        ],
      },
      {
        heading: "Use of the website",
        body: [
          "You may use this website for lawful purposes only. Do not attempt to disrupt it, access it without authorization, or copy its content for commercial use without permission.",
        ],
      },
      {
        heading: "Services",
        body: [
          "Scope, deliverables, fees, and term for client engagements are set out in each client's agreement. We do not guarantee a specific number of meetings or outcomes unless explicitly stated in writing. TODO: align with your service agreement.",
        ],
      },
      {
        heading: "Compliance",
        body: [
          "We design campaigns to comply with applicable email and data protection laws, such as CAN-SPAM, and require clients to provide accurate information about their offer. Clients are responsible for the claims made about their own products and services.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          `All content on this website is owned by ${site.name} or its licensors. Nothing here grants you a license to use our trademarks or content.`,
        ],
      },
      {
        heading: "Disclaimers and liability",
        body: [
          "This website is provided “as is.” To the fullest extent permitted by law, we disclaim all warranties and are not liable for indirect or consequential damages arising from its use.",
        ],
      },
      {
        heading: "Governing law",
        body: ["TODO: specify governing law and jurisdiction."],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms? Email ${site.email}.`],
      },
    ],
  },
};
