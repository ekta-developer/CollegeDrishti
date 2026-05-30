// app/blog/[slug]/page.jsx

import Image from 'next/image'
import { notFound } from 'next/navigation'

import { blogsData, trendingPosts } from '@/data/blogsData'

import BlogCard from '@/components/blog/BlogCard'
import TrendingPost from '@/components/blog/TrendingPosts'
import CounselingForm from '@/components/blog/CounselingForm'
import BlogReadBanner from '@/components/blog/BlogReadBanner'
import ConfusedBanner from '@/components/blog/ConfusedBanner'

const BlogDetailsPage = async ({ params }) => {
  const { slug } = await params

  const blog = blogsData.find(item => item.slug === slug)

  if (!blog) {
    notFound()
  }

  return (
    <>
      <BlogReadBanner />

      <section className='bg-[#f5f5f5] py-10'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8'>
            {/* LEFT SECTION */}
            <div>
              {/* Blog Content */}
              <div className='bg-white rounded-2xl p-6 md:p-8 shadow-sm'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight'>
                  {blog.title}
                </h1>

                <div className='text-sm text-gray-500 mb-6'>
                  Published on {blog.date}
                </div>

                <p className='text-gray-700 leading-8 text-base md:text-lg'>
                  {blog.description}
                </p>

                <div className='mt-8 space-y-5 text-gray-700 leading-8'>
                  <p>
                    DU SOL provides flexible learning opportunities for students
                    preparing for higher education and competitive exams.
                  </p>

                  <p>
                    This blog page is dynamically generated using Next.js App
                    Router dynamic routes.
                  </p>

                  <div className='bg-gray-100 p-4 rounded-lg text-sm font-medium break-all'>
                    /blog/{blog.slug}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className='relative'>
              <div className='sticky top-24 space-y-6'>
                {/* Trending Posts */}
                <div className='bg-white border border-gray-200 rounded-md p-5'>
                  <h3 className='text-lg font-semibold mb-5 text-gray-800'>
                    Trending Posts
                  </h3>

                  <div className='space-y-5'>
                    {trendingPosts?.map(post => (
                      <TrendingPost key={post.id} post={post} />
                    ))}
                  </div>
                </div>

                {/* Counseling Form */}
                <CounselingForm />
              </div>
            </div>
          </div>
        </div>
        <ConfusedBanner />
      </section>
    </>
  )
}

export default BlogDetailsPage
