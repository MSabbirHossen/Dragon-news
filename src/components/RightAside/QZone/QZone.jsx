import React from "react";
import classImg from "../../../assets/class.png";
import classImg2 from "../../../assets/playground.png";
import classImg3 from "../../../assets/swimming.png";

const QZone = () => {
  return (
    <div className="">
      <h4 className="font-bold">QZone</h4>

      <div className="bg-base-200 p-4 rounded-md space-y-3">
        <img src={classImg} alt="Class" />
        <img src={classImg2} alt="Playground" />
        <img src={classImg3} alt="Swimming" />
      </div>
    </div>
  );
};

export default QZone;
