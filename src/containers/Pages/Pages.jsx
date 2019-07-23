import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchPages } from "../../actions/pagesActions"

class Pages extends Component {
  componentWillMount() {
    this.props.fetchPages()
  }
  render() {
    const pagesItems = this.props.pages.map(page => (
      <div key={page.id}>
        <h3>{page.title}</h3>

        <p>
          {page.status}, {new Date(page.publish_date).toLocaleDateString()},{" "}
          {page.author}
        </p>
      </div>
    ))
    return (
      <div>
        <h1>Pages</h1>
        {pagesItems}
      </div>
    )
  }
}

Pages.propTypes = {
  fetchPages: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  pages: state.pages.items
})

export default connect(
  mapStateToProps,
  { fetchPages }
)(Pages)
