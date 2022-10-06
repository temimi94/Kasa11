import React from "react";
import logo from "../images/logoFooter.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-center">
        <img src={logo} alt="logo-footer" />
        <p>2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
