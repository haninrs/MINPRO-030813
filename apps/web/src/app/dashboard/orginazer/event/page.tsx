import { DashboardLanding } from '@/components/dashboard/navbarDash';
import React from 'react';
import { getSession } from '@/lib/session';
import Link from 'next/link';
import Image from 'next/image';
import { CardEvent } from '@/components/event/cardEvent';

export const EventList = async () => {
  const session = await getSession();
  console.log(session);

  return (
    <div className="min-h-screen bg-white">
      <DashboardLanding />
      <section className="bg-white py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mt-7 lg:py-16">
          <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-xl">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl text-[#000066] font-bold">
                  Total Events
                </h1>
                <p className="py-6 text-3xl font-semibold text-gray-600">
                  {session?.totalEvent ? session?.totalEvent : 0}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 ">
            {session.event.event.map((items: any) => (
              <CardEvent
                key={items.id}
                title={items.title}
                image={items.imageUrl}
                description={items.description}
                username={session.username}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventList;
