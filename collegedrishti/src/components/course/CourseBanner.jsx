import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaGraduationCap, FaLaptop, FaLanguage } from 'react-icons/fa'

const CourseBanner = ({ course }) => {
  return (
    <section className='relative overflow-hidden min-h-107.5 md:min-h-107.75 lg:min-h-130 bg-[#652c7d] lg:bg-transparent'>
      {' '}
      {/* Desktop Banner Only */}
      <div className='absolute inset-0 -z-10 hidden lg:block'>
        <Image
          src={course.backgroundImage}
          alt='background'
          fill
          priority
          className='object-cover object-center'
        />
      </div>
      {/* Desktop Overlay */}
      <div className='absolute inset-0 hidden lg:block'></div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8 lg:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
          {/* Left Content */}
          <div className='w-full lg:max-w-2xl'>
            {/* Breadcrumb */}
            <div className='flex flex-wrap items-center gap-2 text-xs sm:text-sm text-purple-200 mb-4'>
              <Link href='/' className='hover:text-yellow-300 transition'>
                Home
              </Link>

              <span>›</span>

              <Link
                href='/courses'
                className='hover:text-yellow-300 transition'
              >
                Courses
              </Link>

              <span>›</span>

              <span className='text-yellow-300 font-medium'>
                {course.title}
              </span>
            </div>

            {/* Course Tag */}
            <div className='inline-block bg-yellow-400 text-[11px] font-bold px-3 py-1 rounded-md mb-4'>
              {course.shortName}
            </div>

            {/* Title */}
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-white leading-snug mb-3'>
              {course.title}
            </h1>

            {/* Description */}
            <p className='text-purple-100 text-xs md:text-sm lg:text-lg leading-5 lg:leading-7 w-full mb-5'>
              {' '}
              {course.description}
            </p>

            {/* Course Details */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-5'>
              <div className='flex items-start gap-2'>
                <FaClock className='text-yellow-300 text-base md:text-lg mt-1' />

                <div>
                  <p className='text-[10px] text-purple-300'>Duration</p>
                  <h4 className='font-semibold text-xs md:text-sm text-white'>
                    {course.duration}
                  </h4>
                </div>
              </div>

              <div className='flex items-start gap-2'>
                <FaGraduationCap className='text-yellow-300 text-base md:text-lg mt-1' />

                <div>
                  <p className='text-[10px] text-purple-300'>Level</p>
                  <h4 className='font-semibold text-xs md:text-sm text-white'>
                    {course.level}
                  </h4>
                </div>
              </div>

              <div className='flex items-start gap-2'>
                <FaLaptop className='text-yellow-300 text-base md:text-lg mt-1' />

                <div>
                  <p className='text-[10px] text-purple-300'>Mode</p>
                  <h4 className='font-semibold text-xs md:text-sm text-white'>
                    {course.mode}
                  </h4>
                </div>
              </div>

              <div className='flex items-start gap-2'>
                <FaLanguage className='text-yellow-300 text-base md:text-lg mt-1' />

                <div>
                  <p className='text-[10px] text-purple-300'>Language</p>
                  <h4 className='font-semibold text-xs md:text-sm text-white'>
                    {course.language}
                  </h4>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-wrap md:flex-nowrap gap-3'>
              <button
                className='
                  bg-yellow-400
                  hover:bg-yellow-500
                  transition
                  text-black
                  font-semibold
                  px-3 md:px-5
                  py-2
                  rounded-lg
                  text-xs md:text-sm
                '
              >
                GET FREE COUNSELLING
              </button>

              <button
                className='
                  border
                  border-purple-300
                  text-white
                  hover:bg-white
                  hover:text-purple-900
                  transition
                  font-semibold
                  px-3 md:px-5
                  py-2
                  rounded-lg
                  text-xs md:text-sm
                '
              >
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseBanner
