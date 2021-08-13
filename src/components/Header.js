import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const [show, setshoe] = useState(false);
  const headerref = useRef();
  const funv = () => {
    setshoe(!show);
    console.log(show);
  };

  return (
    <div className="header" style={{}}>
      <div className={` ${show && "container"}`}>
        <button className="icon" onClick={funv}>
          <MenuIcon></MenuIcon>{" "}
        </button>
        <div ref={headerref} className="header__link">
          {show && (
            <div className="header__link">
              <h2>
                <Link onClick={funv} to="/">
                  Home
                </Link>
              </h2>
              <h2>
                <Link onClick={funv} to="/about">
                  About
                </Link>
              </h2>
              <h2>
                <Link onClick={funv} to="/work">
                  Works
                </Link>
              </h2>
              <h2>
                <Link onClick={funv} to="/skills">
                  Skills{" "}
                </Link>
              </h2>
            </div>
          )}
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Header;
