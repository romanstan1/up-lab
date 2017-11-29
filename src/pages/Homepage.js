import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../molecules/Nav'

export default class Homepage extends Component {

  render () {
    return (
      <div className='homepage'>
        <Nav/>
        <div className='page-title'>
          <h2> We provide the sandbox and the toys for you to create </h2>
        </div>
      </div>
    )
  }
}
