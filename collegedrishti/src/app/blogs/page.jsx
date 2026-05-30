import BlogBanner from '@/components/blog/BlogBanner'
import BlogLayout from '@/components/blog/BlogLayout'
import ConfusedBanner from '@/components/blog/ConfusedBanner'
import { blogHeroData } from '@/data/blogsData'
import { trendingPosts } from '@/data/blogsData'
import { blogsData } from '@/data/blogsData'

const BlogsPage = () => {
  return (
    <main>
      <BlogBanner data={blogHeroData} />
      <BlogLayout blogs={blogsData} trendingPosts={trendingPosts} />
      <ConfusedBanner />
    </main>
  )
}

export default BlogsPage
