'use client';

import React, { useState, useEffect } from 'react';
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// Wrapper that provides Clerk
export function ClerkWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#8A1538',
          colorText: '#1a1a1a',
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}

// Auth-aware navigation buttons with proper hydration
export function AuthButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show fallback during SSR and initial hydration
  if (!mounted) {
    return (
      <div className="flex items-center gap-4">
        <a 
          href="https://appregent.netlify.app/login" 
          className="text-charcoal/70 hover:text-maroon transition-colors font-medium hidden sm:block"
        >
          Log in
        </a>
        <a 
          href="https://appregent.netlify.app/register" 
          className="btn-primary text-sm !py-3 !px-6"
        >
          Get Started
          <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-charcoal/70 hover:text-maroon transition-colors font-medium hidden sm:block cursor-pointer">
            Log in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
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
    </div>
  );
}
