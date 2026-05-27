'use client'
// components/EligibilitySection.jsx

import Image from 'next/image'
import { CheckCircle2, ArrowRightCircle } from 'lucide-react'

import degreeImage from '../../public/assets/images/degree.jpg'

const eligibilityData = [
  {
    title: 'Educational Qualification:',
    items: [
      'Undergraduate (UG): Candidates must have passed the Intermediate examination (10+2) from a recognized board.',
      "Postgraduate (PG): Candidates must hold a Bachelor's degree from a recognized university."
    ]
  },
  {
    title: 'Minimum Marks:',
    items: [
      'UG: The minimum qualifying mark is generally 60% in the 10+2 examination.',
      'PG: The minimum qualifying mark is generally 50% in the Bachelor’s degree for students from recognized and reputable universities/colleges.'
    ]
  },
  {
    title: 'Entrance Exams:',
    items: [
      'DU SOL admissions for some programs may also be based on entrance exams conducted by the university.'
    ]
  },
  {
    title: 'General Requirements:',
    items: [
      'All applicants must meet the minimum age requirement as specified by DU SOL.',
      'Reserved category candidates may have relaxation in minimum percentage requirements as per university guidelines.',
      'International students must provide equivalent qualifications recognized by the Association of Indian Universities (AIU).'
    ]
  }
]

export default function EligibilitySection () {
  return (
    <section className='w-full bg-[#652A84] py-10 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
          {/* LEFT CONTENT */}
          <div className='lg:col-span-7'>
            <h2 className='text-white font-bold leading-tight text-xl sm:text-2xl lg:text-3xl max-w-2xl'>
              Eligibility Criteria for DU SOL Admission in 2026
            </h2>

            <div className='space-y-4'>
              {' '}
              {eligibilityData.map((section, index) => (
                <div key={index}>
                  <h3 className='text-[#FFD23F] text-lg sm:text-xl font-semibold mb-1'>
                    {section.title}
                  </h3>

                  <div className='space-y-5'>
                    {section.items.map((item, idx) => (
                      <div key={idx} className='flex items-start gap-3'>
                        <CheckCircle2
                          size={18}
                          className='text-white shrink-0 mt-1'
                        />

                        <p className='text-white text-xs sm:text-sm leading-6'>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='lg:col-span-5 flex flex-col items-center mt-13'>
            <div className='relative w-full max-w-95'>
              <Image
                src={degreeImage}
                alt='DU Degree'
                className='w-full h-auto object-cover border-[6px] border-gray-200 shadow-2xl'
                priority
              />
            </div>

            {/* BUTTON */}
            <button className='mt-5 bg-[#FFC800] hover:bg-yellow-400 transition-all duration-300 text-black font-medium text-sm px-6 py-3 rounded-md flex items-center gap-2 shadow-lg'>
              Get FREE Consultation
              <ArrowRightCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
