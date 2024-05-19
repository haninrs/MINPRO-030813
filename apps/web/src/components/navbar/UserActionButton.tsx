// 'use client';
import { useAppDispatch, useAppSelector } from '@/lib/feature/hooks';
import Link from 'next/link';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { setUser } from '@/lib/feature/user/userSlice';
import Image from 'next/image';
import { getUserc } from '@/lib/userCostumer';
import { getSession } from '@/lib/session';
import { deleteToken } from '@/app/action';
import { cookies } from 'next/headers';
import ButtonLogout from './buttonLogout';

export const UserActionButton = async () => {
  const session = await getSession();
  console.log(session?.accountType);

  return session ? (
    <div>
      <div className="flex-none gap-2">
        <div className="dropdown m-4 dropdown-content sm:dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-16 h-auto rounded-full">
              <Image
                width={100}
                height={100}
                alt="Tailwind CSS Navbar component"
                src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D `}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-500 rounded-box w-52"
          >
            <li>
              <Link
                href={`dashboard/${session?.accountType}`}
                className=" text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <ButtonLogout />
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center mt-2 gap-2">
      <Link
        href={'/login'}
        className="transition-all duration-300 hover:scale-105 inline-flex rounded-xl text-white hover:bg-white hover:border hover:border-[#ffcc00] hover:text-[#ffcc00] justify-center items-center bg-[#FFCC00] btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        Login
      </Link>
      <Link
        href={'/signup'}
        className="transition-all duration-300 hover:scale-105 inline-flex rounded-xl text-[#ffcc00] hover:bg-[#f5d143] hover:text-white justify-center items-center bg-white border border-[#ffcc00] btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        Signup
      </Link>
    </div>
  );
};

export default UserActionButton;
