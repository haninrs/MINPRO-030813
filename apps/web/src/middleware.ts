import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';

const protectedPages = [
  '/dashboard/orginazer',
  '/dashboard/orginazer/profile',
  '/dashboard/orginazer/event/create',
  '/dashboard/orginazer/event/eventDetail',
  '/dashboard/orginazer/revenue',
  '/dashboard/orginazer/stats',
  '/dashboard/user/profile',
  '/dashboard/user/orders',
  '/dashboard/user',
  ,
];

const protectUserPages = [
  '/dashboard/user',
  '/dashboard/user/profile',
  '/dashboard/user/orders',
];

const protectOrginazerPages = [
  '/dashboard/orginazer',
  '/dashboard/orginazer/profile',
  '/dashboard/orginazer/event/create',
  '/dashboard/orginazer/event/eventDetail',
  '/dashboard/orginazer/revenue',
  '/dashboard/orginazer/stats',
];

export async function middleware(request: NextRequest) {
  const token = cookies().get('session');
  // console.log(token);

  const url = request.nextUrl.pathname;
  if (protectedPages.includes(url)) {
    if (token === undefined) {
      // console.log(token);

      return NextResponse.redirect(
        new URL(`/login?redirect=${url}`, request.url),
      );
    }
    try {
      const res = await fetch(
        'http://localhost:8000/api/accounts/accountType',
        {
          method: 'GET',
          headers: {
            Cookie: cookies().toString(),
            // Authorization: `Bearer ${token?.value}`,
            // session: token?.value,
          },
        },
      );
      const data = await res.json();
      // console.log(data.accountType);

      if (protectUserPages.includes(url) && data.accountType == 'user') {
        return NextResponse.next();
      }

      if (
        protectOrginazerPages.includes(url) &&
        data.accountType == 'orginazer'
      ) {
        return NextResponse.next();
      }

      return NextResponse.redirect(
        new URL(`/login?redirect=${url}`, request.url),
      );
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${url}`, request.url),
      );
    }
    // return NextResponse.next();
  }
}
