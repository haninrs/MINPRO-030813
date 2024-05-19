'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const loginUserP = async (data: any) => {
  try {
    const res = await fetch('http://localhost:8000/api/promotors/login', {
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
