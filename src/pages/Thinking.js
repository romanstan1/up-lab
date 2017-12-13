import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'


export default class Homepage extends Component {

  render () {
    return [
      <div key='thinking' className='thinking other'>
        <Nav/>
      </div>,
      <div key='content' className='content'>
        <br/><br/>
        <div> Our thinking... </div>
      </div>,
      <Footer key='footer'/>
    ]
  }
}
