import React, {Component} from 'react'
import Nav from '../molecules/Nav'
import {PageStory} from '../molecules/PageTitle'

const story = [
  <h2 key='0'><div>We provide the <span>sandbox</span> and the <span>toys</span> to <span className='colorful'>create</span></div></h2>,
  <h2 key='1'><div>The next <span>BIG</span> thing... </div></h2>,
  <h2 key='2'><div>often starts out looking like a <span className='colorful'>plaything.</span></div></h2>,
  <h2 key='3'><div>But then the <span> technology </span> gets better...</div></h2>,
  <h2 key='4'><div>and becomes more <span> useful </span> to people...</div></h2>,
  <h2 key='5'><div>shifting our <span>perception</span> of work.</div></h2>,
  <h2 key='6'><div>The people who <span className='colorful'>play...</span></div></h2>,
  <h2 key='7'><div>are the ones who <span> change the world. </span></div></h2>
]

var scrollValue = 0;
var scrollIncrement = 1
var scrollTimeout

export default class Homepage extends Component {

  state = {
    storyNumber: 0
  }

  nextStory = () => {
    scrollIncrement = 0
    scrollValue = 0
    if(this.state.storyNumber < story.length - 1 )this.setState({storyNumber: this.state.storyNumber + 1 })
    else this.setState({storyNumber: 0})
  }

  onScroll = (e) => {
    scrollValue = scrollValue + scrollIncrement;
    if(scrollValue > 15) this.nextStory()
    scrollTimeout = setTimeout(() => {
      scrollIncrement = 1
      scrollValue = 0
    }, 800);
  }

  componentDidMount () {
    const html = document.getElementById("html")
    html.className = 'homepage'
  }

  componentWillUnmount () {
    const html = document.getElementById("html")
    html.className = ''
  }

  render () {
    return [
			<div onWheel={this.onScroll} key='homepage' className='homepage'>
				<Nav/>
        <PageStory>{story[this.state.storyNumber]}</PageStory>
        <div className="scroll-down">
          <a href=""><span></span></a>
        </div>
			</div>
		]
  }
}
