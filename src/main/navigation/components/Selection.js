import React from 'react';
import { render } from 'react-dom';

class Selection extends React.Component {
  state = {
    genre: 'comedy'
  }

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <select value={this.state.genre} onChange={this.onGenreChange}>
        <option value="comedy">Comedy</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
      </select>
    )
  }
}

export default Selection;
