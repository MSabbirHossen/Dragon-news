import React from 'react';
import Marquee from "react-fast-marquee";
import { FcNews } from "react-icons/fc";

const LatestNews = () => {
    return (
        <div className="flex justify-between gap-5 my-4 w-full">
          <p className="text-base-200 bg-secondary px-3 py-2 ">Latest</p>
          <Marquee pauseOnHover={true} speed={50}>
            <FcNews className="ml-5" />
            <p className="font-bold ml-1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              modi!
            </p>
            <FcNews className="ml-5" />
            <p className="font-bold ml-1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              modi!
            </p>
            <FcNews className="ml-5" />
            <p className="font-bold ml-1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              modi!
            </p>
          </Marquee>
        </div>
    );
};

export default LatestNews;