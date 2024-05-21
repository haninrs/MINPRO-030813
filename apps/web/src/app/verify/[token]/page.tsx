'use client';

import { VerifyEmail } from '@/lib/accounts/verifyEmail';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function VerifyPage() {
  const params = useParams();
  console.log(params);

  const handleVerify = async () => {
    try {
      const result = await VerifyEmail(params.token)
      alert('Verify Success!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="min-h-screen  bg-white grid place-content-center">
        <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 border-t-4 border-[#000066] rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-3xl text-center text-gray-600 font-semibold mb-3">
                Click here to verify your account
              </h1>
              <Link
                as={'button'}
                href={'/login'}
                onClick={handleVerify}
                className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                transition-ease hover:scale-105 duration-300
                "
              >
                Verify
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
