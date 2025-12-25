'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// In a real app, this would be fetched based on the slug
const SAMPLE_POST = {
  slug: 'how-to-reduce-meeting-no-shows',
  title: 'How to Reduce Meeting No-Shows by 80%',
  excerpt: 'Learn proven strategies to ensure your clients actually show up to scheduled meetings.',
  date: 'December 20, 2024',
  readTime: '5 min read',
  category: 'Tips & Tricks',
  author: {
    name: 'Sarah Al-Mahmoud',
    role: 'Head of Customer Success',
    image: 'https://ui-avatars.com/api/?name=Sarah+Al+Mahmoud&background=8A1538&color=fff',
  },
  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
  content: `
## Why No-Shows Happen

Meeting no-shows are one of the most frustrating aspects of running a service-based business. Whether you're a consultant, coach, or any professional who relies on client meetings, empty calendar slots mean lost time and revenue.

Before we dive into solutions, let's understand why people miss appointments:

- **Forgetfulness** - Life gets busy, and meetings slip through the cracks
- **Poor scheduling** - Meetings booked too far in advance are easily forgotten
- **Lack of commitment** - Some people book meetings without true intent to attend
- **Technical issues** - Wrong links, timezone confusion, etc.

## Strategy 1: Send Smart Reminders

The single most effective way to reduce no-shows is a robust reminder system. Here's our recommended cadence:

1. **Immediate confirmation** - Send as soon as the meeting is booked
2. **24-hour reminder** - A day before the meeting
3. **1-hour reminder** - Right before the meeting

Pro tip: Include the meeting link prominently in every reminder. Make it impossible to miss.

## Strategy 2: Allow Easy Rescheduling

Sometimes life happens. Make it easy for people to reschedule instead of just not showing up:

- Include a "Can't make it?" link in your reminders
- Offer alternative times directly in the email
- Set reasonable rescheduling policies (e.g., 2 hours notice)

## Strategy 3: Create Commitment

Psychology plays a huge role in attendance. Here are ways to increase commitment:

1. **Ask for goals** - When booking, ask what they want to achieve
2. **Provide value upfront** - Send a pre-meeting resource or worksheet
3. **Set expectations** - Be clear about what will happen in the meeting

## Strategy 4: Optimize Your Booking Process

The booking experience itself affects no-show rates:

- **Limit how far ahead** people can book (1-2 weeks is ideal)
- **Require email confirmation** to weed out casual bookers
- **Use buffer times** to avoid scheduling when people are likely to cancel

## Real Results

We've seen Regent users who implement these strategies reduce their no-show rates from 25% to under 5%. That's a massive improvement that directly impacts your bottom line.

## Getting Started

The good news is that Regent has all these features built in:

- ✅ Automatic email reminders
- ✅ Easy rescheduling links
- ✅ Customizable booking questions
- ✅ Buffer time settings
- ✅ Booking window limits

[Get started for free](/register) and watch your no-shows disappear.
`,
};

const RELATED_POSTS = [
  {
    slug: 'calendar-sync-best-practices',
    title: 'Calendar Sync Best Practices',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400',
  },
  {
    slug: 'meeting-automation-workflow',
    title: 'Automate Your Meeting Workflow',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
  },
];

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  // In a real app, we'd fetch content based on slug
  const post = SAMPLE_POST;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-maroon/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-maroon mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-maroon/10 text-maroon text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-charcoal">{post.author.name}</p>
                <p className="text-sm text-gray-500">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-charcoal prose-a:text-maroon prose-a:no-underline hover:prose-a:underline"
          >
            {/* In a real app, this would be rendered MDX content */}
            <div dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-charcoal mt-8 mb-4">$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                .replace(/1\. (.*)/g, '<li class="ml-4 list-decimal">$1</li>')
                .replace(/\n\n/g, '</p><p class="text-gray-600 leading-relaxed mb-4">')
                .replace(/✅/g, '<span class="text-palm">✅</span>')
            }} />
          </motion.article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-6">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-1">{post.author.name}</h3>
              <p className="text-gray-500 mb-2">{post.author.role}</p>
              <p className="text-gray-600 text-sm">
                Sarah helps Regent users get the most out of their scheduling. 
                She has helped over 1,000 professionals optimize their meeting workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {RELATED_POSTS.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal group-hover:text-maroon transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-maroon to-maroon-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to eliminate no-shows?
          </h2>
          <p className="text-white/80 mb-8">
            Start using Regent today and watch your attendance rates soar.
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-maroon font-bold rounded-lg shadow-lg hover:scale-105 transition-all"
          >
            Start Free Today
          </a>
        </div>
      </section>
    </div>
  );
}

