'use client';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section id="testimonials" className="bg-muted py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Client stories"
            title="Partners who stopped worrying about their buildings."
            lede="Drag through what long-term clients say about working with us."
          />
          <div className="hidden gap-3 sm:flex">
            <Button
              variant="outline"
              size="icon-lg"
              className="cursor-pointer rounded-full"
              aria-label="Previous testimonials"
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              className="cursor-pointer rounded-full"
              aria-label="Next testimonials"
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 pl-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] sm:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={onSlideChange}
          slidesPerView="auto"
          spaceBetween={20}
          grabCursor
          speed={600}
          watchSlidesProgress
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              style={{ width: 'min(26rem, 82vw)' }}
              className="!h-auto"
            >
              <figure className="border-border bg-card flex h-full flex-col rounded-lg border p-8 shadow-[0_1px_2px_rgba(6,11,22,0.04)]">
                <Quote className="fill-gold-500 text-gold-500 size-7" />
                <blockquote className="text-ink-950 mt-5 flex-1 text-base leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="border-border mt-7 border-t pt-5">
                  <p className="text-ink-950 text-sm font-semibold">{testimonial.author}</p>
                  <p className="mt-0.5 text-xs text-neutral-500">{testimonial.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {testimonial.propertyType}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="font-mono text-[0.65rem] tracking-wider text-neutral-500 uppercase"
                    >
                      {testimonial.city}
                    </Badge>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile-only bottom-center navigation */}
      <div className="container-site mt-8 flex justify-center gap-3 sm:hidden">
        <Button
          variant="outline"
          size="icon-lg"
          className="cursor-pointer rounded-full"
          aria-label="Previous testimonials"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-lg"
          className="cursor-pointer rounded-full"
          aria-label="Next testimonials"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
