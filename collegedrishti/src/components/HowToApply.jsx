// components/HowToApply.jsx
'use client'
import {
  GraduationCap,
  FileText,
  Upload,
  CreditCard,
  BadgeCheck
} from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Choose Your Course & College',
    desc: 'Select the course and college you wish to apply for.'
  },
  {
    id: 2,
    icon: FileText,
    title: 'Fill the Application Form',
    desc: 'Provide accurate details in the online application form.'
  },
  {
    id: 3,
    icon: Upload,
    title: 'Upload Required Documents',
    desc: 'Upload the required documents as per guidelines.'
  },
  {
    id: 4,
    icon: CreditCard,
    title: 'Pay the Application Fee',
    desc: 'Complete the payment process securely online.'
  },
  {
    id: 5,
    icon: BadgeCheck,
    title: 'Submit & Track',
    desc: 'Submit the form and track your application status.'
  }
]

export default function HowToApply () {
  return (
    <section className='w-full bg-[#f7f4fb] py-10 md:py-14'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='mb-10'>
          <h2 className='text-xl sm:text-2xl font-bold uppercase text-purple-800'>
            How To Apply
          </h2>

          <div className='w-16 h-1 bg-yellow-400 mt-2 rounded-full'></div>
        </div>
        {/* Desktop Layout */}
        <div className='hidden lg:flex items-start justify-between relative'>
          {/* Dotted Line */}
          <div className='absolute top-7 left-0 w-full border-t-2 border-dotted border-gray-300 z-0'></div>

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.id}
                className='relative z-10 flex flex-col items-center text-center w-[18%]'
              >
                {/* Icon */}
                <div className='w-14 h-14 rounded-xl border border-purple-200 bg-white flex items-center justify-center shadow-sm'>
                  <Icon className='text-purple-700 w-7 h-7' />
                </div>

                {/* Content */}
                <h3 className='mt-4 text-sm font-semibold text-gray-900 leading-5'>
                  {step.title}
                </h3>

                <p className='mt-2 text-xs text-gray-500 leading-5'>
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
        {/* Mobile & Tablet Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden'>
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.id}
                className='relative bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300'
              >
                {/* Icon */}
                <div className='w-14 h-14 mx-auto rounded-xl border border-purple-200 bg-purple-50 flex items-center justify-center'>
                  <Icon className='text-purple-700 w-7 h-7' />
                </div>

                {/* Content */}
                <h3 className='mt-4 text-sm font-semibold text-gray-900'>
                  {step.title}
                </h3>

                <p className='mt-2 text-xs text-gray-500 leading-5'>
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
        {/* Button */}
        <div className='flex justify-center mt-8'>
          <button className='bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-md'>
            APPLY NOW
          </button>
        </div>{' '}
      </div>
    </section>
  )
}
