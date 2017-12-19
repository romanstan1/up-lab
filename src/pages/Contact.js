import React, {Component} from 'react'
import PageTemplate from '../molecules/PageTemplate'
import Nav from '../molecules/Nav'
import {Link} from 'react-router-dom'
import contactImageOne from '../assets/contact-image.jpg';


const LandingSection = ({children}) =>
<section className='grid contact'>
  <div className='column1'>
    {/* <div className='image'><img src={contactImageOne} alt=''/></div> */}
  </div>
  <div className='column2'>
    <h2 className='mainTitle'>{children}</h2>
  </div>
</section>

const ContactSection = () =>
<section className='grid contact'>
    <div className='column1'>
      {/* <div className='image'><img ssrc={contactImageOne} alt=''/></div> */}
    </div>
    <div className='column2'>
      col 2
    </div>
</section>

export default class Contact extends Component {
  render () {
    return [
      <PageTemplate key='contact' page='contact'>
          <LandingSection>Give us a call or send us an email at <br/><a href="mailto:hello@uniprosandbox.com?Subject=Hello">hello@uniprosandbox.com</a></LandingSection>
          {/* <ContactSection></ContactSection> */}
      </PageTemplate>,
      <Nav/>
    ]
  }
}
