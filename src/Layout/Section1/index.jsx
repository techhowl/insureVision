import React from "react";
import "./Section1.css";
import section1 from "../../assets/section1.png";
import bannerImg from "../../assets/banner.png";

const Section1 = () => {
  return (
    <section>
      <div className="row mx-0">
        <div className="col-12 px-0 position-relative">
          <img src={bannerImg} alt="" className="w-100" />
          <div className="main-banner-content position-absolute top-0 start-0 w-100 min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100 mx-0">
              <div className="col-md-6 image-container mx-auto">
                <img
                  src={section1}
                  alt="Safety"
                  className="img-fluid w-100 opacity-100 mt-5 safety"
                />

                {/* Top Center Text */}
                <div className="overlay-text top-text text-center fw-bold">
                  <h1>More Context</h1>
                  <h1>Less Risk</h1>
                </div>

                {/* Bottom Center Text */}
                <div className="overlay-text bottom-text text-center">
                  <h5>
                    Insurevision combines video from a vehicle’s forward-facing
                    camera
                  </h5>
                  <h5>
                    with a unique transformer AI model to deliver intelligent
                    risk analysis.
                  </h5>
                </div>
                <p className='text-msg text-center mb-3'>THE FUTURE OF ROAD SAFETY, NOW.</p>
              </div>
            </div>
            {/* More content wala full div */}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Section1;
