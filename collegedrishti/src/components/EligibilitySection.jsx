'use client'
// components/EligibilitySection.jsx

import Image from 'next/image'
import { CheckCircle2, ArrowRightCircle } from 'lucide-react'

import degreeImage from '../../public/assets/images/degree.jpg'

const eligibilityData = [
  {
    title: 'Educational Qualification',
    items: [
      'Undergraduate (UG): Candidates must have completed their 10+2 examination from a recognized board or institution.',
      'Postgraduate (PG): Applicants must complete a bachelor’s degree from a recognized university to apply for PG programs at DU SOL.'
    ]
  },
  {
    title: 'Minimum Qualification Marks',
    items: [
      'UG Programs: Students are generally required to secure the minimum qualifying marks in their 10+2 examination as per DU SOL admission guidelines.',
      'PG Programs: Candidates applying for postgraduate courses must meet the minimum percentage criteria in their graduation degree.'
    ]
  },
  {
    title: 'Entrance-Based Admission',
    items: [
      'Some DU SOL programs may require candidates to qualify for entrance examinations conducted or accepted by the university for admission purposes.'
    ]
  },
  {
    title: 'Additional Requirements',
    items: [
      'Applicants must fulfill the eligibility conditions specified by DU SOL for their selected course.',
      'Reserved category students may receive relaxation in marks according to university norms.',
      'International applicants must provide equivalent qualifications recognized by authorized educational bodies.'
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

            <div className='space-y-6 mt-6'>
              {eligibilityData.map((section, index) => (
                <div key={index}>
                  <h3 className='text-[#FFD23F] text-lg sm:text-xl font-semibold mb-3'>
                    {section.title}
                  </h3>

                  <div className='space-y-4'>
                    {section.items.map((item, idx) => (
                      <div key={idx} className='flex items-start gap-3'>
                        <CheckCircle2
                          size={18}
                          className='text-white shrink-0 mt-1'
                        />

                        <p className='text-white text-sm sm:text-base leading-7'>
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
          <div className='lg:col-span-5 flex flex-col items-center lg:mt-12'>
            <div className='relative w-full max-w-95'>
              <Image
                src={degreeImage}
                alt='DU Degree'
                className='w-full h-auto object-cover border-[6px] border-gray-200 shadow-2xl rounded-md'
                priority
              />
            </div>

            {/* BUTTON */}
            <button className='mt-6 bg-[#FFC800] hover:bg-yellow-400 transition-all duration-300 text-black font-semibold text-sm px-6 py-3 rounded-md flex items-center gap-2 shadow-lg'>
              Get FREE Consultation
              <ArrowRightCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
