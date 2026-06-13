import AboutHeroSection from "@/components/About/AboutHeroSection";
import OurStorySection from "@/components/About/OurStorySection";
import WhyChooseUsSection from "@/components/About/WhyChooseUsSection";  // ✅ correct path

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <WhyChooseUsSection />
    </>
  );
}