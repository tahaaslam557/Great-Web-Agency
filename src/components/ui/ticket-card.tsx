import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { formatPrice } from "@/data/pricing";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";
import { FeatureList } from "./feature-list";

interface TicketCardProps {
  plan: PricingPlan;
  category: string;
  index: number;
  /** Section background, so the perforation notches read as punched through */
  surface: "white" | "offwhite";
}

/** A pricing plan styled as a perforated ticket: price stub on top, what's included below. */
export function TicketCard({ plan, category, index, surface }: TicketCardProps) {
  const dark = !!plan.featured;
  const contact = `/contact?plan=${encodeURIComponent(`${category} — ${plan.name}`)}`;
  const notch = cn(
    "absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border",
    surface === "white" ? "bg-white" : "bg-offwhite",
    dark ? "border-transparent" : "border-line",
  );

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[22px] border transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5",
        dark
          ? "border-navy bg-navy text-white shadow-[0_30px_80px_-30px_rgba(10,26,39,0.55)]"
          : "border-line bg-white text-navy hover:shadow-[0_30px_70px_-35px_rgba(10,26,39,0.35)]",
      )}
    >
      {dark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green/25 blur-[70px]"
        />
      )}

      {/* Stub */}
      <div className="relative p-7 pb-8">
        <div className="flex items-center justify-between">
          <span className={cn("font-mono text-[11px] tracking-[0.14em]", dark ? "text-white/45" : "text-navy/40")}>
            NO. {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className={cn("mt-5 text-[1.35rem] font-semibold leading-tight tracking-[-0.03em]", dark && "pr-24")}>{plan.name}</h3>
        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-[clamp(2.5rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.05em]">{formatPrice(plan.price)}</p>
          {plan.unit && <span className={cn("text-sm", dark ? "text-white/55" : "text-muted")}>{plan.unit}</span>}
        </div>

        {dark && (
          <span
            aria-label="Best value"
            className="absolute right-6 top-14 flex h-[78px] w-[78px] rotate-12 items-center justify-center rounded-full border-2 border-green text-center text-green transition-transform duration-500 group-hover:rotate-[20deg]"
          >
            <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-dashed border-green/60 font-mono text-[9px] font-semibold uppercase leading-tight tracking-[0.12em]">
              Best
              <br />
              value
            </span>
          </span>
        )}
      </div>

      {/* Perforation */}
      <div className="relative h-0" aria-hidden>
        <span className={cn(notch, "-left-3.5")} />
        <span className={cn(notch, "-right-3.5")} />
        <span className={cn("absolute inset-x-6 border-t-2 border-dashed", dark ? "border-white/15" : "border-navy/10")} />
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-7 pt-8">
        <FeatureList features={plan.features} dark={dark} />
        <div className="mt-auto flex items-center gap-3 pt-9">
          <Link
            href={contact}
            className={cn(
              "group/btn inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-[0.95rem] font-semibold transition-colors duration-300",
              dark ? "bg-green text-navy hover:bg-green-bright" : "bg-navy text-white hover:bg-teal",
            )}
          >
            Order now
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
          </Link>
          <Link
            href={contact}
            aria-label={`Chat about ${plan.name}`}
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
              dark ? "border-white/20 hover:border-green hover:text-green" : "border-line hover:border-teal hover:text-teal",
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
