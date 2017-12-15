import React, {Component} from 'react'
import PageTemplate from '../molecules/PageTemplate'

const AboutTicket = () =>
  <div className='aboutTicket'>
    <h2>What we do</h2>
    <div>No one cares about products.
      People care about ideas.
      Is a product an idea? Noup. Is a brand? A good one is.
    </div>
  </div>

export default class About extends Component {
  render () {
    return (
      <PageTemplate key='about' page='about'>
        <h2 className='aboutHeading'>Our Story</h2>
        <AboutTicket/>


      </PageTemplate>
    )
  }
}
