import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props) {
      super(props);
      this.state = { term: '' };
    }
  
    render() {
      return (
      <div className="search-bar">
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input className="form-control" name="term" type="text" value={this.state.term} onChange={this.handleChange} />
        <input className="btn btn-primary" type="submit" value="Search" />
      </form>
      </div>
    );
    }
  
    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
  }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSearchClick(this.state.term);
    }
  
 
  
  }
  
  export default SearchBar;
  