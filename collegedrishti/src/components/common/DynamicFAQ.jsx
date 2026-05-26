// components/common/DynamicFAQ.jsx

'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const DynamicFAQ = ({
  title = 'Frequently Asked Questions',
  faqs = [],
  columns = 2
}) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Split FAQs into columns dynamically
  const chunkSize = Math.ceil(faqs.length / columns)
  const faqColumns = Array.from({ length: columns }, (_, i) =>
    faqs.slice(i * chunkSize, (i + 1) * chunkSize)
  )

  return (
    <section className='w-full py-10 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='mb-8'>
          <h2 className='text-lg sm:text-xl md:text-2xl font-bold uppercase text-gray-900 relative inline-block'>
            {title}
            <span className='absolute left-0 -bottom-2 w-16 h-1 bg-yellow-400 rounded-full'></span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div
          className={`grid grid-cols-1 ${
            columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
          } gap-4 lg:gap-8`}
        >
          {faqColumns.map((column, colIndex) => (
            <div key={colIndex} className='space-y-3'>
              {column.map((faq, index) => {
                const actualIndex = colIndex * chunkSize + index
                const isOpen = openIndex === actualIndex

                return (
                  <div
                    key={actualIndex}
                    className='border border-gray-200 rounded-md overflow-hidden bg-white'
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(actualIndex)}
                      className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition'
                    >
                      <span className='text-sm sm:text-base font-medium text-gray-800'>
                        {faq.question}
                      </span>

                      {isOpen ? (
                        <ChevronUp className='w-4 h-4 text-purple-700 shrink-0' />
                      ) : (
                        <ChevronDown className='w-4 h-4 text-purple-700 shrink-0' />
                      )}
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-40 py-3 px-4' : 'max-h-0'
                      }`}
                    >
                      <p className='text-sm text-gray-600 leading-relaxed'>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className='flex justify-center mt-8'>
          <button className='bg-purple-800 hover:bg-purple-900 text-white text-sm font-medium px-8 py-3 rounded-md transition duration-300 shadow-md'>
            VIEW ALL FAQS
          </button>
        </div>
      </div>
    </section>
  )
}

export default DynamicFAQ
