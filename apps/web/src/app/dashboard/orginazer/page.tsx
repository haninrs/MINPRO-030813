import { SiStatista } from 'react-icons/si';
import { PiMoneyWavyFill } from 'react-icons/pi';
import { DashboardLanding } from '@/components/dashboard/navbarDash';
import React from 'react';
import { MdVerified } from 'react-icons/md';
import { FaMoneyBill } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { FaClipboardList } from 'react-icons/fa';
import { getSession } from '@/lib/session';
import Link from 'next/link';

export const DashbordPage = async () => {
  const session = await getSession();
  return (
    <div className="min-h-screen bg-white">
      <DashboardLanding />
      <section className="bg-white py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mt-7 lg:py-16">
          <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="flex  gap-2">
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                {session?.username}
              </h1>
              <MdVerified
                className="size-7 self-center fill-blue-600"
              />
            </div>
            <Link
              href="/dashboard/orginazer/profile"
              className=" text-blue-600 text-sm font-medium inline-flex items-center px-2.5 py-0.5  mb-4"
            >
              Edit account details
            </Link>

            <div className="max-w-sm animate-pulse rounded-lg bg-gray-400 min-w-full p-3 h-min">
              <Link
                href={'/dashboard/orginazer/revenue'}
                className="flex items-center justify-between"
              >
                <p className="text-white p-3 ">Revenue</p>
                <div className="flex gap-1 p-3 items-center">
                  <FaMoneyBill className="size-7 fill-white" />
                  <p className="text-white ">90000</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-gray-50 shadow-xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <Link
                href="/dashboard/orginazer/event"
                className="bg-white inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <FaClipboardList className="size-7 fill-[#FFCC00]" />
              </Link>
              <h2 className="text-[#000066] dark:text-white text-3xl font-extrabold mb-2">
                Your Event List
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, fugit?
              </p>
              <Link
                href="/dashboard/orginazer/event"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 shadow-xl border border-gray-200 rounded-lg p-8 md:p-12">
              <Link
                href="/dashboard/orginazer/event"
                className="bg-white  inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <IoIosCreate className="size-9 fill-[#FFCC00]" />
              </Link>
              <h2 className="text-[#000066] dark:text-white text-3xl font-extrabold mb-2">
                Create Your Event
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                labore?
              </p>
              <Link
                href="/dashboard/orginazer/event"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Create event
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 shadow-xl border border-gray-200 rounded-lg p-8 md:p-12">
              <Link
                href="/dashboard/orginazer/stats"
                className="bg-white  inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <SiStatista className="size-9 fill-[#FFCC00]" />
              </Link>
              <h2 className="text-[#000066] dark:text-white text-3xl font-extrabold mb-2">
                Report List
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                eligendi.
              </p>
              <Link
                href="/dashboard/orginazer/stats"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 shadow-xl border border-gray-200 rounded-lg p-8 md:p-12">
              <Link
                href="//dashboard/orginazer/stats"
                className="bg-white  inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <PiMoneyWavyFill className="size-9 fill-[#FFCC00]" />
              </Link>
              <h2 className="text-[#000066] dark:text-white text-3xl font-extrabold mb-2">
                Transactions List
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                tenetur?
              </p>
              <Link
                href="/dashboard/orginazer/stats"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read More
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashbordPage;
