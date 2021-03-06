
import "./project.css";


const Projects = ({ description, title, source, image, repo }) => {
  var img = require(`./assets/${image}.jpg`);
  var image2 = img.default;

  return (
    <>
      <div className="maincont">
        <img className="project__image" src={image2} alt="projectpics" />
        <div className="red">
          <h1 className="p__title">{title}</h1>
          <p className="p__Desc">{description}</p>
          <div style={{ marginLeft: "20%" }}>
            <a
              className="Apr"
              style={{ display: "inline-block", marginTop: "12px" }}
              href={source}
            >
              Live Link
            </a>
            <a
              className="Apr"
              href={repo}
              style={{
                display: "inline-block",
                marginTop: "12px",
                margin: "12%",
              }}
            >
              Repo
            </a>
          </div>
        </div>
      </div>
      <div className="tri"> </div>
    </>
  );
};

export default Projects;
