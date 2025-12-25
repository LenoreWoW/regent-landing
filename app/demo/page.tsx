'use client';

import { useState } from 'react';

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 text-maroon text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
    {children}
  </span>
);

export default function DemoPage() {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'manager' | 'subordinate' | 'guest'>('manager');
  const [activeNav, setActiveNav] = useState('dashboard');

  const roles = {
    admin: {
      title: 'Admin',
      icon: '👑',
      description: 'Full system control — manage users, teams, and settings.',
      color: '#8A1538',
    },
    manager: {
      title: 'Manager',
      icon: '🛡️',
      description: 'Control your calendar and delegate to your team.',
      color: '#d4af37',
    },
    subordinate: {
      title: 'Subordinate',
      icon: '👥',
      description: 'Book meetings on behalf of your assigned manager.',
      color: '#129b82',
    },
    guest: {
      title: 'Guest',
      icon: '👤',
      description: 'Request meetings and track your booking status.',
      color: '#a89f91',
    },
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
    { id: 'meetings', label: 'My Meetings', icon: '📋' },
    { id: 'booking', label: 'Booking Links', icon: '🔗' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const meetings = [
    { id: 1, title: 'Strategy Planning Session', attendee: 'Ahmed Al-Rashid', date: '2025-12-26', time: '10:00 AM', status: 'approved', duration: 60 },
    { id: 2, title: 'Client Onboarding Call', attendee: 'Sarah Chen', date: '2025-12-26', time: '2:00 PM', status: 'pending', duration: 45 },
    { id: 3, title: 'Team Weekly Sync', attendee: 'Michael Okonkwo', date: '2025-12-27', time: '11:00 AM', status: 'approved', duration: 30 },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    if (hour < 21) return 'Good evening';
    return 'Working late?';
  };

  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTag>Interactive Demo</SectionTag>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-charcoal mb-6">
            Experience Regent
          </h1>
          <p className="text-xl text-dune max-w-2xl mx-auto">
            Explore the interface for each role. This is exactly how the app looks and feels.
          </p>
        </div>
      </section>

      {/* Role Selector */}
      <section className="pb-8 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(roles).map(([key, role]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key as typeof selectedRole)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedRole === key 
                    ? 'text-white shadow-lg scale-105' 
                    : 'bg-white text-charcoal border border-dune/20 hover:border-maroon/50'
                }`}
                style={{
                  backgroundColor: selectedRole === key ? role.color : undefined
                }}
              >
                <span className="text-lg">{role.icon}</span>
                {role.title} View
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Interface - Actual App Replica */}
      <section className="py-8 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-dune/10">
            {/* Browser Chrome */}
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <div className="flex-1 bg-white/10 rounded-lg px-4 py-1.5 text-white/60 text-sm font-mono flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                appregent.netlify.app
              </div>
            </div>

            {/* App Interface */}
            <div className="flex min-h-[700px]">
              {/* Sidebar - Matches actual app */}
              <div className="w-64 bg-[#f9f9f9] border-r border-gray-200 p-4 hidden lg:flex flex-col">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8 px-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8A1538] to-[#5f0e26] rounded-xl flex items-center justify-center shadow-lg shadow-maroon/20">
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>R</span>
                  </div>
                  <span className="font-medium text-xl text-[#000000]" style={{ fontFamily: 'Outfit, sans-serif' }}>Regent</span>
                </div>

                {/* Navigation */}
                <nav className="space-y-1 flex-1">
                  {navItems.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => setActiveNav(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeNav === item.id 
                          ? 'bg-[#8A1538]/10 text-[#8A1538]' 
                          : 'text-[#a29475] hover:bg-gray-100 hover:text-[#000000]'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* User Profile */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: roles[selectedRole].color }}
                    >
                      {selectedRole === 'admin' ? 'A' : selectedRole === 'manager' ? 'M' : selectedRole === 'subordinate' ? 'S' : 'G'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#000000] truncate">Demo User</p>
                      <p className="text-xs text-[#a29475] capitalize">{selectedRole}</p>
                    </div>
                    <svg className="w-4 h-4 text-[#a29475]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Main Content - Actual Dashboard Replica */}
              <div className="flex-1 p-6 lg:p-10 overflow-auto bg-white">
                {/* Editorial Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-[#a29475]/50"></span>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a29475]">{todayStr}</p>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-medium text-[#000000] leading-[0.95] tracking-tight mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {getGreeting()}, <br />
                    <span className="text-[#a29475] opacity-80">Demo.</span>
                  </h1>
                </div>

                {/* Quick Actions - Horizontal scroll on mobile */}
                <div className="flex gap-3 mb-10 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
                  <button className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#8A1538] to-[#5f0e26] text-white rounded-xl shadow-lg shadow-[#8A1538]/20 hover:scale-[1.02] transition-transform">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-bold block">Quick Book</span>
                      <span className="text-[10px] text-white/70">Next available</span>
                    </div>
                  </button>

                  <button className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#8A1538]/30 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#8A1538]/10 text-[#8A1538] flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-bold text-[#000000] block">Book Meeting</span>
                      <span className="text-[10px] text-gray-500">Schedule new</span>
                    </div>
                  </button>

                  <button className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#8A1538]/30 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-bold text-[#000000] block">Share Link</span>
                      <span className="text-[10px] text-gray-500">Copy booking page</span>
                    </div>
                  </button>

                  {selectedRole !== 'guest' && (
                    <button className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-full bg-[#0d4261]/10 text-[#0d4261] flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-bold text-[#000000] block">Team</span>
                        <span className="text-[10px] text-gray-500">View peers</span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Stats + Next Meeting Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                  {/* Stats Column */}
                  <div className="flex lg:flex-col gap-4">
                    {/* Pending Card */}
                    <div className="flex-1 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#a29475]">Pending</span>
                        <span className="w-2 h-2 rounded-full bg-[#dd7877] animate-pulse"></span>
                      </div>
                      <div className="text-4xl font-light text-[#000000] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>2</div>
                      <div className="flex items-center gap-1.5 text-xs text-[#dd7877] font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Awaiting action</span>
                      </div>
                    </div>

                    {/* Approved Card */}
                    <div className="flex-1 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#a29475]">Approved</span>
                        <span className="w-2 h-2 rounded-full bg-[#129b82]"></span>
                      </div>
                      <div className="text-4xl font-light text-[#000000] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>5</div>
                      <div className="flex items-center gap-1.5 text-xs text-[#129b82] font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>Confirmed</span>
                      </div>
                    </div>
                  </div>

                  {/* Next Meeting Card */}
                  <div className="lg:col-span-2">
                    <div className="h-full min-h-[280px] rounded-2xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between bg-[#000000] text-white shadow-2xl">
                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      
                      <div className="relative z-10 flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A1538] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8A1538]"></span>
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80">Next Up</span>
                        </div>
                        <span className="text-2xl font-light opacity-80" style={{ fontFamily: 'Outfit, sans-serif' }}>10:00 AM</span>
                      </div>

                      <div className="relative z-10 mt-auto pt-12">
                        <h2 className="text-3xl lg:text-4xl font-medium mb-2 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          Strategy Planning Session
                        </h2>
                        <p className="text-white/60 text-sm font-mono uppercase tracking-widest mb-6 animate-pulse">
                          Starts in 2h 30m
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-t border-white/10 pt-6 gap-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src="https://ui-avatars.com/api/?name=Ahmed+Al-Rashid&background=8A1538&color=fff" 
                              className="w-10 h-10 rounded-full border border-white/20" 
                              alt="" 
                            />
                            <div>
                              <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest mb-0.5">Attendee</p>
                              <p className="text-sm font-medium">Ahmed Al-Rashid</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <button className="px-4 py-2 text-white border border-white/20 hover:bg-white/10 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors">
                              Details
                            </button>
                            <button className="px-4 py-2 bg-white text-[#000000] hover:bg-gray-100 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors">
                              Join Meeting
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-[#000000]" style={{ fontFamily: 'serif' }}>Recent Activity</h3>
                    <button className="text-xs font-bold text-[#a29475] hover:text-[#8A1538] uppercase tracking-wider transition-colors flex items-center gap-1">
                      View Log
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    {meetings.map((m) => (
                      <div key={m.id} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4 min-w-0 flex-1">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${m.status === 'approved' ? 'bg-[#129b82]' : 'bg-[#dd7877]'}`}></div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-[#000000] truncate">{m.title}</p>
                            <p className="text-xs text-gray-500 truncate">with {m.attendee}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="text-xs font-mono text-[#000000]">{m.time}</p>
                          <p className={`text-[10px] uppercase font-medium ${m.status === 'approved' ? 'text-[#129b82]' : 'text-[#dd7877]'}`}>{m.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Role Description */}
          <div className="mt-8 text-center">
            <p className="text-dune text-lg">
              <span className="text-2xl mr-2">{roles[selectedRole].icon}</span>
              <strong className="text-charcoal">{roles[selectedRole].title}:</strong> {roles[selectedRole].description}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
            Video Tour
          </span>
          <h2 className="text-4xl font-display font-medium mb-6">
            Watch a full walkthrough
          </h2>
          <p className="text-xl text-white/70 mb-10">
            3-minute overview of everything Regent can do for your team.
          </p>

          {/* Video placeholder */}
          <div className="aspect-video bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
            <button className="w-20 h-20 bg-maroon rounded-full flex items-center justify-center hover:bg-maroon-dark transition-colors group">
              <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mb-6">
            Ready to try it yourself?
          </h2>
          <p className="text-xl text-dune mb-10">
            Create a free account and start scheduling in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="btn-primary text-lg">
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/contact" className="btn-secondary text-lg">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
