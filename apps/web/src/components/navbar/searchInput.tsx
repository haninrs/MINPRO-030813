'use client';

import { KeyboardEventHandler, MouseEventHandler, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const keyword = searchRef.current?.value; // Use optional chaining to access value
      alert(keyword);
    }
  };

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const keyword = searchRef.current?.value; // Use optional chaining to access value
    alert(keyword);
  };

  return (
    <div className="relative ">
      <input
        placeholder="search event..."
        className="w-full p-2 rounded bg-gray-300 text-black"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleButtonClick}>
        <CiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchInput;
