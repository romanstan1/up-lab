import React, {Component} from 'react'
import Nav from '../modules/Nav'
import Footer from '../modules/Footer'

export default class Error extends Component {

  render () {
    return [
      <div key='heading' className='contact other'>
        <Nav/>
      </div>,
      <div key='content' className='content'>
        <br/><br/>
        <div> 404 Page Not Found </div>
      </div>,
      <Footer key='footer'/>
    ]
  }
}
