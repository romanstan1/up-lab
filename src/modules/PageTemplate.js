import React from 'react';

const PageTemplate = ({page, children}) =>
<span className={`innerpage ${page}`}>
  <div className='dropdown'/>
  <div className='content'>
    {children}
  </div>
</span>


export default PageTemplate;
