import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Butter from 'buttercms';
import PageTemplate from '../modules/PageTemplate'
import Nav from '../modules/Nav'
import LoadingSpinner from '../modules/LoadingSpinner'
import moment from 'moment'

const butter = Butter('77c9282f79d8725882e7999b6dbecf298f49799d');

const SinglePost = ({singlePost}) =>
  <section className='singlepost' >
    <div>
      <div className='col1'>
        <div className='image'><img src={singlePost.featured_image} alt={singlePost.seo_title}/></div>
        <h3 className='author'> By {singlePost.author.first_name} {singlePost.author.last_name}</h3>
        <h3 className='date'>Posted on {moment(singlePost.created).format('Do MMM YYYY')}</h3>
      </div>
      <div className='col2'>
        <h1 className='posttitle'>{singlePost.title}</h1>
        <div className='inner' dangerouslySetInnerHTML={{__html: singlePost.body}}/>
      </div>
    </div>
    <footer><div>This is a footer <span className="square"></span></div></footer>
  </section>

class Postpage extends Component {

  state = {
    singlePost: null
  }

  fetchSinglePost = (slug) => {
    butter.post.retrieve(slug).then((resp) => {
      console.log('response for single post ', resp)
      this.setState({ singlePost: resp.data.data })
    })
  }

  componentDidMount() {
    const {slug} = this.props.match.params
    this.fetchSinglePost(slug)
  }

  componentWillReceiveProps(newProps){
    const {slug} = newProps.match.params
    if(slug !== this.props.match.params.slug) {
      this.fetchSinglePost(slug)
    }
  }

  render () {
    const {blogPosts} = this.props
    const {singlePost} = this.state
    return [
      <PageTemplate key='postpage' page='about'>
        { !!singlePost? <SinglePost singlePost={singlePost}/> : <LoadingSpinner/> }
      </PageTemplate>,
      <Nav key='nav'/>
    ]
  }
}

export default connect(state => ({
  blogPosts: state.data.posts
}))(Postpage)
