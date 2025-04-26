import React from 'react'
import "./Section8.css"
import footerImg from "../../assets/footer.png"

const index = () => {
  return (
    <div className='mx-0 mt-5 mb-3 last-section'>
        <div>
            <div className='row mx-3'>
                <div className='col-2'><h4 className='section8-title'>INSUREVISION</h4></div>
                <div className='col-1 px-0'><p className='section8-text'>OFFICE ADDRESS</p></div>
                <div className='col-9 d-flex justify-content-end align-icon-center text-end'>
                
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Facebook</button>
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Instagram</button>
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Blogs</button>
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Solutions</button>
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Software</button>
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Leadership</button>
                    <button className='footer-button mx-1 rounded-5 bg-transparent px-3 py-2 box section8-text'>Press Release</button>
             <img src={footerImg} className='img-fluid section8-img  ms-3'/> 
                </div> 
            </div>
            <div className='row mx-3'>
                <div className='col-2'></div>
                <div className='col-3 section8-text'>St George's Court, Winnington Avenue, Northwich, Cheshire, England, CW8 4EE</div>
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