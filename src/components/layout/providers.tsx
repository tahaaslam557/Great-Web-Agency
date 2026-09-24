"use client";

import { MotionConfig } from "motion/react";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface IntroState {
  /** true once the intro loader has finished (or was skipped) */
  ready: boolean;
  markReady: () => void;
}

const IntroContext = createContext<IntroState>({ ready: true, markReady: () => {} });

export function useIntro() {
  return useContext(IntroContext);
}

export function Providers({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const markReady = useCallback(() => setReady(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={{ ready, markReady }}>{children}</IntroContext.Provider>
    </MotionConfig>
  );
}
