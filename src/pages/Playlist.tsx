import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useGetPlaylistTracksQuery } from '../api/apiSlice';
import { Track } from '../components';
import { authSelectors } from '../containers/auth/selectors';

const Playlist = () => {
  const { state } = useLocation();

  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: tracks } = useGetPlaylistTracksQuery(
    state.playlist.tracks.href,
    {
      skip: !accesToken,
    }
  );

  return (
    <>
      <main className='w-full h-screen overflow-scroll scroll-smooth'>
        <section className='w-full h-1/3 bg-gradient-to-b from-green-500 to-slate-700 flex gap-2 justify-evenly p-3'>
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
          </div>
        </section>
        <section className='w-full '>
          <div className='p-2'>
            {tracks?.items.map((track) => (
              <Track key={track.track.id} {...track.track} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Playlist;

{
  /* <div
                key={track.track.id}
                className='flex justify-around px-8 py-4 border hover:border-black hover:bg-gray-100 cursor-pointer'
              >
                <img
                  src={track.track.album.images[2].url}
                  alt={`${track.track.album.name} cover`}
                  className='w-20 h-20'
                />
                <div className='w-1/3'>
                  <p>{track.track.name}</p>
                  <p>{track.track.artists[0].name}</p>
                </div>
                <p className='w-1/3'>{track.track.album.name}</p>
                <p className='w-1/3'>{track.track.album.release_date}</p>
              </div> */
}
