import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

  render () {
    return [
      <div key='logo' className='logo'>
        <div>
          <Link to="/home">
            <span className='unipro'>UNIPRO</span>
            <span className='sandbox'>SANDBOX</span>
            <span className='square'></span>
            {/* <svg><circle id="overlay" cx="0" cy="0" r="2"/></svg> */}
          </Link>
        </div>
      </div>,
      // <div key='hey' className='svgcontainer'>
      //   {/* <div></div> */}
      //   <svg><circle id="overlay" cx="0" cy="0" r="10"/></svg>
      // </div>,
      <div key='nav' className='nav'>
        <div><Link to="/about">ABOUT</Link></div>
        <div><Link to="/thinking">THINKING</Link></div>
        <div><Link to="/contact">CONTACT</Link></div>
      </div>
    ]
  }
}
