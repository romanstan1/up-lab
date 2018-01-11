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
          <div className='row1'>
            Give us a call or <br/>send us an email at <a href="mailto:sandbox@theuniprogroup.com?Subject=Hello">sandbox@theuniprogroup.com</a>
          </div>
          <div className='row2'>
            <div>
              <h3>Visit us</h3>
              <span>
                44 77 555 000 999 <br/>
                Unipro at Wework <br/>
                St Katharine's Way <br/>
                St Katharine's & Wapping <br/>
                London E1W 1UN
              </span>
            </div>
          </div>
        </section>
      </PageTemplate>,
      <Nav/>
    ]
  }
}
