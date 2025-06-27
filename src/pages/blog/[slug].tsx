import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { remark } from 'remark';
import html from 'remark-html';

// index.tsx dosyasındaki mock verinin aynısı. 
// Normalde bu veriler bir CMS'ten veya markdown dosyalarından gelir.
const mockPosts = [
  {
    slug: 'prompt-engineering-ile-cv-sitesi',
    title: 'Kod Yazmadan Geliştirici Olmak: Sıfırdan CV Sitemin Hikayesi',
    date: '2025-06-26',
    excerpt: 'Bu yazıda, hiçbir programlama dili bilmeden nasıl bir online CV sitesi geliştirdiğimi, tüm süreci yapay zekâ ile nasıl yönettiğimi ve neler öğrendiğimi paylaşıyorum.',
    content: `
## Merhaba!

Ben Eren, bu yazımda size yazılıma nasıl başladığımı ve kendi kişisel web sitemi **hiçbir kodlama dili bilmeden** nasıl geliştirdiğimi anlatmak istiyorum.

---

## Nerden Başladım?

Her şey sadece bir fikirle başladı. Yazılım öğrenmek istiyordum ama klasik yollar yerine farklı bir yaklaşım denemek istedim:  
**Prompt engineering.**

Yani kodu ben yazmıyorum — ne yapmam gerektiğini çok net tanımlayarak yapay zekâya yazdırıyorum. Bu yaklaşım bana inanılmaz hız ve esneklik sağladı.

---

## Bu Site Nasıl Yapıldı?

- **Next.js** ile oluşturuldu  
- Tasarım için **Tailwind CSS** kullanıldı  
- Tüm kodları, sayfaları, bileşenleri ve veri bağlantılarını sadece **yönlendirme ve kontrol** ederek oluşturdum

---

## Ne Öğrendim?

- Prompt yazmanın aslında bir nevi "dijital mühendislik" olduğunu  
- Tasarım, veri yönetimi ve kullanıcı deneyimini anlamanın kod bilmekten bile önemli olduğunu

---

## Gelecek Planlarım

Bu site sadece bir başlangıç. Şimdi sırada:
- Kullanıcı katkılı forum sitesi
- Gelişmiş panel sistemleri
- Daha fazla otomasyon ve AI entegrasyonu

---

**Eğer sen de yazılıma farklı bir yerden başlamak istiyorsan, prompt engineering müthiş bir yol olabilir.**

Kodu yazmasan bile geliştirici olabilirsin.  
Ve ben bunun en güncel örneğiyim.
`
  },
  {
    slug: 'auto-summarizer-akilli-ozetler',
    title: '🧠 AutoSummarizer: Ders Notlarından Yapay Zekayla Akıllı Özetler',
    date: '2025-06-27',
    excerpt: 'Uzun metinleri özetlemeye saatler harcamaktan sıkıldın mı? AutoSummarizer, öğrencilerin kendi yazdığı ya da öğretmenden aldığı notları yapay zeka ile analiz ederek özetler çıkarır.',
    content: `
### Notlardan ders çalışmak sıkıcı mı geliyor? Uzun metinleri özetlemeye saatler harcamaktan sıkıldın mı? O halde AutoSummarizer tam sana göre.

---

### 🎯 Projenin Amacı
AutoSummarizer, öğrencilerin kendi yazdığı ya da öğretmenden aldığı notları yapay zeka ile analiz ederek özetler çıkarır. Böylece tekrar süresini kısaltır, anlamayı kolaylaştırır ve verimli çalışmayı destekler.

---

### 🚀 Kullandığım Teknolojiler
- **Next.js & TypeScript**
- **Tailwind CSS** ile modern arayüz
- **OpenAI API** ile metin işleme
- **Vercel** ile canlı deployment

---

### 🔍 Öne Çıkan Özellikler
- 📄 Uzun metinlerden paragraflara göre veya başlıklara göre özet çıkarma
- 📌 Anahtar kelimeleri otomatik olarak tespit etme
- 💬 Kullanıcının yazdığı özeti analiz edip yapay zeka değerlendirmesi sunma
- ❓ Özetten otomatik olarak soru-cevap oluşturma (quiz formatında)
- 🧠 "Anlamını test et" özelliğiyle kullanıcıya konuyla ilgili kısa testler sunma
- 🔄 Kullanıcı özeti – AI özeti – orijinal metin karşılaştırması

---

### 💡 Neden Bu Proje?
Yazılım yolculuğuma yalnızca prompt engineering ile başladım. Kod bilmeden de güçlü projeler üretilebileceğini göstermek istedim. AutoSummarizer bu sürecin bir kanıtı oldu.

Bu süreçte bir şey daha fark ettim:
AI araçlarını kullanmak harika olsa da yazılımın temelini öğrenmek istiyorum. Bu yüzden, aldığım tavsiyeler doğrultusunda Python öğrenmeye karar verdim. Böylece daha fazla projeyi hem AI ile hem de kendi yazdığım kodlarla geliştirebileceğim.

---

### 🌐 Canlı Demo
Projeyi canlı görmek için:
[🔗 AutoSummarizer Web Sitesi](https://auto-summarizer.vercel.app)
`
  }
];

interface Post {
  slug: string;
  title: string;
  date: string;
  contentHtml: string;
  excerpt: string;
}

interface PostPageProps {
  post: Post;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PostPage = ({ post }: PostPageProps) => {
  if (!post) {
    return <p>Yazı bulunamadı.</p>;
  }

  return (
    <>
      <Head>
        <title>{`${post.title} - Eren Özaltın`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Yayınlanma Tarihi: {new Date(post.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockPosts.map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // true veya 'blocking' olarak ayarlanabilir
  };
};

export const getStaticProps: GetStaticProps<PostPageProps, IParams> = async (context) => {
  const { slug } = context.params!;
  const postData = mockPosts.find(p => p.slug === slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();

  const post = {
    slug: postData.slug,
    title: postData.title,
    date: postData.date,
    contentHtml,
    excerpt: postData.excerpt,
  };

  return {
    props: {
      post,
    },
  };
};

export default PostPage; 