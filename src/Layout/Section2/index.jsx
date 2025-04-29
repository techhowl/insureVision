import React,{ useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section2.css";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    const lines = gsap.utils.toArray(".line-wrapper");
    const lineHeight = window.innerHeight * 0.8; // adjust spacing between lines

    lines.forEach((line, index) => {
      const purpleText = line.querySelector(".purple-text");

      gsap.fromTo(
        purpleText,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: `top+=${index * lineHeight} top`,
            end: `top+=${index * lineHeight + 600} top`,
            scrub: 0.5,
          },
        }
      );
    });

    // Pin the entire section during scrolling
    ScrollTrigger.create({
      trigger: ".text-section",
      start: "top top",
      end: `+=${lines.length * lineHeight}`,
      pin: true,
      scrub: true,
      markers: false, // set to true if you want to debug
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full d-flex align-items-center justify-content-center ">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <div
              className="text-section d-flex flex-column justify-content-center align-items-center text-center"
              style={{ minHeight: "80vh" }}
            >
              <div className="line-wrapper">
                <span className="base-text">
                  Humans drive cars and understand risk with our eyes, not gps
                  and
                </span>
                <span className="purple-text">
                  Humans drive cars and understand risk with our eyes, not gps
                  and
                </span>
              </div>
              <div className="line-wrapper">
                <span className="base-text">
                acerometer data. We focus our attention on danger rather than
                  on counting
                </span>
                <span className="purple-text">
                acerometer data. We focus our attention on danger rather than
                  on counting
                </span>
              </div>
              <div className="line-wrapper">
                <span className="base-text">
                  and classifying road objects. Our understanding is based on
                  our experience
                </span>
                <span className="purple-text">
                  and classifying road objects. Our understanding is based on
                  our experience
                </span>
              </div>
              <div className="line-wrapper">
                <span className="base-text">
                  as drivers... InsureVision analyses risk contextually just
                  like humans.
                </span>
                <span className="purple-text">
                  as drivers... InsureVision analyses risk contextually just
                  like humans.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
