import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          placeholder="search"
          value={this.props.value}
          onChange={e => this.props.search(e)}
        />
      </div>
    );
  }
}

export default Search;
