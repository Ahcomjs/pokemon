import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

interface MessageModalProps {
  message: string;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, onClose }) => {
  const { language } = useLanguage();
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl text-center max-w-sm mx-auto border border-gray-200 dark:border-gray-700 transform scale-105 animate-fade-in">
        <p className="text-xl font-montserrat-extrabold text-gray-900 dark:text-gray-100 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-montserrat-extrabold text-lg shadow-lg transform hover:scale-105"
        >
          {translations[language].close}
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
