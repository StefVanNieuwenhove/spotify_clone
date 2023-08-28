import React, { FC, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components';
import ThemeProvider from './containers/theme/ThemeProvider';

const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Search = React.lazy(() => import('./pages/Search'));
const Playlist = React.lazy(() => import('./pages/Playlist'));

const App: FC = (): ReactElement => {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
};

export default App;
