import CourseHero from "@/components/courses/CourseHero";
import CourseBenefits from "@/components/courses/CourseBenefits";
import CourseCurriculum from "@/components/courses/CourseCurriculum";
import CourseCertificate from "@/components/courses/CourseCertificate";
import CourseFAQ from "@/components/courses/CourseFAQ";
import CourseCTA from "@/components/courses/CourseCTA";

export default function CoursesPage() {
  return (
    <>
      <CourseHero />
      <CourseBenefits />
      <CourseCurriculum />
      <CourseCertificate />
      <CourseFAQ />
      <CourseCTA />
    </>
  );
}