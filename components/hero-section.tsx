// HERO SECTION - Mobile Optimized with Slider
import { HeroSlider } from "@/components/hero-slider"

export function HeroSection({ onInquiryClick }: { onInquiryClick: () => void }) {
  return (
    <section id="hero" aria-label="Hero section - Exide authorized dealer in Bhopal">
      <HeroSlider onInquiryClick={onInquiryClick} />
    </section>
  )
}