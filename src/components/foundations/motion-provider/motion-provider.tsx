"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

export type MotionProviderProps = {
  children: React.ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
