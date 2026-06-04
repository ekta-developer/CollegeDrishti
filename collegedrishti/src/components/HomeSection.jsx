// components/HomeSection.jsx
import React from 'react'
import {
  GraduationCap,
  BookOpen,
  ClipboardList,
  Monitor,
  Newspaper,
  Users,
  BadgeCheck,
  Layers3
} from 'lucide-react'

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  ClipboardList: ClipboardList,
  Monitor: Monitor,
  Newspaper: Newspaper,
  Users: Users,
  BadgeCheck: BadgeCheck,
  Layers3: Layers3
}
import Link from 'next/link'

const HomeSection = () => {
  const newsData = [
    {
      id: 1,
      date: '15',
      month: 'May',
      title: 'CUET UG 2025 Admit Card Released'
    },
    {
      id: 2,
      date: '12',
      month: 'May',
      title: 'Bihar DElEd 2025 Result Declared'
    },
    {
      id: 3,
      date: '10',
      month: 'May',
      title: 'UP Scholarship 2025 Last Date Extended'
    },
    {
      id: 4,
      date: '08',
      month: 'May',
      title: 'NEET UG 2025 Exam City Intimation Released'
    },
    {
      id: 5,
      date: '05',
      month: 'May',
      title: 'New Government College Approved in Bihar'
    }
  ]

  // data/statsData.json
  const statsData = [
    {
      id: 1,
      value: '1000+',
      label: 'Colleges Listed',
      icon: 'BadgeCheck'
    },
    {
      id: 2,
      value: '200+',
      label: 'Courses Available',
      icon: 'Layers3'
    },
    {
      id: 3,
      value: '500+',
      label: 'Latest Updates',
      icon: 'ClipboardList'
    },
    {
      id: 4,
      value: '50K+',
      label: 'Students Guided',
      icon: 'Users'
    }
  ]

  const coursesData = [
    {
      id: 1,
      value: '1000+',
      label: 'Colleges Listed',
      icon: 'BadgeCheck'
    },
    {
      id: 2,
      value: '200+',
      label: 'Courses Available',
      icon: 'Layers3'
    },
    {
      id: 3,
      value: '500+',
      label: 'Latest Updates',
      icon: 'ClipboardList'
    },
    {
      id: 4,
      value: '50K+',
      label: 'Students Guided',
      icon: 'Users'
    }
  ]
  return (
    <section className='w-full py-6 px-3 md:px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5'>
        {/* LEFT SECTION - 4 COL */}
        <div className='lg:col-span-4'>
          <div className='rounded-2xl border bg-[#f7f4fb] border-gray-200 h-full shadow-sm overflow-hidden'>
            {/* Heading */}
            <div className='flex items-center gap-2 px-5 py-4 border-b'>
              <Newspaper className='text-[#5b168b]' size={22} />
              <h2 className='font-bold text-[#5b168b] text-lg uppercase'>
                Latest News
              </h2>
            </div>

            {/* News List */}
            <div className='divide-y divide-gray-100'>
              {newsData.map(news => (
                <div
                  key={news.id}
                  className='flex gap-4 px-5 py-5 hover:bg-[#faf7ff] transition'
                >
                  {/* Date */}
                  <div className='min-w-13.75 text-center'>
                    <h3 className='text-3xl font-bold text-[#5b168b] leading-none'>
                      {news.date}
                    </h3>
                    <p className='text-sm text-gray-500 uppercase mt-1'>
                      {news.month}
                    </p>
                  </div>

                  {/* Content */}
                  <div className='flex-1'>
                    <h4 className='font-semibold text-gray-800 text-sm md:text-base leading-6'>
                      {news.title}
                    </h4>

                    <button className='mt-2 text-[#5b168b] text-sm font-semibold hover:underline flex items-center gap-1'>
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className='p-5'>
              <button className='bg-white w-full border border-gray-300 hover:border-[#5b168b] text-[#5b168b] font-semibold py-3 rounded-lg transition hover:bg-[#5b168b] hover:text-white'>
                VIEW ALL NEWS
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - 8 COL */}
        <div className='lg:col-span-8'>
          <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-8 h-full'>
            {/* Top Heading */}
            <div className='w-full'>
              <h2 className='text-2xl md:text-3xl font-bold text-[#5b168b] leading-tight'>
                About Us – Welcome to Du SOL COLLEGEDRISHTI
              </h2>

              <div className='mt-5 space-y-5 text-gray-600 text-sm md:text-base leading-7 text-justify'>
                <p>
                  DU SOL has become one of the top options for students who want
                  inexpensive and flexible college education across India. Since
                  it is a member of the University of Delhi, the school allows
                  students to pursue approved degree programs, without the
                  restrictions of traditional classroom instruction.
                </p>

                <p>
                  Through the many years, DU SOL has helped thousands of
                  students to continue their education through its
                  distance-learning and online learning approach. The university
                  offers numerous undergraduate and postgraduate classes that
                  are designed specifically to address the needs of students who
                  are just starting out professional, professionals in the
                  workforce, as well as those who wish to increase their skills.
                </p>

                <p>
                  One of the main benefits of pursuing a degree at DU SOL is the
                  opportunity to obtain an academic degree in the University of
                  Delhi while maintaining the flexibility of learning. Students
                  can access study material as well as academic support, exam
                  updates, and other resources for learning via a standardized
                  digital environment.
                </p>

                <p>
                  DU SOL focuses on making high-quality education available to
                  students from diverse backgrounds. Through its approach to
                  student-friendly with a reasonable fee structure and a
                  recognized academic framework The institution continues to
                  play an integral part in expanding opportunities for higher
                  education across the nation.
                </p>

                <p>
                  If you're looking for an alternative to continue your
                  education while also balancing professional or personal
                  demands, DU SOL offers a efficient and reliable path to
                  reaching your academic and professional objectives.
                </p>
              </div>

              <div className='flex justify-center mt-8'>
                <Link
                  href='/'
                  className='bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg'
                >
                  FREE Guidance
                </Link>
              </div>
            </div>

            {/* <p className='text-gray-600 mt-2 text-sm md:text-base'>
                Your one-stop destination for college admissions, entrance
                exams, results, scholarships & education news.
              </p> */}
          </div>

          {/* Stats */}
          {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
              {statsData.map(item => {
                const Icon = iconMap[item?.icon]

                return (
                  <div
                    key={item?.id}
                    className='bg-[#faf7ff] border border-[#eee5ff] rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition'
                  >
                    <Icon className='text-[#5b168b]' size={30} />

                    <h3 className='text-2xl font-bold text-[#5b168b] mt-3'>
                      {item?.value}
                    </h3>

                    <p className='text-sm text-gray-600 mt-1'>{item.label}</p>
                  </div>
                )
              })}
            </div> */}

          {/* Courses */}
          {/* <div className='mt-10'>
              <div className='flex items-center gap-3 mb-6'>
                <h3 className='text-xl font-bold text-[#5b168b] uppercase'>
                  Popular Courses
                </h3>

                <div className='w-14 h-0.75 bg-yellow-400 rounded-full'></div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {coursesData.map(course => {
                  const Icon = iconMap[course.icon]

                  return (
                    <div
                      key={course.id}
                      className='bg-[#faf7ff] border border-[#eee5ff] rounded-xl p-6 text-center hover:shadow-lg transition duration-300'
                    >
                      <div className='flex justify-center'>
                        <Icon className='text-[#5b168b]' size={55} />
                      </div>

                      <h4 className='mt-4 text-lg font-bold text-gray-800 leading-7'>
                        {course.title}
                      </h4>

                      <button className='mt-5 bg-[#5b168b] hover:bg-[#4b1174] text-white px-5 py-2 rounded-lg text-sm font-semibold transition'>
                        Explore Courses →
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Bottom Button */}
          {/* <div className='flex justify-center mt-8'>
                <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg transition'>
                  VIEW ALL COURSES
                </button>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default HomeSection
