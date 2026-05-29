// components/course/specialization/SpecializationGrid.jsx

import SpecializationCard from './SpecializationCard'

const SpecializationGrid = ({ data }) => {
  return (
    <div
      className='
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-4
        mt-8
      '
    >
      {data.map(item => (
        <SpecializationCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SpecializationGrid