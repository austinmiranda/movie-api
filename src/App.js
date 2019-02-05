import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
var unirest = require('unirest');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
     };

     this.getMovies("avengers");
  }

  getMovies = (search) =>{
 
    const req = unirest("GET", "https://api.themoviedb.org/3/search/movie");

    req.query({
      "include_adult": "false",
      "page": "1",
      "query": search,
      "language": "en-US",
      "api_key": "0dd092313826cb4af5959bff958e6f1c"
    });
    
    req.send("{}");
    
    req.end((res) => {
      if (res.error) throw new Error(res.error);    
      console.log(res.body);
      this.setState({
        movies: res.body.results
      });
    });


  }


  render() {
    return(
      <div>
        <SearchBar onSearchClick={this.getMovies}/>
        <MovieList movies={this.state.movies} />
      </div>
      );
  }
}

export default App;
