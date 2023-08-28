import React from 'react';
import { useSelector } from 'react-redux';
import { useAddTrackToPlaylistQuery } from '../api/apiSlice';
import { authSelectors } from '../containers/auth/selectors';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

const AddTrack = () => {
  const { state } = useLocation();
  const accesToken = useSelector(authSelectors.getAccessToken);
  /* const { data: tracks } = useAddTrackToPlaylistQuery(
    {
      playlistId: state.id,
      trackUris: {
        //uris: [trackUri],
        position: 0,
      },
    },
    {
      skip: !accesToken,
    }
  ); */

  const addTrackToPlaylist = () => {
    //console.log(trackUri);
    console.log(state.id);
  };

  return (
    <button onClick={addTrackToPlaylist}>
      <IoIosAddCircleOutline className='text-xl font-bold' />
    </button>
  );
};

export default AddTrack;
