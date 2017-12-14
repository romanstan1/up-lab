import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const PageStory = ({children}) =>
  <ReactCSSTransitionGroup
    transitionName="story"
    transitionAppear={true}
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}>
    {children}
  </ReactCSSTransitionGroup>
