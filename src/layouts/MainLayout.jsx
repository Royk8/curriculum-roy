import React from 'react';
import { Outlet } from 'react-router-dom';
import { LanguageBar } from 'components/LanguageBar';

const MainLayout = () => (
  <main className='flex flex-col w-screen h-full bg-black '>
    <LanguageBar />
    <Outlet />
  </main>
);

export { MainLayout };
