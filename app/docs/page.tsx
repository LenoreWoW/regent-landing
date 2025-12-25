'use client';

import { useState } from 'react';

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 text-maroon text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
    {children}
  </span>
);

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        { title: 'Quick Start Guide', slug: 'quick-start', time: '5 min' },
        { title: 'Creating Your Account', slug: 'create-account', time: '2 min' },
        { title: 'Setting Up Your Profile', slug: 'profile-setup', time: '3 min' },
        { title: 'Your First Booking Link', slug: 'first-booking-link', time: '4 min' },
      ]
    },
    {
      title: 'Scheduling',
      icon: '📅',
      articles: [
        { title: 'Booking Links Overview', slug: 'booking-links', time: '6 min' },
        { title: 'Availability Settings', slug: 'availability', time: '4 min' },
        { title: 'Buffer Times & Limits', slug: 'buffers-limits', time: '3 min' },
        { title: 'Meeting Types', slug: 'meeting-types', time: '4 min' },
        { title: 'Timezone Handling', slug: 'timezones', time: '3 min' },
      ]
    },
    {
      title: 'Team & Delegation',
      icon: '👥',
      articles: [
        { title: 'Understanding Roles', slug: 'roles-overview', time: '5 min' },
        { title: 'Admin Capabilities', slug: 'admin-role', time: '4 min' },
        { title: 'Manager Workflows', slug: 'manager-role', time: '5 min' },
        { title: 'Subordinate Booking', slug: 'subordinate-role', time: '4 min' },
        { title: 'Guest Requests', slug: 'guest-role', time: '3 min' },
        { title: 'Setting Up Teams', slug: 'team-setup', time: '4 min' },
      ]
    },
    {
      title: 'Approval Workflows',
      icon: '✅',
      articles: [
        { title: 'How Approvals Work', slug: 'approvals-overview', time: '4 min' },
        { title: 'Approving Meetings', slug: 'approve-meetings', time: '2 min' },
        { title: 'Rejecting with Reason', slug: 'reject-meetings', time: '2 min' },
        { title: 'Auto-Approve Rules', slug: 'auto-approve', time: '3 min' },
      ]
    },
    {
      title: 'Integrations',
      icon: '🔌',
      articles: [
        { title: 'Google Calendar Sync', slug: 'google-calendar', time: '4 min' },
        { title: 'Outlook/Office 365', slug: 'outlook', time: '4 min' },
        { title: 'Zoom Integration', slug: 'zoom', time: '3 min' },
        { title: 'Google Meet', slug: 'google-meet', time: '3 min' },
        { title: 'Microsoft Teams', slug: 'teams', time: '3 min' },
        { title: 'ICS Exports', slug: 'ics-exports', time: '2 min' },
      ]
    },
    {
      title: 'Billing & Account',
      icon: '💳',
      articles: [
        { title: 'Plans & Pricing', slug: 'plans', time: '3 min' },
        { title: 'Upgrading Your Plan', slug: 'upgrade', time: '2 min' },
        { title: 'Managing Payment', slug: 'payment', time: '2 min' },
        { title: 'Team Billing', slug: 'team-billing', time: '3 min' },
        { title: 'Cancellation', slug: 'cancellation', time: '2 min' },
      ]
    },
  ];

  const popularArticles = [
    { title: 'Quick Start Guide', section: 'Getting Started' },
    { title: 'Understanding Roles', section: 'Team & Delegation' },
    { title: 'Google Calendar Sync', section: 'Integrations' },
    { title: 'Availability Settings', section: 'Scheduling' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Documentation</SectionTag>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-charcoal mb-6">
            How can we help?
          </h1>
          <p className="text-xl text-dune max-w-2xl mx-auto mb-10">
            Everything you need to know about using Regent.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-white border border-dune/20 rounded-2xl text-charcoal placeholder-dune shadow-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-dune" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 bg-white border-y border-dune/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-dune uppercase tracking-wider mb-4">Popular Articles</h3>
          <div className="flex flex-wrap gap-3">
            {popularArticles.map((article, i) => (
              <a 
                key={i}
                href={`/docs/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-cream rounded-lg text-charcoal hover:bg-maroon/10 hover:text-maroon transition-colors text-sm"
              >
                {article.title}
                <span className="text-dune ml-2">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, i) => (
              <div key={i} className="card card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-xl font-semibold text-charcoal">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.articles.map((article, j) => (
                    <li key={j}>
                      <a 
                        href={`/docs/${article.slug}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-dune group-hover:text-maroon transition-colors">{article.title}</span>
                        <span className="text-xs text-dune/50">{article.time}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 mt-6 text-maroon font-medium text-sm hover:underline"
                >
                  View all
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
            For Developers
          </span>
          <h2 className="text-4xl font-display font-medium mb-6">
            API Reference
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Build custom integrations with the Regent API.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'REST API', description: 'Full CRUD operations for all resources' },
              { title: 'Webhooks', description: 'Real-time event notifications' },
              { title: 'SDKs', description: 'JavaScript, Python, Ruby' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <a href="/docs/api" className="btn-gold">
            View API Docs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-medium text-charcoal mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-dune mb-10">
            Our support team is here to help you get the most out of Regent.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card card-hover text-left">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Chat with us</h3>
              <p className="text-dune text-sm mb-4">Available Monday–Friday, 9am–6pm EST</p>
              <a href="#" className="text-maroon font-medium text-sm hover:underline">
                Start a conversation →
              </a>
            </div>
            <div className="card card-hover text-left">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Email support</h3>
              <p className="text-dune text-sm mb-4">Get a response within 24 hours</p>
              <a href="mailto:support@regent.co" className="text-maroon font-medium text-sm hover:underline">
                support@regent.co →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

