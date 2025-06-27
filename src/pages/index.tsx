import React from 'react'
import { FaBook, FaLanguage } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eren Özaltın - CV</title>
        <meta name="description" content="Eren Özaltın's personal CV page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg flex-shrink-0">
            <Image
              src="/profile-placeholder.jpg"
              alt="Eren Özaltın"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-2">
              Eren Özaltın
            </h1>
            <p className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-400">
              Web Geliştirici & Öğrenci
            </p>
            <p className="text-lg opacity-90 max-w-2xl">
              16 yaşında, teknoloji tutkunu bir lise öğrencisiyim. Kodlama ve robotik alanlarında kendimi sürekli geliştiriyor, yeni teknolojileri öğrenmekten ve projeler üretmekten büyük keyif alıyorum.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Hakkımda</h2>
          <p className="text-lg leading-relaxed">
            Hızlı öğrenme yeteneğim ve problem çözme becerilerimle dikkat çekiyorum. Kodlamaya olan tutkum ve sürekli kendimi geliştirme isteğim, her projede daha iyisini yapmam için beni motive ediyor.
          </p>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Eğitim</h2>
          <div className="flex items-center gap-4">
            <FaBook className="w-8 h-8 text-blue-500"/>
            <div>
              <a href="https://www.ademceylantk.com.tr" target="_blank" rel="noopener noreferrer" className="group w-fit">
                <h3 className="relative cursor-pointer text-xl font-semibold">
                  <span className="transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">Adem Ceylan Final Teknik Koleji</span>
                  <span className="absolute bottom-0 left-0 h-px w-full origin-center scale-x-0 transform bg-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </h3>
              </a>
              <p className="text-md text-gray-600 dark:text-gray-400">11. Sınıf | 2022 - Günümüz</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Yetenekler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <h3 className="text-xl font-semibold mb-2">Teknik</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>JavaScript & TypeScript</li>
                <li>React & Next.js</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <h3 className="text-xl font-semibold mb-2">Kişisel</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Problem Çözme</li>
                <li>Takım Çalışması</li>
                <li>Hızlı Öğrenme</li>
                <li>İletişim</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Projelerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <h3 className="text-xl font-semibold mb-2">Kişisel Web Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bu site, Next.js ve Tailwind CSS kullanılarak geliştirildi.
              </p>
              <div className="flex items-center gap-4">
                <SiNextdotjs className="w-6 h-6" title="Next.js" />
                <SiTailwindcss className="w-6 h-6" title="Tailwind CSS" />
                <SiTypescript className="w-6 h-6" title="TypeScript" />
              </div>
            </div>
            <a href="https://auto-summarizer.vercel.app" target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <h3 className="text-xl font-semibold mb-2">Auto-Summarizer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Groq ve LLaMA 3 ile geliştirilen yapay zeka destekli metin özetleme uygulaması.
              </p>
              <div className="flex items-center gap-4">
                <SiNextdotjs className="w-6 h-6" title="Next.js" />
                <SiTailwindcss className="w-6 h-6" title="Tailwind CSS" />
                <SiTypescript className="w-6 h-6" title="TypeScript" />
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-gray-500">
                  Groq
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Certificates Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Sertifikalar</h2>
          <div className="flex items-center gap-4">
            <p className="text-lg">Henüz sertifika eklenmedi.</p>
          </div>
        </section>

        {/* Languages Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Diller</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <FaLanguage className="w-8 h-8 text-green-500 flex-shrink-0"/>
              <div>
                <h3 className="text-xl font-semibold">Türkçe</h3>
                <p className="text-md text-gray-600 dark:text-gray-400">Ana Dil</p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <FaLanguage className="w-8 h-8 text-green-500 flex-shrink-0"/>
              <div>
                <h3 className="text-xl font-semibold">İngilizce</h3>
                <p className="text-md text-gray-600 dark:text-gray-400">Orta Seviye</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hobbies Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-800">Hobiler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg shadow text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">Boks</h3>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg shadow text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">Debate</h3>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg shadow text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">Yapay Zeka</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}