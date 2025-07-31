import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext'; 
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MessageModal from './components/MessageModal';
import type { PokemonListItem } from './types/pokemon';
import backgroundImage from './assets/img/back.png'; 

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'list' | 'detail'>('list');
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListItem | null>(null);
  const [message, setMessage] = useState<string>('');

  const showMessage = (msg: string) => {
    setMessage(msg);
  };

  const clearMessage = () => {
    setMessage('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'list':
        return (
          <PokemonList
            onSelectPokemon={(pokemon: PokemonListItem) => {
              setSelectedPokemon(pokemon);
              setCurrentPage('detail');
            }}
          />
        );
      case 'detail':
        return (
          <PokemonDetail
            pokemon={selectedPokemon}
            onBack={() => setCurrentPage('list')}
            showMessage={showMessage}
          />
        );
      default:
        return <PokemonList onSelectPokemon={(pokemon: PokemonListItem) => {
          setSelectedPokemon(pokemon);
          setCurrentPage('detail');
        }} />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider> 
        <div
          className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500 font-montserrat-regular"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        >
          <div className="min-h-screen bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-90 transition-colors duration-500">
            <Header setCurrentPage={setCurrentPage} />
            <main className="container mx-auto p-4">
              {renderPage()}
            </main>
            <MessageModal message={message} onClose={clearMessage} />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;