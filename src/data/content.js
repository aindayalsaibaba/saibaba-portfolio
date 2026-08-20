export const profile = {
  name: "Saibaba",
  fullName: "A. Saibaba",
  role: "Senior UI/UX & AI Product Designer",
  location: "Hyderabad, India",
  summary:
    "18+ years designing enterprise SaaS, mobile and web products. Now building the AI systems — conversational agents, voice assistants, automation workflows — that sit behind the interfaces I used to only design.",
  email: "aindayalsaibaba@gmail.com",
  phone: "+91 98859 54724",
  links: {
    linkedin: "https://www.linkedin.com/in/saibaba-aindayal-b2600916/",
    behance: "https://behance.net/aindayalsa172b",
    dribbble: "https://dribbble.com/aindayalsaibaba",
    designs99: "https://99designs.com/profiles/626585",
  },
};

// The tool pipeline shown as the hero's signature element —
// literally the path from design to shipped AI product.
export const pipeline = ["Figma", "n8n", "Supabase", "Gemini", "Claude"];

export const stats = [
  { label: "Years in product design", value: "18+" },
  { label: "AI systems shipped solo", value: "3" },
  { label: "Languages", value: "EN · HI · TE" },
  { label: "Based in", value: "Hyderabad" },
];

export const work = [
  {
    tag: "AI · Conversational Design",
    period: "2026",
    company: "Elite Marketing Events",
    title: "A full company website, plus an AI chat widget that actually answers for the business",
    description:
      "Designed and built the complete Elite Marketing Events website in React and Vite — including a full-bleed About page hero and a contact form wired to email delivery — then layered in a Gemini-powered chat widget, from conversation design through to a live Supabase Edge Function deployment.",
    detail:
      "Beyond the site itself: the widget UI, the system prompt and conversation flow, the Gemini API integration, and the edge function serving it. Diagnosed and fixed production issues along the way — a double-init bug, an API parameter mismatch, and a caching layer that was silently serving stale versions to visitors.",
    stack: ["React", "Vite", "Gemini API", "Supabase Edge Functions", "EmailJS"],
    href: "https://elitemarketingevents.in",
    linkLabel: "Visit live site",
  },
{
    tag: "Web · E-commerce Catalogue",
    period: "2026",
    company: "Jaiswal Brothers",
    title: "A 45-product catalogue built to sell over WhatsApp, not a cart",
    description:
      "Designed and built a business website in React and Vite for a Hyderabad ice cream raw materials dealer — a 45-product catalogue with category filtering that routes every enquiry straight into WhatsApp instead of a traditional checkout, matching how the business actually takes orders.",
    detail:
      "Handled the full build solo, including a tricky product-image regression: an AI-assisted edit pass had reverted the product grid and detail views away from a shared image component, breaking photo rendering across the catalogue. Traced it back and restored consistent image handling across both.",
    stack: ["React", "Vite", "WhatsApp API", "Product Catalogue UX"],
    href: "https://jaiswalbrothers.netlify.app/",
    linkLabel: "Visit live site",
  },

  {
    tag: "AI · Healthcare Automation",
    period: "2025",
    company: "Yashoda Hospitals",
    title: "A booking assistant that understands three languages and knows when to escalate",
    description:
      "Designed and built an appointment-booking chatbot for a major hospital group — a 9-step booking flow with built-in emergency detection across English, Hindi and Telugu, running on n8n and Gemini AI.",
    detail:
      "A 7-node n8n workflow orchestrating the conversation, backed by Supabase for scheduling and double-booking prevention. All six of my own test scenarios passed after resolving a retry-related trace leak, a chat UI color bug, and a free-tier quota ceiling.",
    stack: ["n8n", "Gemini AI", "Supabase", "Conversation Design"],
    href: null,
    linkLabel: null,
  },
  {
    tag: "AI · SaaS · Sales Enablement",
    period: "2024 – 2026",
    company: "BuzzBoard — Ignite",
    title: "Designing trust into AI-scored leads and auto-written outreach",
    description:
      "Led UI/UX for Ignite, BuzzBoard's AI sales platform — a Leads Agent that scores tens of millions of SMBs and a Sales Agent that drafts multi-touch outreach cadences. The core design problem wasn't showing AI output, it was showing AI reasoning: every recommended prospect needed a legible 'why', a fit score, and a data-backed talking point a rep could trust enough to open a cold call with.",
    detail:
      "The interface had to hold AI-generated content that's structurally unpredictable — insight cards, competitor snapshots, and email drafts that vary in length and shape from one SMB to the next — without collapsing into a wall of text or breaking the layout grid. Designed reusable card and cadence components that flex to whatever the model returns, plus edit-and-regenerate controls so reps stay in control of anything AI wrote for them.",
    stack: ["Figma", "Design Systems", "AI UX", "SaaS Dashboard Design"],
    href: "https://www.buzzboard.ai/ignite/",
    linkLabel: "View product",
  },
  {
    tag: "AI · SaaS · Fulfillment OS",
    period: "2024 – 2026",
    company: "BuzzBoard — Zylo",
    title: "One command center for thousands of AI-generated marketing assets",
    description:
      "Designed the UI for Zylo, BuzzBoard's AI fulfillment platform that generates and manages social posts, ad creative, websites and blogs for thousands of SMB accounts at once. The challenge was giving one account manager visibility over hundreds of accounts' worth of AI output — each with its own brand kit, tone and asset mix — without the dashboard collapsing into noise.",
    detail:
      "Designed the multi-agent orchestration view (Brand Kit, Website, Social, Reviews and Ads agents working side by side), account-level content queues, and human-in-the-loop review states so creatives could approve, edit or override AI output asset by asset at scale. Every component had to gracefully handle dynamic AI content — variable copy length, missing fields, different asset types — while keeping brand guardrails visually enforced.",
    stack: ["Figma", "Design Systems", "AI UX", "Multi-tenant Dashboard"],
    href: "https://www.buzzboard.ai/zylo/",
    linkLabel: "View product",
  },
  
];

export const labs = [
  {
    name: "AI Growth Partner",
    description:
      "A tiered digital marketing & automation service for small local businesses, priced against the market and built on my own AI automation stack.",
    tag: "Business, In progress · 2026",
    href: null,
  },
  {
    name: "GloryCreations",
    description:
      "A Christian gifting e-commerce store with a built-in AI chat assistant that helps shoppers find products and get questions answered without leaving the page.",
    tag: "E-commerce, AI Chat · glorycreations.in",
    href: "https://glorycreations.in",
  },
  {
    name: "ProspectPilot",
    description:
      "A B2B lead-scraping and website-audit engine — pick a niche and a US metro, and it crawls local business sites for contact emails, runs a Gemini Vision audit on their site's conversion friction, and drafts observation-first cold emails with no flattery or filler.",
    tag: "AI, Automation · Live demo",
    href: "https://prospect-pilot-v2.netlify.app/",
  },
];

export const certifications = [
  "Freedom With AI Blueprint (2026)",
  "Enterprise Design Thinking Practitioner — IBM (2021)",
  "Master Digital Product Design: UX Research & UI Design — Udemy (2024)",
];
