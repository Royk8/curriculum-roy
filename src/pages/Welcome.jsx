import React from 'react';
import { ProfileSection } from 'components/organism/ProfileSection';
import { Card } from 'components/atoms/Card';

const Welcome = () => (
  <main className='flex flex-col justify-center items-center'>
    <ProfileSection />
    <Card
      title='Estudiante de Ingenieria de Sistemas'
      inside='Universidad de Antioquia 2019 - 2023 (En curso)'
    />
  </main>
);

export { Welcome };
