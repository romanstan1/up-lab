import React, {Component} from 'react'
import PageTemplate from '../molecules/PageTemplate'
import Nav from '../molecules/Nav'
import LoadingSpinner from '../molecules/LoadingSpinner'
import ReactDOM from 'react-dom';
import image from '../assets/contact-image.jpg';

const AboutSection = ({children, sideHeading, x}) =>
<section style={{transform: `translate(0,${x}px)`}} className='grid about'>
    {children}
</section>


const InfoIcon = ({children}) =>
<div data-descr={children} className='infoIcon'/>


const Panel = ({col, children, origin}) =>
<div className={col === 'one'? `panel ${origin}`: `panel ${origin}`}>
  {children}
</div>





export default class About extends Component {

  render () {
    return [
      <PageTemplate key='about' page='about'>

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
      </PageTemplate>,
      <Nav key='nav' />
    ]
  }
}
