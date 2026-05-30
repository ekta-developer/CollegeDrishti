// components/course/CourseTabsSection.jsx

'use client'

import { useState } from 'react'

import OverviewTab from './tabs/OverviewTab'
import CurriculumTab from './tabs/CurriculumTab'
import FeeCard from './tabs/FeeCard'
import DetailsCard from './tabs/DetailsCard'

const tabs = [
  'Overview',
  'Curriculum',
  'Specializations',
  'Instructor',
  'Outcomes',
  'FAQ'
]

const CourseTabsSection = ({ course }) => {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <section className='w-full py-10 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* LEFT CONTENT */}
          <div className='lg:col-span-2 space-y-6'>
            {/* TABS */}
            <div className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>
              <div className='flex flex-wrap border-b border-gray-200'>
                {tabs.map(tab => {
                  const activeClasses =
                    activeTab === tab
                      ? 'text-purple-700 border-b-2 border-purple-700'
                      : 'text-gray-600 hover:text-purple-700'

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-4 text-sm font-semibold transition ${activeClasses}`}
                    >
                      {tab}
                    </button>
                  )
                })}
              </div>

              {/* TAB CONTENT */}
              <div className='p-5 sm:p-7'>
                {activeTab === 'Overview' && (
                  <>
                    <OverviewTab overview={course?.overview} />

                    <hr className='my-6' />

                    <CurriculumTab curriculum={course?.curriculum} />
                  </>
                )}

                {activeTab === 'Curriculum' && (
                  <CurriculumTab curriculum={course?.curriculum} />
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className='space-y-6'>
            <FeeCard fee={course?.feeStructure} />

            <DetailsCard details={course?.courseDetails} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseTabsSection