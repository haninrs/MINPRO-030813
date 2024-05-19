'use client';

import Link from 'next/link';
import { MdEventAvailable } from 'react-icons/md';
import { BiCalendarEvent } from 'react-icons/bi';
import { RiAccountPinBoxFill } from 'react-icons/ri';
import { IoHome } from 'react-icons/io5';

export function DashboardLanding() {
  return (
    <div className="menu-container w-3/4 sm:w-2/5 ">
      <ul className="menu menu-horizontal w-full items-center justify-center  bg-[#000066] rounded-box">
        <li className=" m-1">
          <Link
            href={'/'}
            className="tooltip hover:bg-opacity-50 tooltip-top"
            data-tip="Home"
          >
            <IoHome className="size-6 sm:size-10" fill="white" />
          </Link>
        </li>
        <li className="m-1">
          <Link
            href={'/dashboard/user/orders'}
            className="tooltip tooltip-top"
            data-tip="Your Events"
          >
            <BiCalendarEvent className="size-7 sm:size-10" fill="white" />
          </Link>
        </li>
        <li className=" m-1">
          <Link
            href={'/dashboard/user/profile'}
            className="tooltip tooltip-top"
            data-tip="Account Settings"
          >
            <RiAccountPinBoxFill className="size-6 sm:size-10" fill="white" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
