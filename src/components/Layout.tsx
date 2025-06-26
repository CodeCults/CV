import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 max-w-4xl py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 