import React from 'react';
import { Outlet } from 'react-router-dom';

import { LanguageBar } from 'components/organism/LanguageBar';
import { InfoFooter } from 'components/atoms/InfoFooter';

const MainLayout = () => (
  <main className='flex flex-col w-screen h-full bg-black '>
    <LanguageBar />
    <Outlet />
    <InfoFooter />
  </main>
);

export { MainLayout };
