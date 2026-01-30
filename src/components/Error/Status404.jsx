import React from "react";

const Status404 = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-6xl font-bold ">404 Not Found</h1>
      <br /> <br />
      <p className="text-2xl mt-4">The page you are looking for does not exist.</p>
      <a href="/" className="btn btn-secondary m-4">
        {" "}
        Go to Home{" "}
      </a>
    </div>
  );
};

export default Status404;
