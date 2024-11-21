import React, { useState, useEffect, useRef } from "react";
import WAWES from "vanta/dist/vanta.waves.min.js";
import "../../scss/mixins.scss";
import "./header.scss";
import arrow from "../../assets/chevron-down.svg";

const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAWES({
          el: myRef.current,
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
            <img src={arrow} alt="Arrow" />
          </a>
        </div>

        <div ref={myRef} className="header_bg_animation"></div>
      </header>
    </div>
  );
};

export default Header;
