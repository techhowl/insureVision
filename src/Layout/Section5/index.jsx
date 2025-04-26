import React from 'react'
import './Section5.css'

const Section5 = () => {
  return (
        <div className='row mx-0 justify-content-center mt-5'>
            <div className='col-4'>
                <div className='row mx-0 flex-column section5-text'>
                    <div className='col-auto mb-5 pt-4'>
                        Accessing and extracting available video data from existing dashcams along with installment of high tech AI powered dashcams in vehicles and fleets. Video data is uploaded to the cloud for analysis.
                    </div>
                    <div className='col-auto mt-5'  style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <div className='my-2'> <img src="assets/pointer.jpg" alt="images" className='img-fluid'/> AI DASH CAMS</div>
                            <div className='my-2'> <img src="assets/pointer.jpg" alt="images" className='img-fluid'/> AI DASH CAMS</div>
                            <div className='my-2'> <img src="assets/pointer.jpg" alt="images" className='img-fluid'/> AI DASH CAMS</div>
                    </div>
                </div>
            </div>
            <div className='col-3 background'></div>
        </div>
  )
}

export default Section5
