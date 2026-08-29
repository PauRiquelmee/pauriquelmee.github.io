'use client';

import dynamic from 'next/dynamic';
import { Menu } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '@/components/foundations/button';

const MobileNavigationDialog = dynamic(
  () => import('@/components/patterns/mobile-navigation-dialog'),
  { ssr: false },
);

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <>
      <Button
        ref={triggerRef}
        id="mobile-navigation-trigger"
        variant="quiet"
        className="mobile-navigation-trigger min-[1088px]:!hidden"
        aria-label="Open navigation"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? 'mobile-navigation-dialog' : undefined}
        onClick={() => setIsOpen(true)}
      >
        <Menu aria-hidden="true" size={22} strokeWidth={1.6} />
      </Button>
      {isOpen ? (
        <MobileNavigationDialog
          onClose={() => setIsOpen(false)}
          triggerRef={triggerRef}
        />
      ) : null}
    </>
  );
};

export default MobileNavigation;
