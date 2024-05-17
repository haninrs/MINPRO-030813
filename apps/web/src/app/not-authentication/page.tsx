'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function PreVerify() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });

  return (
    <div>
      <div className="bg-white min-h-screen flex justify-center items-center p-10 sm:p-5 md:p-6">
        <div className="rounded-lg border-t-4 flex flex-col items-center border-[#000066] bg-white p-3  shadow-lg">
          <h1 className="text-2xl sm:text-5xl text-[#000066] text-center font-bold m-5 ">
            You are not authenticated
          </h1>
          <p className="text-xl sm:text-3xl text-balance text-center font-semibold text-gray-500 sm:mx-9 sm:my-7 mx-5 my-3">
            You will redirect to home page
          </p>
        </div>
      </div>
    </div>
  );
}
