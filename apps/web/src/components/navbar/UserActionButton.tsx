// 'use client';
import { useAppDispatch, useAppSelector } from '@/lib/feature/hooks';
import Link from 'next/link';
import React from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { setUser } from '@/lib/feature/user/userSlice';
import Image from 'next/image';
import { getUserc } from '@/lib/userCostumer';
import { getSession } from '@/lib/session';
import { deleteToken } from '@/app/action';

export const UserActionButton = async () => {
  // const user = useAppSelector((state) => state.user.value);
  // const dispatch = useAppDispatch();
  // const token = Cookies.get('token');
  // const path = usePathname();
  // const pageUrl = ['/login', '/register'];
  // const url = pageUrl.includes(path) ? '/' : path;

  const session = await getSession();

  // const onLogout = () => {
  //   dispatch(setUser(null));
  //   deleteToken('token');
  //   Cookies.remove('token');
  // };

  // const keepLogin = async (token: any) => {
  //   try {
  //     const res = await getUserc(token);
  //     dispatch(setUser(res.user));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const session = await getSession();

  return (
    <div>
      <Link href={'/profile'}>
        <p className="text-sm text-black">{session?.username}</p>
        <Image
          src={session?.image }
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>

      <div>
        {session && (
          <div>
            <Image
              src={session?.image}
              // onClick={onLogout}
              className="cursor-pointer rounded-full"
              width={10}
              height={10}
              alt="Profile picture"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {session?.username}
              </p>
              {/* <p>{session?.email}</p> */}
            </div>
          </div>
        )}

        {session == null && (
          <div className="flex gap-2">
            <Link href={'/signup'}>
              <button className="p-1.5 text-[#FFCC00] rounded-md border-2 border-[#FFCC00] hover:bg-[#FFCC00] ease-in duration-150 hover:text-white">
                Register
              </button>
            </Link>
            <Link href={`/login`}>
              <button className="p-1.5 text-[#FFCC00] rounded-md border-2 border-[#FFCC00] hover:bg-[#FFCC00] ease-in duration-150 hover:text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* <div className="flex justify-between w-full">
        {session && (
          <div className="flex gap-2 items-center">
            <Image
              src={'/'}
              onClick={onLogout}
              className="cursor-pointer rounded-full"
              width={10}
              height={10}
              alt="Profile picture"
            />
            <div className="flex-col">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {user.email}
              </p>
            </div>
          </div>
        )}
        {user == null && (
          <div className="flex gap-2">
            <Link href={'/signup'}>
              <button className="p-1.5 text-[#FFCC00] rounded-md border-2 border-[#FFCC00] hover:bg-[#FFCC00] ease-in duration-150 hover:text-white">
                Register
              </button>
            </Link>
            <Link href={`/login?redirect=${url}`}>
              <button className="p-1.5 text-[#FFCC00] rounded-md border-2 border-[#FFCC00] hover:bg-[#FFCC00] ease-in duration-150 hover:text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default UserActionButton;
