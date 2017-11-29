import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../molecules/Nav'

export default class Homepage extends Component {

  render () {
    return (
      <div className='thinking'>
        <Nav/>
        <h2> Our thinking... </h2>
      </div>
    )
  }
}
