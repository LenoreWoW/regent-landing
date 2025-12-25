'use client';

import { useState, useEffect } from 'react';
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function NavigationContent() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div 
        className={`absolute inset-0 bg-cream/80 backdrop-blur-lg border-b border-dune/10 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`} 
      />
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
            <a href="/features" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">
              Features
            </a>
            <a href="/pricing" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">
              Pricing
            </a>
            <a href="/demo" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">
              Demo
            </a>
            <a href="/docs" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">
              Docs
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {!mounted ? (
              // SSR fallback
              <>
                <span className="text-charcoal/70 font-medium hidden sm:block">Log in</span>
                <span className="btn-primary text-sm !py-3 !px-6">
                  Get Started
                  <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </>
            ) : (
              // Client-side Clerk buttons
              <>
                <SignedOut>
                  <SignInButton 
                    mode="modal"
                    forceRedirectUrl="https://appregent.netlify.app"
                  >
                    <button className="text-charcoal/70 hover:text-maroon transition-colors font-medium hidden sm:block cursor-pointer">
                      Log in
                    </button>
                  </SignInButton>
                  <SignUpButton 
                    mode="modal"
                    forceRedirectUrl="https://appregent.netlify.app"
                  >
                    <button className="btn-primary text-sm !py-3 !px-6 cursor-pointer">
                      Get Started
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <a 
                    href="https://appregent.netlify.app" 
                    className="btn-primary text-sm !py-3 !px-6"
                  >
                    Go to Dashboard
                    <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: 'w-10 h-10 border-2 border-maroon/20',
                      }
                    }}
                  />
                </SignedIn>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Navigation() {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#8A1538',
          colorText: '#1a1a1a',
          fontFamily: 'Inter, sans-serif',
        },
        elements: {
          formButtonPrimary: 'bg-[#8A1538] hover:bg-[#6d1029]',
          socialButtonsBlockButton: 'border-gray-200 hover:border-[#8A1538]/30',
          card: 'shadow-xl',
        }
      }}
    >
      <NavigationContent />
    </ClerkProvider>
  );
}

