import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from 'components/atoms/Card';

const FeaturedProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center w-4/5 m-2 space-y-2 '>
      <span className='text-white text-center font-medium p-2 w-full border border-yellow-300 rounded-md'>
        {t('featured-projects')}
      </span>
      <div className='flex flex-wrap justify-center w-full mt-2'>
        <div>
          <Card
            title='Image Colorizer'
            inside={
              <ul>
                <li>{t('image-colorizer-description')}</li>
                <li>
                  <img
                    src='assets/images/image-colorizer.JPG'
                    alt='Images-Colorizer'
                  />
                </li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title='RA: Nitrera'
            inside={
              <ul>
                <li>{t('ra-nitrera-description')}</li>
                <li>
                  <img src='assets/images/nitrera.JPG' alt='RA: Nitrera' />
                </li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title='Gistura'
            inside={
              <ul>
                <li>{t('gistura-description')}</li>
                <li>
                  <img src='assets/images/gistura.JPG' alt='Gistura' />
                </li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title='CV: Robot'
            inside={
              <ul>
                <li>{t('cv-robot-description')}</li>
                <li>
                  <img src='assets/images/robot.JPG' alt='CV: Robot' />
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export { FeaturedProjectsSection };
