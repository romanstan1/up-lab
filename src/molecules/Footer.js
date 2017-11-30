import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {

  render () {
    return [
      <div key='nav' className='footer'>
        <div><Link to="/about">Link one</Link></div>
        <div><Link to="/about">Link two</Link></div>
        <div><Link to="/about">Link three</Link></div>
      </div>
    ]
  }
}
