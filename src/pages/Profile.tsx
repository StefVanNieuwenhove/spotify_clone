import React from 'react';
import { authSelectors } from '../containers/auth/selectors';
import { useGetUserQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';

const Profile = () => {
  const accesToken = useSelector(authSelectors.getAccessToken);
  const { data: user } = useGetUserQuery(undefined, {
    skip: !accesToken,
  });
  console.log('user ', user);
  return (
    <>
      <main className='w-full h-screen py-4 px-5 dark:bg-dark-gray dark:text-white'>
        {user ? (
          <section className='w-full h-full grid grid-col-1 md:grid-cols-2'>
            <div className='flex flex-col items-center'>
              <img
                src={user.images[1].url}
                alt={`${user.display_name} cover`}
                className='object-cover rounded-full mx-auto border border-black'
              />
              <h1 className='text-2xl font-semibold'>{user.display_name}</h1>
            </div>
            <div>
              <table className='table-fixed'>
                <fieldset className='border border-slate-300 p-6 rounded-md'>
                  <legend className='text-2xl font-semibold text-black px-1 hover:text-slate-700'>
                    User info
                  </legend>
                  <tbody>
                    <tr>
                      <td className='text-lg font-medium'>Email:</td>
                      <td className='text-lg font-medium'>
                        {user.email ? user.email : 'No email'}
                      </td>
                    </tr>
                    <tr>
                      <td className='text-lg font-medium'>Country:</td>
                      <td className='text-lg font-medium'>
                        {user.country ? user.country : 'No country'}
                      </td>
                    </tr>
                    <tr>
                      <td className='text-lg font-medium'>Followers:</td>
                      <td className='text-lg font-medium'>
                        {user.followers.total}
                      </td>
                    </tr>
                    <tr>
                      <td className='text-lg font-medium'>Product:</td>
                      <td className='text-lg font-medium'>
                        {user.product ? user.product : 'No product'}
                      </td>
                    </tr>
                  </tbody>
                </fieldset>
              </table>
              {/* <h1 className='text-2xl font-semibold'>User info</h1>
              <p className='text-lg font-medium'>
                Email: {user.email ? user.email : 'No email'}
              </p>
              <p className='text-lg font-medium'>
                Country: {user.country ? user.country : 'No country'}
              </p>
              <p className='text-lg font-medium'>
                Followers: {user.followers.total}
              </p>
              <p className='text-lg font-medium'>
                Product: {user.product ? user.product : 'No product'}
              </p> */}
            </div>
          </section>
        ) : (
          <h1 className='w-full h-screen flex justify-center items-center text-3xl font-bold'>
            User is not logged in
          </h1>
        )}
      </main>
    </>
  );
};

export default Profile;
