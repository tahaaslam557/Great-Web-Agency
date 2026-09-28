import type { Metadata, Viewport } from "next";
import { Great_Vibes, JetBrains_Mono, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageLoader } from "@/components/layout/page-loader";
import { Providers } from "@/components/layout/providers";
import { Cursor } from "@/components/ui/cursor";
import { INTRO_SESSION_KEY, site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Script face used only by the footer signature
const signature = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Great Web Agency",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1A27",
};

// Runs before paint: skip the intro loader on repeat visits / reduced motion.
const introScript = `try{if(sessionStorage.getItem('${INTRO_SESSION_KEY}')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.intro='skip'}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrains.variable} ${signature.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <noscript>
          <style>{`.gwa-loader{display:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only z-[300] rounded-md bg-green px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Providers>
          <PageLoader />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
