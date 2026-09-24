import { Marquee } from "@/components/ui/marquee";
import { marqueeItems } from "@/data/content";

export function TrustMarquee() {
  return (
    <section aria-label="What we do" className="relative border-y border-line-dark bg-[#0c2030] py-10 text-white">
      <div className="container-x mb-7 flex items-center gap-4">
        <span className="micro-label text-white/50">Built for ambitious brands</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <Marquee
        duration={36}
        items={marqueeItems.map((item) => (
          <span key={item} className="flex items-center">
            <span className="px-8 text-[clamp(1.75rem,4vw,3.25rem)] font-semibold uppercase tracking-[-0.03em] text-white/85 transition-colors duration-300 hover:text-green">
              {item}
            </span>
            <span className="h-2.5 w-2.5 bg-green" aria-hidden />
          </span>
        ))}
      />
    </section>
  );
}
