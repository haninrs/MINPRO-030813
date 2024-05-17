'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function VerifyPage() {
  const params = useParams();
  console.log(params);

  const handleVerify = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/users/verify', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${params.token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      alert('Verify Success!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex w-full justify-center">
        <Link
          href={'/login'}
          onClick={handleVerify}
          className="bg-[#FFCC00] text-[#000066] w-3/5 h-30 rounded-md font-bold"
        >
          Verify
        </Link>
      </div>
    </div>
  );
}
