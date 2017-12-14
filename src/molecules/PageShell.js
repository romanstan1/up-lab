import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1300}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName='SlideIn'
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};
export default PageShell;
