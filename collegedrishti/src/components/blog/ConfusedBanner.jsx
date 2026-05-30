'use client'
import React from 'react'

// components/common/ConfusedBanner.jsx
const ConfusedBanner = () => {
  return (
    <section className='w-full bg-[#f3f3f3] py-6 md:py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Top Banner */}
        <div className='relative bg-[#6F2C8F] rounded-2xl py-6 md:py-7 px-4 text-center'>
          <h2 className='text-white text-xl md:text-3xl font-bold'>
            Still Confused?
          </h2>

          <p className='text-white text-[11px] sm:text-xs md:text-base font-medium mt-2'>
            Compare Dusol University with Top UGC-DEB Approved Universities
          </p>

          {/* Circle */}
          <div className='absolute left-1/2 -bottom-4 -translate-x-1/2'>
            <div className='w-8 h-8 rounded-full bg-white border-2 border-[#1B2B59] flex items-center justify-center'>
              <div className='w-5 h-5 rounded-full bg-[#F7C600] border border-[#1B2B59]' />
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className='flex justify-center mt-10'>
          <div className='w-full max-w-3xl'>
            {/* Main Content */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
              {/* Icon */}
              <div className='relative w-18 h-18 md:w-24 md:h-24'>
                {/* Cap */}
                <div className='absolute top-1 left-1/2 -translate-x-1/2 w-16 md:w-22 h-5 md:h-7 border-4 border-[#082B5B] rotate-12' />

                {/* Body */}
                <div className='absolute top-8 md:top-10 left-1/2 -translate-x-1/2 w-12 md:w-18 h-10 md:h-14 border-4 border-[#082B5B] border-t-0 rounded-b-2xl' />

                {/* Arrow */}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-[#0D63A5] text-2xl md:text-4xl font-bold rotate-[-20deg]'>
                  ↗
                </div>
              </div>

              {/* Text */}
              <div className='text-center md:text-left'>
                <h1 className='text-[#082B5B] text-3xl sm:text-4xl md:text-6xl font-extrabold leading-none'>
                  Distance
                </h1>

                <h2 className='text-[#0D63A5] text-xl sm:text-2xl md:text-4xl font-bold mt-1 leading-tight'>
                  Education School
                  <span className='text-[#082B5B]'>.com</span>
                </h2>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className='flex flex-col md:flex-row items-center justify-center mt-3 border border-gray-400 rounded-md overflow-hidden max-w-2xl mx-auto'>
              {/* Left */}
              <div className='bg-[#082B5B] px-4 py-2 w-full md:w-auto text-center'>
                <span className='text-white text-lg md:text-2xl font-bold tracking-[6px]'>
                  SODE
                </span>
              </div>

              {/* Right */}
              <div className='bg-white px-4 py-2 w-full text-center md:text-left'>
                <p className='text-gray-600 text-xs sm:text-base md:text-2xl font-medium'>
                  School Of Online & Distance Education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConfusedBanner