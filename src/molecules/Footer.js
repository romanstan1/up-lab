import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {

  render () {
    return [
      <div key='nav' className='footer'>
        <div className="wrapper">
          <div key='logo' className='logo'>
            <div>
              <Link to="/home">
                <span className='unipro'>UNIPRO</span>
                <span className='sandbox'>SANDBOX</span>
                <span className='square'></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ]
  }
}
