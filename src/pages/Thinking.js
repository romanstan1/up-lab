import React, {Component} from 'react'
import PageTemplate from '../molecules/PageTemplate'
import LoadingSpinner from '../molecules/LoadingSpinner'
import {loadBlogPosts} from '../store/modules/actions'
import {connect} from 'react-redux'
import Butter from 'buttercms';
import moment from 'moment';
import {Link} from 'react-router-dom'
const butter = Butter('77c9282f79d8725882e7999b6dbecf298f49799d');



export const BlogPost = ({post,i}) =>
  <div className='blogPost'>
    <h4>{post.seo_title}</h4>
    {/* <span className="date">{moment(post.published).format('Do MMMM YYYY')}</span> */}
    <span className="summary">{post.summary}</span>
    <div>
      <Link to={`/thinking/${post.slug}`} className='link'>
        <img src={post.featured_image} alt={post.seo_title}/>
      </Link>
    </div>
  </div>



class Thinking extends Component {

  fetchPosts = (page, replace) =>{
    butter.post.list({page: page, page_size: 8}).then(response => {
      console.log("response",response)
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
    return (
      <PageTemplate key='thinking' page='thinking'>
          {!!posts? posts.map((post, i) => <BlogPost key={i} post={post} i={i + 1}/>): <LoadingSpinner/> }
      </PageTemplate>
    )
  }
}

export default connect(state => ({
  blogPosts: state.data.posts
}))(Thinking)
