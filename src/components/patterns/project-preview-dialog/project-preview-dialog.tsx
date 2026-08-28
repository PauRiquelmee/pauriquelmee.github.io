"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ExternalLink, X } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import Button from "@/components/foundations/button";
import { withBasePath } from "@/lib/paths";

export type ProjectPreviewDialogProps = {
  projectName: string;
  websiteUrl: string;
  imageSrc: string;
  imageAlt: string;
  fallbackMessage: string;
  previewUrl?: string;
};

export default function ProjectPreviewDialog({
  projectName,
  websiteUrl,
  imageSrc,
  imageAlt,
  fallbackMessage,
  previewUrl,
}: ProjectPreviewDialogProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={<Button variant="secondary" className="project-preview-trigger" />}
      >
        Live preview {projectName}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />
        <Dialog.Viewport className="dialog-viewport">
          <Dialog.Popup className="project-preview-popup">
            <m.div
              className="project-preview-motion"
              initial={shouldReduceMotion ? false : { y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="dialog-heading">
                <div>
                  <Dialog.Title className="dialog-title">
                    {projectName} live preview
                  </Dialog.Title>
                  <Dialog.Description className="dialog-description">
                    Preview opened only after your request.
                  </Dialog.Description>
                </div>
                <Dialog.Close
                  render={
                    <Button variant="quiet" aria-label={`Close ${projectName} preview`} />
                  }
                >
                  <X aria-hidden="true" size={22} strokeWidth={1.6} />
                </Dialog.Close>
              </div>
              {previewUrl ? (
                <iframe
                  className="project-preview-frame"
                  src={previewUrl}
                  title={`${projectName} live website`}
                  loading="lazy"
                />
              ) : (
                <div className="project-preview-fallback">
                  <Image
                    src={withBasePath(imageSrc)}
                    alt={imageAlt}
                    width={1200}
                    height={675}
                  />
                  <p>{fallbackMessage}</p>
                </div>
              )}
              <a
                className="external-action"
                href={websiteUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${projectName} website`}
              >
                Open website
                <ExternalLink aria-hidden="true" size={17} strokeWidth={1.7} />
              </a>
            </m.div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
