// components/OurCourses.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function OurCourses () {
  const [activeTab, setActiveTab] = useState(0)

  const coursesData = {
    tabs: [
      {
        title: 'Bachelor Courses',

        courses: [
          {
            id: 1,
            name: 'BA',
            subtitle: 'Bachelor Of Arts',
            duration: '3 Year',
            description:
              'Flexible BA programs designed to help students build strong academic knowledge and career-ready skills.',
            buttonText: 'Know More',
            link: '/courses/ba'
          },

          {
            id: 2,
            name: 'BBA',
            subtitle: 'Bachelor Of Business Administration',
            duration: '3 Year',
            description:
              'Develop business, management, and leadership skills through industry-focused BBA programs.',
            buttonText: 'Know More',
            link: '/courses/bba'
          },

          {
            id: 3,
            name: 'BCOM',
            subtitle: 'Bachelor Of Commerce',
            duration: '3 Year',
            description:
              'Comprehensive commerce programs that provide knowledge in finance, accounting, and business operations.',
            buttonText: 'Know More',
            link: '/courses/bcom'
          },

          {
            id: 4,
            name: 'BMS',
            subtitle: 'Bachelor Of Management Studies',
            duration: '3 Year',
            description:
              'Career-oriented management studies program focused on leadership, strategy, and professional growth.',
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
              'THE DU SOL MBA program provides industry-focused management education through distance and online learning.',
            buttonText: 'Know More',
            link: '/courses/mba'
          },

          {
            id: 6,
            name: 'MCOM',
            subtitle: 'Master Of Commerce',
            duration: '2 Year',
            description:
              'THE DU SOL MCom program is designed to build strong knowledge in commerce, finance, and business studies.',
            buttonText: 'Know More',
            link: '/courses/mcom'
          },

          {
            id: 7,
            name: 'MA',
            subtitle: 'Master Of Arts',
            duration: '2 Year',
            description:
              'DU SOL offers MA programs in multiple disciplines through flexible online and distance learning modes.',
            buttonText: 'Know More',
            link: '/courses/ma'
          },

          {
            id: 8,
            name: 'MLIS',
            subtitle: 'Master Of Library And Information Science',
            duration: '2 Year',
            description:
              'THE DU SOL MLIS program helps students develop professional skills in library and information science through distance education.',
            buttonText: 'Know More',
            link: '/courses/mlis'
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
          <div className='flex flex-col items-center'>
            <div className='flex items-center gap-2 text-[#5b1392] font-bold uppercase'>
              <GraduationCap className='w-6 h-6' />

              <h2 className='relative text-2xl md:text-4xl font-extrabold pb-3'>
                Our Courses
                {/* Underline */}
                <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-[#5b1392] rounded-full'></span>
              </h2>
            </div>
          </div>

          <div className='max-w-6xl mx-auto mt-6'>
            <p className='text-gray-600 text-sm md:text-base leading-7 md:leading-8 text-center'>
              DU SOL provides a diverse selection of academic programs for
              students who are looking for flexibility in their higher
              education. The college caters to students who want to pursue their
              studies with no regular classes on campus, making it a great
              option for professionals working full-time and exam-taking
              students and those with commitments to their personal lives.
              <br />
              <br />
              The school offers undergraduate and postgraduate programs in
              different disciplines, allowing students to select programs that
              match their academic and professional objectives. The most popular
              undergraduate programs are BA, BCom, BBA and BMS. Postgraduate
              options include MA, MCom, MBA and other specialized courses.
              <br />
              <br />
              Whether you're planning to start your undergraduate studies or
              continue with postgraduate education, DU SOL offers an accessible
              and well-recognized pathway to achieve your academic and
              professional goals.
            </p>
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
              <div className='text-center mt-6'>
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
