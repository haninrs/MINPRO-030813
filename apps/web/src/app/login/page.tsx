import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className=" bg-white">
      <div className="min-h-screen bg-white grid place-content-center">
        <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="mb-4">
            <Link href={'/'}>Back to home</Link>
          </div>
          <div className="bg-gray-50 border-t-4 border-[#000066] rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="flex flex-col justify-center items-center gap-2 p-8">
              <h1 className="text-2xl text-center text-gray-600 font-bold pb-12 pt-3">
                Log In As
              </h1>
              <Link
                href={'/login/costumer'}
                className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                transition-ease hover:scale-105 duration-300
                "
              >
                Costumer
              </Link>

              <p className="text-center font-semibold text-gray-600">Or</p>

              <Link
                href={'/login/organizer'}
                className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                transition-ease hover:scale-105 duration-300
                "
              >
                Organizer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
