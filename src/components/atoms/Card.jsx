import React from 'react';

const Card = ({ title, inside }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='flex flex-col bg-yellow-300 w-72 min-h-{50%} rounded-t-md {!isOpen}: rounded-b-md'>
      <button type='button' onClick={toggle} className='w-full p-3 max-h-fit'>
        <p className='text-base font-bold w-full'>{title}</p>
      </button>
      {isOpen && <div className='bg-white p-2 rounded-b-md'>{inside}</div>}
    </div>
  );
};

export { Card };
