import React, { useEffect } from "react";
import "./Header.css";
import headerImg from "../../assets/logo.png";

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
          
          <button
            onClick={scrollToSection}
            className="bg-[#b94c99] text-white rounded-full px-6 py-2  border-[#b94c99] transition-all active:bg-transparent active:text-white active:border-[#b94c99] mr-2"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="footer-sticky">
        <div class="container-fluid">
          <div className="row">
            <div className="col-6 d-flex justify-content-start gap-2 ml-0.3">
              <button className="border border-[#b94c99] text-[#b94c99] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#b94c99] hover:text-white active:bg-[#b94c99] active:text-white">
                Facebook
              </button>

              <button className="border border-[#b94c99] text-[#b94c99] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#b94c99] hover:text-white active:bg-[#b94c99] active:text-white">
                Instagram
              </button>

              <button className="border border-[#b94c99] text-[#b94c99] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#b94c99] hover:text-white active:bg-[#b94c99] active:text-white">
                Blogs
              </button>
            </div>
            <div className="col-6 d-flex justify-content-end gap-2 mr-0.4">
              <button className="border border-[#b94c99] text-[#b94c99] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#b94c99] hover:text-white active:bg-[#b94c99] active:text-white">
                Solutions
              </button>

              <button className="border border-[#b94c99] text-[#b94c99] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#b94c99] hover:text-white active:bg-[#b94c99] active:text-white">
                Software
              </button>

              <button className="border border-[#b94c99] text-[#b94c99] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#b94c99] hover:text-white active:bg-[#b94c99] active:text-white">
                Leadership
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
