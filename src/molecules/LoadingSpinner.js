import React from 'react'

const LoadingSpinner = () =>
  <div className="spinner" >
    <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className="path" fill="none" strokeWidth="6" strokeLinecap="square" cx="33" cy="33" r="30"></circle>
    </svg>
    <div>Loading posts...</div>
  </div>

export default LoadingSpinner
