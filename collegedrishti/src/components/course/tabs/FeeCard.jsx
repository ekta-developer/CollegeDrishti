// components/course/tabs/FeeCard.jsx

'use client'

import { FaRegFileAlt } from 'react-icons/fa'

const FeeCard = ({ fee = [] }) => {
  return (
    <div className='bg-white rounded-2xl border border-gray-200 p-6'>
      <h2 className='text-2xl font-bold text-purple-900 mb-6'>
        Fee Structure
      </h2>

      <div className='space-y-5'>
        {fee.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className='border-b border-gray-200 pb-5'
          >
            <div className='flex items-start gap-3'>
              <FaRegFileAlt className='text-purple-700 mt-1' />

              <div>
                <p className='text-sm text-gray-500'>
                  {item.title}
                </p>

                <h4 className='font-bold text-gray-900 mt-1'>
                  {item.amount}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className='mt-6 w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-3 rounded-xl'>
        GET FREE COUNSELLING
      </button>
    </div>
  )
}

export default FeeCard