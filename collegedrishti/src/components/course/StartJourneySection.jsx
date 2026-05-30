// components/StartJourneySection.jsx

import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import img from '../../../public/assets/images/graduation.png'
const StartJourneySection = () => {
  return (
    <section className='w-full px-4 sm:px-6 lg:px-8 py-6'>
      <div className='max-w-7xl mx-auto'>
        <div
          className='relative overflow-hidden rounded-2xl 
          bg-linear-to-r from-[#3b0066] via-[#4a007f] to-[#5d009d]
          px-5 sm:px-8 lg:px-12 py-6 sm:py-8
          flex flex-col lg:flex-row items-center justify-between gap-6
          shadow-xl'
        >
          {/* Glow Effect */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl'></div>
          </div>

          {/* Left Content */}
          <div className='relative flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto'>
            {/* Image */}
            <div className='relative w-35 sm:w-45 lg:w-55 shrink-0'>
              <Image
                src={img}
                alt='Graduation Books'
                width={220}
                height={150}
                className='w-full h-auto object-contain drop-shadow-2xl'
                priority
              />
            </div>

            {/* Text */}
            <div className='text-center sm:text-left'>
              <h2 className='text-white text-2xl sm:text-3xl font-bold leading-tight'>
                Ready to Start Your Journey?
              </h2>

              <p className='text-gray-200 mt-2 text-sm sm:text-base max-w-xl leading-relaxed'>
                Join thousands of students who are building their future with
                <span className='font-semibold text-white'>
                  {' '}
                  DOSOLCOLLEGEDRISHTI.
                </span>
              </p>
            </div>
          </div>

          {/* Button */}
          <div className='relative w-full sm:w-auto'>
            <button
              className='w-full sm:w-auto bg-[#ffbe00] hover:bg-yellow-400
              text-black font-bold px-6 sm:px-8 py-4 rounded-xl
              transition-all duration-300 flex items-center justify-center gap-3
              shadow-lg hover:scale-105'
            >
              GET FREE COUNSELLING
              <FaArrowRight className='text-sm' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartJourneySection
