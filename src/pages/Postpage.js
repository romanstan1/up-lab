import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Postpage extends Component {

  state = {
    singlePost: null
  }
  //
  // fetchSinglePost = (slug) => {
  //   butter.post.retrieve(slug).then((resp) => {
  //     this.setState({ singlePost: resp.data.data })
  //   })
  // }
  //
  // fetchSimilarityPosts = () =>{
  //   butter.post.list({page: 1, page_size: 3}).then(response => {
  //     this.props.dispatch(loadBlogPosts(response.data, true))
  //   });
  // }
  //
  // componentDidMount() {
  //   const {slug} = this.props.match.params
  //   this.fetchSinglePost(slug)
  //   if(!this.props.blogPosts.length) this.fetchSimilarityPosts()
  // }
  //
  // componentWillReceiveProps(newProps){
  //   const {slug} = newProps.match.params
  //   if(slug !== this.props.match.params.slug) {
  //     this.fetchSinglePost(slug)
  //   }
  // }

  render () {
    return (
      <div>Post page</div>
    )
  }
}

export default connect(state => ({
  blogPosts: state.data.posts
}))(Postpage)
