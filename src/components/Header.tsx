import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import pokedexLogo from '../assets/img/pokedex.png';

interface HeaderProps {
  setCurrentPage: (page: 'list' | 'detail') => void;
}

const Header: React.FC<HeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 dark:bg-red-800 p-4 shadow-2xl flex flex-col sm:flex-row justify-between items-center  mb-8 relative z-50">
      <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
        <div className="flex items-center">
          <img src={pokedexLogo} alt="Pokedex Logo" className="h-16 w-auto mr-3 drop-shadow-lg" />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav className={`w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-0 absolute sm:relative top-full left-0 bg-red-600 dark:bg-red-800 sm:bg-transparent p-4 sm:p-0 rounded-b-lg sm:rounded-none shadow-lg sm:shadow-none`}>
        <div className="flex items-center justify-center sm:justify-start gap-2 px-5 py-2 bg-white text-red-600 rounded-full shadow-md border-2 border-white w-full mb-2 sm:w-auto">
          <span className="font-montserrat-extrabold text-sm sm:text-base">{translations[language].darkMode}</span>
          <label htmlFor="theme-toggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="theme-toggle"
              className="sr-only peer"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2 px-5 py-2 bg-white text-red-600 rounded-full shadow-md border-2 border-white w-full mb-2 sm:w-auto">
          <span className="font-montserrat-extrabold text-sm sm:text-base">{translations[language].language}</span>
          <label htmlFor="language-toggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="language-toggle"
              className="sr-only peer"
              checked={language === 'en'}
              onChange={toggleLanguage}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
          <span className="font-montserrat-extrabold text-sm sm:text-base ml-1">{language.toUpperCase()}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
