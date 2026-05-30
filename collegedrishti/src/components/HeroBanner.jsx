// components/HeroBanner.jsx
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, BookOpen, FileText, Users } from 'lucide-react'
import image from '../../public/assets/images/banner-image.jpg'
const HeroBanner = () => {
  return (
    <section className='w-full bg-[#f6f0f9] overflow-hidden'>
      <div className='relative overflow-hidden shadow-lg'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
          {/* LEFT CONTENT */}
          <div className='px-5 sm:px-8 lg:px-12 py-8 sm:py-12 z-10'>
            {/* Small Top Text */}
            <p className='text-xs sm:text-sm text-gray-500 font-medium mb-3'>
              Your Future Starts Here
            </p>

            {/* Heading */}
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900'>
              Find the Right College.
              <br />
              Shape Your <span className='text-purple-700'>Bright Future.</span>
            </h1>
            {/* Description */}
            <p className='mt-4 text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed'>
              Discover top colleges, courses, admission updates, results,
              scholarships & exam information — all in one place.
            </p>

            {/* Features */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8'>
              <div className='flex flex-col items-center text-center'>
                <div className='bg-purple-100 p-3 rounded-xl'>
                  <BookOpen className='w-5 h-5 text-purple-700' />
                </div>
                <p className='text-xs sm:text-sm mt-2 font-medium text-gray-700'>
                  Trusted
                  <br />
                  Information
                </p>
              </div>

              <div className='flex flex-col items-center text-center'>
                <div className='bg-purple-100 p-3 rounded-xl'>
                  <GraduationCap className='w-5 h-5 text-purple-700' />
                </div>
                <p className='text-xs sm:text-sm mt-2 font-medium text-gray-700'>
                  Top
                  <br />
                  Colleges
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='bg-purple-100 p-3 rounded-xl'>
                  <FileText className='w-5 h-5 text-purple-700' />
                </div>
                <p className='text-xs sm:text-sm mt-2 font-medium text-gray-700'>
                  Regular
                  <br />
                  Updates
                </p>
              </div>

              <div className='flex flex-col items-center text-center'>
                <div className='bg-purple-100 p-3 rounded-xl'>
                  <Users className='w-5 h-5 text-purple-700' />
                </div>
                <p className='text-xs sm:text-sm mt-2 font-medium text-gray-700'>
                  Expert
                  <br />
                  Guidance
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className='mt-8'>
              <Link
                href='/colleges'
                className='inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-black font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-md hover:scale-105'
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className='relative h-62.5 sm:h-87.5 lg:h-full min-h-75'>
            {/* Purple Shape */}{' '}
            <div className='absolute inset-0 bg-linear-to-r from-purple-600 to-purple-800 clip-path-banner'></div>
            {/* Image */}
            <Image
              src={image}
              alt='College Banner'
              fill
              className='object-cover mix-blend-normal'
              priority
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/10'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
