'use client';

import { useState } from 'react';

const APP_URL = 'https://appregent.netlify.app';

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 text-maroon text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
    {children}
  </span>
);

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3 text-sm">
    <svg className="w-5 h-5 text-palm flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>{children}</span>
  </li>
);

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for individuals getting started',
      price: { monthly: 0, annual: 0 },
      tagline: 'forever',
      features: ['1 user', '1 booking link', '20 meetings per month', 'Basic scheduling', 'Email confirmations', 'Timezone detection', 'Regent branding'],
      cta: 'Get Started Free',
      href: `${APP_URL}/register`,
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'For professionals who need more power',
      price: { monthly: 12, annual: 10 },
      tagline: '/month',
      features: ['Everything in Free, plus:', '5 booking links', 'Unlimited meetings', 'Google & Outlook sync', 'Email reminders', 'Remove Regent branding', 'Video conferencing integrations', 'Custom availability', 'Priority email support'],
      cta: 'Upgrade to Pro',
      href: `${APP_URL}/register?plan=pro`,
      highlighted: true,
    },
    {
      name: 'Business',
      description: 'For teams that need delegation & control',
      price: { monthly: 29, annual: 24 },
      tagline: '/seat/month',
      features: ['Everything in Pro, plus:', 'Unlimited users', 'Unlimited booking links', 'Team delegation', 'Role-based access (4 roles)', 'Approval workflows', 'Round-robin booking', 'Team analytics', 'Activity logs', 'Priority support'],
      cta: 'Contact Sales',
      href: '/contact',
      highlighted: false,
    },
  ];

  const faqs = [
    { question: 'Can I try Pro or Business features for free?', answer: 'Yes! Start with our Free tier and request a 14-day Pro or Business trial anytime from your dashboard. No credit card required.' },
    { question: 'How does per-seat pricing work?', answer: 'Business plan is charged per active seat per month. You only pay for users who are actively scheduling. Team members can be added or removed anytime.' },
    { question: 'What happens when I hit my meeting limit?', answer: 'On the Free plan, once you hit 20 meetings/month, you can upgrade to Pro for unlimited meetings or wait until the next month resets.' },
    { question: 'Can I downgrade my plan?', answer: 'Yes, you can downgrade anytime. Your plan will switch at the end of your current billing period. No refunds for partial periods.' },
    { question: 'Do you offer discounts for nonprofits?', answer: 'Yes! We offer 50% off for registered nonprofits and educational institutions. Contact us with proof of status to apply.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, Mastercard, Amex) via Stripe. Business plans can also pay via invoice.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Pricing</SectionTag>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-charcoal mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-dune max-w-2xl mx-auto mb-10">Start free, upgrade when you need more. No hidden fees, no surprises.</p>

          <div className="inline-flex p-1 bg-white rounded-full border border-dune/20 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-maroon text-white' : 'text-charcoal hover:text-maroon'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-maroon text-white' : 'text-charcoal hover:text-maroon'}`}
            >
              Annual <span className="text-palm text-xs ml-1">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`card text-left relative ${plan.highlighted ? 'card-premium border-gold/50 scale-105 shadow-2xl' : 'card-hover'}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-semibold px-4 py-1 rounded-full">MOST POPULAR</div>
                )}

                <h3 className="font-semibold text-charcoal text-lg">{plan.name}</h3>
                <p className="text-dune text-sm mb-4">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-display font-medium text-charcoal">${plan.price[billingCycle]}</span>
                  <span className="text-dune">{plan.tagline}</span>
                </div>

                <ul className="space-y-3 text-dune mb-8">
                  {plan.features.map((feature, i) => (
                    <CheckItem key={i}>{feature}</CheckItem>
                  ))}
                </ul>

                <a href={plan.href} className={`w-full justify-center ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold tracking-wider uppercase rounded-full mb-6">Enterprise</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Need more?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Custom solutions for large organizations with advanced security, compliance, and integration needs.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: '🔒', feature: 'SSO / SAML' },
              { icon: '🏢', feature: 'Custom contracts' },
              { icon: '📊', feature: 'Advanced analytics' },
              { icon: '🛡️', feature: 'SLA guarantees' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white font-medium">{item.feature}</span>
              </div>
            ))}
          </div>

          <a href="/contact" className="btn-gold text-lg">
            Contact Enterprise Sales
            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTag>FAQ</SectionTag>
            <h2 className="text-4xl font-display font-medium text-charcoal">Billing questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-charcoal pr-4">{faq.question}</h3>
                  <svg className={`w-5 h-5 text-maroon transition-transform duration-300 flex-shrink-0 ${openFAQ === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFAQ === i && <p className="mt-4 text-dune leading-relaxed">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-6">Ready to get started?</h2>
          <p className="text-xl text-dune mb-10">Start free today. No credit card required.</p>
          <a href={`${APP_URL}/register`} className="btn-primary text-lg">
            Create Free Account
            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
