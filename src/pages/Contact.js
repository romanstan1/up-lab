import React, {Component} from 'react'
import PageTemplate from '../modules/PageTemplate'
import Nav from '../modules/Nav'
import {Link} from 'react-router-dom'
import contactImageOne from '../assets/contact-image.jpg';


const ContactSection = ({children}) =>
<section className='contact'>
    <div className='col1'>

    </div>
    <div className='col2'>{children}</div>
</section>

export default class Contact extends Component {
  render () {
    return [
      <PageTemplate key='contact' page='contact'>
        <section className='contact'>
          <div>
            <div className='row1'>
              <h1><a href="mailto:sandbox@theuniprogroup.com?Subject=Hello">sandbox@theuniprogroup.com</a></h1>
              <h1>1 St Katharine's Way, London E1W 1UN</h1>
            </div>
            <div className='row2'>
              <div className='image portrait'></div>
              <div className='image landscape'></div>
              <div className='image landscape'></div>
            </div>
          </div>
          <footer><div>This is a footer <span className="square"></span></div></footer>
        </section>
      </PageTemplate>,
      <Nav/>
    ]
  }
}
