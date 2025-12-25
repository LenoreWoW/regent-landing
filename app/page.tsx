'use client';

import { useState } from 'react';

// Reusable components
const SectionTag = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wider uppercase rounded-full mb-6 ${
    dark ? 'bg-gold/20 text-gold' : 'bg-maroon/10 text-maroon'
  }`}>
    {children}
  </span>
);

const FeatureCard = ({ icon, title, description, delay = 0 }: { icon: string; title: string; description: string; delay?: number }) => (
  <div 
    className="card card-hover group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-charcoal mb-3">{title}</h3>
    <p className="text-dune">{description}</p>
  </div>
);

const CheckItem = ({ children, color = 'palm' }: { children: React.ReactNode; color?: string }) => (
  <li className="flex items-center gap-3">
    <svg className={`w-5 h-5 text-${color} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>{children}</span>
  </li>
);

const CrossItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3">
    <svg className="w-5 h-5 text-salmon flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
    <span>{children}</span>
  </li>
);

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const roles = [
    { 
      name: 'ADMIN', 
      icon: '👑', 
      color: 'maroon', 
      description: 'Full system control',
      features: ['User management', 'System settings', 'Activity logs', 'All permissions']
    },
    { 
      name: 'MANAGER', 
      icon: '🛡️', 
      color: 'gold', 
      description: 'Own calendar + team oversight',
      features: ['Approve/reject meetings', 'Delegate to team', 'View analytics', 'Set availability']
    },
    { 
      name: 'SUBORDINATE', 
      icon: '👥', 
      color: 'palm', 
      description: 'Book on behalf of managers',
      features: ['Manage calendars', 'Handle requests', 'Book meetings', 'Send notifications']
    },
    { 
      name: 'GUEST', 
      icon: '👤', 
      color: 'dune', 
      description: 'Request meetings',
      features: ['Request meetings', 'View status', 'Cancel requests', 'Receive updates']
    },
  ];

  const faqs = [
    {
      question: 'How is Regent different from Calendly?',
      answer: 'Regent focuses heavily on team delegation and role-based permissions, allowing assistants to manage calendars on behalf of executives — a feature not as robust in Calendly. Plus, our approval workflow ensures you control who gets on your calendar.'
    },
    {
      question: 'Can I use Regent for free forever?',
      answer: 'Yes! Our Free tier offers essential features for individual users with generous limits. Perfect for getting started and seeing if Regent fits your workflow.'
    },
    {
      question: 'How does team delegation work?',
      answer: 'Managers can assign subordinates to manage their calendars, approve meetings, and block time — all within a controlled environment. Subordinates see real-time availability and can book on behalf of their assigned manager.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We support Google Calendar, Outlook Calendar, and offer ICS downloads. Zoom, Teams, and Google Meet integrations are available on Pro and Business plans.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption, secure authentication via Supabase, and adhere to strict data privacy policies. Your scheduling data is never sold or shared.'
    },
    {
      question: 'Do you support Arabic?',
      answer: 'Yes! Regent offers full English and Arabic language support, including right-to-left (RTL) layout for an optimal experience for Arabic speakers.'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-palm/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <SectionTag>
              <span className="text-gold">✦</span> Premium Scheduling for Teams & Individuals
            </SectionTag>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-charcoal leading-tight mb-8">
              Schedule on<br />
              <span className="gradient-text">Your Terms</span>
            </h1>

            <p className="text-xl text-dune mb-10 max-w-lg mx-auto lg:mx-0">
              The only scheduling platform built for delegation. Let your team manage calendars, approve requests, and coordinate meetings — seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="https://appregent.netlify.app/register" className="btn-primary text-lg">
                Get Started Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/demo" className="btn-secondary text-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-mono uppercase tracking-wider text-dune">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-palm rounded-full" />
                98% Less Conflicts
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                5min Avg Setup
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-maroon rounded-full" />
                4 User Roles
              </span>
            </div>
          </div>

          {/* Right: 3D Calendar Visualization */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Calendar Card */}
              <div className="relative w-80 h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-cream rounded-3xl shadow-2xl shadow-charcoal/10 p-6 border border-dune/20">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-lg font-medium text-charcoal">December 2025</span>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-maroon/10 text-maroon flex items-center justify-center hover:bg-maroon hover:text-white transition-colors">
                        ←
                      </button>
                      <button className="w-8 h-8 rounded-full bg-maroon/10 text-maroon flex items-center justify-center hover:bg-maroon hover:text-white transition-colors">
                        →
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <span key={i} className="text-dune font-medium p-2">{d}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {Array.from({ length: 31 }, (_, i) => (
                      <span 
                        key={i} 
                        className={`p-2 rounded-lg transition-colors cursor-pointer ${
                          i === 24 ? 'bg-maroon text-white font-semibold' :
                          [5, 12, 18, 27].includes(i) ? 'bg-gold/20 text-gold-dark' :
                          [8, 15, 22].includes(i) ? 'bg-palm/20 text-palm' :
                          'hover:bg-dune/10'
                        }`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating meeting cards */}
                <div className="absolute -right-16 top-8 w-48 p-4 bg-white rounded-xl shadow-xl border border-gold/30 animate-float animation-delay-2000">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white text-sm font-semibold">S</div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Strategy Call</p>
                      <p className="text-dune text-xs">10:00 AM - 11:00 AM</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-palm/20 text-palm text-xs rounded-full">Confirmed</span>
                </div>

                <div className="absolute -left-12 bottom-12 w-48 p-4 bg-white rounded-xl shadow-xl border border-maroon/30 animate-float animation-delay-4000">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-maroon rounded-full flex items-center justify-center text-white text-sm font-semibold">A</div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Team Sync</p>
                      <p className="text-dune text-xs">2:00 PM - 2:30 PM</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gold/20 text-gold-dark text-xs rounded-full">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dune">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-dune/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-maroon rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========== LOGO BAR ========== */}
      <section className="py-16 bg-white border-y border-dune/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-dune text-sm uppercase tracking-widest mb-10">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {['Stripe', 'Google', 'Microsoft', 'Notion', 'Slack'].map((logo) => (
              <div key={logo} className="text-2xl font-semibold text-charcoal">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROBLEM / SOLUTION ========== */}
      <section className="py-24 bg-charcoal section-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag dark>The Problem</SectionTag>
          <h2 className="section-title">
            Scheduling shouldn't be this hard.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {/* Without Regent */}
            <div className="card bg-white/5 border-salmon/30 text-left">
              <h3 className="text-2xl font-display font-semibold text-salmon mb-6 flex items-center gap-3">
                <span className="text-3xl">😤</span>
                Without Regent
              </h3>
              <ul className="space-y-4 text-white/70">
                <CrossItem>Endless email chains to find a time</CrossItem>
                <CrossItem>Double bookings and conflicts</CrossItem>
                <CrossItem>No visibility into team availability</CrossItem>
                <CrossItem>Manual approvals and coordination</CrossItem>
                <CrossItem>Scattered across multiple tools</CrossItem>
              </ul>
            </div>

            {/* With Regent */}
            <div className="card bg-white/5 border-palm/30 text-left">
              <h3 className="text-2xl font-display font-semibold text-palm mb-6 flex items-center gap-3">
                <span className="text-3xl">✨</span>
                With Regent
              </h3>
              <ul className="space-y-4 text-white/70">
                <CheckItem>One link. Meeting scheduled.</CheckItem>
                <CheckItem>Automatic conflict detection</CheckItem>
                <CheckItem>Team-wide calendar visibility</CheckItem>
                <CheckItem>Smart approval workflows</CheckItem>
                <CheckItem>Everything in one unified platform</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CORE FEATURES ========== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Features</SectionTag>
          <h2 className="section-title">
            Everything you need.<br />Nothing you don't.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <FeatureCard 
              icon="⏰" 
              title="Smart Scheduling" 
              description="Auto conflict detection, buffer times, timezone intelligence. Never double-book again."
              delay={0}
            />
            <FeatureCard 
              icon="🤝" 
              title="Team Delegation" 
              description="Subordinates manage executive calendars with full visibility and control."
              delay={100}
            />
            <FeatureCard 
              icon="✅" 
              title="Approval Workflows" 
              description="Guests request, you approve. Full control over who gets on your calendar."
              delay={200}
            />
            <FeatureCard 
              icon="👑" 
              title="Role-Based Access" 
              description="Admin, Manager, Subordinate, Guest — each with perfect permissions."
              delay={300}
            />
            <FeatureCard 
              icon="🌐" 
              title="Bilingual Support" 
              description="Full English & Arabic with RTL layout support built in from day one."
              delay={400}
            />
            <FeatureCard 
              icon="🗓️" 
              title="Calendar Export" 
              description="Add meetings to Google Calendar, Outlook, or download ICS files instantly."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* ========== ROLE SHOWCASE ========== */}
      <section className="py-24 bg-charcoal section-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag dark>Built for Teams</SectionTag>
          <h2 className="section-title">
            Four roles. Perfect permissions.
          </h2>
          <p className="section-subtitle mx-auto mb-16">
            Whether you're an executive, assistant, or guest — Regent adapts to your workflow.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <div key={role.name} className="group">
                <div className="card bg-white/5 border-white/10 text-left overflow-hidden hover:border-gold/50 transition-all duration-300">
                  {/* Icon Header */}
                  <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {role.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{role.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{role.description}</p>

                  <ul className="space-y-2 text-sm text-white/50">
                    {role.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="text-palm">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURE DEEP DIVES ========== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          
          {/* Deep Dive 1: Smart Scheduling */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-maroon/10 to-gold/10 rounded-3xl flex items-center justify-center">
                <div className="text-8xl animate-pulse-glow">⏰</div>
              </div>
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <SectionTag>Smart Scheduling</SectionTag>
              <h2 className="text-4xl font-display font-medium text-charcoal mb-6">
                Conflicts? Not anymore.
              </h2>
              <p className="text-lg text-dune mb-8">
                Our intelligent engine detects overlaps before they happen. Set buffer times, minimum notice, and let Regent handle the rest.
              </p>
              <ul className="space-y-4 text-dune text-left inline-block">
                <CheckItem>Automatic conflict detection</CheckItem>
                <CheckItem>Configurable buffer times</CheckItem>
                <CheckItem>Timezone intelligence</CheckItem>
                <CheckItem>Working hours respect</CheckItem>
              </ul>
            </div>
          </div>

          {/* Deep Dive 2: Team Delegation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <SectionTag>Delegation</SectionTag>
              <h2 className="text-4xl font-display font-medium text-charcoal mb-6">
                Your assistant's new superpower.
              </h2>
              <p className="text-lg text-dune mb-8">
                Subordinates manage executive calendars with full visibility. Approve, reschedule, block time — all on their behalf.
              </p>
              <ul className="space-y-4 text-dune text-left inline-block">
                <CheckItem>Book on behalf of others</CheckItem>
                <CheckItem>View team availability</CheckItem>
                <CheckItem>Manage approvals</CheckItem>
                <CheckItem>Real-time sync</CheckItem>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/10 to-palm/10 rounded-3xl flex items-center justify-center">
                <div className="text-8xl animate-pulse-glow animation-delay-2000">🤝</div>
              </div>
            </div>
          </div>

          {/* Deep Dive 3: Approval Workflows */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-palm/10 to-sea/10 rounded-3xl flex items-center justify-center">
                <div className="text-8xl animate-pulse-glow animation-delay-4000">✅</div>
              </div>
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <SectionTag>Approval Flows</SectionTag>
              <h2 className="text-4xl font-display font-medium text-charcoal mb-6">
                Your time. Your rules.
              </h2>
              <p className="text-lg text-dune mb-8">
                Guests can request meetings, but you decide. One-click approve or reject. No surprises on your calendar.
              </p>
              <ul className="space-y-4 text-dune text-left inline-block">
                <CheckItem>Pending → Approved flow</CheckItem>
                <CheckItem>One-click decisions</CheckItem>
                <CheckItem>Automatic notifications</CheckItem>
                <CheckItem>Reschedule requests</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GAMIFICATION TEASER ========== */}
      <section className="py-24 bg-gradient-to-br from-maroon to-maroon-dark text-white relative overflow-hidden">
        {/* Floating badges */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-6xl animate-float opacity-20">🏆</div>
          <div className="absolute top-1/3 right-1/4 text-6xl animate-float animation-delay-2000 opacity-20">🔥</div>
          <div className="absolute bottom-1/4 left-1/3 text-6xl animate-float animation-delay-4000 opacity-20">⭐</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag dark>Stay Motivated</SectionTag>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Earn achievements. Level up.
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Regent rewards consistency. Earn XP for bookings, unlock achievements for streaks, and climb the ranks.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            {['🏆', '🔥', '🌙', '⭐', '💎'].map((badge, i) => (
              <div 
                key={i} 
                className="text-5xl hover:scale-125 transition-transform cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {badge}
              </div>
            ))}
          </div>

          <a href="/features#gamification" className="btn-gold">
            Explore Achievements
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="py-24 bg-cream" id="pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Pricing</SectionTag>
          <h2 className="section-title">
            Start free. Scale when ready.
          </h2>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-white rounded-full border border-dune/20 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-maroon text-white' 
                    : 'text-charcoal hover:text-maroon'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'annual' 
                    ? 'bg-maroon text-white' 
                    : 'text-charcoal hover:text-maroon'
                }`}
              >
                Annual <span className="text-palm text-xs">Save 17%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
            {/* Free Tier */}
            <div className="card card-hover text-left h-full flex flex-col">
              <h3 className="font-semibold text-charcoal mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl lg:text-4xl font-display font-medium text-charcoal">$0</span>
                <span className="text-dune text-sm">forever</span>
              </div>
              <ul className="space-y-2.5 text-dune text-sm mb-6 flex-grow">
                <CheckItem>1 user</CheckItem>
                <CheckItem>1 booking link</CheckItem>
                <CheckItem>20 meetings/month</CheckItem>
                <CheckItem>Basic scheduling</CheckItem>
                <CheckItem>Email confirmations</CheckItem>
              </ul>
              <a href="https://appregent.netlify.app/register" className="btn-secondary w-full justify-center mt-auto">
                Get Started
              </a>
            </div>

            {/* Pro Tier */}
            <div className="card card-hover card-premium text-left border-gold/50 md:scale-105 shadow-2xl relative h-full flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                POPULAR
              </div>
              <h3 className="font-semibold text-charcoal mb-2 mt-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl lg:text-4xl font-display font-medium text-charcoal">
                  ${billingCycle === 'annual' ? '10' : '12'}
                </span>
                <span className="text-dune text-sm">/month</span>
              </div>
              <ul className="space-y-2.5 text-dune text-sm mb-6 flex-grow">
                <CheckItem>Everything in Free</CheckItem>
                <CheckItem>5 booking links</CheckItem>
                <CheckItem>Unlimited meetings</CheckItem>
                <CheckItem>Calendar sync</CheckItem>
                <CheckItem>Email reminders</CheckItem>
                <CheckItem>Remove branding</CheckItem>
                <CheckItem>Integrations</CheckItem>
              </ul>
              <a href="https://appregent.netlify.app/register?plan=pro" className="btn-primary w-full justify-center mt-auto">
                Upgrade to Pro
              </a>
            </div>

            {/* Business Tier */}
            <div className="card card-hover text-left h-full flex flex-col">
              <h3 className="font-semibold text-charcoal mb-2">Business</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl lg:text-4xl font-display font-medium text-charcoal">
                  ${billingCycle === 'annual' ? '24' : '29'}
                </span>
                <span className="text-dune text-sm">/seat/mo</span>
              </div>
              <ul className="space-y-2.5 text-dune text-sm mb-6 flex-grow">
                <CheckItem>Everything in Pro</CheckItem>
                <CheckItem>Unlimited users</CheckItem>
                <CheckItem>Unlimited links</CheckItem>
                <CheckItem>Team scheduling</CheckItem>
                <CheckItem>Round-robin</CheckItem>
                <CheckItem>Analytics dashboard</CheckItem>
                <CheckItem>Priority support</CheckItem>
              </ul>
              <a href="/contact" className="btn-secondary w-full justify-center mt-auto">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-24 bg-charcoal section-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag dark>Testimonials</SectionTag>
          <h2 className="section-title">
            Loved by teams worldwide.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                quote: "Regent transformed how our EA team manages executive calendars. The delegation features are unmatched.",
                name: "Sarah Chen",
                title: "Head of Operations, TechCorp",
                avatar: "SC"
              },
              {
                quote: "Finally, a scheduling tool that understands approval workflows. No more surprise meetings on my calendar.",
                name: "Michael Okonkwo",
                title: "VP Engineering, StartupXYZ",
                avatar: "MO"
              },
              {
                quote: "The bilingual support is perfect for our Middle East offices. RTL layout works flawlessly.",
                name: "أحمد الراشد",
                title: "Regional Director, Gulf Industries",
                avatar: "أر"
              }
            ].map((testimonial, i) => (
              <div key={i} className="card bg-white/5 border-white/10 text-left">
                <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-maroon rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>FAQ</SectionTag>
          <h2 className="section-title">
            Questions? Answered.
          </h2>

          <div className="max-w-3xl mx-auto mt-16 text-left space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="card cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-charcoal pr-4">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-maroon transition-transform duration-300 flex-shrink-0 ${openFAQ === i ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFAQ === i && (
                  <p className="mt-4 text-dune leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-32 bg-gradient-to-br from-maroon to-maroon-dark text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-medium leading-tight mb-6">
            Your time starts now.
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who schedule smarter. Start free, upgrade when you're ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://appregent.netlify.app/register" className="btn-gold text-lg">
              Get Started Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/contact" className="btn-secondary text-lg !border-white/30 !text-white hover:!bg-white/10">
              Talk to Sales
            </a>
          </div>

          <p className="text-sm text-white/50">
            No credit card required. Free tier available forever.
          </p>
        </div>
      </section>
    </div>
  );
}
