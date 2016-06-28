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
    e.preventDefault();
    this.props.getNewAnime(this.state.term);
    // filter for saved anime already
    // if no anime was found then search for a new one
    // if no results then no results
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
