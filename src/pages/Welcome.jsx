import React from 'react';
import { ProfileSection } from 'components/organism/ProfileSection';
import { EducationSection } from 'components/organism/EducationSection';
import { Card } from 'components/atoms/Card';

const Welcome = () => (
  <main className='flex flex-col justify-center items-center'>
    <ProfileSection />
    <EducationSection />
  </main>
);

export { Welcome };
