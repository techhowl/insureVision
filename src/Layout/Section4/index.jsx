import React, { useEffect, useState, useRef } from "react";

const stepDetails = [
  {
    title: "ACCESS & EXTRACT",
    description:
      "Accessing and extracting available video data from existing dashcams or from our high tech AI powered dashcams in vehicles and fleets.",
    bgColor: "#b94c99",
    bullets: ["AI Dashcams", "Video Extraction", "Video Uploads"],
  },
  {
    title: "ANALYZE & PREDICT",
    description:
      "Extracted video data is analysed on the edge or in the cloud into actionable risk insights, delivering driver-level risk prediction and real-time accident prevention.",
    bgColor: "#3b82f6",
    bullets: ["Driver Behaviour", "Road Risk Patterns", "Driver Alert"],
  },
  {
    title: "COACH & IMPROVE",
    description:
      "In the long term, risk insights are utilised for driver behaviour and patterns with personalized feedback, behaviour modification suggestions and fleet/driver monitoring services.",
    bgColor: "#10b981",
    bullets: ["Personalized Feedback", "Driver/Fleet Monitoring", "Behaviour Modification"],
  },
];

const Section4 = () => {
  const [progress, setProgress] = useState(0);
  const [connectorProgress, setConnectorProgress] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observe section visibility to pause/play animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate only when visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      } else if (connectorProgress < 100) {
        setConnectorProgress((cp) => cp + 2);
      } else {
        setActiveButton((idx) => (idx + 1) % stepDetails.length);
        setProgress(0);
        setConnectorProgress(0);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [isVisible, progress, connectorProgress]);

  const currentStep = stepDetails[activeButton];

  return (
    <div className=" text-white w-full h-screen px-[10%] py-10">
      {/* Intro Section */}
      <div>
        <h3 className="text-sm uppercase text-center tracking-widest font-bold">
          introducing
        </h3>
        <h1 className="text-6xl font-semibold tracking-wider text-center uppercase mt-2">
          Enviromatics
        </h1>
        <h1 className="text-3xl font-normal tracking-wider text-center uppercase mt-2">
          Telematics 2.0
        </h1>
        <p className="text-[#b94c99] text-center capitalize text-sm mt-4 font-medium">
          technology built based on real world scenarios
        </p>
      </div>

      {/* Progress Buttons */}
      <div ref={sectionRef} className="flex mt-7 gap-x-0 w-full max-w-5xl mx-auto">
        {stepDetails.map((step, index) => (
          <div key={index} className="relative flex items-center flex-1">
            <button
              onClick={() => {
                setActiveButton(index);
                setProgress(0);
                setConnectorProgress(0);
              }}
              className={`border uppercase border-slate-200 rounded-full py-4 text-xs w-full flex items-center justify-between pl-4 relative overflow-hidden ${
                activeButton === index ? "border-[#b94c99]" : ""
              }`}
            >
              <span className="z-10">{step.title}</span>
              <div className="absolute bottom-50 right-0 w-36 h-0.5 flex z-40">
                <div
                  className="h-full transition-all duration-100"
                  style={{
                    width:
                      activeButton === index
                        ? connectorProgress > 0
                          ? "100%"
                          : `${progress}%`
                        : "0%",
                    backgroundColor:
                      activeButton === index ? "#b94c99" : "white",
                  }}
                />
                <div className="h-full flex-1 bg-white" />
              </div>
            </button>
            {index < stepDetails.length - 1 && (
              <div className="w-12 h-0.5 bg-white relative">
                <div
                  className="absolute left-0 top-0 h-full transition-all duration-100"
                  style={{
                    width:
                      activeButton === index && connectorProgress > 0
                        ? `${connectorProgress}%`
                        : "0%",
                    backgroundColor:
                      activeButton === index && connectorProgress > 0
                        ? "#b94c99"
                        : "white",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-7 flex w-full max-w-5xl mx-auto justify-center gap-x-5">
        <div className="w-5/12 flex flex-col justify-between py-3">
          <h4 className="text-slate-200 text-sm leading-relaxed w-10/12 capitalize">
            {currentStep.description}
          </h4>
          <div className="flex flex-col mt-5 gap-7">
            {currentStep.bullets.map((line, idx) => (
              <div key={idx} className="flex items-center gap-x-5">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="0" width="100" height="100" stroke="#ffffff" fill="none" strokeWidth="2" />
                  <circle cx="50" cy="50" r="20" stroke="#b94c99" strokeWidth="1" fill="none" />
                </svg>
                <h3 className="uppercase text-xs">{line}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="w-4/12">
          <div className="w-full h-100" style={{ backgroundColor: currentStep.bgColor }} />
        </div>
      </div>
    </div>
  );
};

export default Section4;