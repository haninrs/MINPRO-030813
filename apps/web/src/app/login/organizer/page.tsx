// 'use client';

import FormLoginPromotor from '@/components/auth/formLoginPromotor';
import { cookies } from 'next/headers';
import React, { Suspense } from 'react';

export default async function LoginPage() {
  const data = await fetch('http://localhost:8000/api/promotors/profile', {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  const session = await data.json();
  // console.log(session);

  return (
    <div className="bg-white p-7">
      <Suspense>
        <FormLoginPromotor />
      </Suspense>
    </div>
  );
}
