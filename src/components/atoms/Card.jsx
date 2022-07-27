import React from 'react';

const Card = ({ title, inside }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='bg-yellow-300 w-full rounded-t-md {!isOpen}: rounded-b-md'>
      <button type='button' onClick={toggle} className='w-full p-3'>
        <p className='text-base font-bold'>{title}</p>
      </button>
      {isOpen && <div className='bg-white p-2 rounded-b-md'>{inside}</div>}
    </div>
  );
};

export { Card };
