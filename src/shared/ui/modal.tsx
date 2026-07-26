'use client';

/** @layer shared / slice ui — reusable modal shell (Radix Dialog primitives) */

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Accessible (and default visual) title */
  title: string;
  /** Optional custom header content; title stays available to screen readers */
  header?: ReactNode;
  children: ReactNode;
  /** Optional footer — action buttons (Cancel / OK / …) */
  footer?: ReactNode;
  /** Show top-right × button. Default: true */
  showCloseButton?: boolean;
  /** Close when clicking outside the panel. Default: true */
  closeOnOutsideClick?: boolean;
  /** Close on Escape. Default: true */
  closeOnEscape?: boolean;
  className?: string;
  contentClassName?: string;
};

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { documentElement, body } = document;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    // scrollbar-gutter: stable (global.css) keeps layout width; no margin compensation
    documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [locked]);
}

export function Modal({
  open,
  onOpenChange,
  title,
  header,
  children,
  footer,
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  className,
  contentClassName,
}: ModalProps) {
  useLockBodyScroll(open);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <div
          data-slot="modal-overlay"
          aria-hidden
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in-0"
        />
        <DialogPrimitive.Content
          data-slot="modal-content"
          aria-describedby={undefined}
          onPointerDownOutside={(event) => {
            if (!closeOnOutsideClick) event.preventDefault();
          }}
          onInteractOutside={(event) => {
            if (!closeOnOutsideClick) event.preventDefault();
          }}
          onEscapeKeyDown={(event) => {
            if (!closeOnEscape) event.preventDefault();
          }}
          className={cn(
            'fixed top-1/2 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2',
            'overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200',
            className
          )}
        >
          <div
            data-slot="modal-header"
            className="flex items-center justify-between gap-4 border-b border-border p-6"
          >
            <div className="min-w-0 flex-1">
              {header ?? (
                <DialogPrimitive.Title className="text-2xl font-bold">
                  {title}
                </DialogPrimitive.Title>
              )}
              {header ? (
                <DialogPrimitive.Title className="sr-only">
                  {title}
                </DialogPrimitive.Title>
              ) : null}
            </div>

            {showCloseButton ? (
              <DialogPrimitive.Close
                type="button"
                aria-label="Close"
                className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-muted"
              >
                <XIcon className="size-5" />
              </DialogPrimitive.Close>
            ) : null}
          </div>

          <div data-slot="modal-body" className={cn('p-6', contentClassName)}>
            {children}
          </div>

          {footer ? (
            <div
              data-slot="modal-footer"
              className="flex flex-wrap items-center justify-center gap-3 px-6 pb-6"
            >
              {footer}
            </div>
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
