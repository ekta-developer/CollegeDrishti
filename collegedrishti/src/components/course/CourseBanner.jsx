
import Image from 'next/image'
import Link from 'next/link'
import {
  FaClock,
  FaGraduationCap,
  FaLaptop,
  FaLanguage,
  FaPlay
} from 'react-icons/fa'

const CourseBanner = ({ course }) => {
  return (
    <section className='relative overflow-hidden'>
  {/* Background Banner */}
  <div className='absolute inset-0 -z-10'>
    <Image
      src={course.backgroundImage}
      alt='background'
      fill
      priority
      className='object-cover'
    />
  </div>

  {/* Dark Purple Overlay */}
  <div className='absolute'></div>

  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
      {/* ================= LEFT CONTENT ================= */}
      <div>
        {/* Breadcrumb */}
        <div className='flex flex-wrap items-center gap-2 text-sm text-purple-200 mb-5'>
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

        {/* Tag */}
        <div className='inline-block bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-md mb-5'>
          {course.shortName}
        </div>

        {/* Title */}
        <h1
          className='
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-white
            leading-tight
            mb-6
          '
        >
          {course.title}
        </h1>

        {/* Description */}
        <p
          className='
            text-purple-100
            text-base
            sm:text-lg
            leading-8
            max-w-2xl
            mb-8
          '
        >
          {course.description}
        </p>

        {/* Course Details */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8'>
          <div className='flex items-start gap-3'>
            <FaClock className='text-yellow-300 text-xl mt-1' />

            <div>
              <p className='text-xs text-purple-300'>Duration</p>

              <h4 className='font-semibold text-sm text-white'>
                {course.duration}
              </h4>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <FaGraduationCap className='text-yellow-300 text-xl mt-1' />

            <div>
              <p className='text-xs text-purple-300'>Level</p>

              <h4 className='font-semibold text-sm text-white'>
                {course.level}
              </h4>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <FaLaptop className='text-yellow-300 text-xl mt-1' />

            <div>
              <p className='text-xs text-purple-300'>Mode</p>

              <h4 className='font-semibold text-sm text-white'>
                {course.mode}
              </h4>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <FaLanguage className='text-yellow-300 text-xl mt-1' />

            <div>
              <p className='text-xs text-purple-300'>Language</p>

              <h4 className='font-semibold text-sm text-white'>
                {course.language}
              </h4>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-wrap gap-4'>
          <button
            className='
              bg-yellow-400
              hover:bg-yellow-500
              transition
              text-black
              font-semibold
              px-6
              py-3
              rounded-xl
              text-sm
            '
          >
            GET FREE COUNSELLING
          </button>

          <button
            className='
              border-2
              border-purple-300
              text-white
              hover:bg-white
              hover:text-purple-900
              transition
              font-semibold
              px-6
              py-3
              rounded-xl
              text-sm
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
