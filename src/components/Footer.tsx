import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center pt-8 mt-12 border-t-2 border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold mb-4">İletişim</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ozalti2n@gmail.com" aria-label="Gmail üzerinden mail gönder" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaEnvelope /></a>
          <a href="https://github.com/CodeCults" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaGithub /></a>
          <a href="https://instagram.com/eren.ozalt" aria-label="Instagram profilim" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaInstagram /></a>
        </div>
        <a href="tel:05330809862" aria-label="Telefon Numarası" className="flex items-center gap-2 text-lg hover:text-blue-500">
          <FaPhone />
          <span>0533 080 9862</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer; 