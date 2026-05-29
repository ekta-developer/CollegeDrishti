// components/course/specialization/SpecializationSection.jsx

import SpecializationGrid from './Specialization/SpecializationGrid';

const SpecializationSection = ({ data }) => {
  // Prevent crash if no data exists
  if (!data) return null

  return (
    <section className='w-full py-10 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border border-gray-200 rounded-3xl p-5 sm:p-8 bg-white'>
          {/* Heading */}
          <h2 className='text-2xl sm:text-3xl font-bold text-[#2E0B72]'>
            {data.title}
          </h2>

          {/* Description */}
          <p className='mt-2 text-sm sm:text-base text-gray-600'>
            {data.description}
          </p>

          {/* Cards */}
          <SpecializationGrid
            data={data.specializations}
          />
        </div>
      </div>
    </section>
  )
}

export default SpecializationSection