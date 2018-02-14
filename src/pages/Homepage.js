import React, {Component} from 'react'
import Nav from '../modules/Nav'
import Story, {storyText} from '../modules/Story'
import Animation from '../modules/Animation'

var scrollValue = 0;
var scrollIncrement = 1
var wheeling;
var threshold = 10

export default class Homepage extends Component {

  state = {
    chapter: 0
  }

  nextStory = () => {
    scrollIncrement = 0
    scrollValue = 0
    if(this.state.chapter < storyText.length - 1) this.setState({chapter: this.state.chapter + 1 })
    else {
      this.setState({chapter: 0})
      this.props.history.push('/about')
    }
  }

  onWheel = (e) => {

    clearTimeout(wheeling);
     wheeling = setTimeout(() => {
       wheeling = undefined;
       scrollValue = 0
       threshold = 10
     }, 200);

    scrollValue = scrollValue + scrollIncrement;
    // console.log("scrollValue",scrollValue)

    if(scrollValue > threshold) {
      this.nextStory()

      threshold = 50

      setTimeout(() => {
        scrollIncrement = 1
        scrollValue = 0
      }, 400);
    }
  }

  render () {
    const {chapter} = this.state
    return [
			<div onWheel={this.onWheel} onTouchMove={this.onWheel} key='homepage' className='homepage'>
				<Nav/>
        {/* <Story>{storyText[this.state.chapter]}</Story> */}
        <Animation/>
        <div className="scrolldown"><div></div></div>
        <div className="bubbles">
          {storyText.map((item, i) => <div key={i} className={chapter >=  i? 'stage': '' }></div>)}
        </div>
			</div>
		]
  }
}
