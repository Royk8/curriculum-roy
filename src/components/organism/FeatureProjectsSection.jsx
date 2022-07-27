import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from 'components/atoms/Card';

const FeatureProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center w-4/5'>
      <span className='text-white text-center font-medium p-2 w-full border border-yellow-300'>
        {t('featured-projects')}
      </span>
      <Card
        title='Image Colorizer'
        inside={
          <ul>
            <li>{t('image-colorizer-description')}</li>
            <li>
              <img
                src='assets/images/image-colorizer.jpg'
                alt='Image Colorizer'
              />
            </li>
          </ul>
        }
      />
      <Card
        title='RA: Nitrera'
        inside={
          <ul>
            <li>{t('ra-nitrera-description')}</li>
            <li>
              <img
                src='assets/images/nitrera.jpg'
                alt='RA: Nitrera'
              />
            </li>
          </ul>
        }
      />
      <Card
        title='Gistura'
        inside={
          <ul>
            <li>{t('gistura-description')}</li>
            <li>
              <img
                src='assets/images/gistura.jpg'
                alt='Gistura'
              />
            </li>
          </ul>
        }
      />
      <Card
        title='CV: Robot'
        inside={
          <ul>
            <li>{t('cv-robot-description')}</li>
            <li>
              <img
                src='assets/images/robot.jpg'
                alt='CV: Robot'
              />
            </li>
          </ul>
        }
      />
    </div>
  );
};

export { FeatureProjectsSection };
