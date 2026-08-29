"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

export type MotionProviderProps = {
  children: React.ReactNode;
};

const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
};

export default MotionProvider;
