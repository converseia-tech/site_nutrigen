"use client";

import ParallaxImage from "./ParallaxImage";
import ImageCarousel, { type CarouselSlide } from "./ImageCarousel";

type SideImageProps = {
  /** Single image */
  src?: string;
  alt?: string;
  objectPosition?: string;
  /** Multiple images → soft crossfade carousel */
  slides?: CarouselSlide[];
  quality?: number;
  sizes?: string;
  className?: string;
  /** Match text column height on large screens */
  matchTextHeight?: boolean;
  priority?: boolean;
  /**
   * Fixed crop ratio below the lg breakpoint (Tailwind aspect-[w/h] class).
   * Keeps framing consistent across every mobile/tablet width instead of a
   * fixed pixel height, whose effective ratio — and therefore crop — shifted
   * with viewport width. Defaults to 4:3, a good fit for the landscape
   * source photos used across the site; portrait photos should override.
   */
  aspect?: string;
};

/**
 * Standardizes lateral images: object-cover, full height of text column
 * on desktop, without upscaling distortion (Next/Image + cover crop).
 */
export default function SideImage({
  src,
  alt = "",
  objectPosition = "center",
  slides,
  quality = 94,
  sizes = "(max-width: 1024px) 90vw, 620px",
  className = "",
  matchTextHeight = true,
  priority = false,
  aspect = "aspect-[4/3]",
}: SideImageProps) {
  const shell = matchTextHeight
    ? `w-full ${aspect} lg:aspect-auto lg:h-full`
    : "relative w-full min-h-[280px]";

  if (slides && slides.length > 1) {
    return (
      <ImageCarousel
        slides={slides}
        quality={quality}
        sizes={sizes}
        fillHeight
        className={`${shell} rounded-[2rem] shadow-card ring-1 ring-softgray/60 ${className}`}
      />
    );
  }

  const imageSrc = slides?.[0]?.src ?? src;
  const imageAlt = slides?.[0]?.alt ?? alt;
  const position = slides?.[0]?.objectPosition ?? objectPosition;

  if (!imageSrc) return null;

  return (
    <ParallaxImage
      src={imageSrc}
      alt={imageAlt}
      quality={quality}
      objectPosition={position}
      sizes={sizes}
      priority={priority}
      className={`${shell} rounded-[2rem] shadow-card ring-1 ring-softgray/60 ${className}`}
    />
  );
}
