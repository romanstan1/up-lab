import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'

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
