import React, {Component} from 'react'
import Nav from '../modules/Nav'
import Footer from '../modules/Footer'

export default class Error extends Component {

  render () {
    return [
      <div className='error'>
        <h1>404 Error <br/>Page Not Found </h1>
      </div>,
      <Nav key='nav'/>
    ]
  }
}
