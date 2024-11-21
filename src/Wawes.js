import React, { useState, useEffect, useRef } from "react";
import BIRDS from "./lib/vanta.waves.min.js";
import "./components/header/header.scss";

const Wawes = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          // el: "#element2",
          color: 0xc072d,
          waveHeight: 30,
          shininess: 15,
          waveSpeed: 1,
          zoom: 1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  // return <div ref={myRef}>Foreground content goes here</div>;
  return (
    <div>
      <header className="header" id="header">
        <div className="header_blocks"></div>

        <div className="header_blocks">
          <h1 className="header-title">Asatryan Hovhannes</h1>
          <p className="header-subtitle">
            Communications engineer
            <br />
            WEB developer
          </p>
        </div>

        <div className="header_blocks">
          <a href="#portfolio" className="header-arrow">
            <img src="./img/header/chevron-down.svg" alt="Arrow" />
          </a>
        </div>

        <div ref={myRef} className="header_bg_animation"></div>
        {/* id="element2" className=" header_bg_animation" */}
      </header>
    </div>
  );
};
export default Wawes;
