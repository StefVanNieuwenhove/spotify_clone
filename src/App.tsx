import React, { FC, ReactElement, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useGetPlaylistsQuery, useGetUserQuery } from './api/apiSlice';
import { Sidebar } from './components';
import { authSelectors } from './containers/auth/selectors';
import { Playlist, Search } from './pages';
import { User } from './types';

const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));

const App: FC = (): ReactElement => {
  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: user } = useGetUserQuery(undefined, {
    skip: !accesToken,
  });

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/'>
          <Route
            index
            element={
              <Suspense fallback={<span>LOADING...</span>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='playlist/:id'
            element={
              <Suspense fallback={<span>LOADING...</span>}>
                <Playlist />
              </Suspense>
            }
          />
        </Route>
        <Route
          path='/profile'
          element={
            <Suspense fallback={<span>LOADING...</span>}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path='/search'
          element={
            <Suspense fallback={<span>LOADING...</span>}>
              <Search />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
