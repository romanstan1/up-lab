import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import {PageTitle} from '../molecules/PageTitle'

export default class Error extends Component {

  render () {
    return [
      <div key='heading' className='contact other'>
        <Nav/>
      </div>,
      <div key='content' className='content'>
        <br/><br/>
        <PageTitle><div> 404 Page Not Found </div></PageTitle>

        <br/><br/> <br/><br/> <br/><br/> 
      </div>,
      <Footer key='footer'/>
    ]
  }
}
