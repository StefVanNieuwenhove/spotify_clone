const SearchInput = ({ search, setSearch }: any) => {
  return (
    <>
      <div className='relative z-0 pr-2 w-full bg-transparant'>
        <input
          type={'search'}
          id='search'
          value={search}
          placeholder=''
          onChange={(e) => setSearch(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 appearance-none border-slate-500 focus:outline-none focus:ring-0 focus:border-green-500 peer'
        />
        <label
          htmlFor='search'
          className='absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Search for a song
        </label>
      </div>
    </>
  );
};

export default SearchInput;
