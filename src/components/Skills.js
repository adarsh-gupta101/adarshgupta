import "./skills.css";
const Skills = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <div className="skill111">
        <div className="skilldes">
          <h3>Frontend</h3>
          <p>
            As a web-developer,I have experience in{" "}
            <i>
              HTML,CSS,JAVASCRIPT,REACT JS,NEXT_JSMATERIAL_UI,STYLED COMPONENTS
            </i>
            .I had done few projects as a freelancer for some clients in Upwork
            and some other freelance platform.
          </p>
        </div>
        <div className="skilldes">
          <h3>Backend</h3>
          <p>
            Talking about backend I have experience in <i>EXPRESS_JS,NODE_JS</i>
            .I also have done few projects like video_chat application using
            socket.io
          </p>
        </div>
      </div>
      <div className="skills">
        <p>Html</p>
        <div className="containers">
          <div className="skill Html"></div>
        </div>
        <p>Css</p>
        <div className="containers">
          <div className="skill css"></div>
        </div>
        <p>Javascript</p>
        <div className="containers">
          <div className="skill Javascript"></div>
        </div>
        <p>React JS</p>
        <div className="containers">
          <div className="skill React"></div>
        </div>

        <p>Node JS</p>
        <div className="containers">
          <div className="skill Node"></div>
        </div>
        <p>Exress JS</p>
        <div className="containers">
          <div className="skill Express"></div>
        </div>
        <p> Mongo DB</p>
        <div className="containers">
          <div className="skill MongoDB"></div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
