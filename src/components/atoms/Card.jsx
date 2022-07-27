import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Card = ({ title, inside }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { t } = useTranslation();

  return (
    <div className='bg-yellow-300 w-4/5 rounded-t-md {!isOpen}: rounded-b-md'>
      <button type='button' onClick={toggle} className='w-full p-3'>
        <p className='text-base font-bold'>{t("systems-engineer-student")}</p>
      </button>
      {isOpen && <div className='bg-white p-2 rounded-b-md'>{inside}</div>}
    </div>
  );
};

export { Card };
