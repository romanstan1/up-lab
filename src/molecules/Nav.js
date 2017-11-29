import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

  render () {
    return [
      <div className='logo'>
        <div><Link to="/home">Logo</Link></div>
      </div>,
      <div key='nav' className='nav'>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/thinking">Thinking</Link></div>
        <div><Link to="/contact">Get in touch</Link></div>
      </div>
    ]
  }
}
