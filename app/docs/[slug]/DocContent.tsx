'use client';

import Link from 'next/link';

// Documentation content database
const docsContent: Record<string, { title: string; category: string; content: string; readTime: string }> = {
  // Getting Started
  'quick-start': {
    title: 'Quick Start Guide',
    category: 'Getting Started',
    readTime: '5 min',
    content: `
      Welcome to Regent! This guide will help you get up and running in just a few minutes.

      ## Step 1: Create Your Account
      
      Visit the Regent app and click "Get Started" to create your free account. You can sign up with your email or use Google/Microsoft OAuth for faster setup.

      ## Step 2: Set Your Availability
      
      After signing in, head to Settings → Availability to configure when you're available for meetings. Set your working hours, timezone, and any recurring blocked times.

      ## Step 3: Create Your First Booking Link
      
      Navigate to Booking Links and click "Create New." Give your link a name (e.g., "30-Min Consultation"), set the duration, and customize any buffer times between meetings.

      ## Step 4: Share Your Link
      
      Copy your booking link and share it with clients, colleagues, or embed it on your website. When someone books, you'll receive an email notification.

      ## Step 5: Manage Your Meetings
      
      All incoming bookings appear in your Dashboard and Calendar views. From there, you can approve, reschedule, or cancel meetings with a single click.
    `
  },
  'create-account': {
    title: 'Creating Your Account',
    category: 'Getting Started',
    readTime: '2 min',
    content: `
      Creating a Regent account takes less than a minute.

      ## Sign Up Options

      - **Email & Password**: Enter your email and create a secure password
      - **Google OAuth**: Click "Continue with Google" for instant setup
      - **Microsoft OAuth**: Click "Continue with Microsoft" to use your work account

      ## After Signing Up

      You'll be taken through a brief onboarding flow to configure your basic settings like timezone and working hours.
    `
  },
  'profile-setup': {
    title: 'Setting Up Your Profile',
    category: 'Getting Started',
    readTime: '3 min',
    content: `
      A complete profile helps guests know who they're booking with.

      ## Profile Settings

      - **Display Name**: How your name appears on booking pages
      - **Avatar**: Upload a professional photo
      - **Bio**: Brief description (shown on public booking pages)
      - **Timezone**: Your local timezone for accurate scheduling
      - **Language**: Choose English or Arabic (with RTL support)

      ## Customization

      You can also customize your booking page URL (e.g., regent.co/your-name) and add social links.
    `
  },
  'first-booking-link': {
    title: 'Your First Booking Link',
    category: 'Getting Started',
    readTime: '4 min',
    content: `
      Booking links are the core of Regent. Here's how to create your first one.

      ## Creating a Link

      1. Go to Booking Links in the sidebar
      2. Click "Create New Link"
      3. Set the meeting duration (15, 30, 45, or 60 minutes)
      4. Add a title and description
      5. Configure buffer times if needed
      6. Save and copy your link

      ## Sharing Your Link

      Share your link via email, social media, or embed it on your website. Anyone with the link can view your availability and request a meeting.
    `
  },
  'booking-links': {
    title: 'Booking Links Overview',
    category: 'Scheduling',
    readTime: '6 min',
    content: `
      Booking links are shareable URLs that let others book time on your calendar.

      ## Link Types

      - **Standard**: One-on-one meetings with you
      - **Team Links**: Meetings with any available team member (Business plan)
      - **Round-Robin**: Automatically distribute bookings across your team

      ## Customization Options

      - Duration and buffer times
      - Maximum advance notice
      - Minimum scheduling notice
      - Custom questions for guests
      - Redirect after booking
    `
  },
  'availability': {
    title: 'Availability Settings',
    category: 'Scheduling',
    readTime: '4 min',
    content: `
      Control when people can book time with you.

      ## Setting Working Hours

      Define your available hours for each day of the week. You can have different hours for different days.

      ## Blocked Times

      Block specific times for focus work, lunch, or personal appointments.

      ## Overrides

      Create one-time availability overrides for holidays or special schedules.
    `
  },
  'buffers-limits': {
    title: 'Buffer Times & Limits',
    category: 'Scheduling',
    readTime: '3 min',
    content: `
      Buffers and limits help you maintain a healthy schedule.

      ## Buffer Times

      - **Before meetings**: Prep time before each meeting
      - **After meetings**: Recovery time after each meeting

      ## Booking Limits

      - Maximum meetings per day
      - Maximum meetings per week
      - Minimum notice required
      - Maximum advance booking window
    `
  },
  'meeting-types': {
    title: 'Meeting Types',
    category: 'Scheduling',
    readTime: '4 min',
    content: `
      Create different meeting types for different purposes.

      ## Common Types

      - Quick chat (15 min)
      - Standard meeting (30 min)
      - Deep dive (60 min)
      - Interview (45 min)

      ## Customization

      Each meeting type can have its own duration, questions, and confirmation message.
    `
  },
  'timezones': {
    title: 'Timezone Handling',
    category: 'Scheduling',
    readTime: '3 min',
    content: `
      Regent automatically handles timezone conversions.

      ## How It Works

      - Your availability is set in your local timezone
      - Guests see times in their local timezone
      - Calendar invites include timezone-aware times

      ## Troubleshooting

      Make sure your browser timezone matches your profile settings for accurate availability.
    `
  },
  'roles-overview': {
    title: 'Understanding Roles',
    category: 'Team & Delegation',
    readTime: '5 min',
    content: `
      Regent has four user roles, each with specific permissions.

      ## Role Hierarchy

      1. **Admin**: Full system access, user management
      2. **Manager**: Own calendar + team oversight
      3. **Subordinate**: Book on behalf of managers
      4. **Guest**: Request meetings only

      ## Permissions Matrix

      Each role inherits permissions from the roles below it, plus additional capabilities.
    `
  },
  'admin-role': {
    title: 'Admin Capabilities',
    category: 'Team & Delegation',
    readTime: '4 min',
    content: `
      Admins have full control over the Regent workspace.

      ## What Admins Can Do

      - Manage all users and roles
      - Create and configure teams
      - View activity logs
      - Access billing and subscription
      - Configure workspace settings
      - Delete any meeting or booking link
    `
  },
  'manager-role': {
    title: 'Manager Workflows',
    category: 'Team & Delegation',
    readTime: '5 min',
    content: `
      Managers control their own calendars and can delegate to subordinates.

      ## Key Capabilities

      - Full control over personal calendar
      - Approve/reject meeting requests
      - Assign subordinates to manage their calendar
      - View team availability
      - Create booking links
      - Access analytics
    `
  },
  'subordinate-role': {
    title: 'Subordinate Booking',
    category: 'Team & Delegation',
    readTime: '4 min',
    content: `
      Subordinates can manage calendars on behalf of their assigned managers.

      ## What Subordinates Can Do

      - View manager's calendar and availability
      - Book meetings on behalf of manager
      - Approve/reject requests (if delegated)
      - Handle rescheduling requests
      - Send notifications on manager's behalf
    `
  },
  'guest-role': {
    title: 'Guest Requests',
    category: 'Team & Delegation',
    readTime: '3 min',
    content: `
      Guests are external users who request meetings.

      ## Guest Experience

      - View available time slots
      - Submit meeting requests
      - Receive status updates
      - Cancel or reschedule their bookings
      - No access to internal calendars
    `
  },
  'team-setup': {
    title: 'Setting Up Teams',
    category: 'Team & Delegation',
    readTime: '4 min',
    content: `
      Teams help organize users and enable collaborative features.

      ## Creating a Team

      1. Go to Settings → Teams
      2. Click "Create Team"
      3. Add a name and description
      4. Invite members
      5. Assign roles within the team

      ## Team Features

      - Shared team booking links
      - Team availability view
      - Round-robin scheduling
      - Team analytics
    `
  },
  'approvals-overview': {
    title: 'How Approvals Work',
    category: 'Approval Workflows',
    readTime: '4 min',
    content: `
      Approval workflows ensure you control who gets on your calendar.

      ## The Flow

      1. Guest submits a meeting request
      2. Request appears in your Pending queue
      3. You review and approve/reject
      4. Guest receives notification
      5. Approved meetings appear on your calendar

      ## Automatic Approvals

      Optionally enable auto-approve for trusted contacts or specific booking links.
    `
  },
  'approve-meetings': {
    title: 'Approving Meetings',
    category: 'Approval Workflows',
    readTime: '2 min',
    content: `
      Approve meetings with a single click.

      ## From Dashboard

      Click the checkmark on any pending meeting to approve it instantly.

      ## From Email

      Click "Approve" in the notification email to approve without logging in.

      ## Bulk Actions

      Select multiple meetings and approve them all at once.
    `
  },
  'reject-meetings': {
    title: 'Rejecting with Reason',
    category: 'Approval Workflows',
    readTime: '2 min',
    content: `
      When rejecting a meeting, you can provide a reason.

      ## Rejection Options

      - Generic rejection (no reason)
      - Custom message to the guest
      - Suggest alternative times
      - Block future requests from this person

      ## Guest Notification

      The guest receives an email with your message and can submit a new request if appropriate.
    `
  },
  'auto-approve': {
    title: 'Auto-Approve Rules',
    category: 'Approval Workflows',
    readTime: '3 min',
    content: `
      Set up rules to automatically approve certain requests.

      ## Rule Types

      - **Trusted Contacts**: Auto-approve from specific emails
      - **Internal Users**: Auto-approve from workspace members
      - **Booking Link**: Enable auto-approve per booking link
      - **Time-based**: Auto-approve during certain hours

      ## Safety Limits

      Even with auto-approve, daily/weekly limits are respected.
    `
  },
  'google-calendar': {
    title: 'Google Calendar Sync',
    category: 'Integrations',
    readTime: '4 min',
    content: `
      Connect Google Calendar for full 2-way sync with Regent.

      ## Setup

      1. Go to Settings → Calendar Sync
      2. Click "Connect" next to Google Calendar
      3. Sign in with your Google account
      4. Grant calendar permissions
      5. Select your primary calendar

      ## What Syncs

      - **Regent → Google:** Approved meetings automatically appear in Google Calendar
      - **Google → Regent:** Your Google events show as busy times when scheduling
      - Changes sync automatically every 15 minutes
      - Manual sync available anytime with "Sync Now" button

      ## Features

      - Real-time busy time detection
      - Automatic event creation for approved meetings
      - Meeting updates sync both ways
      - Cancelled meetings removed from calendar
    `
  },
  'outlook': {
    title: 'Outlook/Office 365 Sync',
    category: 'Integrations',
    readTime: '4 min',
    content: `
      Connect Microsoft Outlook for full 2-way sync with Regent.

      ## Setup

      1. Go to Settings → Calendar Sync
      2. Click "Connect" next to Microsoft Outlook
      3. Sign in with your Microsoft account
      4. Grant calendar permissions
      5. Select your calendar

      ## What Syncs

      - **Regent → Outlook:** Approved meetings automatically appear in Outlook
      - **Outlook → Regent:** Your Outlook events show as busy times when scheduling
      - Changes sync automatically every 15 minutes
      - Manual sync available anytime with "Sync Now" button

      ## Features

      - Real-time busy time detection
      - Automatic event creation for approved meetings
      - Meeting updates sync both ways
      - Cancelled meetings removed from calendar
      - Microsoft Teams integration for video calls
    `
  },
  'zoom': {
    title: 'Zoom Integration',
    category: 'Integrations',
    readTime: '3 min',
    content: `
      Automatically create Zoom meetings for your bookings.

      ## Setup

      1. Go to Settings → Integrations
      2. Click "Connect Zoom"
      3. Authorize Regent in Zoom

      ## Usage

      When creating a booking link, select "Zoom" as the meeting format. Unique Zoom links are generated for each booking.
    `
  },
  'google-meet': {
    title: 'Google Meet',
    category: 'Integrations',
    readTime: '3 min',
    content: `
      Generate Google Meet links for virtual meetings.

      ## Requirement

      Google Calendar integration must be connected first.

      ## Setup

      When creating a booking link, select "Google Meet" as the format. Meet links are added automatically to calendar invites.
    `
  },
  'teams': {
    title: 'Microsoft Teams',
    category: 'Integrations',
    readTime: '3 min',
    content: `
      Create Teams meetings automatically.

      ## Requirement

      Outlook/Office 365 integration must be connected.

      ## Setup

      Select "Microsoft Teams" as your meeting format when creating booking links.
    `
  },
  'ics-exports': {
    title: 'ICS Exports',
    category: 'Integrations',
    readTime: '2 min',
    content: `
      Download calendar files for any calendar app.

      ## Single Event Export

      Click the calendar icon on any meeting to download its .ics file.

      ## Subscription Feed

      Get a subscription URL to add all your Regent meetings to any calendar app.
    `
  },
  'plans': {
    title: 'Plans & Pricing',
    category: 'Billing & Account',
    readTime: '3 min',
    content: `
      Regent offers three tiers to fit your needs.

      ## Free

      - 1 user
      - 1 booking link
      - 20 meetings/month
      - Basic scheduling

      ## Pro ($10-12/mo)

      - Everything in Free
      - 5 booking links
      - Unlimited meetings
      - Calendar sync
      - Remove branding

      ## Business ($24-29/seat/mo)

      - Everything in Pro
      - Unlimited users
      - Team scheduling
      - Analytics dashboard
    `
  },
  'upgrade': {
    title: 'Upgrading Your Plan',
    category: 'Billing & Account',
    readTime: '2 min',
    content: `
      Upgrade anytime to unlock more features.

      ## How to Upgrade

      1. Go to Settings → Billing
      2. Click "Upgrade"
      3. Select your new plan
      4. Enter payment details
      5. Enjoy your new features!

      Upgrades are prorated so you only pay for what you use.
    `
  },
  'payment': {
    title: 'Managing Payment',
    category: 'Billing & Account',
    readTime: '2 min',
    content: `
      Update your payment method anytime.

      ## Accepted Methods

      - Credit/debit cards (Visa, Mastercard, Amex)
      - Some regions support local payment methods

      ## Updating Card

      Go to Settings → Billing → Payment Method to update your card details.
    `
  },
  'team-billing': {
    title: 'Team Billing',
    category: 'Billing & Account',
    readTime: '3 min',
    content: `
      Business plan billing for teams.

      ## Per-Seat Pricing

      You're billed for each active user in your workspace.

      ## Adding/Removing Seats

      - New members are prorated to your billing cycle
      - Removed members free up seats immediately
    `
  },
  'cancellation': {
    title: 'Cancellation',
    category: 'Billing & Account',
    readTime: '2 min',
    content: `
      Cancel anytime, no questions asked.

      ## How to Cancel

      Go to Settings → Billing → Cancel Subscription.

      ## What Happens

      - Your plan downgrades to Free at cycle end
      - All data is retained
      - You can upgrade again anytime
    `
  },
};

