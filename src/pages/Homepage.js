import React, {Component} from 'react'
import Nav from '../molecules/Nav'
import PageTitle from '../molecules/PageTitle'

const story = [
  <div>We provide the <span>sandbox</span> and the <span>toys</span> to <span className='colorful'>create</span></div>,
  <div>The next <span>BIG</span> thing... </div>,
  <div>often starts out looking like a <span className='colorful'>plaything.</span></div>,
  <div>But then the <span> technology </span> gets better...</div>,
  <div>and becomes more <span> useful </span> to people...</div>,
  <div>shifting our <span>perception</span> of work.</div>,
  <div>The people who <span className='colorful'>play...</span></div>,
  <div>are the ones who <span> change the world. </span></div>
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
        <PageTitle>{story[this.state.storyNumber]}</PageTitle>

        <div className="scroll-down">
          <a href=""><span></span></a>
        </div>
			</div>
		]
  }
}
