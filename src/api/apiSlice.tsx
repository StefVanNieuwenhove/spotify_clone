import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import {
  SpotifyPlaylist,
  SpotifyTrack,
  SpotifyTrackItem,
  User,
} from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authentication.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
    }),
    getPlaylists: builder.query<SpotifyPlaylist, void>({
      query: () => ({
        url: '/me/playlists',
        method: 'GET',
      }),
    }),
    getPlaylistTracks: builder.query<SpotifyTrack, string>({
      query: (playlistRef) => ({
        url: `${playlistRef}`,
        method: 'GET',
      }),
    }),
    getSearchTrackResult: builder.query<SpotifyTrackItem, string>({
      query: (search) => ({
        url: `/search?q=${search}&type=track`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response.tracks.items;
      },
    }),
    addTrackToPlaylist: builder.query<
      void,
      { playlistId: string; trackUris: { uri: string[]; position: number } }
    >({
      query: ({ playlistId, trackUris }) => ({
        url: `/playlists/${playlistId}/tracks?uris=${trackUris}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery,
  useGetSearchTrackResultQuery,
  useAddTrackToPlaylistQuery,
} = apiSlice;

export default apiSlice.reducer;
