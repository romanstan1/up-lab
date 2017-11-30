import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import PageTitle from '../molecules/PageTitle'
import Footer from '../molecules/Footer'


export default class Contact extends Component {

  render () {
    return [
      <div key='heading' className='contact'>
        <Nav/>
        <PageTitle> Get in touch... </PageTitle>
      </div>,
      <div key='content' className='content'>

        <br/><br/> [content]<br/><br/> [content]<br/><br/>  [content] <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
