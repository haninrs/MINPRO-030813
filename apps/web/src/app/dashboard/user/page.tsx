import { HeaderPage } from '@/components/Header';
import { DashboardLanding } from '@/components/dashboard/dashboardLanding';
import { getSession } from '@/lib/session';
import Link from 'next/link';
import React from 'react';
import { MdVerified } from 'react-icons/md';
import { SiBitcoinsv } from 'react-icons/si';

export const DashbordPage = async () => {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-white">
      {/* <DashboardLanding /> */}
      <section className="bg-white pb-20 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="flex  gap-2">
              <h1 className="text-gray-900  text-3xl md:text-5xl font-extrabold mb-2">
                {session?.username}
              </h1>
              <MdVerified
                className="size-7 self-center fill-blue-600"
                fill=""
              />
            </div>
            <Link
              href="/profile"
              className=" text-blue-600 text-sm font-medium inline-flex items-center px-2.5 py-0.5  mb-2"
            >
              Edit account details
            </Link>

            <div className="max-w-sm animate-pulse rounded-lg flex items-center justify-between bg-gray-400 min-w-full z-0 p-3 h-min">
              <p className="text-white p-3 ">Your Points</p>
              <div className="flex gap-1 items-center">
                <SiBitcoinsv className="size-7 fill-white" />
                <p className="text-white ">90000</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Design
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Start with Flowbite Design System
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p>
              <a
                href="#"
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
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Code
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Best react libraries around the web
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p>
              <a
                href="#"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      <DashboardLanding />
    </div>
  );
};

export default DashbordPage;
