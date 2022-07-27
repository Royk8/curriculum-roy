import React from 'react';
import { ProfileSection } from 'components/organism/ProfileSection';
import { EducationSection } from 'components/organism/EducationSection';
import { ExperienceSection } from 'components/organism/ExperienceSection';
import { FeatureProjectsSection } from 'components/organism/FeatureProjectsSection';

const Welcome = () => (
  <main className='flex flex-col justify-center items-center'>
    <ProfileSection />
    <EducationSection />
    <ExperienceSection />
    <FeatureProjectsSection />
  </main>
);

export { Welcome };
