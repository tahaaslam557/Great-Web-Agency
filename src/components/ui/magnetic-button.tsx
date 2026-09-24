"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef, type ReactNode, type PointerEvent, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-light" | "ghost-light";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  magnetic?: boolean;
  fullWidth?: boolean;
  className?: string;
}

type LinkProps = BaseProps & { href: string; external?: boolean };
type NativeProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & { href?: undefined };

export type MagneticButtonProps = LinkProps | NativeProps;

const variants: Record<Variant, string> = {
  primary: "bg-green text-navy hover:bg-green-bright shadow-[0_10px_40px_-12px_rgba(99,191,124,0.7)]",
  outline: "border border-navy/20 text-navy hover:border-navy/40 hover:bg-navy/[0.03]",
  "outline-light": "border border-white/25 text-white hover:border-green hover:text-green",
  "ghost-light": "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

/**
 * Primary button system. Magnetic pull on fine pointers,
 * arrow nudge on hover, springy press state.
 */
export function MagneticButton(props: MagneticButtonProps) {
  const { children, variant = "primary", size = "md", arrow = true, magnetic = true, fullWidth, className } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: PointerEvent) => {
    if (!magnetic || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex select-none items-center justify-center gap-2.5 rounded-full font-semibold tracking-[-0.01em] transition-colors duration-300",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      )}
    </>
  );

  return (
    <motion.span
      ref={ref}
      className={fullWidth ? "flex w-full" : "inline-flex"}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-cursor="hover"
    >
      {props.href !== undefined ? (
        props.external ? (
          <a href={props.href} className={classes} target="_blank" rel="noreferrer">
            {inner}
          </a>
        ) : (
          <Link href={props.href} className={classes}>
            {inner}
          </Link>
        )
      ) : (
        <button
          {...stripBase(props)}
          type={props.type ?? "button"}
          className={cn(classes, "disabled:cursor-not-allowed disabled:opacity-60")}
        >
          {inner}
        </button>
      )}
    </motion.span>
  );
}

function stripBase(props: NativeProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, variant, size, arrow, magnetic, fullWidth, className, href, ...rest } = props;
  return rest;
}
