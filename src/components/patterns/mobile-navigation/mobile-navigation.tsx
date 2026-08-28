"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";
import Button from "@/components/foundations/button";
import { withBasePath } from "@/lib/paths";

export default function MobileNavigation() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={
          <Button
            variant="quiet"
            className="mobile-navigation-trigger"
            aria-label="Open navigation"
          />
        }
      >
        <Menu aria-hidden="true" size={22} strokeWidth={1.6} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />
        <Dialog.Viewport className="dialog-viewport mobile-navigation-viewport">
          <Dialog.Popup className="mobile-navigation-popup">
            <div className="mobile-navigation-heading">
              <Dialog.Title className="dialog-title">Navigation</Dialog.Title>
              <Dialog.Close
                render={
                  <Button variant="quiet" aria-label="Close navigation" />
                }
              >
                <X aria-hidden="true" size={22} strokeWidth={1.6} />
              </Dialog.Close>
            </div>
            <nav aria-label="Mobile navigation" className="mobile-navigation-links">
              <Dialog.Close render={<a href="#work" />}>Selected work</Dialog.Close>
              <Dialog.Close render={<a href="#experience" />}>Experience</Dialog.Close>
              <Dialog.Close render={<a href="#recognition" />}>Recognition</Dialog.Close>
              <Dialog.Close render={<a href="#contact" />}>Contact</Dialog.Close>
              <Dialog.Close
                render={
                  <a
                    href={withBasePath("/documents/paula-riquelme-resume-en.pdf")}
                    download
                  />
                }
              >
                English resume
              </Dialog.Close>
            </nav>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
