import React, {Component} from 'react'
import Nav from '../molecules/Nav'
import PageTitle from '../molecules/PageTitle'

export default class Homepage extends Component {

  render () {
    return [
			<div key='homepage' className='homepage'>
				<Nav/>
        <PageTitle>We provide the <span>sandbox</span> and the <span>toys</span> to <span className='create'>create</span></PageTitle>
			</div>
		]
  }
}
