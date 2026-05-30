import BlogCard from './BlogCard'

const BlogList = ({ blogs }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList