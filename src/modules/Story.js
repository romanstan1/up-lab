import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const storyText = [
  <h4 className='title' key='0'><div>We provide the <span>sandbox</span> and the <span>toys</span> to <span className='colorful'>create.</span></div></h4>,
  <h4 className='title' key='1'><div>The next <span>BIG</span> thing...</div></h4>,
  <h4 className='title' key='2'><div>often starts out looking like a <span className='colorful'>plaything.</span></div></h4>,
  <h4 className='title' key='3'><div>But then the <span>technology</span> gets better...</div></h4>,
  <h4 className='title' key='4'><div>becoming more <span>useful...</span></div></h4>,
  <h4 className='title' key='5'><div>and shifts our <span>perception</span> of work.</div></h4>,
  <h4 className='title' key='6'><div>The people who <span className='colorful'>play...</span></div></h4>,
  <h4 className='title' key='7'><div>are the ones who <span>change the world.</span></div></h4>
]

const Story = ({children}) =>
  <ReactCSSTransitionGroup
    transitionName="story"
    transitionAppear={true}
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}>
    {children}
  </ReactCSSTransitionGroup>

export default Story
