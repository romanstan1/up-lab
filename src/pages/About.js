import React, {Component} from 'react'
import PageTemplate from '../molecules/PageTemplate'
import Nav from '../molecules/Nav'
import LoadingSpinner from '../molecules/LoadingSpinner'
import * as Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor'

import ReactDOM from 'react-dom';


var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
  // //...
  // componentDidMount() {
  //   var rect = ReactDOM.findDOMNode(this)
  //     .getBoundingClientRect()
  // }

//
// class AboutSection extends Component {
//   componentDidMount() {
//     const ele = ReactDOM.findDOMNode(this).getBoundingClientRect()
//     console.log("ele",ele)
//   }
//   render () {
//     const {children, sideHeading, x} = this.props
//     return (
//       <section style={{transform: `translate(0,${x}px)`}} className='grid about'>
//         <div className='column1'>
//           {!!sideHeading? <h2 className='sideHeading'>{sideHeading}</h2> : <LoadingSpinner/> }
//         </div>
//         <div className='column2'>
//           {children}
//         </div>
//       </section>
//     )
//   }
// }
//
const AboutSection = ({children, sideHeading, x}) =>
<section style={{transform: `translate(0,${x}px)`}} className='grid about'>
  <div className='column1'>
    {!!sideHeading? <h2 className='sideHeading'>{sideHeading}</h2> : <LoadingSpinner/> }
  </div>
  <div className='column2'>
    {children}
  </div>
</section>


const InfoIcon = ({children}) =>
<div data-descr={children} className='infoIcon'/>

var scrollValue = 0;

export default class About extends Component {
  state = {
    scrollValue:0
  }


  onChange = (isVisible) => console.log('Element is now %s', isVisible ? 'visible' : 'hidden')



   componentDidMount() {
    // window.addEventListener("wheel", (e) => {
    //   console.log("e",e, e.screenY, e.offsetY)
    //   // this.setState({scrollValue: e.deltaY})
    // })
    // window.addEventListener("drag", (e) => {
    //   console.log("drag",e, e.screenY, e.offsetY)
    //   // this.setState({scrollValue: e.deltaY})
    // })
    // Events.scrollEvent.register('begin', function(to, element) {
    //   console.log("begin", arguments);
    // });
    //
    // Events.scrollEvent.register('end', function(to, element) {
    //   console.log("end", arguments);
    // });
    //
    // scrollSpy.update();
   }

  render () {
    return [
      <PageTemplate key='about' page='about'>
        {/* <VisibilitySensor onChange={this.onChange}></VisibilitySensor> */}
        <AboutSection x={this.state.scrollValue} refValue='one' sideHeading={null}>
          <h2 className='mainTitle'> We do loads of magical, extraordinary and amazing stuff that takes up at least three lines of writing.</h2>
        </AboutSection>

        {/* <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link> */}
        {/* <VisibilitySensor onChange={this.onChange}> */}
        <AboutSection x={this.state.scrollValue} refValue='two' sideHeading='Our story'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Beatae, nostrum necessitatibus. A ratione ipsum, numquam itaque qui explicabo neque atque.
            Laborum quisquam error soluta. Quo dicta quam officia repudiandae consequatur. <br/><br/>
          </p>
          <div className='hoverSection'>
            <InfoIcon>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nobis, voluptatum molestias animi porro doloribus consequatur, qui enim iusto sit sequi minus, asperiores eaq.</InfoIcon>
            <InfoIcon>Consectetur adipisicing elit. Amet nobis, voluptatum molestias animi porro doloribus consequatur, qui enim iusto sit sequi minus, asperiores eaque ullam tenetur nihil. </InfoIcon>
            <InfoIcon>Amet nobis, voluptatum molestias animi porro doloribus consequatur, qui enim iusto sit sequi minus, asperiores eaque ullam tenetur nihil. Tempora, autem, eos.</InfoIcon>
            <InfoIcon>Tempora, autem, eos. Nobis, voluptatum molestias animi porro doloribus consequatur, qui enim iusto sit sequi minus, asperiores eaque ullam tenetur nihil. Tempora, autem, eos.</InfoIcon>
          </div>
        </AboutSection>
        {/* </VisibilitySensor> */}

        <AboutSection x={this.state.scrollValue} refValue='three' sideHeading='What we do'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Beatae, nostrum necessitatibus. A ratione ipsum, numquam itaque qui explicabo neque atque.
            Laborum quisquam error soluta. Quo dicta quam officia repudiandae consequatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi rerum explicabo amet.
            <br/><br/>
            Reiciendis quae. Dolores possimus sed dicta aut corrupti accusamus ea illo repudiandae, deserunt.
            Ratione, nihil officiis itaque reiciendis quae. Dolores possimus sed dicta aut corrupti accusamus ea illo repudiandae, deserunt.
            Ratione, nihil officiis itaque!
          </p>
        </AboutSection>

        <AboutSection x={this.state.scrollValue} refValue='four' sideHeading='How we do it'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Beatae, nostrum necessitatibus. A ratione ipsum, numquam itaque qui explicabo neque atque.
            Laborum quisquam error soluta. Quo dicta quam officia repudiandae consequatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi rerum explicabo amet,
            reiciendis quae. Dolores possimus sed dicta aut corrupti accusamus ea illo repudiandae, deserunt.
            Ratione, nihil officiis itaque!
          </p>
        </AboutSection>
        <br/><br/><br/><br/>
      </PageTemplate>,
      <Nav key='nav' />
    ]
  }
}
