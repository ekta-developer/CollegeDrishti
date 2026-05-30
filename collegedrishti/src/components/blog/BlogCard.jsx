'use client'

// components/blogs/BlogCard.jsx

import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ blog }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-300'>
      {/* Image */}
      <Link href={`/blog/${blog.slug}`}>
        <div className='relative w-full h-55 cursor-pointer'>
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover'
          />
        </div>
      </Link>

      {/* Content */}
      <div className='p-5'>
        <Link href={`/blog/${blog.slug}`}>
          <h2 className='text-[22px] leading-8 font-semibold text-[#1a1a1a] mb-3 hover:text-blue-700 transition cursor-pointer'>
            {blog.title}
          </h2>
        </Link>

        <p className='text-gray-600 text-sm leading-7 mb-5'>
          {blog.description}
        </p>

        <Link href={`/blogs/${blog.slug}`}>
          <button className='bg-[#009FE3] hover:bg-[#007fc4] text-white text-xs font-semibold px-5 py-3 rounded-sm transition'>
            READ MORE »
          </button>
        </Link>

        <div className='mt-5 pt-4 border-t border-gray-200 text-xs text-gray-500'>
          Program Assigned &nbsp; • &nbsp; {blog.date}
        </div>
      </div>
    </div>
  )
}

export default BlogCard
