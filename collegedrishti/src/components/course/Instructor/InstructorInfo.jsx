// components/course/instructor/InstructorInfo.jsx
import Image from 'next/image'
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa'

const InstructorInfo = ({ data }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-6'>
      {/* Image */}
      <div className='shrink-0'>
        <Image
          src={data.image}
          alt={data.name}
          width={140}
          height={140}
          className='rounded-full object-cover border border-gray-200'
        />
      </div>

      {/* Content */}
      <div className='flex-1'>
        <h2 className='text-2xl font-bold text-[#2E0B72]'>
          {data.name}
        </h2>

        <p className='mt-1 text-base font-medium text-gray-800'>
          {data.designation}
        </p>

        <p className='mt-2 text-sm text-gray-500'>
          {data.experience}
        </p>

        <p className='mt-5 text-sm sm:text-base text-gray-700 leading-8'>
          {data.description}
        </p>

        {/* Social Icons */}
        <div className='flex items-center gap-4 mt-6'>
          <a
            href={data.socialLinks.linkedin}
            className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5B21B6] hover:scale-110 transition'
          >
            <FaLinkedin />
          </a>

          <a
            href={data.socialLinks.twitter}
            className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5B21B6] hover:scale-110 transition'
          >
            <FaTwitter />
          </a>

          <a
            href={data.socialLinks.email}
            className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5B21B6] hover:scale-110 transition'
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}

export default InstructorInfo