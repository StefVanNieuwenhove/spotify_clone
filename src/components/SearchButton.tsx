import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetSearchTrackResultQuery } from '../api/apiSlice';
import { authSelectors } from '../containers/auth/selectors';

const SearchInput = ({ value, setTracks }: any) => {
  const [search, setSearch] = useState('');

  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: searchTracks } = useGetSearchTrackResultQuery(search, {
    skip: !accesToken,
  });

  const handleClick = () => {
    if (search) {
      setTracks(searchTracks);
    }
  };

  useEffect(() => {
    if (value) {
      setSearch(value);
    } else {
      setSearch('');
      setTracks([]);
    }
  }, [value, setTracks]);

  return (
    <>
      <button
        onClick={handleClick}
        className='w-1/3 px-4 py-2 border border-black rounded-lg hover:bg-green-500 hover:text-white'
      >
        Search track
      </button>
    </>
  );
};

export default SearchInput;
