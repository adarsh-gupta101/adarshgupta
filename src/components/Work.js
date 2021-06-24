import React from "react";
import "./work.css";
import project from "./project1.jpg";
import Projects from "./Projects";
import GitHubIcon from "@material-ui/icons/GitHub";
const Work = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <Projects
        title="Netflix clone"
        description="This is a Clone of official Netflix created using react Js.Used Tmdb api for the results and trailers for each movie is mapped from youtube "
        source="https://netfix-clone-reactjs.web.app/"
        image={"netflix"}
        repo="https://github.com/adarsh-gupta101/netflixclone-"
      />
      <Projects
        title="Tesla Clone"
        description="This is a Clone of the landing page created using React js.Images from official page.The live page and repo is  right below"
        source="https://teslareactclone.herokuapp.com/"
        repo="https://github.com/adarsh-gupta101/Tesla-clone"
        image={"tesla"}
      />
      <Projects
        title="Amazon clone"
        description="This is a  clone of Amazon.com.It has cart facility which is done using Redux-state management.Images from the offical website"
        source="https://amaznclone-ea763.web.app/"
        image={"amazon"}
      />
      <Projects
        title="Airbnb Clone"
        description="This is an airbnb clone made using MERN stack.The images are  stored in mongodb and are called via an API"
        source="https://6059548f3f0f1a245e25fb98--adarshairbnbclonemern.netlify.app/"
        repo="https://github.com/adarsh-gupta101/Airbnbclone"
        image={"airbnb"}
      />
      {/* <Projects title description name /> */}
      <div id="mm">
        <a href="https://github.com/adarsh-gupta101/whatsapp-clone">
          Whatsapp clone
        </a>
      </div>
      <div id="mm">
        <a href="https://github.com/adarsh-gupta101/videocall">Zoom clone</a>
      </div>
      <div id="mm">
        <a href="https://github.com/adarsh-gupta101/tinder-react">
          Tinder clone
        </a>
      </div>
      <div id="mm">
        <a href="https://github.com/adarsh-gupta101/slack-react-js">
          Slack clone
        </a>
      </div>
      <div id="mm">
        <a href="https://github.com/adarsh-gupta101/Twitter-bot">Twitter Bot</a>
      </div>
    </div>
  );
};

export default Work;
