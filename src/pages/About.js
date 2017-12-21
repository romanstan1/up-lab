import React, {Component} from 'react'
import PageTemplate from '../molecules/PageTemplate'
import Nav from '../molecules/Nav'
import LoadingSpinner from '../molecules/LoadingSpinner'
import * as Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor'
import ReactDOM from 'react-dom';
import image from '../assets/contact-image.jpg';


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
    {children}
</section>
// const AboutSection = ({children, sideHeading, x}) =>
// <section style={{transform: `translate(0,${x}px)`}} className='grid about'>
//   <div className='column1'>
//     {!!sideHeading? <h2 className='sideHeading'>{sideHeading}</h2> : <LoadingSpinner/> }
//   </div>
//   <div className='column2'>
//     {children}
//   </div>
// </section>


const InfoIcon = ({children}) =>
<div data-descr={children} className='infoIcon'/>

var scrollValue = 0;


const Panel = ({col, children, origin}) =>
<div className={col === 'one'? `panel ${origin}`: `panel ${origin}`}>
  {children}
</div>





export default class About extends Component {
  state = {
    scrollValue:0
  }


  onChange = (isVisible) => {
    console.log(isVisible)

  }



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



        {/* <AboutSection x={this.state.scrollValue} refValue='one' sideHeading={null}>
          <h2 className='mainTitle'> We do loads of magical, extraordinary and amazing stuff that takes up at least three lines of writing.</h2>
        </AboutSection> */}


          <Panel col='one' origin='top left'>
            <h2>Story</h2>
            <div className='paneltext'>
              Most technologies start out with little application, and only basic functionality.
              Either the technology works but we haven’t quite a purpose for it yet.
              Or it’s just a hobby, something to play with in the garage.
              They serve as cathartic instruments for enthusiasts, tools of entertainment – toys.
              Society often dismisses them as such, and does so at it’s own peril.
              <br/><br/>
              Sandbox exists on this idea.
            </div>
          </Panel>
          <Panel col='two' origin='top right'>
            <h2>Do</h2>
            <div className='paneltext'>
              We build deterministic systems for creating new services and technologies.
              But really what we do is collaborate with people to make things better.
              We don’t believe in tight, prescriptive briefs, instead we rely on a strong technical knowledge, a willingness to explore ideas and a system to uncover it all.
              <br/><br/>
              This normally happens in the form of workshops, prototypes and games.
            </div>
          </Panel>
          <Panel col='one' origin='bottom left'>
            <h2>Why</h2>
            <div className='paneltext'>
              <h3>
                Culture eats everything for breakfast.
              </h3>
              <p>
                We don’t have a hard and fast list of values that create the perfect culture, but we do believe in a common methodology.
                <br/><br/>
                Build systems, don’t set goals. Goals are binary. Systems focus on inputs, feedback and ongoing adjustment.
                Learn through doing. Nothing is as impactful as a mistake well made.
                Look under rocks. Often, great technologies, as with great work, stem from that which has been dismissed.
                The unthinkable, overlooked and mistaken.
                Have fun. Nothing great has ever been accomplished without enthusiasm.
              </p>
              <img src={image} alt=""/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
                <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
                <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
                <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
                <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
                <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
                <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cupiditate dolorum nulla nam dolore, maiores distinctio doloremque laboriosam veniam ab aliquid animi illo debitis ad magnam modi eum, quisquam tempora.
              </p>
            </div>
          </Panel>
          <Panel col='two' origin='bottom right'>
            <h2>What</h2>
            <div className='paneltext'>
              We work with clients, teams across our own agency and the wider industry to build new solutions, and empower others to do the same.
              <br/><br/>
              (probably need to rename this) Mobile Ecosystem (link to more elaborate explanation (this will eventually link to our work))
              Machine Learning (link to more elaborate explanation (this will eventually link to our work))
              Data Science ((link to more elaborate explanation (this will eventually link to our work))
            </div>
          </Panel>

        {/* <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link> */}
        {/* <VisibilitySensor onChange={this.onChange}> */}
        {/* <VisibilitySensor onChange={this.onChange}> */}
        {/* <AboutSection x={this.state.scrollValue} refValue='two' sideHeading='Our story'>
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
        </AboutSection> */}
        {/* </VisibilitySensor> */}
        {/* </VisibilitySensor> */}

        {/* <AboutSection x={this.state.scrollValue} refValue='three' sideHeading='What we do'>
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
        </AboutSection> */}

        {/* <AboutSection x={this.state.scrollValue} refValue='four' sideHeading='How we do it'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Beatae, nostrum necessitatibus. A ratione ipsum, numquam itaque qui explicabo neque atque.
            Laborum quisquam error soluta. Quo dicta quam officia repudiandae consequatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi rerum explicabo amet,
            reiciendis quae. Dolores possimus sed dicta aut corrupti accusamus ea illo repudiandae, deserunt.
            Ratione, nihil officiis itaque!
          </p>
        </AboutSection> */}
        <br/><br/><br/><br/>
      </PageTemplate>,
      <Nav key='nav' />
    ]
  }
}
