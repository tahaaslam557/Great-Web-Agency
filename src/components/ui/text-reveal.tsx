"use client";

import { motion } from "motion/react";
import { Fragment, type ElementType } from "react";
import { cn, ease } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Words rendered in the brand green */
  accent?: string[];
  delay?: number;
  stagger?: number;
  /** Reveal on mount (hero) instead of when scrolled into view */
  onMount?: boolean;
  /** Only used with onMount: hold the animation until true */
  play?: boolean;
  /** Append the green square from the logo */
  square?: boolean;
}

/**
 * Masked word-by-word reveal. Words slide up from behind a clip,
 * which reads as typography being set rather than things flying in.
 */
export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  accent = [],
  delay = 0,
  stagger = 0.06,
  onMount = false,
  play = true,
  square = false,
}: TextRevealProps) {
  // The green square replaces a trailing full stop; it is skipped after ? or !
  const trimmed = text.trimEnd();
  const showSquare = square && !/[?!]$/.test(trimmed);
  const lines = (showSquare && trimmed.endsWith(".") ? trimmed.slice(0, -1) : text).split("\n");
  let wordIndex = 0;

  const trigger = onMount
    ? { initial: "hidden", animate: play ? "show" : "hidden" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <Tag className={className}>
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      <motion.span aria-hidden className="block" {...trigger}>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((word, wi, arr) => {
              const i = wordIndex++;
              const clean = word.replace(/[.,!?]/g, "");
              const isLastWord = li === lines.length - 1 && wi === arr.length - 1;
              return (
                <Fragment key={wi}>
                  <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                    <motion.span
                      className={cn("inline-block", accent.includes(clean) && "text-green")}
                      variants={{
                        hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
                        show: {
                          y: "0%",
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: { duration: 0.9, ease: ease.out, delay: delay + i * stagger },
                        },
                      }}
                    >
                      {word}
                      {isLastWord && showSquare && (
                        <span className="ml-[0.06em] inline-block h-[0.16em] w-[0.16em] bg-green" />
                      )}
                    </motion.span>
                  </span>
                  {wi < arr.length - 1 && " "}
                </Fragment>
              );
            })}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
