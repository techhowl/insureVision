import React from 'react';
import './Section7.css'

const index = ({sectionRef}) => {
  return (
    <div className='container'>
      <div className='row mx-0'>
        {/* Left side column (currently empty) */}
        <div className='col-6'>
            <p  style={{fontSize:"10px",color:"#B94C99"}}>CONTACT US</p>
            <h1 className='text-white'>Deploying Across</h1>
            <h1 className='text-white'>The Eco-System</h1>
             <p className='text-white'>Join the future with us now. Get in touch </p>
             <p className='text-white'>to know more</p>

            <div className='row'>
                <div className='col-3 d-flex align-items-center text-white'>WHO ARE YOU ?</div>
                    <div class="col-8">
                        <select class="p-3 w-100 dropdown" >
                            <option value="">AN INSURANCE COMPANY</option>
                        </select>
                    </div>
            </div>
        </div>

        {/* Right side column with form */}
        <div className='col-6' ref={sectionRef}>
            {/* Name Input */}
            <div className="mb-3">
              <input
                type="text"
                className="contact-form"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <input
                type="email"
                className="contact-form"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Contact Number Input */}
            <div className="mb-3">
              <input
                type="tel"
                className="contact-form"
                id="contact"
                placeholder="Enter your contact number"
              />
            </div>

            {/* Designation Input */}
            <div className="mb-3">
              <input
                type="text"
                className="contact-form"
                id="designation"
                placeholder="Enter your designation"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-3">
              <textarea
                className="contact-form"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="mb-3">
              {/* new button for contact */}
              <button className='w-100 p-2 rounded-5 btn- btn-success text-white submit-btn'>Submit</button> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
