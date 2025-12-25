'use client';

import { useState, useEffect } from 'react';
import { ClerkProvider, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'gold';
  size?: 'default' | 'large';
  children: React.ReactNode;
  className?: string;
  plan?: string;
}

function CTAButtonContent({ variant = 'primary', size = 'default', children, className = '', plan }: CTAButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseStyles = size === 'large' ? 'text-lg' : '';
  
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gold: 'btn-gold',
  };

  const buttonClass = `${variantStyles[variant]} ${baseStyles} ${className}`;
  const redirectUrl = plan 
    ? `https://appregent.netlify.app?plan=${plan}` 
    : 'https://appregent.netlify.app';

  if (!mounted) {
    // SSR fallback - link to app
    return (
      <a href={redirectUrl} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <>
      <SignedOut>
        <SignUpButton 
          mode="modal"
          forceRedirectUrl={redirectUrl}
        >
          <button className={`${buttonClass} cursor-pointer`}>
            {children}
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <a href={redirectUrl} className={buttonClass}>
          {children}
        </a>
      </SignedIn>
    </>
  );
}

export function CTAButton(props: CTAButtonProps) {
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
      <CTAButtonContent {...props} />
    </ClerkProvider>
  );
}

// Pre-configured common buttons
export function GetStartedButton({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) {
  return (
    <CTAButton variant="primary" size={size} className={className}>
      Get Started Free
      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </CTAButton>
  );
}

export function UpgradeProButton({ className = '' }) {
  return (
    <CTAButton variant="primary" plan="pro" className={`w-full justify-center ${className}`}>
      Upgrade to Pro
    </CTAButton>
  );
}

export function GetStartedFreeButton({ className = '' }) {
  return (
    <CTAButton variant="secondary" className={`w-full justify-center ${className}`}>
      Get Started
    </CTAButton>
  );
}

export function GetStartedGoldButton({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) {
  return (
    <CTAButton variant="gold" size={size} className={className}>
      Get Started Free
      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </CTAButton>
  );
}

