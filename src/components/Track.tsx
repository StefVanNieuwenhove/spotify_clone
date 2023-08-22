import React from 'react';

const Track = ({ album, name, artists }: any) => {
  return (
    <div className='w-full flex justify-around px-8 py-4 border hover:border-black hover:bg-gray-100 cursor-pointer'>
      <img
        src={album.images[2].url}
        alt={`${album.name} cover`}
        className='w-20 h-20'
      />
      <div className='w-1/3'>
        <p>{name}</p>
        <p>{artists[0].name}</p>
      </div>
      <p className='w-1/3'>{album.name}</p>
      <p className='w-1/3'>{album.release_date}</p>
    </div>
  );
};

export default Track;
