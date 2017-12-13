import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import {PageTitle} from '../molecules/PageTitle'

const GridLines = () =>
  <div className='grid'>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>

    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>

    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>

    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
    <div className='vert'></div>
  </div>


export default class About extends Component {

  render () {
    return [
      <div key='heading' className='about other'>
        <Nav/>
      </div>,
      <div key='content' className='content'>
        <br/><br/>
        <div> About us...</div>
      </div>,
      <Footer key='footer'/>
    ]
  }
}
