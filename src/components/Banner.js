import React from "react";
import "./banner.css";
import uns from "./unsplash.jpg";

import nann2 from "./nann2.mp4";
function Banner() {
  return (
    <div className="banner">
      <img src={uns} className="banner__image" alt=""></img>
      <video
        className="banner__video"
        autoplay=""
        loop={true}
        controls={false}
        muted
      >
        <source src={nann2} type="video/mp4" />
      </video>
      <div className="banner_introduction">
        {" "}
        Hello.<br></br>I'm <span className="banner__name">Adarsh Gupta.</span>
        <br />
        <div className="banner__D">
          <span className="banner__D_D">D</span>
          <div className="banner__D_names">
            <p className="banner_p">eveloper</p>
            <p className="banner_p">esigner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
