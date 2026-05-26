// components/OurCourses.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function OurCourses () {
  const [activeTab, setActiveTab] = useState(0);

  const coursesData = {
    tabs: [
      {
        title: 'Popular Courses',

        courses: [
          {
            id: 1,
            name: 'BA',
            subtitle: 'Bachelor Of Arts',
            duration: '3 Year',
            description:
              'Online and distance BA programs provides students with flexible and accessible education.',
            buttonText: 'Know More',
            link: '/courses/ba'
          },

          {
            id: 2,
            name: 'BBA',
            subtitle: 'Bachelor Of Business Administration',
            duration: '3 Year',
            description:
              'Online BBA program is designed to provide a strong foundation in business world.',
            buttonText: 'Know More',
            link: '/courses/bba'
          },

          {
            id: 3,
            name: 'BCOM',
            subtitle: 'Bachelor Of Commerce',
            duration: '3 Year',
            description:
              'BCom program is perfect for online learners seeking quality education at home.',
            buttonText: 'Know More',
            link: '/courses/bcom'
          },

          {
            id: 4,
            name: 'BMS',
            subtitle: 'Bachelor Of Management Studies',
            duration: '3 Year',
            description:
              'BMS program can be your gateway to a successful and fulfilling career.',
            buttonText: 'Know More',
            link: '/courses/bms'
          }
        ]
      },

      {
        title: 'Master Courses',

        courses: [
          {
            id: 5,
            name: 'MBA',
            subtitle: 'Master Of Business Administration',
            duration: '2 Year',
            description:
              'MBA program prepares students for leadership and management roles.',
            buttonText: 'Know More',
            link: '/courses/mba'
          },

          {
            id: 6,
            name: 'MCOM',
            subtitle: 'Master Of Commerce',
            duration: '2 Year',
            description:
              'MCom provides advanced knowledge in commerce and accounting.',
            buttonText: 'Know More',
            link: '/courses/mcom'
          },

          {
            id: 7,
            name: 'MA',
            subtitle: 'Master Of Arts',
            duration: '2 Year',
            description:
              'MA course helps students gain expertise in humanities and arts.',
            buttonText: 'Know More',
            link: '/courses/ma'
          },

          {
            id: 8,
            name: 'MCA',
            subtitle: 'Master Of Computer Applications',
            duration: '2 Year',
            description:
              'MCA program focuses on software development and IT technologies.',
            buttonText: 'Know More',
            link: '/courses/mca'
          }
        ]
      }
    ]
  }

  return (
    <section className='w-full bg-[#f7f4fb] py-10 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='flex flex-col items-center justify-center text-center mb-10'>
          <div className='flex items-center gap-2 text-[#5b1392] font-bold uppercase'>
            <GraduationCap className='w-6 h-6' />

            <h2 className='text-2xl md:text-4xl font-extrabold'>Our Courses</h2>
          </div>

          {/* Navigation Tabs */}
          <div className='flex items-center gap-4 md:gap-10 mt-6 flex-wrap justify-center'>
            {coursesData.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative text-sm md:text-lg font-semibold pb-3 transition-all duration-300 ${
                  activeTab === index
                    ? 'text-[#5b1392]'
                    : 'text-gray-700 hover:text-[#5b1392]'
                }`}
              >
                {tab.title}

                {/* Active Line */}
                {activeTab === index && (
                  <span className='absolute left-0 bottom-0 w-full h-0.75 bg-[#5b1392] rounded-full'></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
          {coursesData.tabs[activeTab].courses.map(course => (
            <div
              key={course.id}
              className='bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between min-h-105'
            >
              {/* Duration */}
              <div className='inline-flex items-center justify-center bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full w-fit'>
                ⏺ {course.duration}
              </div>

              {/* Content */}
              <div className='text-center mt-6 flex-1'>
                <h3 className='text-3xl md:text-4xl font-extrabold text-black'>
                  {course.name}
                </h3>

                <p className='text-gray-600 text-sm mt-3 font-medium'>
                  {course.subtitle}
                </p>

                <p className='text-gray-700 text-sm leading-7 mt-6'>
                  {course.description}
                </p>
              </div>

              {/* Button */}
              <Link href={course.link}>
                <button className='w-full mt-8 bg-[#5b1392] hover:bg-[#470f74] text-white font-semibold py-3 rounded-lg transition-all duration-300'>
                  {course.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
