import React from 'react';
import { ProfilePic } from 'components/atoms/ProfilePic';
import { Card } from 'components/atoms/Card';

const Welcome = () => (
  <main className='flex flex-col justify-center items-center'>
    <ProfilePic name='Roy Kleyder Maestre Ruda' image='profilePic.jpg' />
    <Card
      title='Estudiante de Ingenieria de Sistemas'
      inside='Universidad de Antioquia 2019 - 2023 (En curso)'
    />
  </main>
);

export { Welcome };
