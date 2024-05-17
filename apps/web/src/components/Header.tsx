import Link from 'next/link';
import SearchInput from './navbar/searchInput';
import UserActionButton from './navbar/UserActionButton';

export const HeaderPage = () => {
  return (
    <header className="bg-white">
      <div className=" flex flex-col md:flex-row justify-between md:items-center p-4 gap-2">
        <Link
          href="/"
          className="hover:cursor-pointer font-bold text-2xl text-[#FFCC00]"
        >
          HAREF
        </Link>
        <SearchInput />
        <UserActionButton />
      </div>
    </header>
  );
};