interface DocContentProps {
  slug: string;
}

export default function DocContent({ slug }: DocContentProps) {
  const article = docsContent[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📄</div>
          <h1 className="text-4xl font-display font-medium text-charcoal mb-4">
            Article Not Found
          </h1>
          <p className="text-xl text-dune mb-8">
            We couldn&apos;t find the documentation article you&apos;re looking for.
          </p>
          <Link href="/docs" className="btn-primary">
            ← Back to Documentation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-dune/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link 
            href="/docs" 
            className="inline-flex items-center gap-2 text-maroon hover:underline text-sm font-medium mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Docs
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-dune bg-cream px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-dune">
              {article.readTime} read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-medium text-charcoal">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <article className="prose prose-lg prose-charcoal max-w-none">
            {article.content.split('\n').map((line, i) => {
              const trimmed = line.trim();
              
              if (!trimmed) return null;
              
              // H2 headings
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-display font-semibold text-charcoal mt-10 mb-4">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              
              // List items with bold
              if (trimmed.startsWith('- **')) {
                const match = trimmed.match(/- \*\*(.+?)\*\*: (.+)/);
                if (match) {
                  return (
                    <div key={i} className="flex gap-3 py-2">
                      <span className="text-palm flex-shrink-0">•</span>
                      <p className="text-dune m-0">
                        <strong className="text-charcoal">{match[1]}:</strong> {match[2]}
                      </p>
                    </div>
                  );
                }
                const simpleMatch = trimmed.match(/- \*\*(.+?)\*\*/);
                if (simpleMatch) {
                  return (
                    <div key={i} className="flex gap-3 py-2">
                      <span className="text-palm flex-shrink-0">•</span>
                      <p className="text-charcoal font-medium m-0">{simpleMatch[1]}</p>
                    </div>
                  );
                }
              }
              
              if (trimmed.startsWith('- ')) {
                return (
                  <div key={i} className="flex gap-3 py-1">
                    <span className="text-palm flex-shrink-0">•</span>
                    <p className="text-dune m-0">{trimmed.replace('- ', '')}</p>
                  </div>
                );
              }
              
              // Numbered list items
              if (/^\d+\./.test(trimmed)) {
                const num = trimmed.match(/^(\d+)\./)?.[1];
                const text = trimmed.replace(/^\d+\.\s*/, '');
                return (
                  <div key={i} className="flex gap-3 py-2">
                    <span className="w-6 h-6 rounded-full bg-maroon/10 text-maroon flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {num}
                    </span>
                    <p className="text-dune m-0">{text}</p>
                  </div>
                );
              }
              
              // Regular paragraph
              return (
                <p key={i} className="text-dune leading-relaxed my-4">
                  {trimmed}
                </p>
              );
            })}
          </article>
          
          {/* Feedback */}
          <div className="mt-16 pt-8 border-t border-dune/20">
            <p className="text-dune text-sm mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-palm/10 text-palm rounded-lg hover:bg-palm/20 transition-colors text-sm font-medium">
                👍 Yes
              </button>
              <button className="px-4 py-2 bg-salmon/10 text-salmon rounded-lg hover:bg-salmon/20 transition-colors text-sm font-medium">
                👎 No
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white border-t border-dune/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h3 className="text-xl font-display font-semibold text-charcoal mb-6">Related Articles</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(docsContent)
              .filter(([key, doc]) => doc.category === article.category && key !== slug)
              .slice(0, 4)
              .map(([key, doc]) => (
                <Link 
                  key={key}
                  href={`/docs/${key}`}
                  className="p-4 bg-cream rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-maroon/20"
                >
                  <h4 className="font-medium text-charcoal mb-1">{doc.title}</h4>
                  <p className="text-sm text-dune">{doc.readTime} read</p>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

