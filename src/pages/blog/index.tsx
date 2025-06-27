import Head from 'next/head';
import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const mockPosts = [
  {
    slug: 'prompt-engineering-ile-cv-sitesi',
    title: 'Kod Yazmadan Geliştirici Olmak: Sıfırdan CV Sitemin Hikayesi',
    date: '2025-06-26',
    excerpt: 'Bu yazıda, hiçbir programlama dili bilmeden nasıl bir online CV sitesi geliştirdiğimi, tüm süreci yapay zekâ ile nasıl yönettiğimi ve neler öğrendiğimi paylaşıyorum.',
  },
  {
    slug: 'auto-summarizer-akilli-ozetler',
    title: '🧠 AutoSummarizer: Ders Notlarından Yapay Zekayla Akıllı Özetler',
    date: '2025-06-27',
    excerpt: 'Uzun metinleri özetlemeye saatler harcamaktan sıkıldın mı? AutoSummarizer, öğrencilerin kendi yazdığı ya da öğretmenden aldığı notları yapay zeka ile analiz ederek özetler çıkarır.',
  },
  // Gelecekteki blog yazılarınızı buraya ekleyebilirsiniz
];

const BlogIndexPage = () => {
  const sortedPosts = [...mockPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Head>
        <title>Blog - Eren Özaltın</title>
        <meta name="description" content="Kariyer yolculuğumdan, öğrendiklerimden ve deneyimlerimden paylaşımlar." />
      </Head>
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-3">Blog</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Kariyer yolculuğumdan, öğrendiklerimden ve deneyimlerimden paylaşımlar.
          </p>
        </div>

        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogIndexPage; 