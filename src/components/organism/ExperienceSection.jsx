import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from 'components/atoms/Card';

const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center w-4/5'>
      <span className='text-white text-center font-medium p-2 w-full border border-yellow-300'>
        {t('experience')}
      </span>
        <Card 
            title={t('videogames-development-course')}
            inside={
                <ul>
                    <li>{t('august')} 2021 - {t('january')} 2022 (Medellín - Antioquia)</li>
                    <li><strong>Ubicua - Universidad de Antioquia</strong></li>
                    <li><strong>{t('occupation')}</strong>: {t('systems-engineer')} - {t('teacher')}</li>
                    <li><strong>{t('tasks-and-responsibilities')}</strong>: {t('videogames-responsibilities')}</li>
                </ul>
            }
        />
        <Card 
            title={t('python-programming-course')}
            inside={
                <ul>
                    <li>{t('september')} - {t('december')} 2020 (Medellín - Antioquia)</li>
                    <li><strong>Universidad de Antioquia</strong></li>
                    <li><strong>{t('occupation')}</strong>: {t('systems-engineer')} - {t('teacher')}</li>
                    <li><strong>{t('tasks-and-responsibilities')}</strong>: {t('python-responsibilities')}</li>
                </ul>
            }
        />
        <Card 
            title={t('interactive-experience-developer')}
            inside={
                <ul>
                    <li>{t('may')} - {t('september')} 2020 (Medellín - Antioquia)</li>
                    <li><strong>Universidad de Antioquia</strong></li>
                    <li><strong>{t('occupation')}</strong>: {t('developer')}</li>
                    <li><strong>{t('tasks-and-responsibilities')}</strong>: {t('developer-responsibilities')}</li>
                </ul>
            }
        />
        <Card 
            title={t('maintenance-projects-intern')}
            inside={
                <ul>
                    <li>{t('december')} 2015 - {t('june')} 2016 (Girardota - Antioquia)</li>
                    <li><strong>Invesa S.A</strong>, {t('chemical-industry')}</li>
                    <li><strong>{t('occupation')}</strong>: {t('maintenance-projects-intern')}</li>
                    <li><strong>{t('tasks-and-responsibilities')}</strong>: {t('intern-responsibilities')}</li>
                </ul>
            }
        />  
    </div>
  );
};

export { ExperienceSection };
