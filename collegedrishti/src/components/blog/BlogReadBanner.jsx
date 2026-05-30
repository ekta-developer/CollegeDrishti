// components/blogs/BlogTopBanner.jsx

'use client'

import Image from 'next/image'
import img from '../../../public/assets/images/blogreadimg.jpg'
const BlogTopBanner = () => {
  return (
    <section className='relative overflow-hidden bg-[#9A43C4]'>
      {/* Bottom Curve */}
      <div className='absolute bottom-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 180'
          className='w-full h-auto'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 0C247 160 1124 160 1440 0V180H0V0Z' fill='#f5f5f5' />
        </svg>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 pt-8 md:pt-12 pb-20 md:pb-28'>
        <div className='relative w-full max-w-5xl mx-auto aspect-16/7 rounded-md overflow-hidden shadow-lg'>
          <Image
            src={img}
            alt='DU SOL Admission Banner'
            fill
            priority
            className='object-cover'
          />
        </div>
      </div>

    </section>
  )
}

export default BlogTopBanner
