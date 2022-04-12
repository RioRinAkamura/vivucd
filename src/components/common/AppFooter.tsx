import { BackTop } from "antd";
import React from "react";
import logo from "../../assets/images/logo1.png";

const AppFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="" height={50} />
        </div>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 Vivucondao</div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-alt-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
};

export default AppFooter;
