import React from 'react'

const BlogBanner = ({ data }) => {
  return (
    <section className='w-full bg-purple-900 py-12 md:py-16'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        {/* Heading */}
        <h1 className='text-[#F4E04D] font-bold leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          {data.title}
        </h1>

        {/* Sub Heading */}
        <h2 className='text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
          {data.subtitle}
        </h2>

        {/* Description */}
        <p className='text-white/90 mt-4 max-w-3xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed'>
          {data.description}
        </p>
      </div>
    </section>
  )
}

export default BlogBanner
