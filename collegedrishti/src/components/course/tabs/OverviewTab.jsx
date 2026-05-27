// components/course/tabs/OverviewTab.jsx
'use client'
import { FaCheckCircle } from 'react-icons/fa'

const OverviewTab = ({ overview }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-purple-900 mb-5'>
        Course Overview
      </h2>

      <p className='text-gray-600 leading-8 mb-6'>{overview.description}</p>

      <div className='space-y-4 mb-4'>
        {overview.points.map((point, index) => (
          <div key={index} className='flex items-start gap-3'>
            <FaCheckCircle className='text-purple-700 mt-1' />

            <p className='text-gray-700'>{point}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OverviewTab
