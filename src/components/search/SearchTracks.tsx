import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../containers/auth/selectors';
import { useGetSearchTrackResultQuery } from '../../api/apiSlice';
import Track from '../Track';
import SearchInput from './SearchInput';

const SearchTracks = ({ page, added }: any) => {
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState<any>([]);

  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: tracksQuery } = useGetSearchTrackResultQuery(search, {
    skip: !accesToken,
  });

  useEffect(() => {
    if (search) {
      if (tracksQuery !== undefined) setTracks(tracksQuery);
    } else {
      setTracks([]);
    }
  }, [search, tracksQuery]);
  return (
    <>
      <div className='w-1/2 grid grid-cols-1 pb-3 bg-transparent'>
        <div className='flex'>
          <SearchInput search={search} setSearch={setSearch} />
          {/* <SearchButton value={search} setTracks={setTracks} /> */}
        </div>
        <div>
          {!page && tracks.length > 0 ? (
            <table className='h-20 overflow-hidden'>
              <tbody>
                {tracks.map((track: any, index: number) => (
                  <Track
                    key={track.id}
                    index={index}
                    {...track}
                    added={added}
                  />
                ))}
              </tbody>
            </table>
          ) : undefined}
        </div>
      </div>
      {page && tracks.length > 0 ? (
        <table className='w-full h-screen py-4 px-5'>
          <tbody>
            {tracks.map((track: any, index: number) => (
              <Track key={track.id} index={index} {...track} added={added} />
            ))}
          </tbody>
        </table>
      ) : undefined}
    </>
  );
};

export default SearchTracks;
