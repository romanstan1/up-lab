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
        <PageTitle><div> About us...</div></PageTitle>
      </div>,
      <div key='content' className='content'>
        <GridLines/>
      </div>,
      <Footer key='footer'/>
    ]
  }
}
