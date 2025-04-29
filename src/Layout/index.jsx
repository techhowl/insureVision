import React, { useRef } from 'react';
import "./Layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'

const Layout = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <React.Fragment classname="layout-color">
      <div className='background-img'>
    <Header scrollToSection={scrollToSection}/>
    <Section1/>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    {/* <Section5/> */}
    <Section6/>
    <Section7 sectionRef={sectionRef} />
    <Section8/>
    </React.Fragment>

  )
}

export default Layout