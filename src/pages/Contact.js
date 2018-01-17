import React, {Component} from 'react'
import PageTemplate from '../modules/PageTemplate'
import Nav from '../modules/Nav'
import {Link} from 'react-router-dom'
import wework1 from '../assets/wework1.jpg';
import wework2 from '../assets/wework2.jpg';
import wework3 from '../assets/wework3.jpg';
import wework4 from '../assets/wework4.jpg';
import wework5 from '../assets/wework5.jpeg';

// const LandingSection = ({children}) =>
// <section className='landingSection'>
//   {children}
// </section>

console.log("wework1",wework1)

export default class Contact extends Component {
  render () {
    return [
      <PageTemplate key='contact' page='contact'>
        <section className='contact'>
          <div>
            <section className='landingSection contacth1'>
              <h1 className='mainTitle'><a href="mailto:sandbox@theuniprogroup.com?Subject=Hello">sandbox@theuniprogroup.com</a></h1>
              <h1><span>1 St Katharine's Way,</span> <span>London, E1W 1UN</span></h1>
            </section>

            <div className='row2'>
              <div className='image portrait'>
                <div className='img' style={{ backgroundImage: "url(" + wework5 + ")"}}></div>
              </div>
              <div className='image landscapeWrap'>
                <div className='image landscape'>
                  <div className='img' style={{ backgroundImage: "url(" + wework2 + ")"}}></div>
                </div>
                <div className='image landscape'>
                  <div className='img' style={{ backgroundImage: "url(" + wework1 + ")"}}></div>
                </div>
              </div>
            </div>

            <div className='row3'>
              <div className='portrait'>
                <h2>Company Info</h2>
              </div>
              <div className='landscapeWrap'>
                <p>Unipro Limited, Ilex Place, Chichester, West Sussex, United Kingdom, PO19 1UF
                  <br/>Registed Company Number 3425326
                </p>
                <p>Part of the Unipro Group
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
