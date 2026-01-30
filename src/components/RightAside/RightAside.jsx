import React from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import FindUs from "./FindUs/FindUs";

import Adds from "./Adds/Adds";
import QZone from "./QZone/Qzone";

const RightAside = () => {
  return (
    <div className="p-2">
      <SocialLogin />
      <FindUs />
      <QZone />
      <Adds />
    </div>
  );
};

export default RightAside;
