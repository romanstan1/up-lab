import React from 'react';
import Nav from './Nav'
import Footer from './Footer'

const PageTemplate = ({page}) =>
  <span className={`innerpage ${page}`}>
    <div className='dropdown'/>
    <Nav />
    <div className='content'>
      {page}
    </div>
    {/* <Footer/> */}
  </span>

export default PageTemplate;
