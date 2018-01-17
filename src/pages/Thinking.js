import React, {Component} from 'react'
import PageTemplate from '../modules/PageTemplate'
import LoadingSpinner from '../modules/LoadingSpinner'
import {loadBlogPosts} from '../store/modules/actions'
import {connect} from 'react-redux'
import Butter from 'buttercms';
import moment from 'moment';
import {Link} from 'react-router-dom'
import Nav from '../modules/Nav'
// const butter = Butter('77c9282f79d8725882e7999b6dbecf298f49799d');
const butter = Butter('85681c254ae1fd0ecf057271cde2636970be0d38');



const LandingSection = ({children}) =>
<section className='landingSection'>
    <h1 className='mainTitle'>{children}</h1>
</section>

const ThinkingSection = ({children}) =>
<Link to={`/thinking/${children.slug}`} className='blogPost'>
  <div className='column1'>
    <h2 className='sideHeading'>{children.seo_title}</h2>
    <p className="summary">{children.summary}</p>
  </div>
  <div className='image'>
    <div className='imageinner' style={{ backgroundImage: "url(" + children.featured_image + ")"}}>
      {/* <img src={children.featured_image} alt={children.seo_title}/> */}
    </div>
  </div>
</Link>


class Thinking extends Component {

  fetchPosts = (page, replace) =>{
    butter.post.list({page: page, page_size: 8}).then(response => {
      this.setState({page: response.data.meta.next_page})
      this.props.dispatch(loadBlogPosts(response.data, replace))
    });
  }

  componentWillMount() {
    this.fetchPosts(1, true)
  }


  render () {
    const {blogPosts} = this.props
    let posts = null
    if(!!blogPosts) posts = blogPosts
    return [
      <PageTemplate key='thinking' page='thinking'>
        <section className='thinkingpage'>
          <LandingSection><span className='thinking'>Some thoughts and some ideas </span><span className='thinking'>that we'd like to share...</span></LandingSection>
          {  !!posts? posts.map((post, i) =>
            <ThinkingSection key={i}>{post}</ThinkingSection>)
            : <LoadingSpinner/>
          }
        </section>
        <footer><div>This is a footer <span className="square"></span></div></footer>
      </PageTemplate>,
      <Nav key='nav'/>
    ]
  }
}

export default connect(state => ({
  blogPosts: state.data.posts
}))(Thinking)
