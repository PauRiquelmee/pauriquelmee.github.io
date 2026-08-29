'use client';

import { LazyMotion, MotionConfig } from 'motion/react';

export type MotionProviderProps = {
  children: React.ReactNode;
};

const loadMotionFeatures = () =>
  import('@/lib/motion-features').then((module) => module.default);

const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
};

export default MotionProvider;
