// components/course/tabs/CurriculumTab.jsx

'use client'

import { useState } from 'react'
import {
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

const CurriculumTab = ({ curriculum }) => {
  const [openSemester, setOpenSemester] = useState(0)

  return (
    <div>
      <div className='flex items-center justify-between mb-6 mt-6'>
        <h2 className='text-2xl font-bold text-purple-900'>
          Curriculum / Syllabus
        </h2>

        <div className='text-sm font-semibold text-gray-600'>
          Duration: 3 Years | 6 Semesters
        </div>
      </div>

      <div className='space-y-4'>
        {curriculum.map((semester, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-xl overflow-hidden'
          >
            <button
              onClick={() =>
                setOpenSemester(
                  openSemester === index ? null : index
                )
              }
              className='w-full flex items-center justify-between px-5 py-4 bg-gray-50'
            >
              <h3 className='font-semibold text-purple-900'>
                {semester.semester}
              </h3>

              {openSemester === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {openSemester === index && (
              <div className='p-5'>
                <div className='space-y-3'>
                  {semester.subjects.map((subject, i) => (
                    <div
                      key={i}
                      className='flex items-center justify-between border-b pb-2'
                    >
                      <p className='text-gray-700'>
                        {subject.name}
                      </p>

                      <span className='text-sm text-gray-500'>
                        {subject.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className='
          mt-7
          border-2
          border-purple-700
          text-purple-700
          hover:bg-purple-700
          hover:text-white
          transition
          font-semibold
          px-6
          py-3
          rounded-xl
          text-sm
        '
      >
        VIEW DETAILED SYLLABUS
      </button>
    </div>
  )
}

export default CurriculumTab