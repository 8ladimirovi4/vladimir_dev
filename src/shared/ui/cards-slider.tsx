'use client';

/** @layer shared / slice ui — horizontal shelf + prev/next controls */

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from './button';

type CardsSliderProps = {
  children: ReactNode;
  prevLabel: string;
  nextLabel: string;
  segment?: string;
};

export function CardsSlider({
  children,
  prevLabel,
  nextLabel,
  segment = 'cards-slider',
}: CardsSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateControls = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const needsScroll = maxScroll > 1;

    setCanPrev(needsScroll && scrollLeft > 1);
    setCanNext(needsScroll && scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    updateControls();
    el.addEventListener('scroll', updateControls, { passive: true });

    const observer = new ResizeObserver(updateControls);
    observer.observe(el);

    return () => {
      el.removeEventListener('scroll', updateControls);
      observer.disconnect();
    };
  }, [updateControls, children]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>('[data-segment="card-slide"]');
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  const showControls = canPrev || canNext;

  return (
    <div data-segment={segment}>
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div
            data-segment="card-slide"
            className="snap-start shrink-0 w-[min(100%,22rem)] sm:w-[26rem] lg:w-[28rem] h-auto"
          >
            {child}
          </div>
        ))}
      </div>

      {showControls && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={prevLabel}
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className="size-11 rounded-full border-border/60 bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={nextLabel}
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className="size-11 rounded-full border-border/60 bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="size-5" aria-hidden />
          </Button>
        </div>
      )}
    </div>
  );
}
