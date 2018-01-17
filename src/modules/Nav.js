import React, {Component} from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {clickBurgerMenu} from '../store/modules/actions'


const NavLink = ({text, selected, children}) => {
  const active = selected === text? `item ${text} active` : `item ${text}`
  return (
      <div className={active} data-value={text}>
        <Link to={`/${text}`}>{children || text}</Link>
      </div>
    )
}
const NavLinkBurger = ({text, selected, children}) => {
  const active = selected === text? `burgeritem ${text} active` : `burgeritem ${text}`
  return (
      <div className={active} data-value={text}>
        <Link to={`/${text}`}>{children || text}</Link>
      </div>
    )
}

class Nav extends Component {


  handleClick = () => {
    this.props.dispatch(clickBurgerMenu())
  }

  render () {
    const {selected} = this.props
    return (
      <div key='nav' className='nav'>
        <Logo/>
        <div className='navitems'>
          {['about','thinking', 'contact'].map(item =>
            <NavLink key={item} selected={selected} text={item}/>)}
            <div className='burger'>
              <input className='burger' type="checkbox" onClick={this.handleClick}/>
              <span></span>
              <span></span>
              <span></span>
              <div className='burgerPopOut'>
                <div>
                  {['about','thinking', 'contact'].map(item =>
                    <NavLinkBurger key={item} selected={selected} text={item}/>
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  selected: state.data.selectedNav
}))(Nav)
