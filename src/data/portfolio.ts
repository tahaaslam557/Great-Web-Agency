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

/** Portfolio sites. Each `image` is a full-page screenshot in /public/portfolio. */
export const portfolio: PortfolioItem[] = [
  // Ecommerce
  { slug: "threadline", name: "Ekommart", industry: "ecommerce", tagline: "Exclusive designs, printed to order.", palette: ["#fffeff", "#2a2e45", "#f6b94f"], layout: 0, image: "/portfolio/threadline.webp" },
  { slug: "atlas-auto-parts", name: "Armania", industry: "ecommerce", tagline: "Find the parts that fit your car.", palette: ["#0c1144", "#ffffff", "#322a48"], layout: 1, image: "/portfolio/atlas-auto-parts.webp" },
  { slug: "little-builders", name: "Ekommart", industry: "ecommerce", tagline: "Toys that grow with imagination.", palette: ["#fffeff", "#a74f48", "#f9c442"], layout: 2, image: "/portfolio/little-builders.webp" },
  { slug: "timecraft", name: "Ekommart", industry: "ecommerce", tagline: "Statement watches, curated.", palette: ["#262326", "#f1f5f9", "#a19389"], layout: 3, image: "/portfolio/timecraft.webp" },
  { slug: "aurelle", name: "Molla", industry: "ecommerce", tagline: "Our favourite things, beautifully set.", palette: ["#1e1c1f", "#ffffff", "#8d6f5c"], layout: 0, image: "/portfolio/aurelle.webp" },
  { slug: "soundwave", name: "Molla", industry: "ecommerce", tagline: "Control your sound.", palette: ["#fffeff", "#1e1c1f", "#4e4845"], layout: 1, image: "/portfolio/soundwave.webp" },
  { slug: "playground-tees", name: "Ekommart", industry: "ecommerce", tagline: "Streetwear with a sense of play.", palette: ["#ffffff", "#191a21", "#20929c"], layout: 2, image: "/portfolio/playground-tees.webp" },
  { slug: "everyday-mart", name: "Firezy", industry: "ecommerce", tagline: "Every department, one checkout.", palette: ["#fffeff", "#505c77", "#f8e6b6"], layout: 3, image: "/portfolio/everyday-mart.webp" },
  { slug: "legend-arena", name: "Game Zone", industry: "ecommerce", tagline: "Gear for players who never give up.", palette: ["#412f73", "#f1f5f9", "#3b1070"], layout: 0, image: "/portfolio/legend-arena.webp" },
  { slug: "porto-barber-co", name: "Porto Barber Co", industry: "ecommerce", tagline: "Classic cuts and grooming goods.", palette: ["#fffeff", "#2d2a2e", "#b0a59d"], layout: 1, image: "/portfolio/porto-barber-co.webp" },
  { slug: "sunny-street", name: "Bestore", industry: "ecommerce", tagline: "Shopping as you love.", palette: ["#fffeff", "#35332c", "#fbd44d"], layout: 2, image: "/portfolio/sunny-street.webp" },
  { slug: "fitmania", name: "Armania", industry: "ecommerce", tagline: "Limited-edition performance wear.", palette: ["#fffeff", "#27111a", "#65292e"], layout: 3, image: "/portfolio/fitmania.webp" },
  { slug: "rose-beauty", name: "Venia", industry: "ecommerce", tagline: "The new beauty trend.", palette: ["#efeced", "#4f3331", "#b59289"], layout: 0, image: "/portfolio/rose-beauty.webp" },
  { slug: "burger-bros", name: "Burger", industry: "ecommerce", tagline: "Good mood guaranteed.", palette: ["#141114", "#c9b15f", "#131013"], layout: 1, image: "/portfolio/burger-bros.webp" },
  { slug: "monfee", name: "Monfee", industry: "ecommerce", tagline: "Start a day with coffee.", palette: ["#fffeff", "#1b0e0b", "#573e31"], layout: 2, image: "/portfolio/monfee.webp" },
  { slug: "blush-and-co", name: "Karl", industry: "ecommerce", tagline: "Spring-clean your beauty routine.", palette: ["#fffeff", "#857069", "#edb3ad"], layout: 3, image: "/portfolio/blush-and-co.webp" },
  // Fitness
  { slug: "strong-athletics", name: "Prowess", industry: "fitness", tagline: "Push your limits forward.", palette: ["#131013", "#f1f5f9", "#655551"], layout: 0, image: "/portfolio/strong-athletics.webp" },
  { slug: "halo-dental", name: "Dr. Horvath", industry: "fitness", tagline: "Predictability, trust, professionalism.", palette: ["#fc5f87", "#111827", "#f80d48"], layout: 1, image: "/portfolio/halo-dental.webp" },
  { slug: "fitness-zone", name: "Fitness Zone", industry: "fitness", tagline: "Enrol with the best.", palette: ["#fefefe", "#261f1b", "#babd89"], layout: 2, image: "/portfolio/fitness-zone.webp" },
  { slug: "tunia-hope", name: "Junia Hope", industry: "fitness", tagline: "Desire of a heavenly youth.", palette: ["#f9f9f9", "#3b6c58", "#3b6c58"], layout: 3, image: "/portfolio/tunia-hope.webp" },
  { slug: "terrigal-dental", name: "Terrigal Dental", industry: "fitness", tagline: "Welcome to our community.", palette: ["#ffffff", "#130e0b", "#6f8894"], layout: 0, image: "/portfolio/terrigal-dental.webp" },
  { slug: "be-ready-fitness", name: "Be Ready Fitness", industry: "fitness", tagline: "Be ready for your fitness.", palette: ["#fffeff", "#a47450", "#fcfeef"], layout: 1, image: "/portfolio/be-ready-fitness.webp" },
  { slug: "anyplace-fit", name: "Ototgym", industry: "fitness", tagline: "Get active anytime, anyplace.", palette: ["#282b35", "#e5dfd8", "#b09885"], layout: 2, image: "/portfolio/anyplace-fit.webp" },
  { slug: "iron-temple", name: "Fitness Zone", industry: "fitness", tagline: "Train harder, recover smarter.", palette: ["#ffffff", "#1c1d22", "#b1bd7e"], layout: 3, image: "/portfolio/iron-temple.webp" },
  // Food
  { slug: "a-bella-andrade", name: "A Bella Andrade", industry: "food", tagline: "Handmade sweets, weekly treats.", palette: ["#fdfdfd", "#936b58", "#e1d7d1"], layout: 0, image: "/portfolio/a-bella-andrade.webp" },
  { slug: "kneading-flour", name: "Monograno Felicetti", industry: "food", tagline: "Kneading flour with heaven.", palette: ["#f8f1f3", "#111827", "#dbd8cf"], layout: 1, image: "/portfolio/kneading-flour.webp" },
  { slug: "safira", name: "Safira", industry: "food", tagline: "Fresh farm products, delivered.", palette: ["#fefefe", "#111827", "#8da064"], layout: 2, image: "/portfolio/safira.webp" },
  { slug: "eight", name: "Avrox", industry: "food", tagline: "Recovery nutrition, simplified.", palette: ["#000000", "#ffffff", "#74767a"], layout: 3, image: "/portfolio/eight.webp" },
  { slug: "pantry-loop", name: "Good Club", industry: "food", tagline: "Simple, sustainable groceries.", palette: ["#fefefe", "#7c7065", "#4fb99a"], layout: 0, image: "/portfolio/pantry-loop.webp" },
  { slug: "liebe", name: "Liebe", industry: "food", tagline: "\"Lee-buh\" means love.", palette: ["#f7e55e", "#111827", "#f8f8f8"], layout: 1, image: "/portfolio/liebe.webp" },
  { slug: "fast-fork", name: "Fudo", industry: "food", tagline: "The fastest way to your food.", palette: ["#fffeff", "#954731", "#ffffff"], layout: 2, image: "/portfolio/fast-fork.webp" },
  { slug: "cuisine-house", name: "Cuisine House", industry: "food", tagline: "Welcome to our cuisine.", palette: ["#fffeff", "#804e44", "#d0a184"], layout: 3, image: "/portfolio/cuisine-house.webp" },
  // Transport
  { slug: "trail-quattro", name: "Trail Quattro", industry: "transport", tagline: "A concept SUV for off-road futures.", palette: ["#613c35", "#d5c5b9", "#c1ada8"], layout: 0, image: "/portfolio/trail-quattro.webp" },
  { slug: "protech-coatings", name: "ProTech Coatings", industry: "transport", tagline: "Paint protection that repels the elements.", palette: ["#ffffff", "#000000", "#422e37"], layout: 1, image: "/portfolio/protech-coatings.webp" },
  { slug: "colorado-runout", name: "Holden", industry: "transport", tagline: "Weekly repayment offers on every trim.", palette: ["#fffeff", "#201f2c", "#526c88"], layout: 2, image: "/portfolio/colorado-runout.webp" },
  { slug: "bkck-transportation", name: "BKCK Transportation", industry: "transport", tagline: "Travel in style, comfort and safety.", palette: ["#fffeff", "#0f0d1b", "#61a29a"], layout: 3, image: "/portfolio/bkck-transportation.webp" },
  { slug: "ahg-motoring", name: "AHG Motoring", industry: "transport", tagline: "Australia's largest motoring group.", palette: ["#fffeff", "#212128", "#d08a43"], layout: 0, image: "/portfolio/ahg-motoring.webp" },
  { slug: "motordepot", name: "Motordepot", industry: "transport", tagline: "Eleven showrooms across the UK.", palette: ["#fffeff", "#2a2828", "#3096d0"], layout: 1, image: "/portfolio/motordepot.webp" },
  { slug: "t50-supercar", name: "Gordon Murray Automotive", industry: "transport", tagline: "Pure driving, reimagined.", palette: ["#5b5054", "#d2d3d4", "#2c2735"], layout: 2, image: "/portfolio/t50-supercar.webp" },
  { slug: "autoparts-hub", name: "Speed Repair", industry: "transport", tagline: "Parts for hundreds of vehicles.", palette: ["#0b0d1c", "#f1f5f9", "#350c1b"], layout: 3, image: "/portfolio/autoparts-hub.webp" },
  // Technology
  { slug: "ideal-it-trends", name: "iDeal IT Trends", industry: "technology", tagline: "Affordable repair when you need it.", palette: ["#ffffff", "#020a15", "#124e78"], layout: 0, image: "/portfolio/ideal-it-trends.webp" },
  { slug: "pulse-reviews", name: "Pulse Reviews", industry: "technology", tagline: "Harness the power of customer words.", palette: ["#ffffff", "#141e7e", "#1b2589"], layout: 1, image: "/portfolio/pulse-reviews.webp" },
  { slug: "nestwise", name: "Nestwise", industry: "technology", tagline: "Intelligent solutions for your home.", palette: ["#ffffff", "#20202a", "#6d76c6"], layout: 2, image: "/portfolio/nestwise.webp" },
  { slug: "f2g-solutions", name: "F2G Solutions", industry: "technology", tagline: "Enterprise technology, launched.", palette: ["#142966", "#c3c4cb", "#38486d"], layout: 3, image: "/portfolio/f2g-solutions.webp" },
  { slug: "xm-offroad", name: "XM Offroad", industry: "technology", tagline: "Leaving the competition in the mud.", palette: ["#f7f5f6", "#1b1b1e", "#7c8da3"], layout: 0, image: "/portfolio/xm-offroad.webp" },
  { slug: "orbitshare", name: "Orbitshare", industry: "technology", tagline: "Space access made radically simpler.", palette: ["#13151f", "#55a9df", "#1491e6"], layout: 1, image: "/portfolio/orbitshare.webp" },
  { slug: "hostwave", name: "Hostwave", industry: "technology", tagline: "The easiest way to get online.", palette: ["#7d72d2", "#ffffff", "#665cbb"], layout: 2, image: "/portfolio/hostwave.webp" },
  // Real estate
  { slug: "future-estates", name: "The Bombino Group", industry: "real-estate", tagline: "The better way to the future.", palette: ["#fefefe", "#111827", "#d7946c"], layout: 3, image: "/portfolio/future-estates.webp" },
  { slug: "inside-out-property", name: "Houzz", industry: "real-estate", tagline: "Development, management and engineering.", palette: ["#fefefe", "#2f2c2f", "#cfd1d3"], layout: 0, image: "/portfolio/inside-out-property.webp" },
  { slug: "londinium-property", name: "Londinium Property", industry: "real-estate", tagline: "The perfect property for your home.", palette: ["#fefefe", "#16181a", "#4c443d"], layout: 1, image: "/portfolio/londinium-property.webp" },
  { slug: "staybright-apartments", name: "Staybright Apartments", industry: "real-estate", tagline: "Mid to long-term stays, instant booking.", palette: ["#fefefe", "#102b4a", "#1b416e"], layout: 2, image: "/portfolio/staybright-apartments.webp" },
  { slug: "quicksale-homes", name: "QuickSale Homes", industry: "real-estate", tagline: "Skip the hassle. Sell to us.", palette: ["#fafafa", "#725f53", "#ffffff"], layout: 3, image: "/portfolio/quicksale-homes.webp" },
  { slug: "blue-ridge-real-estate", name: "Blue Ridge Real Estate", industry: "real-estate", tagline: "Thirty years of local expertise.", palette: ["#fefefe", "#322e30", "#a89075"], layout: 0, image: "/portfolio/blue-ridge-real-estate.webp" },
  { slug: "socal-luxury-realty", name: "FirstTeam Real Estate", industry: "real-estate", tagline: "Home buying and selling since 1976.", palette: ["#fffeff", "#151213", "#483a2e"], layout: 1, image: "/portfolio/socal-luxury-realty.webp" },
  { slug: "villa", name: "Villa", industry: "real-estate", tagline: "Your key to luxury.", palette: ["#fffeff", "#262425", "#5a6c7e"], layout: 2, image: "/portfolio/villa.webp" },
  // Fintech
  { slug: "northwind-finance", name: "Paydong!", industry: "fintech", tagline: "Spending controls, unique cards.", palette: ["#fffeff", "#4a4799", "#b86ce8"], layout: 3, image: "/portfolio/northwind-finance.webp" },
  { slug: "cargochain", name: "Cargochain", industry: "fintech", tagline: "Logistics on the blockchain.", palette: ["#131319", "#ffffff", "#24161b"], layout: 0, image: "/portfolio/cargochain.webp" },
  { slug: "risk-smart", name: "Ynder", industry: "fintech", tagline: "Risk smart, risk start.", palette: ["#091f55", "#ffffff", "#edf2fa"], layout: 1, image: "/portfolio/risk-smart.webp" },
  { slug: "silverline-planners", name: "Silverline Planners", industry: "fintech", tagline: "Better results by reducing risk.", palette: ["#fefefe", "#746972", "#c1b0a9"], layout: 2, image: "/portfolio/silverline-planners.webp" },
  { slug: "epc-risk-insights", name: "EPC Risks", industry: "fintech", tagline: "Uncovering hidden risks, protecting capital.", palette: ["#1d1816", "#ffffff", "#202934"], layout: 3, image: "/portfolio/epc-risk-insights.webp" },
  { slug: "me-finance", name: "Me Finance", industry: "fintech", tagline: "Market research you can act on.", palette: ["#f8f8f8", "#241d1f", "#4c6368"], layout: 0, image: "/portfolio/me-finance.webp" },
  { slug: "fg-investments", name: "FG Investments", industry: "fintech", tagline: "We plan your financial investments.", palette: ["#141a25", "#ffffff", "#fefefe"], layout: 1, image: "/portfolio/fg-investments.webp" },
  { slug: "planwise", name: "Feza Finance", industry: "fintech", tagline: "Independent financial planning advice.", palette: ["#fffeff", "#4e8692", "#02b2ca"], layout: 2, image: "/portfolio/planwise.webp" },
  // Construction
  { slug: "meridian-studio", name: "WLA Williams Lester", industry: "construction", tagline: "Respected. Creative. Thoughtful.", palette: ["#fafafa", "#252b2a", "#c1c9cc"], layout: 3, image: "/portfolio/meridian-studio.webp" },
  { slug: "southern-grove", name: "Southern Grove", industry: "construction", tagline: "Exceptional design, commercial acumen.", palette: ["#dddbd9", "#000000", "#c4bbb0"], layout: 0, image: "/portfolio/southern-grove.webp" },
  { slug: "st-philips", name: "St. Philips", industry: "construction", tagline: "Land promoter and master developer.", palette: ["#8fa2a4", "#111827", "#21303c"], layout: 1, image: "/portfolio/st-philips.webp" },
  { slug: "genesis-recovery", name: "Genesis Recovery", industry: "construction", tagline: "Elevated living, built with purpose.", palette: ["#ffffff", "#485149", "#778f8f"], layout: 2, image: "/portfolio/genesis-recovery.webp" },
  { slug: "buildcraft", name: "Construct", industry: "construction", tagline: "Create the building you want.", palette: ["#fffeff", "#111827", "#88909a"], layout: 3, image: "/portfolio/buildcraft.webp" },
  { slug: "spacecore-industrial", name: "Bildpress", industry: "construction", tagline: "We create space for life.", palette: ["#fa702c", "#111827", "#fffeff"], layout: 0, image: "/portfolio/spacecore-industrial.webp" },
];

export function industryLabel(key: Industry): string {
  return industries.find((i) => i.key === key)?.label ?? key;
}
