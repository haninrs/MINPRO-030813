import { DashboardLanding } from '@/components/dashboard/navbarDash';
import { getSession } from '@/lib/session';
import Link from 'next/link';
import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

export default async function ProfilePage() {
  const session = await getSession();
  return (
    <div className="min-h-screen bg-white">
      <DashboardLanding />
      <section className="bg-white py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mt-7 lg:py-16">
          <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Info Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Username</th>
                    <td>{session?.username}</td>
                    <td>
                      <MdNavigateNext />
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>Email</th>
                    <td>{session?.email}</td>
                    <td>edit</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>Your Referral</th>
                    <td>{session.referral}</td>
                    <td>edit</td>
                  </tr>
                  <tr>
                    <th>Points</th>
                    <td>{session.accountType}</td>
                    <td>edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
