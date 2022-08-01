import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProfilePic } from 'components/atoms/ProfilePic';
import { LinksSet } from 'components/molecules/LinksSet';

const ProfileSection = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-center w-4/5'>
      <ProfilePic
        name='Roy Kleyder Maestre Ruda'
        image='assets/images/profilePic.jpg'
      />
      <div className='text-white text-center w-full my-4 space-y-2'>
        <p>Medellín, Colombia</p>
        <p className='font-medium'>{t('roy-description')}</p>
      </div>
      <LinksSet />
    </div>
  );
};

export { ProfileSection };
