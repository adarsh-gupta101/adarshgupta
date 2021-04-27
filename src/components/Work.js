import React from "react";
import "./work.css";
import project from "./project1.jpg";

const Work = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <div
        className="work"
        style={{ display: "flex", flexDirection: "column", marginTop: "45px" }}
      >
        <img className="img" src={project} width="80%" height="auto" alt="" />

        <iframe
          className="iframe a"
          src="https://netfix-clone-reactjs.web.app/"
          width="80%"
          height="550px"
          title="d"
        />
        <iframe
          title="c"
          className="iframe b"
          src="https://amaznclone-ea763.web.app/"
          width="80%"
          height="550px"
        />
        <iframe
          title="b"
          className="iframe c"
          src="https://teslareactclone.herokuapp.com/"
          width="80%"
          height="550px"
          scrolling="yes"
          frameborder="10px"
          marginwidth="0"
          marginheight="0"
        />
        <iframe
          title="a"
          className="iframe d"
          src="https://6059548f3f0f1a245e25fb98--adarshairbnbclonemern.netlify.app/"
          width="80%"
          height="550px"
          scrolling="yes"
        />
      </div>
    </div>
  );
};

export default Work;
