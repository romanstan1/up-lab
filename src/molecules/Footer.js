import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'

export default class Footer extends Component {

  render () {
    return [
      <div key='nav' className='footer'>
        <div className="wrapper">
          <Logo/>
        </div>
      </div>
    ]
  }
}
