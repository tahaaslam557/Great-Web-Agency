import type { Industry, PortfolioItem } from "@/types";

/** Industries shown in the portfolio filter, in display order. */
export const industries: { key: Industry; label: string; blurb: string }[] = [
  { key: "ecommerce", label: "Ecommerce", blurb: "Stores that turn browsers into buyers." },
  { key: "fitness", label: "Fitness", blurb: "Energy you can feel before the first class." },
  { key: "food", label: "Food", blurb: "Menus, bookings and appetite on every screen." },
  { key: "transport", label: "Transport", blurb: "Logistics made clear, quotes made instant." },
  { key: "technology", label: "Technology", blurb: "Complex products explained in seconds." },
  { key: "real-estate", label: "Real Estate", blurb: "Listings that sell the lifestyle." },
  { key: "fintech", label: "Fintech", blurb: "Trust-first design for money that moves." },
  { key: "construction", label: "Construction", blurb: "Built-to-last brands for builders." },
];

/**
 * PLACEHOLDER portfolio. Every thumbnail is rendered in code by <SiteMock>.
 * To show a real full-page screenshot instead, drop a tall image in /public/portfolio
 * and set `image` (e.g. "/portfolio/maison-vale.webp").
 */
export const portfolio: PortfolioItem[] = [
  // Ecommerce
  { slug: "maison-vale", name: "Maison Vale", industry: "ecommerce", tagline: "Quiet luxury, delivered.", palette: ["#f4efe8", "#2b2320", "#b0764b"], layout: 0 },
  { slug: "bloomcart", name: "Bloomcart", industry: "ecommerce", tagline: "Fresh flowers in two hours.", palette: ["#fff4f5", "#3a1f2b", "#e35d7a"], layout: 1 },
  { slug: "kinfolk-supply", name: "Kinfolk Supply", industry: "ecommerce", tagline: "Objects for slower living.", palette: ["#eef0ea", "#1f2a22", "#5d7b52"], layout: 3 },
  { slug: "luma-skin", name: "Luma Skin", industry: "ecommerce", tagline: "Skincare that glows back.", palette: ["#f9f1ff", "#2a1d3a", "#9b6bd6"], layout: 2 },
  { slug: "ridge-and-co", name: "Ridge & Co", industry: "ecommerce", tagline: "Gear for the long way round.", palette: ["#101614", "#eef3ee", "#e2a33b"], layout: 0 },
  { slug: "nectar-tea", name: "Nectar Tea", industry: "ecommerce", tagline: "Single-estate, small-batch.", palette: ["#fbf8ea", "#2f3316", "#9aa83a"], layout: 1 },
  // Fitness
  { slug: "ironform", name: "Ironform", industry: "fitness", tagline: "Stronger every single rep.", palette: ["#0e0e10", "#f5f5f5", "#ff4d2e"], layout: 2 },
  { slug: "pulse-pilates", name: "Pulse Pilates", industry: "fitness", tagline: "Move with intention.", palette: ["#fdf3ee", "#3b2420", "#e07a5f"], layout: 1 },
  { slug: "stride-club", name: "Stride Club", industry: "fitness", tagline: "Run together. Go further.", palette: ["#e9f6ff", "#0c2233", "#1d8fe0"], layout: 3 },
  { slug: "zen-flow", name: "Zen Flow", industry: "fitness", tagline: "Breathe in. Slow down.", palette: ["#eff6f1", "#1c2e25", "#4f9d7a"], layout: 0 },
  { slug: "apex-boxing", name: "Apex Boxing", industry: "fitness", tagline: "Train like a contender.", palette: ["#141018", "#f6f1f7", "#d6ff3f"], layout: 2 },
  // Food
  { slug: "ember-kitchen", name: "Ember Kitchen", industry: "food", tagline: "Wood-fired, all day.", palette: ["#1a1210", "#f8ece2", "#f07b3f"], layout: 2 },
  { slug: "crust-and-crumb", name: "Crust & Crumb", industry: "food", tagline: "Baked at dawn, gone by noon.", palette: ["#fbf3e4", "#3d2a18", "#c98a3c"], layout: 0 },
  { slug: "saffron-house", name: "Saffron House", industry: "food", tagline: "Spice, stories and slow cooking.", palette: ["#fff8e6", "#3a1c0f", "#e0a21a"], layout: 1 },
  { slug: "greenbowl", name: "Greenbowl", industry: "food", tagline: "Eat bright, feel better.", palette: ["#f0fbf1", "#15301c", "#3fb45d"], layout: 3 },
  { slug: "brew-lab", name: "Brew Lab", industry: "food", tagline: "Coffee, tested obsessively.", palette: ["#f3eee9", "#231a15", "#8a5a3c"], layout: 0 },
  // Transport
  { slug: "swiftline", name: "Swiftline", industry: "transport", tagline: "Freight that never waits.", palette: ["#f2f6fb", "#0b1f3a", "#2f6fed"], layout: 1 },
  { slug: "harbor-freight", name: "Harbor Freight Co", industry: "transport", tagline: "Port to door, tracked live.", palette: ["#0c1a24", "#e8f2f7", "#28b3c9"], layout: 2 },
  { slug: "urbanride", name: "UrbanRide", industry: "transport", tagline: "Your city, one tap away.", palette: ["#fffbe8", "#1f1b08", "#f5c518"], layout: 3 },
  { slug: "northstar-movers", name: "Northstar Movers", industry: "transport", tagline: "Moving day, minus the stress.", palette: ["#eef2ff", "#191d3a", "#5b61e8"], layout: 0 },
  { slug: "cargo-pilot", name: "Cargo Pilot", industry: "transport", tagline: "Smarter routes, lower costs.", palette: ["#f1f5f4", "#102421", "#0f9d8a"], layout: 1 },
  // Technology
  { slug: "nimbus-cloud", name: "Nimbus Cloud", industry: "technology", tagline: "Infrastructure that scales itself.", palette: ["#0b0f1f", "#e9ecff", "#7c8cff"], layout: 3 },
  { slug: "vertex-ai", name: "Vertex AI", industry: "technology", tagline: "Decisions at the speed of data.", palette: ["#0d0b14", "#f1edff", "#b77cff"], layout: 2 },
  { slug: "codeforge", name: "Codeforge", industry: "technology", tagline: "Ship code with confidence.", palette: ["#f4f6f8", "#111827", "#10b981"], layout: 1 },
  { slug: "orbit-analytics", name: "Orbit Analytics", industry: "technology", tagline: "Every metric in one orbit.", palette: ["#eff8ff", "#0b2540", "#0ea5e9"], layout: 0 },
  { slug: "sentinel", name: "Sentinel", industry: "technology", tagline: "Security that never sleeps.", palette: ["#0a1411", "#e6f7ef", "#34d399"], layout: 3 },
  // Real estate
  { slug: "oakridge-homes", name: "Oakridge Homes", industry: "real-estate", tagline: "Homes built around you.", palette: ["#f6f3ee", "#26302a", "#7a8f5a"], layout: 2 },
  { slug: "skyline-realty", name: "Skyline Realty", industry: "real-estate", tagline: "Find your view.", palette: ["#eef4fa", "#12263a", "#3a7bd5"], layout: 1 },
  { slug: "haven-estates", name: "Haven Estates", industry: "real-estate", tagline: "Where luxury feels like home.", palette: ["#14110d", "#f5efe4", "#c9a45c"], layout: 0 },
  { slug: "metro-lofts", name: "Metro Lofts", industry: "real-estate", tagline: "City living, reimagined.", palette: ["#f4f4f4", "#1a1a1a", "#e2553d"], layout: 3 },
  { slug: "coastal-living", name: "Coastal Living", industry: "real-estate", tagline: "Wake up to the water.", palette: ["#effaf9", "#0f2e33", "#1fa4a8"], layout: 2 },
  // Fintech
  { slug: "ledgerly", name: "Ledgerly", industry: "fintech", tagline: "Books that balance themselves.", palette: ["#f3f7f5", "#0f2a22", "#1f9d6b"], layout: 1 },
  { slug: "coinpath", name: "Coinpath", industry: "fintech", tagline: "Crypto, finally made simple.", palette: ["#0c0d16", "#eef0ff", "#f7b733"], layout: 3 },
  { slug: "finch-pay", name: "Finch Pay", industry: "fintech", tagline: "Get paid in a heartbeat.", palette: ["#f5f3ff", "#1e1540", "#6d4aff"], layout: 0 },
  { slug: "vaultline", name: "Vaultline", industry: "fintech", tagline: "Banking with nothing to hide.", palette: ["#0a1622", "#e8f1fa", "#3fa9f5"], layout: 2 },
  { slug: "brightfund", name: "Brightfund", industry: "fintech", tagline: "Invest in what matters.", palette: ["#fffaf0", "#2a2210", "#f29f05"], layout: 1 },
  // Construction
  { slug: "steelcore", name: "Steelcore Builders", industry: "construction", tagline: "Built on steel, backed by trust.", palette: ["#121417", "#f1f2f4", "#f59e0b"], layout: 2 },
  { slug: "granite-and-beam", name: "Granite & Beam", industry: "construction", tagline: "Craftsmanship in every beam.", palette: ["#f5f3f0", "#2b2825", "#a1683a"], layout: 0 },
  { slug: "summit-construct", name: "Summit Construct", industry: "construction", tagline: "From groundbreak to handover.", palette: ["#fff7ed", "#2a1a0b", "#ea580c"], layout: 3 },
  { slug: "buildright", name: "BuildRight", industry: "construction", tagline: "On time. On budget. On point.", palette: ["#f1f5f9", "#0f172a", "#eab308"], layout: 1 },
  { slug: "keystone-civil", name: "Keystone Civil", industry: "construction", tagline: "Infrastructure for tomorrow.", palette: ["#0f1a17", "#e9f3ef", "#63bf7c"], layout: 2 },
];

export function industryLabel(key: Industry): string {
  return industries.find((i) => i.key === key)?.label ?? key;
}
