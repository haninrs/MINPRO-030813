import { DashboardLanding } from '@/components/dashboard/navbarDash';
import React from 'react';
import { getSession } from '@/lib/session';
import Link from 'next/link';
import Image from 'next/image';

export const EventList = async () => {
  const session = await getSession();
  return (
    <div className="min-h-screen bg-white">
      <DashboardLanding />
      <section className="bg-white py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mt-7 lg:py-16">
          <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl text-[#000066] font-bold">
                  Your Event List
                </h1>
                <p className="py-6 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum unde cumque possimus atque consequuntur?
                </p>
                <Link
                  href={'/dashboard/orginazer/event/create'}
                  className="bg-[#FFCC00] hover:bg-[#dab626] text-white text-lg font-bold text-center py-2 px-4 rounded transition-all duration-300 hover:scale-125"
                >
                  Create Event
                </Link>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-gray-50 shadow-xl justify-center items-center flex flex-col gap-5 border border-gray-200  rounded-lg p-8 md:p-12">
              <Link
                href="/dashboard/orginazer/event"
                className="bg-white inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <Image
                  alt="EVENT"
                  width={500}
                  height={250}
                  className="rounded"
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Link>
              <Link
                href={'/dashboard/orginazer/event'}
                className="text-[#000066]  text-3xl font-extrabold mb-2"
              >
                Title Event
              </Link>
              <p className="text-lg font-normal text-gray-500  mb-4">
                DESKRIPSI EVENT
              </p>

              <p>CATEGORY EVENT</p>
              <Link
                href="/dashboard/orginazer/event"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                View more
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
            <div className=" card card-compact bg-gray-50 shadow-xl justify-center items-center flex flex-col gap-5 border border-gray-200  rounded-lg p-8 md:p-12">
              <figure>
                <Image
                  width={500}
                  height={250}
                  alt="Shoes"
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#000066] text-3xl font-bold mb-2">
                  TITLE EVENT MISAL AGAK PANJANG
                </h2>
                <p className="text-gray-500 mb-4">
                  DESKRIPSI DIKIT EVENT TAPI INI AGAK PANJANG JUGA WKWKWKWKW
                  KWKWKWKWKWKW
                </p>
                <div className="card-actions justify-end">
                  <button className="bg-[#FFCC00] hover:bg-[#dab626] text-white text-lg font-bold text-center py-2 px-4 rounded transition-all duration-300 hover:scale-125">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventList;
