import React from 'react';
import { useSelector } from 'react-redux';
import { useGetPlaylistsQuery } from '../api/apiSlice';
import { authSelectors } from '../containers/auth/selectors';
import { SpotifyPlaylist } from '../types';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: playlists } = useGetPlaylistsQuery(undefined, {
    skip: !accesToken,
  });

  const NavigateToPlaylist = (playlist: any) => {
    navigate(`/playlist/${playlist.id}`, { state: { playlist } });
  };
  return (
    <>
      <main className='w-full h-screen'>
        <h1 className='text-3xl underline font-bold w-full text-center'>
          My playlists
        </h1>
        <section>
          <div className='w-full p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {playlists?.items.map((playlist) => (
              <div
                key={playlist.id}
                onClick={() => NavigateToPlaylist(playlist)}
                className='p-2 border-2 hover:border-black rounded-md flex flex-col justify-center items-center'
              >
                <img src={playlist.images[0].url} alt={playlist.name} />
                <p className='text-xl pt-1 font-semibold'>{playlist.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
