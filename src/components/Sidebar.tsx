import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from '../containers/theme/ThemeProvider';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className='w-full h-20 bg-green text-white dark:bg-dark-gray dark:text-white'>
        <nav className='text-white h-full flex justify-around items-center'>
          <Link to={'/'} className='text-2xl font-bold hover:underline'>
            My Music
          </Link>
          <Link to={'/search'} className='text-2xl font-bold hover:underline'>
            Search
          </Link>
          <Link to={'/profile'} className='text-2xl font-bold hover:underline'>
            Profile
          </Link>
          {theme === 'light' ? (
            <div>
              <BsMoonFill className='text-2xl' onClick={toggleTheme} />
            </div>
          ) : (
            <div>
              <BsSunFill
                className='text-2xl text-sun-yellow'
                onClick={toggleTheme}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
