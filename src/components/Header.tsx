import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Sunucuda veya hidrasyon tamamlanmadan null döndürerek uyuşmazlığı önle
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-gray-800 dark:text-gray-200"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

const Header = () => {
  return (
    // Main header component
    <header className="container mx-auto px-4 max-w-4xl py-6 mb-8">
      <div className="flex justify-between items-center">
        <Link href="/" passHref>
          <span className="font-bold text-2xl cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Eren Özaltın
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-lg">
          <Link href="/" passHref>
            <span className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">CV</span>
          </Link>
          <Link href="/blog" passHref>
            <span className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</span>
          </Link>
          
          <ThemeChanger />
        </nav>
      </div>
    </header>
  );
};

export default Header; 