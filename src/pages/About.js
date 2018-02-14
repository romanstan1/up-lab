import React, {Component} from 'react'
import PageTemplate from '../modules/PageTemplate'
import Nav from '../modules/Nav'

const Panel = ({col, children, origin}) =>
<div className={col === 'one'? `panel ${origin}`: `panel ${origin}`}>
  {children}
</div>


export default class About extends Component {

  render () {
    return [
      <PageTemplate key='about' page='about'>

          <Panel col='one' origin='top left'>
            <h1>Story</h1>
            <div className='paneltext'>
              <p>
                Most technologies start out with little application, and only basic functionality.
                Either the technology works but we haven’t quite a purpose for it yet. Or it’s just a hobby, something to play with in the garage.
                They serve as cathartic instruments for enthusiasts, tools of entertainment – toys.
              </p>
              <p>
                Sandbox exists on this idea.
              </p>
            </div>
          </Panel>
          <Panel col='two' origin='top right'>
            <h1>Do</h1>
            <div className='paneltext'>
              <p>
                We build deterministic systems for progressing digital services.
              </p>
              <p>
                We don’t believe in tight, prescriptive briefs, instead we rely on a strong technical knowledge,
                a willingness to explore ideas and a system to uncover it all – collaborating with people to make things better.
              </p>
              <p>
                This normally happens in the form of workshops, prototypes and games.
              </p>
            </div>
          </Panel>
          <Panel col='one' origin='bottom left'>
            <h1>Method</h1>
            <div className='paneltext'>
              <p>Culture eats everything for breakfast. We don’t have a hard and fast list of values that create the perfect culture, but we do believe in a common methodology.</p>

              <p className='bodyHeading'>Build systems, don’t set goals</p>
              <p>Goals are binary. Systems focus on inputs, feedback and ongoing adjustment.</p>

              <p className='bodyHeading'>Learn through doing</p>
              <p>Nothing is as impactful as a mistake well made.</p>

              <p className='bodyHeading'>Look under rocks</p>
              <p>Often, great technologies, as with great work, stem from that which has been dismissed. The unthinkable, overlooked and mistaken.</p>

              <p className='bodyHeading'>Have fun</p>
              <p>Nothing great has ever been accomplished without enthusiasm.</p>
            </div>
          </Panel>
          <Panel col='two' origin='bottom right'>
            <h1>Focus</h1>
            <div className='paneltext'>

              <p>Provide a platform for our clients and teams to explore more.</p>
              <p className='bodyHeading'>Mobile Ecosystem</p>
              <p>Anything is an endpoint for digital. We design the world around a mobile user, not device. </p>

              <p className='bodyHeading'>Machine Learning</p>
              <p>Touches and layers everything. We explore tools and techniques to ingest, normalise, manipulate and visualise data – in order to establish patterns and insights.</p>

              <p className='bodyHeading'>Data Science</p>
              <p>Fundamental to improved decision making and experience. We leverage tools and techniques to better ingest, normalise, manipulate and visualise data.</p>

            </div>
          </Panel>
      </PageTemplate>,
      <Nav key='nav' />
    ]
  }
}
