import "../../scss/mixins.scss";
import "./footer.scss";

import my_logo from "../../assets/svg/my_logo.svg";
import github from "../../assets/svg/github.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import x from "../../assets/svg/x.svg";
import youtube from "../../assets/svg/youtube.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_wraper">
          <div className="footer_block footer_block_1 red">
            <p>created by</p>
            <p>Asatryan Hov</p>
            <a
              href="https://asatryanhov.github.io/AsatryanHov/"
              className="footer-copyright-name"
              target="_blank"
              rel="noreferrer">
              <img src={my_logo} alt="logo" />
            </a>
          </div>

          <div className="footer_block footer_block_2  blue">
            <p>My profiles in social media</p>

            <div className="social_icons_block">
              <a
                className="social_icon"
                href="https://www.instagram.com/asatryan_hov/"
                target="_blank"
                rel="noreferrer">
                <img src={instagram} alt="" />
              </a>

              <a
                className="social_icon"
                href="https://x.com/AsatryanHov/"
                target="_blank"
                rel="noreferrer">
                <img src={x} alt="" />
              </a>
              <a
                className="social_icon"
                href="https://www.linkedin.com/in/asatryanhov/"
                target="_blank"
                rel="noreferrer">
                <img src={linkedin} alt="" />
              </a>
              <a
                className="social_icon"
                href="https://github.com/AsatryanHov"
                target="_blank"
                rel="noreferrer">
                <img src={github} alt="" />
              </a>

              <a
                className="social_icon"
                href="https://www.youtube.com/@asatryanhov"
                target="_blank"
                rel="noreferrer">
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>

          <div className="footer_block footer_block_3 orange">
            <p>mail@asatryanhov.pl</p>
            <a href="mailto:mail@asatryanhov.pl" className="footer-button">
              Mail me
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
