// components/course/specialization/SpecializationCard.jsx

import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaChartBar,
  FaGlobe,
  FaRocket
} from 'react-icons/fa'

const iconMap = {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaChartBar,
  FaGlobe,
  FaRocket
}

const SpecializationCard = ({ item }) => {
  const Icon = iconMap[item.icon]

  return (
    <div
      className='
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-5
        flex
        flex-col
        items-center
        justify-center
        text-center
        min-h-42.5
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        cursor-pointer
      '
    >
      {/* Icon Card */}
      <div
        className='
          w-16
          h-16
          rounded-2xl
          bg-purple-100
          flex
          items-center
          justify-center
          mb-4
        '
      >
        {Icon && (
          <Icon className='text-3xl text-[#5B21B6]' />
        )}
      </div>

      {/* Title */}
      <h3
        className='
          text-sm
          sm:text-base
          font-semibold
          text-gray-800
          leading-6
        '
      >
        {item.title}
      </h3>
    </div>
  )
}

export default SpecializationCard