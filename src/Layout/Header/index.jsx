import React, { useEffect } from "react";
import "./Header.css";
import headerImg from "../../assets/logo.png"

const Header = ({ scrollToSection }) => {
  useEffect(() => {
    const companyName = document.querySelector(".company-name");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        companyName.style.display = "none";
      } else {
        companyName.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const footerSticky = document.querySelector(".footer-sticky");
    const lastSection = document.querySelector(".last-section");
  
    const handleScroll = () => {
      if (!footerSticky || !lastSection) return;
  
      const lastSectionTop = lastSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (lastSectionTop < windowHeight) {
        footerSticky.style.display = "none";
      } else {
        footerSticky.style.display = "block";
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="header row mx-0 justify-content-between align-items-center fw-bold my-2 pt-3 mb-5">
        <div className="col text-start ml-8">
          <div className="menu-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="col company-name text-center ">
          
          <img src={headerImg} className="label mx-auto" />
        </div>
        <div className="col text-end button-styling">
          <button className="btn btn-success no-hover" onClick={scrollToSection}>
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="footer-sticky">
        <div class="container-fluid">
          <div className="row">
            <div className="col-6 d-flex justify-content-start gap-2 ml-0.3">
              <button className="btn btn-outline-primary social-btn">Facebook</button>
              <button className="btn btn-outline-primary social-btn">Instagram</button>
              <button className="btn btn-outline-primary social-btn">Blogs</button>
            </div>
            <div className="col-6 d-flex justify-content-end gap-2 mr-0.4">
              <button className="btn btn-outline-secondary social-btn">Solutions</button>
              <button className="btn btn-outline-secondary social-btn">Software</button>
              <button className="btn btn-outline-secondary social-btn">Leadership</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
