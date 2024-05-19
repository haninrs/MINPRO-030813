'use client';

import { onLogout } from '@/lib/session';
import React from 'react';

export default function ButtonLogout() {
  //   const router = useRouter();
  const logout = async () => {
    onLogout();
  };

  return (
    <div>
      <button onClick={logout} className="text-white">
        Log Out
      </button>
    </div>
  );
}
