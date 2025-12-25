import DocContent from './DocContent';

// Required for static export
export function generateStaticParams() {
  return [
    { slug: 'quick-start' },
    { slug: 'create-account' },
    { slug: 'profile-setup' },
    { slug: 'first-booking-link' },
    { slug: 'booking-links' },
    { slug: 'availability' },
    { slug: 'buffers-limits' },
    { slug: 'meeting-types' },
    { slug: 'timezones' },
    { slug: 'roles-overview' },
    { slug: 'admin-role' },
    { slug: 'manager-role' },
    { slug: 'subordinate-role' },
    { slug: 'guest-role' },
    { slug: 'team-setup' },
    { slug: 'approvals-overview' },
    { slug: 'approve-meetings' },
    { slug: 'reject-meetings' },
    { slug: 'auto-approve' },
    { slug: 'google-calendar' },
    { slug: 'outlook' },
    { slug: 'zoom' },
    { slug: 'google-meet' },
    { slug: 'teams' },
    { slug: 'ics-exports' },
    { slug: 'plans' },
    { slug: 'upgrade' },
    { slug: 'payment' },
    { slug: 'team-billing' },
    { slug: 'cancellation' },
  ];
}

interface DocPageProps {
  params: {
    slug: string;
  };
}

export default function DocPage({ params }: DocPageProps) {
  return <DocContent slug={params.slug} />;
}
