import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetSearchTrackResultQuery } from '../api/apiSlice';
import { SearchButton, Track } from '../components';
import { authSelectors } from '../containers/auth/selectors';

const Search = () => {
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState<any>([]);

  const searchingTracks = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search) {
      console.log(search);
    }
  }, [search]);

  console.log('tracks ', tracks);

  return (
    <>
      <main className='w-full h-screen overflow-scroll scroll-smooth'>
        <section className='p-4'>
          <div className='flex justify-evenly w-1/2'>
            <div className='relative z-0 pr-2 w-full'>
              <input
                type={'text'}
                id='search'
                value={search}
                placeholder=''
                onChange={(e) => searchingTracks(e.target.value)}
                className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 appearance-none border-slate-500 focus:outline-none focus:ring-0 focus:border-green-500 peer'
              />
              <label
                htmlFor='search'
                className='absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Search for a song
              </label>
            </div>
            <SearchButton value={search} setTracks={setTracks} />
          </div>
        </section>
        <section>
          <div className='flex flex-col items-center justify-center w-full h-full'>
            {tracks.length > 0
              ? tracks.map((track: any) => <Track key={track.id} {...track} />)
              : undefined}
          </div>
        </section>
      </main>
    </>
  );
};

export default Search;
