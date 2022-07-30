import React from 'react';
import { ProfileSection } from 'components/organism/ProfileSection';
import { EducationSection } from 'components/organism/EducationSection';
import { ExperienceSection } from 'components/organism/ExperienceSection';
import { FeaturedProjectsSection } from 'components/organism/FeaturedProjectsSection';

const Welcome = () => (
  <main className='flex flex-col justify-center items-center'>
    <ProfileSection />
    <EducationSection />
    <ExperienceSection />
    <FeaturedProjectsSection />
  </main>
);

export { Welcome };
