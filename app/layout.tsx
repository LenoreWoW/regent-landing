import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Regent — Premium Scheduling for Teams & Individuals',
  description: 'The only scheduling platform built for delegation. Smart conflict detection, role-based access, and approval workflows. Start free.',
  keywords: ['scheduling', 'meetings', 'calendar', 'booking', 'appointments', 'delegation', 'team scheduling'],
  openGraph: {
    title: 'Regent — Premium Scheduling for Teams & Individuals',
    description: 'The only scheduling platform built for delegation. Smart conflict detection, role-based access, and approval workflows.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Regent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regent — Schedule on Your Terms',
    description: 'The only scheduling platform built for delegation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll', () => {
              const navBg = document.getElementById('nav-bg');
              if (navBg) {
                navBg.style.opacity = window.scrollY > 50 ? '1' : '0';
              }
            });
          `
        }} />
      </head>
      <body className="bg-cream">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
          <div className="absolute inset-0 bg-cream/80 backdrop-blur-lg border-b border-dune/10 opacity-0 transition-opacity duration-300" id="nav-bg" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-maroon rounded-xl flex items-center justify-center shadow-lg shadow-maroon/20 group-hover:scale-105 transition-transform">
                  <span className="text-white font-display font-bold text-xl">R</span>
                </div>
                <span className="font-display font-medium text-2xl text-charcoal">Regent</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-10">
                <a href="/features" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">Features</a>
                <a href="/pricing" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">Pricing</a>
                <a href="/demo" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">Demo</a>
                <a href="/docs" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">Docs</a>
              </div>

              {/* Auth Buttons - Simple links to main app */}
              <div className="flex items-center gap-4">
                <a href="https://appregent.netlify.app/login" className="text-charcoal/70 hover:text-maroon transition-colors font-medium hidden sm:block">
                  Log in
                </a>
                <a href="https://appregent.netlify.app/register" className="btn-primary text-sm !py-3 !px-6">
                  Get Started
                  <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-charcoal text-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <a href="/" className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-maroon rounded-xl flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">R</span>
                  </div>
                  <span className="font-display font-medium text-2xl text-white">Regent</span>
                </a>
                <p className="text-white/50 text-sm">Schedule on your terms.</p>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Product</h4>
                <ul className="space-y-3">
                  <li><a href="/features" className="text-white/70 hover:text-gold transition-colors">Features</a></li>
                  <li><a href="/pricing" className="text-white/70 hover:text-gold transition-colors">Pricing</a></li>
                  <li><a href="/demo" className="text-white/70 hover:text-gold transition-colors">Demo</a></li>
                  <li><a href="/changelog" className="text-white/70 hover:text-gold transition-colors">Changelog</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-white/70 hover:text-gold transition-colors">About</a></li>
                  <li><a href="/blog" className="text-white/70 hover:text-gold transition-colors">Blog</a></li>
                  <li><a href="/careers" className="text-white/70 hover:text-gold transition-colors">Careers</a></li>
                  <li><a href="/contact" className="text-white/70 hover:text-gold transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="/docs" className="text-white/70 hover:text-gold transition-colors">Documentation</a></li>
                  <li><a href="/help" className="text-white/70 hover:text-gold transition-colors">Help Center</a></li>
                  <li><a href="/status" className="text-white/70 hover:text-gold transition-colors">Status</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="/privacy" className="text-white/70 hover:text-gold transition-colors">Privacy</a></li>
                  <li><a href="/terms" className="text-white/70 hover:text-gold transition-colors">Terms</a></li>
                  <li><a href="/cookies" className="text-white/70 hover:text-gold transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-6">
                  <a href="#" className="text-white/40 hover:text-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/40 hover:text-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-white/40 text-sm">© 2025 Regent. All rights reserved.</p>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm">Language:</span>
                  <select className="bg-transparent text-white/70 text-sm border border-white/20 rounded px-2 py-1">
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
