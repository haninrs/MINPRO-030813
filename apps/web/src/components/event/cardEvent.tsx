import Image from 'next/image';
import React from 'react';

export interface ICardEvent {
  image: string;
  title: string;
  description: string;
  username: string;
}

export const CardEvent: React.FC<ICardEvent> = ({
  image,
  title,
  description,
  username,
}: ICardEvent) => {
  return (
    <div>
      <div className=" card card-compact bg-gray-50 shadow-xl justify-center items-center flex flex-col gap-5 border border-gray-200  rounded-lg p-8 md:p-12">
        <figure>
          <Image width={250} height={100} alt={`${title}`} src={`${image}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#000066] text-3xl font-bold mb-2">
            {title}
          </h2>
          <p className="text-gray-500 font-semibold text-lg mb-4">
            {description}
          </p>
          <span>by</span>
          <p className="text-gray-500  mb-4">{username}</p>
          <div className="card-actions justify-end">
            <button className="bg-[#FFCC00] hover:bg-[#dab626] text-white text-lg font-bold text-center py-2 px-4 rounded transition-all duration-300 hover:scale-125">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
