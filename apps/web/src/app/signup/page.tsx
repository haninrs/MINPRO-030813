import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <div className="bg-white p-3">
        <div className="min-h-screen  bg-white grid place-content-center">
          <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="mb-4">
              <Link href={'/'}>Back to home</Link>
            </div>
            <div className="bg-gray-50 border-t-4 border-[#000066] rounded-lg p-8 md:p-12 mb-8 shadow-xl">
              <div className="flex flex-col justify-center items-center gap-2 p-8">
                <h1 className="text-2xl text-center text-gray-600 font-bold mb-12 mt-3">
                  Sign Up As
                </h1>
                <Link
                  href={'/signup/costumer'}
                  className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                transition-ease hover:scale-105 duration-300
                "
                >
                  Costumer
                </Link>

                <p className="text-center font-semibold text-gray-600">Or</p>

                <Link
                  href={'/signup/organizer'}
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
    </div>
  );
}
