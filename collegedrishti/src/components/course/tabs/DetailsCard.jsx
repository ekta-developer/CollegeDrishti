// components/course/tabs/DetailsCard.jsx
'use client'
const DetailsCard = ({ details }) => {
  return (
    <div className='bg-white rounded-2xl border border-gray-200 p-6'>
      <h2 className='text-2xl font-bold text-purple-900 mb-6'>
        Course Details
      </h2>

      <div className='space-y-4'>
        {details.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between border-b border-gray-100 pb-3'
          >
            <p className='text-gray-500 text-sm'>
              {item.label}
            </p>

            <h4 className='font-semibold text-sm text-gray-900 text-right'>
              {item.value}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsCard