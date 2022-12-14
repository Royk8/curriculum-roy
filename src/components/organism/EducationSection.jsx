import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from 'components/atoms/Card';

const EducationSection = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center w-4/5 m-2'>
      <span className='text-white text-center font-medium p-2 w-full border rounded-md border-yellow-300'>
        {t('knowledge-and-education')}
      </span>
      <div className='flex flex-wrap justify-center w-full mt-2'>
        <div>
          <Card
            title={t('systems-engineer-student')}
            inside={
              <ul>
                <li>Universidad de Antioquia</li>
                <li>2019 - 2023 ({t('in-progress')})</li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title={t('mechanical-engineer')}
            inside={
              <ul>
                <li>Universidad Nacional de Colombia</li>
                <li>2010 - 2016</li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title={t('skills')}
            inside={
              <ul className='ml-5 list-disc'>
                <li>{t('team-player')}</li>
                <li>{t('fast-learner')}</li>
                <li>{t('searcher')}</li>
                <li>{t('autonomous')}</li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title={t('languages')}
            inside={
              <ul className='ml-5 list-disc'>
                <li>
                  <strong>{t('spanish')}</strong>: {t('native-speaker')}
                </li>
                <li>
                  <strong>{t('english')}</strong>: {t('high')} (C1)
                </li>
                <li>
                  <strong>{t('portuguese')}</strong>: {t('medium')}
                </li>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title={t('technical-knowledge')}
            inside={
              <ul>
                <li>{t('advanced-knowledge-in')}</li>
                <ul className='ml-10 list-disc'>
                  <li>{t('c#-for-unity')}</li>
                  <li>{t('python-for-AI')}</li>
                  <li>{t('gitflow')}</li>
                  <li>{t('openCV')}</li>
                </ul>
                <li>{t('basic-knowledge-in')}</li>
                <ul className='ml-10 list-disc'>
                  <li>{t('front-end-development-with')}</li>
                  <li>Java</li>
                  <li>Javascript</li>
                </ul>
                <li>{t('proficient-with-software')}</li>
                <ul className='ml-10 list-disc'>
                  <li>Unity</li>
                  <li>Blender</li>
                  <li>Solidworkd</li>
                </ul>
              </ul>
            }
          />
        </div>
        <div>
          <Card
            title={t('certificates')}
            inside={
              <ul className='ml-5 list-disc'>
                <li>
                  <strong>Fundamentos de Deep Learning</strong> (UDEA)
                  <br /> {t('hourly-intensity')}: 64 {t('hours')} (2022)
                </li>
                <li>
                  <strong>Front-End Web Development with React</strong>{' '}
                  (Coursera)
                  <br /> {t('hourly-intensity')}: 20 {t('hours')} (2021)
                </li>
                <li>
                  <strong>
                    Introducci??n a Data Science: Programaci??n de Estad??stica con
                    R
                  </strong>{' '}
                  (Coursera)
                  <br /> {t('hourly-intensity')}: 20 {t('hours')} (2020)
                </li>
                <li>
                  <strong>
                    Semillero formaci??n inicial en el desarrollo de videojuegos
                  </strong>{' '}
                  (UDEA)
                  <br /> {t('hourly-intensity')}: 40 {t('hours')} (2019)
                </li>
                <li>
                  <strong>Certificaci??n Ingl??s Nivel Avanzado</strong> (C1)
                  (Centro Colombo Americano Medell??n) (2018)
                </li>
                <li>
                  <strong>Complementaria virtual en Autocad 2D</strong> (Sena)
                  <br /> {t('hourly-intensity')}: 40 {t('hours')} (2014)
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export { EducationSection };
