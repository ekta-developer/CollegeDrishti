import { notFound } from 'next/navigation'
import { coursesData } from '@/data/courseData'
import CourseBanner from '@/components/course/CourseBanner'
import CourseTabsSection from '@/components/course/CourseTabSection'
import SpecializationSection from '@/components/course/SpecializationSection'
import InstructorCard from '@/components/course/Instructor/InstructorCard'
import AccreditationsSection from '@/components/course/AccreditationsSection'

export default async function DynamicPage ({ params }) {
  const { slug } = await params

  const course = coursesData[slug]

  if (!course) {
    notFound()
  }

  return (
    <>
      <CourseBanner course={course} />
      <CourseTabsSection course={course} />
      <SpecializationSection data={course.specializationSection} />{' '}
      <InstructorCard />
      <AccreditationsSection/>
    </>
  )
}
