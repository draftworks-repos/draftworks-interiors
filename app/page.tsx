import Hero from '@/components/home/Hero/Hero';
import StudioIntro from '@/components/home/StudioIntro/StudioIntro';
import FeaturedServices from '@/components/home/Services/FeaturedServices';
import FeaturedProjects from '@/components/home/FeaturedProjects/FeaturedProjects';
import DayNightShowcase from '@/components/home/DayNightShowcase/DayNightShowcase';
import DesignProcess from '@/components/home/Process/DesignProcess';
import Testimonials from '@/components/home/Testimonials/Testimonials';
import JournalPreview from '@/components/home/JournalPreview/JournalPreview';
import FinalCTA from '@/components/home/FinalCTA/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedServices />
      <FeaturedProjects />
      <DayNightShowcase />
      <DesignProcess />
      <Testimonials />
      <JournalPreview />
      <FinalCTA />
    </>
  );
}
