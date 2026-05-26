// components/WhyChooseSection.jsx
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import image from '../../public/assets/images/choose.jpeg'
const features = [
  'Authentic & Updated Information',
  'Wide Range Of Colleges & Courses',
  'Entrance Exam & Result Updates',
  'Scholarship & Admission Guidance'
]

export default function WhyChooseSection () {
  return (
    <section className='w-full bg-white py-8 px-4 md:px-6 lg:px-10'>
      <div className='max-w-7xl mx-auto border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6 p-4 sm:p-5 lg:p-7'>
          {/* Left Image Section */}
          <div className='relative w-full'>
            <div className='relative rounded-3xl overflow-hidden w-full h-35 sm:h-75 md:h-87.5 lg:h-85'>
              <Image
                src={image}
                alt='Why Choose'
                fill
                className='object-contain rounded-3xl'
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className='w-full'>
            <p className='text-purple-700 uppercase tracking-wide text-[10px] sm:text-xs font-semibold mb-2'>
              About Us
            </p>

            <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900 leading-snug'>
              Why Choose DOSOLCOLLEGEDRISHTI?
            </h2>

            <p className='text-gray-600 text-xs sm:text-sm leading-relaxed mt-3'>
              We provide accurate, updated and reliable information about
              colleges, courses, admissions, results and scholarship,
              scholarships. Our mission is to help students make the right
              career choices.
            </p>

            {/* Features */}
            <div className='mt-5 space-y-3'>
              {features.map((item, index) => (
                <div key={index} className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-700 mt-0.5 shrink-0' />

                  <p className='text-gray-800 text-xs sm:text-sm font-medium'>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className='mt-6 bg-purple-800 hover:bg-purple-900 transition-all duration-300 text-white font-semibold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-md'>
              KNOW MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
