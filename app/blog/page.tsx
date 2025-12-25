'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample blog posts (in a real app, these would come from MDX files or a CMS)
const BLOG_POSTS = [
  {
    slug: 'how-to-reduce-meeting-no-shows',
    title: 'How to Reduce Meeting No-Shows by 80%',
    excerpt: 'Learn proven strategies to ensure your clients actually show up to scheduled meetings.',
    date: '2024-12-20',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
  },
  {
    slug: 'calendar-sync-best-practices',
    title: 'Calendar Sync Best Practices for Busy Professionals',
    excerpt: 'Master the art of keeping your calendars in sync across multiple platforms.',
    date: '2024-12-15',
    readTime: '4 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
  },
  {
    slug: 'team-scheduling-guide',
    title: 'The Complete Guide to Team Scheduling',
    excerpt: 'Everything you need to know about coordinating calendars across your team.',
    date: '2024-12-10',
    readTime: '8 min read',
    category: 'Teams',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    slug: 'booking-page-optimization',
    title: 'Optimize Your Booking Page for More Conversions',
    excerpt: 'Turn more visitors into booked meetings with these simple tweaks.',
    date: '2024-12-05',
    readTime: '6 min read',
    category: 'Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    slug: 'remote-work-scheduling',
    title: 'Scheduling Tips for Remote Teams Across Time Zones',
    excerpt: 'How to coordinate meetings when your team is spread around the world.',
    date: '2024-12-01',
    readTime: '7 min read',
    category: 'Remote Work',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
  },
  {
    slug: 'meeting-automation-workflow',
    title: 'Automate Your Meeting Workflow: A Step-by-Step Guide',
    excerpt: 'Save hours every week by automating your scheduling process.',
    date: '2024-11-25',
    readTime: '6 min read',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
  },
];

const CATEGORIES = ['All', 'Tips & Tricks', 'Productivity', 'Teams', 'Growth', 'Remote Work', 'Automation'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-al-adaam/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-charcoal mb-4">
              The Al Adaam Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tips, guides, and insights to help you master your scheduling and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-100 sticky top-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === 'All'
                    ? 'bg-al-adaam text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
              <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-al-adaam to-skyline rounded-2xl overflow-hidden group">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={BLOG_POSTS[0].image}
                    alt={BLOG_POSTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Featured Post
                  </span>
                  <h2 className="text-3xl font-bold mb-4 group-hover:underline">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-white/80 mb-4">{BLOG_POSTS[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>{BLOG_POSTS[0].date}</span>
                    <span>•</span>
                    <span>{BLOG_POSTS[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-charcoal rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-al-adaam transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Get scheduling tips in your inbox
          </h2>
          <p className="text-gray-600 mb-8">
            Join 5,000+ professionals who get our weekly newsletter with scheduling tips, productivity hacks, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-al-adaam focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-al-adaam text-white font-semibold rounded-lg hover:bg-al-adaam/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}

