import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PageTitle = ({children}) =>
  <ReactCSSTransitionGroup
    transitionName="page-title"
    transitionAppear={true}
    transitionAppearTimeout={300}
    transitionEnter={false}
    transitionLeave={false}>
    <h2>{children}</h2>
  </ReactCSSTransitionGroup>

export default PageTitle
