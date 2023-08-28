import React from 'react';
import AddTrack from './AddTrack';

const Track = ({
  album,
  name,
  artists,
  duration_ms,
  index,
  added,
  uri,
}: any) => {
  const calculateDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <tr className='flex px-2 justify-center items-center border rounded-md hover:border-black'>
        <td className='basis-1/6 text-center'>{index + 1}</td>
        <td className='basis-1/2 grid grid-cols-1 md:grid-cols-2 justify-items-center'>
          <img
            src={album.images[2].url}
            alt={`${album.name} cover`}
            className='w-20 h-20'
          />
          <div className='flex flex-col justify-center'>
            <p className='text-md font-semibold'>{name}</p>
            <p className='text-sm'>{artists[0].name}</p>
          </div>
        </td>
        <td className='basis-1/2 text-center'>
          <p className=''>{album.name}</p>
        </td>
        <td className='basis-1/5 text-center'>
          <p className=''>{calculateDuration(duration_ms)}</p>
        </td>

        {added ? (
          <td className='basis-1/5 text-center'>
            <AddTrack />
          </td>
        ) : undefined}
      </tr>
    </>
  );
};

export default Track;
