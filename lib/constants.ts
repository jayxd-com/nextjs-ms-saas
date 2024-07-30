export interface NavLink {
  name: string;
  href: string;
}

export const API_URL: string = "https://api.example.com";
export const APP_NAME: string = "My Next.js App";
export const NAV_LINKS: NavLink[] = [
  { name: "How it works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQs", href: "/faqs" },
];