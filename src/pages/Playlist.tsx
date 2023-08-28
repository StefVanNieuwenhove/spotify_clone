import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPlaylistTracksQuery } from '../api/apiSlice';
import { SearchTracks, Track } from '../components';
import { authSelectors } from '../containers/auth/selectors';
import { BiTime } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const Playlist = () => {
  const options = ['Title', 'Artist', 'Album', 'Duration'];
  const [filter, setFilter] = useState<string | null>(null);
  const { state } = useLocation();

  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: tracks } = useGetPlaylistTracksQuery(
    state.playlist.tracks.href,
    {
      skip: !accesToken,
    }
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  console.log(tracks);

  return (
    <>
      <main className='w-full h-screen overflow-scroll scroll-smooth'>
        <section className='w-full h-1/3 bg-gradient-to-b from-green to-dark-gray dark:from-dark-gray dark:to-green dark:text-white flex gap-2 justify-evenly p-3'>
          <div>
            <img
              src={state.playlist.images[0].url}
              alt='playlist cover'
              className='h-full'
            />
          </div>
          <div className='text-white'>
            <h1 className='text-3xl font-bold w-full'>{state.playlist.name}</h1>
            <p className='text-xl pt-1 font-semibold'>
              {state.playlist.description}
            </p>
            <p className='text-xl pt-1 font-semibold'>
              Owner: {state.playlist.owner.display_name}
            </p>
          </div>
        </section>
        <section className='w-full p-4 dark:bg-green dark:text-white flex justify-between'>
          <div className='w-full'>
            {state.playlist.owner.display_name === 'Stef Van Nieuwenhove' ? (
              <SearchTracks added />
            ) : undefined}
          </div>
          <div className='flex items-center justify-center w-1/3'>
            <div className='flex items-center space-x-4'>
              <label htmlFor='combo' className='text-lg font-semibold'>
                choose a filter:
              </label>
              <select
                id='combo'
                className='border rounded px-2 py-1 focus:outline-none focus:border-blue-500 dark:bg-green'
                value={filter || ''}
                onChange={handleOptionChange}
              >
                <option value='' disabled>
                  default
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <section className='w-full px-5 py-4 dark:bg-green dark:text-white'>
          <table className='w-full  rounded-md'>
            <thead className='w-full px-2 '>
              <tr className='flex px-2 items-center rounded-md border-2'>
                <th className='basis-1/6'>#</th>
                <th className='basis-1/2'>Title</th>
                <th className='basis-1/2'>Album</th>
                <th className='basis-1/5'>
                  <BiTime className='w-full text-center font-bold text-lg' />
                </th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {tracks?.items.map((track: any, index: number) => (
                <Track
                  key={track.track.id}
                  index={index}
                  filter={filter}
                  {...track.track}
                />
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Playlist;
