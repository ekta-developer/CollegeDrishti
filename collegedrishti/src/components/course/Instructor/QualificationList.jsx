// components/course/instructor/QualificationList.jsx
const QualificationList = ({
  qualifications
}) => {
  return (
    <div>
      <h3 className='text-lg font-semibold text-[#2E0B72] mb-5'>
        Key Qualifications
      </h3>

      <ul className='space-y-4'>
        {qualifications.map(
          (item, index) => (
            <li
              key={index}
              className='flex items-start gap-3'
            >
              <span className='w-2 h-2 mt-2 rounded-full bg-[#5B21B6]' />

              <p className='text-sm sm:text-base text-gray-700 leading-7'>
                {item}
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default QualificationList