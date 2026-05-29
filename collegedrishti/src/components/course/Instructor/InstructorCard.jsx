// components/course/instructor/InstructorCard.jsx
import InstructorInfo from './InstructorInfo'
import QualificationList from './QualificationList'
import { instructorData } from './instructorData'

const InstructorCard = () => {
  return (
    <section className='w-full py-5 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border border-gray-200 rounded-3xl p-6 sm:p-10 bg-white'>
          {/* Title */}
          <h2 className='text-2xl font-bold text-[#2E0B72] mb-8'>
            {instructorData.title}
          </h2>

          {/* Layout */}
          <div
            className='
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              items-start
            '
          >
            <InstructorInfo
              data={instructorData}
            />

            <QualificationList
              qualifications={
                instructorData.qualifications
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorCard