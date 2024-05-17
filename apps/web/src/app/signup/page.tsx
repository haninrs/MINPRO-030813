import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <div className="bg-white min-h-screen flex justify-center items-center p-10 sm:p-5 md:p-6">
        <div className="rounded-lg border-t-4 flex flex-col items-center border-[#000066] bg-white p-3  shadow-lg">
          <h1 className="text-2xl sm:text-5xl text-[#000066] text-center font-bold m-5 ">
            Signup
          </h1>
          <p className="text-xl sm:text-3xl text-balance text-center font-semibold text-gray-500 sm:mx-9 sm:my-7 mx-5 my-3">
            What would you like to be?
          </p>
          <Link
            href={'/signup/costumer'}
            className="text-[#000066] sm:text-2xl  font-semibold mb-0.5 mt-2 sm:mb-4 sm:mt-6 hover:pointer-events-auto"
          >
            Buy a ticket event
          </Link>

          <p>Or</p>

          <Link
            href={'/signup/organizer'}
            className="text-[#000066] sm:text-2xl font-semibold mt-0.5 mb-2 sm:mt-4 sm:mb-6 hover:pointer-events-auto"
          >
            Create a ticket event
          </Link>
        </div>
      </div>
    </div>
  );
}
