import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <header className='w-full h-20 bg-green-500'>
        <nav className='text-white h-full flex justify-around items-center'>
          <Link to={'/'} className='text-2xl font-bold hover:underline'>
            Home
          </Link>
          <Link to={'/profile'} className='text-2xl font-bold hover:underline'>
            Profile
          </Link>
          <Link to={'/search'} className='text-2xl font-bold hover:underline'>
            Search
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
