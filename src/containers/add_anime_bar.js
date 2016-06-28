import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewAnime } from '../actions/index';

class AddAnimeBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    // Converts the term to slug
    const slugTerm = this.state.term
      .toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-');

    e.preventDefault();

    this.props.getNewAnime(slugTerm);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Add an anime"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button type="submit">Look up</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNewAnime }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddAnimeBar);
