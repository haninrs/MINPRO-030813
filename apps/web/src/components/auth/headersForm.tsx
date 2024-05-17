import React from 'react';

interface Iheader {
  title: string;
  className? : string
}

export default function HeadersForm({ title , className }: Iheader) {
  return (
    <div className={`${className}`}>
      <div className=" text-black font-bold mb-7">EVENT KITA</div>
      <div className=" text-black mb-2 font-semibold">{title}</div>
    </div>
  );
}
