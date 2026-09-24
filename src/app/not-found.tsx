import { MARK_ARROW, MARK_G } from "@/components/brand/logo";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pb-20 pt-36 text-white">
      <AnimatedGrid />
      <NoiseOverlay />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="micro-label text-green">Error 404</p>
          <h1 className="text-display mt-6 max-w-[14ch]">Looks like this page took a wrong turn.</h1>
          <p className="text-lead mt-6 max-w-md text-white/65">
            The link may be broken, or the page may have moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-10">
            <MagneticButton href="/" size="lg">
              Back Home
            </MagneticButton>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:col-span-5" aria-hidden>
          <svg viewBox="0 0 100 100" className="w-full">
            <path d={MARK_G} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" className="animate-dash" />
            <g className="animate-float" style={{ transformOrigin: "center" }}>
              <path d={MARK_ARROW} fill="#63BF7C" transform="rotate(90 68 66)" />
            </g>
          </svg>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-sm text-white/40">
            ↻ recalculating route
          </span>
        </div>
      </div>
    </section>
  );
}
