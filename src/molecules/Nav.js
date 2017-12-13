import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

  render () {
    return (
    <div className="wrapper">
      <div key='nav' className='nav'>
        <div className='logo'>
          <Link to="/home">
            <span className='unipro'>UNIPRO</span>
            <span className='sandbox'>SANDBOX</span>
            <span className='square'></span>
          </Link>
        </div>
        <div className='item about'><Link to="/about">ABOUT</Link></div>
        <div className='item thinking'><Link to="/thinking">THINKING</Link></div>
        <div className='item contact'><Link to="/contact">CONTACT</Link></div>
      </div>
    </div>)
  }
}
