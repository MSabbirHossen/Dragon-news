import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="my-4 ">
      <h4 className="font-bold"> Find Us On</h4>
      <div className="bg-base-100 p-4 rounded-md  space-y-3">
        <button className="btn join-item justify-start w-full">
          <FaTwitter /> Twitter
        </button>
        <button className="btn join-item justify-start w-full">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start w-full">
          <FaLinkedin /> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default FindUs;
