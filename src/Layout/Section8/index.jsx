import React from 'react'
import "./Section8.css"
import footerImg from "../../assets/footer.png"

const index = () => {
  return (
    <div className='mx-0 mt-5 mb-3 last-section'>
        <div className='container-fluid'>
            <div className='row mx-3'>

                <div className='col-12 col-md-2'>
                    <h4 className='section8-title'>INSUREVISION</h4>
                </div>
                <div className='col-12 col-md-2 px-0'>
                    <p className='mb-3 text-white fw-bold'>OFFICE ADDRESS</p>
                    <p className='tewxt-white text-white'>St George's Court, Winnington Avenue, Northwich, Cheshire, England, CW8 4EE</p>
                </div>
                <div className='col-md-8'>
                    <div className="row flex-wrap justify-content-end align-items-center">
                        <div className="col-auto px-1">
                            <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Facebook</button>

                        </div>
                        <div className="col-auto px-1">
                            <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Instagram</button>

                        </div>
                        <div className="col-auto px-1">
                             <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Blogs</button>

                        </div>
                        <div className="col-auto px-1">

                            <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Solutions</button>
                        </div>
                        <div className="col-auto px-1">

                            <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Software</button>
                        </div>
                        <div className="col-auto px-1">

                            <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Leadership</button>
                        </div>
                        <div className="col-auto px-1">

                                <button className='footer-button mx-1 rounded-5 bg-transparent py-3 box text-white'>Press Release</button>
                        </div>
                        <div className="col-auto px-1">
                        <img src={footerImg} className='mt-3'/> 
                        </div>
                    </div>
             
                </div> 
            </div>
            <div className='row mx-3'>
                <div className='col-2'></div>
                <div className='col-3 section8-text'></div>
                <div className='col-7 text-end'>
                    <div className='row mx-0 justify-content-end'>
                        <div className='col-auto section8-text'> <p>© 2025 Advanced Automobile Solutions Ltd.</p></div>
                        <div className='col-auto section8-text'> <p>Cookie Policy</p></div>
                        <div className='col-auto section8-text'> <p>Privacy Policy</p></div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default index