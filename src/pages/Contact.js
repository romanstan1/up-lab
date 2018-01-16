import React, {Component} from 'react'
import PageTemplate from '../modules/PageTemplate'
import Nav from '../modules/Nav'
import {Link} from 'react-router-dom'
import wework1 from '../assets/wework1.jpg';
import wework2 from '../assets/wework2.jpg';
import wework3 from '../assets/wework3.jpg';
import wework4 from '../assets/wework4.jpg';

// const LandingSection = ({children}) =>
// <section className='landingSection'>
//   {children}
// </section>

export default class Contact extends Component {
  render () {
    return [
      <PageTemplate key='contact' page='contact'>
        <section className='contact'>
          <div>
            <section className='landingSection'>
              <h1 className='mainTitle'><a href="mailto:sandbox@theuniprogroup.com?Subject=Hello">sandbox@theuniprogroup.com</a></h1>
              <h1>1 St Katharine's Way, London E1W 1UN</h1>
            </section>

            <div className='row2'>
              <div className='image portrait'>
                {/* <img src={wework1} alt=""/> */}
              </div>
              <div className='image landscapeWrap'>
                <div className='image landscape'>
                  {/* <img src={wework2} alt=""/> */}
                </div>
                <div className='image landscape'>
                  {/* <img src={wework3} alt=""/> */}
                </div>
              </div>
            </div>

            <div className='row3'>
              <div className='portrait'>
                <h2>Company Info</h2>
              </div>
              <div className='landscapeWrap'>
                <p>Unipro Limited, Ilex Place, Chichester, West Sussex PO19 1UF
                  <br/>Registed Company Number 3425326
                </p>
                <p>Part of the Unipro group
                  <br/><a target="_blank" href="https://www.theuniprogroup.com">www.theuniprogroup.com</a>
                </p>
              </div>
            </div>


          </div>
          <footer><div>This is a footer <span className="square"></span></div></footer>
        </section>
      </PageTemplate>,
      <Nav/>
    ]
  }
}
