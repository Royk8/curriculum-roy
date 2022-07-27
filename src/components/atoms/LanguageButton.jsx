import React from 'react';

const LanguageButton = ({ language, onClick }) => {
  const pickImage = () => {
    switch (language) {
      case 'Español':
        return 'spain.png';
      case 'English':
        return 'united-kingdom.png';
      default:
        return '';
    }
  };

  return (
    <button
      type='button'
      className='bg-transparent text-white font-semibold px-4 flex'
      onClick={onClick}
    >
      <img src={pickImage(language)} alt={language} className='w-7 p-1' />
      {language}
    </button>
  );
};

export { LanguageButton };
