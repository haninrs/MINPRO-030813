import { DashboardLanding } from '@/components/dashboard/navbarDash';
import { getSession } from '@/lib/session';
import Link from 'next/link';
import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';

export default async function ProfilePage() {
  const session = await getSession();

  function truncateEmail(email: string) {
    const [username, domain] = email.split('@');
    const truncatedDomain =
      domain.length > 4 ? domain.substring(0, 2) + '....' : domain;
    return `${username}@${truncatedDomain}`;
  }

  return (
    <div className="min-h-screen bg-white grid place-content-center">
      <DashboardLanding />
      <section className="bg-white py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mt-7 lg:py-16">
          <Link
            href={'/dashboard/orginazer'}
            className="text-black ps-2 flex gap-1 items-center"
          >
            <IoIosArrowBack className="size-7 lg:size-16" />
            <span className="text-gray-600 lg:text-xl">Back to dashboard</span>
          </Link>
          <div className="bg-gray-50 mt-7 border border-gray-200 rounded-lg p-2 md:p-12 mb-8 shadow-xl">
            <div className="">
              <table className="w-full table-auto">
                {/* head */}
                <thead className="">
                  <tr className="">
                    <th
                      colSpan={3}
                      className="font-semibold py-10 text-black text-lg"
                    >
                      Profile Details
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {/* row 1 */}
                  <tr>
                    <th className="pb-10">
                      <Image
                        width={100}
                        height={100}
                        alt="Photo Profile"
                        src={
                          `https://via.placeholder.com/100` ||
                          `${session.image}`
                        }
                        className="object-cover"
                      />
                    </th>
                    <th className="py-3 px-4 text-left md:text-xl">
                      <Link href={'/'}>Edit photo profile</Link>
                    </th>
                  </tr>

                  <tr>
                    <th className="pb-3 text-left md:text-xl">Username</th>
                    <td className="py-3 px-4 text-left md:text-xl">
                      {session?.username}
                    </td>
                    <td className="py-3 px-4 text-center md:text-xl">
                      <MdNavigateNext className="size-7 lg:size-10" />
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th className="py-3 text-left md:text-xl">Email</th>
                    <td className="py-3 px-4 text-left md:text-xl">
                      <span className="md:hidden">
                        {truncateEmail(session?.email)}
                      </span>
                      <span className="hidden lg:inline text-lg">
                        {session?.email}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <MdNavigateNext className="size-7 lg:size-10" />
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th className="py-3 text-left lg:text-xl">Revenue</th>
                    <td className="py-3 px-4 text-left lg:text-xl">
                      {session.referral}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <MdNavigateNext className="size-7 lg:size-10" />
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 text-left lg:text-xl">Total Events</th>
                    <td className="py-3 px-4 text-left lg:text-lg">
                      {session.accountType}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <MdNavigateNext className="size-7 lg:size-10" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
