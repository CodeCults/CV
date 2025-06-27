import Link from 'next/link';
import React from 'react';

type BlogPostCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const BlogPostCard = ({ slug, title, date, excerpt }: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block group bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {new Date(date).toLocaleDateString('tr-TR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {excerpt}
      </p>
      <span className="font-semibold text-blue-500 dark:text-blue-400 group-hover:underline">
        Devamını Oku →
      </span>
    </Link>
  );
};

export default BlogPostCard; 