import React, {Component} from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectNav} from '../store/modules/actions'

const NavLink = ({text, selected, children}) => {
  const active = selected === text? `item ${text} active` : `item ${text}`
  return (
      <div className={active} data-value={text}>
        <Link to={`/${text}`}>{children || text}</Link>
      </div>
    )
}

class Nav extends Component {

  render () {
    const {selected} = this.props
    return (
    <div className="wrapper">

      <div key='nav' className='nav'>

        <Logo/>
        {['about','thinking', 'contact'].map(item =>
          <NavLink key={item} selected={selected} text={item}/>)}

      </div>
    </div>)
  }
}

export default connect(state => ({
  selected: state.data.selectedNav
}))(Nav)
