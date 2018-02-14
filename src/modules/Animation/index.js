import React, { Component } from 'react';
import {stop, startstop, reinit, helper, nextAct} from './dot_animation_three.js'


class Scene extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    return <div className="scene scene--full" id="scene"></div>
    // return <div id='dot-canvas'></div>
  }
}

export default class Animation extends Component {
  state = {
    start: false,
    act:1
  }
  componentDidMount() {
    reinit()
  }
  handleStartstop = () => {
    this.setState({start: !this.state.start})
    startstop()
  }
  handleInit = () => {
    this.setState({start: false, act: 1})
    reinit()
    nextAct(1)
  }
  handleHelper = () => {
    helper()
  }
  handleNextact = () => {
    this.setState({act: this.state.act + 1})
    nextAct(this.state.act + 1)
  }
  componentWillUnmount() {
    stop()
  }
  render() {
    return [
      <div className='draw-button'>
        <div key='init' onClick={this.handleStartstop}>{this.state.start? 'Stop' : 'Start' }</div>
        {/* <div key='startstop' onClick={this.handleInit}> Re-Init</div> */}
        {/* <div key='helper' onClick={this.handleHelper}> Light & Shadow Helpers</div> */}
        <div key='next' onClick={this.handleNextact}> Current Act {this.state.act} - Next</div>
      </div>,
      <Scene key='scene'/>
    ]
  }
}
