import React, {Component} from 'react'
import Nav from '../molecules/Nav'
import {PageStory} from '../molecules/PageTitle'
import {init, stopAnimation} from '../background/background.js'
import { Shaders, Node, GLSL } from "gl-react";
import {Surface} from "gl-react-dom";

const story = [
  <h2 className='title' key='0'><div>We provide the <span>sandbox</span> and the <span>toys</span> to <span className='colorful'>create.</span></div></h2>,
  <h2 className='title' key='1'><div>The next <span>BIG</span> thing...</div></h2>,
  <h2 className='title' key='2'><div>often starts out looking like a <span className='colorful'>plaything.</span></div></h2>,
  <h2 className='title' key='3'><div>But then the <span>technology</span> gets better...</div></h2>,
  <h2 className='title' key='4'><div>becoming more <span>useful</span> to people...</div></h2>,
  <h2 className='title' key='5'><div>and shifts our <span>perception</span> of work.</div></h2>,
  <h2 className='title' key='6'><div>The people who <span className='colorful'>play...</span></div></h2>,
  <h2 className='title' key='7'><div>are the ones who <span>change the world.</span></div></h2>
]

class Background extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    return <canvas className="scene scene--full" id="scene"></canvas>
  }
}

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
    init()
  }

  componentWillUnmount () {
    const html = document.getElementById("html")
    html.className = ''
    stopAnimation()
  }

  render () {
    return [
			<div onWheel={this.onScroll} key='homepage' className='homepage'>
				<Nav/>
        <PageStory>{story[this.state.storyNumber]}</PageStory>
        <Background />
        {/* <div className="scroll-down">
          <a href=""><span></span></a>
        </div> */}
			</div>
		]
  }
}
