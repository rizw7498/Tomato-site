import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repudiandae molestias maxime modi cumque unde ullam eaque excepturi
            obcaecati, dolorem blanditiis, esse autem maiores adipisci totam?
            Accusamus in corporis odio!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />

          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Ploicy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+92 3005645467</li>
                <li>rizw.4546ali@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
        <p className="footer-copy-right">Copyright &copy; Riz tech</p>
    </div>
  );
};

export default Footer;
