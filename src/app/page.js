import Hero from "@/components/Home/Hero";
import CareerTransformationSection from "@/components/Home/CareerTransformationSection";
import MentorshipProgramsSection from "@/components/Home/MentorshipProgramsSection";
import WhyChooseViptroSection from "@/components/Home/WhyChooseViptroSection";
import TargetAudienceSection from "@/components/Home/TargetAudienceSection";
import MasterclassCTASection from "@/components/Home/MasterclassCTASection";
import CourseModulesSection from "@/components/Home/CourseModulesSection";


export default function Home() {
  return (
    <>
      
      <Hero />
      <CareerTransformationSection />
      <MentorshipProgramsSection />
      <WhyChooseViptroSection />
      <TargetAudienceSection />
      <MasterclassCTASection />
      <CourseModulesSection />
   
    </>
  );
}