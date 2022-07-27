import React from 'react';
import i18next from 'i18next';

const languajes = [
  {
    code: 'en',
    name: 'English',
    flag: 'united-kingdom.png',
  },
  {
    code: 'es',
    name: 'Español',
    flag: 'spain.png',
  },
]

const LanguageButton = ({ language }) => {

  const pickImage = () => {
    const l = languajes.find(l => l.name === language);
    return l ? l.flag : 'flag.png';
  };

  const onClick = () => {
    const l = languajes.find(l => l.name === language);
    i18next.changeLanguage(l.code);
  }

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
