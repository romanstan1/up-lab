import React from 'react';
import Nav from './Nav'
import Footer from './Footer'

const PageTemplate = ({page, children}) =>
<span className={`innerpage ${page}`}>
  <div className='dropdown'/>
  <div className='content'>
    {children}
  </div>
  {/* <Footer/> */}
</span>


export default PageTemplate;
