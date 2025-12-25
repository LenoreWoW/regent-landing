'use client';

import { useState } from 'react';

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 text-maroon text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
    {children}
  </span>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-display font-medium text-charcoal mb-4">
            Message received!
          </h1>
          <p className="text-dune mb-8">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Contact</SectionTag>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-charcoal mb-6">
            Let's talk
          </h1>
          <p className="text-xl text-dune max-w-2xl mx-auto">
            Have a question about Regent? Want to discuss enterprise pricing? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-medium text-charcoal mb-6">
                Get in touch
              </h2>
              <p className="text-dune mb-8">
                We typically respond within a few hours during business days.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                    <a href="mailto:hello@regent.co" className="text-maroon hover:underline">
                      hello@regent.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Live Chat</h4>
                    <p className="text-dune text-sm">Available Mon–Fri, 9am–6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🐦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Twitter</h4>
                    <a href="https://twitter.com/regentco" className="text-maroon hover:underline">
                      @regentco
                    </a>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-dune/20" />

              <div className="p-6 bg-white rounded-xl border border-dune/20">
                <h4 className="font-semibold text-charcoal mb-2">Enterprise Sales</h4>
                <p className="text-dune text-sm mb-4">
                  Need custom solutions, SSO, or dedicated support? Let's discuss your requirements.
                </p>
                <a href="mailto:enterprise@regent.co" className="text-maroon font-medium text-sm hover:underline">
                  enterprise@regent.co →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card">
                <h2 className="text-2xl font-display font-medium text-charcoal mb-6">
                  Send a message
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-dune/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-dune/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Company name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-dune/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Team size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-3 border border-dune/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all bg-white"
                    >
                      <option value="">Select size</option>
                      <option value="1">Just me</option>
                      <option value="2-10">2–10</option>
                      <option value="11-50">11–50</option>
                      <option value="51-200">51–200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-dune/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all resize-none"
                    placeholder="Tell us about your scheduling needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-medium text-charcoal mb-8">
            Quick answers
          </h2>
          <div className="grid gap-4 text-left">
            {[
              { q: 'How quickly do you respond?', a: 'We typically respond within 2 hours during business hours (Mon–Fri, 9am–6pm EST).' },
              { q: 'Do you offer phone support?', a: 'Phone support is available for Business and Enterprise customers. Contact us to schedule a call.' },
              { q: 'Can I schedule a demo?', a: 'Yes! Visit our Demo page or mention it in your message and we\'ll set up a personalized walkthrough.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-cream rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">{item.q}</h4>
                <p className="text-dune text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

