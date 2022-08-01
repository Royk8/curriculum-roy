import React from 'react';
import i18next from 'i18next';

const languajes = [
  {
    code: 'en',
    name: 'English',
    flag: 'assets/images/united-kingdom.png',
  },
  {
    code: 'es',
    name: 'Español',
    flag: 'assets/images/spain.png',
  },
];

const LanguageButton = ({ language }) => {
  const pickImage = (lang) => {
    const l = languajes.find((x) => x.name === lang);
    return l ? l.flag : 'flag.png';
  };

  const onClick = () => {
    i18next.changeLanguage(languajes.find((l) => l.name === language).code);
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
