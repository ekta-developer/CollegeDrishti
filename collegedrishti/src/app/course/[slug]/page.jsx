import { notFound } from 'next/navigation'

import { coursesData } from '@/data/courseData'

import CourseBanner from '@/components/course/CourseBanner'
import CourseTabsSection from '@/components/course/CourseTabSection'
import SpecializationSection from '@/components/course/SpecializationSection'
import InstructorCard from '@/components/course/Instructor/InstructorCard'
import AccreditationsSection from '@/components/course/AccreditationsSection'
import StartJourneySection from '@/components/course/StartJourneySection'
import DynamicFAQ from '@/components/common/DynamicFAQ'

export default async function DynamicPage ({ params }) {
  const { slug } = await params

  const course = coursesData[slug]

  if (!course) {
    notFound()
  }

const faqData = [
  {
    question: 'What is DU SOL?',
    answer:
      'DU SOL is the School of Open Learning, University of Delhi offering distance education programs.'
  },
  {
    question: 'How can I apply for DU SOL programs?',
    answer:
      'You can apply online through the official admission portal by filling out the application form.'
  },
  {
    question: 'What are the eligibility criteria?',
    answer:
      'Eligibility depends on the course you are applying for. Check the course details page.'
  }
]

  return (
    <>
      <CourseBanner course={course} />

      <CourseTabsSection course={course} />

      <SpecializationSection data={course.specializationSection} />

      <InstructorCard />

      <AccreditationsSection />

      <StartJourneySection />

      <DynamicFAQ title='Frequently Asked Questions' faqs={faqData} columns={2}/>
    </>
  )
}