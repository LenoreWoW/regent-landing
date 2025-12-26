'use client';

import { useState } from 'react';

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 text-maroon text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
    {children}
  </span>
);

const FeatureCard = ({ icon, title, description, features }: { 
  icon: string; 
  title: string; 
  description: string; 
  features: string[];
}) => (
  <div className="card card-hover group text-left">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-charcoal mb-3">{title}</h3>
    <p className="text-dune mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-dune">
          <svg className="w-4 h-4 text-palm flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ComparisonRow = ({ feature, regent, calendly, acuity }: {
  feature: string;
  regent: boolean | string;
  calendly: boolean | string;
  acuity: boolean | string;
}) => (
  <tr className="border-b border-dune/10">
    <td className="py-4 text-charcoal font-medium">{feature}</td>
    <td className="py-4 text-center">
      {typeof regent === 'boolean' ? (
        regent ? <span className="text-palm text-xl">✓</span> : <span className="text-salmon/50">—</span>
      ) : <span className="text-charcoal font-medium">{regent}</span>}
    </td>
    <td className="py-4 text-center">
      {typeof calendly === 'boolean' ? (
        calendly ? <span className="text-palm text-xl">✓</span> : <span className="text-salmon/50">—</span>
      ) : <span className="text-dune">{calendly}</span>}
    </td>
    <td className="py-4 text-center">
      {typeof acuity === 'boolean' ? (
        acuity ? <span className="text-palm text-xl">✓</span> : <span className="text-salmon/50">—</span>
      ) : <span className="text-dune">{acuity}</span>}
    </td>
  </tr>
);

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'scheduling', name: 'Scheduling' },
    { id: 'team', name: 'Team & Delegation' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'analytics', name: 'Analytics' },
  ];

  const allFeatures = [
    {
      category: 'scheduling',
      icon: '📅',
      title: 'Booking Links',
      description: 'Share a single link. Let invitees pick a time that works.',
      features: ['Custom slugs', 'Duration options', 'Buffer times', 'Maximum bookings per day']
    },
    {
      category: 'scheduling',
      icon: '⏰',
      title: 'Smart Availability',
      description: 'Define your working hours. Regent handles the rest.',
      features: ['Working hours', 'Time off blocking', 'Timezone detection', 'Minimum notice']
    },
    {
      category: 'scheduling',
      icon: '🔄',
      title: 'Conflict Detection',
      description: 'Never double-book. Regent checks your calendar in real-time.',
      features: ['Real-time 2-way sync', 'Google Calendar & Outlook', 'Automatic busy time blocking', 'Conflict prevention']
    },
    {
      category: 'scheduling',
      icon: '📍',
      title: 'Meeting Types',
      description: 'Different meetings for different purposes.',
      features: ['In-person meetings', 'Video calls', 'Phone calls', 'Custom formats']
    },
    {
      category: 'team',
      icon: '👑',
      title: 'Role-Based Access',
      description: 'Four distinct roles with precise permissions.',
      features: ['Admin full control', 'Manager oversight', 'Subordinate booking', 'Guest requests']
    },
    {
      category: 'team',
      icon: '🤝',
      title: 'Team Delegation',
      description: 'Let assistants manage your calendar on your behalf.',
      features: ['Book for managers', 'Approve/reject requests', 'View availability', 'Manage time blocks']
    },
    {
      category: 'team',
      icon: '👥',
      title: 'Team Management',
      description: 'Organize users into teams with their own settings.',
      features: ['Team calendars', 'Shared availability', 'Color coding', 'Team avatars']
    },
    {
      category: 'team',
      icon: '✅',
      title: 'Approval Workflows',
      description: 'Control who gets on your calendar.',
      features: ['Pending status', 'One-click approve', 'Reject with reason', 'Auto-approve rules']
    },
    {
      category: 'integrations',
      icon: '🗓️',
      title: 'Calendar Export',
      description: 'Add meetings to your calendar instantly.',
      features: ['Google Calendar links', 'ICS file download', 'Outlook compatible', 'Apple Calendar ready']
    },
    {
      category: 'integrations',
      icon: '🎥',
      title: 'Video Meetings',
      description: 'Support for any video platform.',
      features: ['Paste Zoom links', 'Google Meet supported', 'Microsoft Teams', 'Any custom link']
    },
    {
      category: 'integrations',
      icon: '📧',
      title: 'Email & Notifications',
      description: 'Keep everyone informed.',
      features: ['Confirmation emails', 'Reminder notifications', 'Cancellation alerts', 'Custom templates']
    },
    {
      category: 'analytics',
      icon: '📊',
      title: 'Meeting Analytics',
      description: 'Understand your scheduling patterns.',
      features: ['Booking trends', 'Popular times', 'No-show rates', 'Team performance']
    },
    {
      category: 'analytics',
      icon: '📈',
      title: 'Activity Logs',
      description: 'Full audit trail for compliance.',
      features: ['User actions', 'Meeting changes', 'Login history', 'Export reports']
    },
    {
      category: 'analytics',
      icon: '🏆',
      title: 'Gamification',
      description: 'Reward consistency and engagement.',
      features: ['Achievement badges', 'Booking streaks', 'XP system', 'Leaderboards']
    },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? allFeatures 
    : allFeatures.filter(f => f.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Features</SectionTag>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-charcoal mb-6">
            Built for modern teams
          </h1>
          <p className="text-xl text-dune max-w-2xl mx-auto">
            Every feature designed with delegation in mind. From solo users to enterprise teams.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-y border-dune/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-maroon text-white' 
                    : 'bg-dune/10 text-charcoal hover:bg-dune/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white" id="comparison">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTag>Comparison</SectionTag>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-6">
              How we compare
            </h2>
            <p className="text-xl text-dune">
              See how Regent stacks up against the competition.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-maroon/20">
                  <th className="py-4 text-left text-charcoal font-semibold">Feature</th>
                  <th className="py-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 rounded-full">
                      <span className="font-display font-semibold text-maroon">Regent</span>
                    </div>
                  </th>
                  <th className="py-4 text-center text-dune font-medium">Calendly</th>
                  <th className="py-4 text-center text-dune font-medium">Acuity</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow 
                  feature="Team Delegation" 
                  regent={true} calendly={false} acuity={false} 
                />
                <ComparisonRow 
                  feature="Role-Based Access" 
                  regent="4 Roles" calendly="Limited" acuity="2 Roles" 
                />
                <ComparisonRow 
                  feature="Approval Workflows" 
                  regent={true} calendly={false} acuity={false} 
                />
                <ComparisonRow 
                  feature="Book on Behalf" 
                  regent={true} calendly={false} acuity={true} 
                />
                <ComparisonRow 
                  feature="Arabic / RTL Support" 
                  regent={true} calendly={false} acuity={false} 
                />
                <ComparisonRow 
                  feature="Calendar Export" 
                  regent="2-way sync" calendly="2-way sync" acuity="2-way sync" 
                />
                <ComparisonRow 
                  feature="Video Links" 
                  regent="Paste any link" calendly="Native Zoom" acuity="Native Zoom" 
                />
                <ComparisonRow 
                  feature="Gamification" 
                  regent={true} calendly={false} acuity={false} 
                />
                <ComparisonRow 
                  feature="Free Tier" 
                  regent="20 meetings" calendly="1 event type" acuity="7 days trial" 
                />
                <ComparisonRow 
                  feature="Pro Price" 
                  regent="$10/mo" calendly="$16/mo" acuity="$16/mo" 
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-24 bg-gradient-to-br from-maroon to-maroon-dark text-white" id="gamification">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
              Gamification
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
              Make scheduling fun
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Earn achievements, build streaks, and compete with your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔥', title: 'Booking Streak', description: 'Book meetings consistently to build your streak' },
              { icon: '🏆', title: 'Achievements', description: 'Unlock badges for milestones and accomplishments' },
              { icon: '⭐', title: 'XP System', description: 'Earn experience points for every action' },
              { icon: '👥', title: 'Team Leaderboard', description: 'See how you rank against your teammates' },
            ].map((item, i) => (
              <div key={i} className="card bg-white/10 border-white/10 text-center hover:bg-white/15 transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-display font-medium mb-8">Unlock achievements like:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '🌟', name: 'First Booking' },
                { icon: '🔥', name: '7-Day Streak' },
                { icon: '💎', name: '100 Meetings' },
                { icon: '🌙', name: 'Night Owl' },
                { icon: '🦅', name: 'Early Bird' },
                { icon: '🚀', name: 'Power User' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-white font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-dune mb-10">
            Join thousands of teams scheduling smarter with Regent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="btn-primary text-lg">
              Start for Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/demo" className="btn-secondary text-lg">
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

