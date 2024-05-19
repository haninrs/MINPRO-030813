// 'use client';

import FormLogin from '@/components/auth/formLogin';
import { cookies } from 'next/headers';
import React, { Suspense } from 'react';

export default async function LoginPage() {
  const data = await fetch('http://localhost:8000/api/users/profile', {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  const session = await data.json();
 
  console.log(session.values);

  return (
    <div className="bg-white p-7">
      <Suspense>
        <FormLogin />
      </Suspense>
    </div>
  );
}
