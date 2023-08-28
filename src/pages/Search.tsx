import React from 'react';
import { SearchTracks } from '../components';

const Search = () => {
  return (
    <>
      <main className='w-full h-screen overflow-scroll scroll-smooth'>
        <section className='p-4'>
          <SearchTracks page />
        </section>
      </main>
    </>
  );
};

export default Search;
