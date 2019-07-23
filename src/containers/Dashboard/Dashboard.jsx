import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchPosts } from "../../actions/postsActions"

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchPosts()
    // console.log(this.props)
  }

  render() {
    const postsItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Dashboard</h1>
        {postsItems}
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Dashboard)
