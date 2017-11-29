import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../molecules/Nav'

export default class Contact extends Component {

  render () {
    return [
      <div key='heading' className='contact'>
        <Nav/>
        <h2> Get in touch... </h2>
      </div>,
      <div key='content'>


      </div>
    ]
  }
}
