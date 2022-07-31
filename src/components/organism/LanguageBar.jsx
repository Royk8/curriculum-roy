import React from 'react';
import { LanguageButton } from 'components/atoms/LanguageButton';

const LanguageBar = () => (
  <main className='flex flex-col items-end w-screen text-white  bg-gold-dark'>
    <div className='flex px-4'>
      <LanguageButton language='Español' />
      <LanguageButton language='English' />
    </div>
  </main>
);

export { LanguageBar };
