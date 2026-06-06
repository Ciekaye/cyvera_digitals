import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPage from '@/pageComponents/BlogPostPage';
import { getPostBySlug, getSortedPosts, posts } from '@/data/blog';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found | Cyvera Digitals' };
  return {
    title: `${post.title} | Cyvera Digitals`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.image }],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return <BlogPostPage post={post} related={related} />;
}
