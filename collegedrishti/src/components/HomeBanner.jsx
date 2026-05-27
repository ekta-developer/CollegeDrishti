'use client'
// components/HeroBanner.jsx
import Image from 'next/image'
import Link from 'next/link'
import coursesData from "../data/courseData";
import { GraduationCap, BookOpen, FileText, Users } from 'lucide-react'
import image from '../../public/assets/images/banner-image-removebg-preview.png'
const HeroBanner = () => {
  const course = coursesData; // Example: using BA course data for banner
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

        {/* Optional soft overlay */}
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          {/* LEFT CONTENT */}
          <div>
            {/* Breadcrumb */}
            <div className='flex flex-wrap items-center gap-2 text-sm text-white/80 mb-5'>
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
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6'>
              {course.title}
            </h1>

            {/* Description */}
            <p className='text-white/90 text-base sm:text-lg leading-8 max-w-2xl mb-8'>
              {course.description}
            </p>

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
              border-white/60
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

export default HeroBanner
