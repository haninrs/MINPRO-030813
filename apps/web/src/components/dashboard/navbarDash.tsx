// 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getSession } from '@/lib/session';

export async function DashboardLanding() {
  const session = await getSession();
  return (
    <div>
      <div className="navbar bg-[#000066] fixed z-20">
        <div className="flex-1 ps-8">
          <Link href={'/'} className="btn btn-ghost  text-white text-xl">
            HAREF
          </Link>
        </div>
        <div className="flex-none gap-2 pe-6 ">
          <div className="dropdown m-4 dropdown-end">
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
                  src= {`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D `}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-500 rounded-box w-52"
            >
              <li>
                <Link
                  href={'/dashboard/orginazer/profile'}
                  className=" text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href={'/dashboard/orginazer/event'}
                  className="text-white"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="text-white"
                  href={'/dashboard/orginazer/stats'}
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
