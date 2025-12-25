import BlogContent from './BlogContent';

// Required for static export
export function generateStaticParams() {
  return [
    { slug: 'how-to-reduce-meeting-no-shows' },
    { slug: 'calendar-sync-best-practices' },
    { slug: 'meeting-automation-workflow' },
    { slug: 'delegation-guide-for-executives' },
    { slug: 'team-scheduling-best-practices' },
    { slug: 'approval-workflows-explained' },
  ];
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogContent slug={params.slug} />;
}
