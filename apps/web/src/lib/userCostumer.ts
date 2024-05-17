'use server';

import { error } from 'console';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// export const regUserc = async (data: any) => {
//   const res = await fetch('http://localhost:8000/api/users', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const result = await res.json();

//   if (res.status == 201) {
//     alert('Submit Form Register Susccessfully');
//   } else {
//     alert(result.message);
//     console.log('error', result.message, error);
//   }

//   return result;
// };

export const loginUserc = async (data: any) => {
  try {
    const res = await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to login');
    }

    const result = await res.json();

    cookies().set({
      name: 'session',
      value: result.token,
      httpOnly: true,
      path: '/',
    });
  } catch (error) {
    console.log(error);
    return error;
  }
  redirect('/');
};

export const getUserc = async (token: any) => {
  if (token) {
    const res = await fetch(`http://localhost:8000/api/users/keep-login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();

    return result;
  } else {
    return 'Login First';
  }
  redirect('/');
};
