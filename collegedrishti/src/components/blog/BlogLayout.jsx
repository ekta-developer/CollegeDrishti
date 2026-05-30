// app/blogs/page.jsx
import { blogsData, trendingPosts } from '../../data/blogsData'
import { Search } from 'lucide-react'
import BlogCard from './BlogCard'
import TrendingPosts from './TrendingPosts'
import CounselingForm from './CounselingForm'

export default function BlogLayout() {
  return (
    <section className='bg-[#f5f5f5] py-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8'>
          
          {/* LEFT SECTION */}
          <div>
            {/* Search Bar */}
            <div className='relative mb-8'>
              <input
                type='text'
                placeholder='Search here...'
                className='w-full h-12 rounded-md border border-gray-300 bg-[#d9edf7] px-4 pr-12 text-sm outline-none focus:border-blue-500'
              />

              <button className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-700'>
                <Search size={18} />
              </button>
            </div>

            {/* Blog Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
              {blogsData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-center gap-4 mt-10 text-sm text-gray-700'>
              <button className='hover:text-blue-600'>1</button>
              <button className='hover:text-blue-600'>2</button>
              <button className='hover:text-blue-600'>3</button>
              <span>...</span>
              <button className='hover:text-blue-600'>32</button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className='relative'>
            <div className='sticky top-24 space-y-6'>
              
              {/* Trending Posts */}
              <div className='bg-white border border-gray-200 rounded-md p-5'>
                <h3 className='text-lg font-semibold mb-5 text-gray-800'>
                  Trending Post
                </h3>

                <div className='space-y-5'>
                  {trendingPosts.map((post) => (
                    <TrendingPosts key={post.id} post={post} />
                  ))}
                </div>
              </div>

              {/* Counseling Form */}
              <CounselingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}