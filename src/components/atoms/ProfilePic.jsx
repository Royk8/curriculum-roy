import React from 'react';

const ProfilePic = ({ name, image }) => (
  <div className='flex flex-col justify-center items-center h-full w-full'>
    <div className='bg-yellow-300 p-1 rounded-full m-3'>
      <img src={image} alt='profile' className='rounded-full profile-size' />
    </div>
    <div className='border border-yellow-300 p-2 rounded-md w-4/5'>
      <h1 className='text-center text-2xl text-white'>{name}</h1>
    </div>
  </div>
);

export { ProfilePic };
