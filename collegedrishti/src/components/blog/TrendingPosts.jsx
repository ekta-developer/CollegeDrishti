import Image from 'next/image'

const TrendingPost = ({ post }) => {
  return (
    <div className='flex gap-3'>
      <div className='relative min-w-21.25 h-16.25 rounded overflow-hidden'>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes='85px'
          className='object-cover rounded'
        />
      </div>

      <div>
        <h4 className='text-sm font-medium leading-5 text-gray-800 hover:text-blue-700 cursor-pointer transition'>
          {post.title}
        </h4>

        <button
          type='button'
          className='text-[#009FE3] text-xs font-semibold mt-2'
        >
          Read More »
        </button>
      </div>
    </div>
  )
}

export default TrendingPost