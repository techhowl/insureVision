import React from "react";
import "./Section1.css";
import section1 from "../../assets/section1.png";
import lines from "../../assets/lines.png";

const Section1 = () => {
  return (
    
    <section className="section-1 position-relativer">
      <img src={lines} alt="" className="w-100 banner" />
      <div className="main-banner-content position-absolute top-0 start-0 w-100 min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100 mx-0">
              <div className="col-md-5 image-container mx-auto">
              <div className="top-text text-center fw-bold">
                  <h1 className="font-figtree text-white">More Context <br /> Less Risk</h1>

                </div>
                <img
                  src={section1}
                  alt="Safety"
                  className="img-fluid w-100 opacity-100 mt-5 safety"
                />

                {/* Top Center Text */}
                

                {/* Bottom Center Text */}
                <div className="overlay-text bottom-text text-center">
                  <h5>
                    Insurevision combines video from a vehicle’s forward-facing
                    camera  with a unique transformer AI model to deliver intelligent
                    risk analysis.
                  </h5>
                  {/* <h5>
                   
                  </h5> */}
                </div>
                <p className='text-msg text-center mb-3'>THE FUTURE OF ROAD SAFETY, NOW.</p>
              </div>
            </div>
            {/* More content wala full div */}
          </div>
     
      
    </section>
    
  );
};

export default Section1;
