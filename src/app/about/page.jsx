import AboutHeroSection from "@/components/About/AboutHeroSection";
import OurStorySection from "@/components/About/OurStorySection";
import WhyChooseUsSection from "@/components/About/WhyChooseUsSection";
import LearningProcessSection from "@/components/About/LearningProcessSection";
import MeetOurExpertsSection from "@/components/About/MeetOurExpertsSection";
import StudentSuccessStoriesSection from "@/components/About/StudentSuccessStoriesSection";
import FinalCTASection from "@/components/About/FinalCTASection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <WhyChooseUsSection />
      <LearningProcessSection />
      <MeetOurExpertsSection />
      <StudentSuccessStoriesSection/>
      <FinalCTASection />
    </>
  );
}