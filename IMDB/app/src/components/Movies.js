import React from "react";

class Movies extends React.Component{
  state={
    movies:[]
  }
  async componentWillMount() {
    let movies = await fetch("https://www.omdbapi.com/?s=man&apikey=65525897")
    movies = await movies.json()
    this.setState({
      movies: movies.Search
    })
  }
  render(){
    let movies = this.state.movies.map((movie,index)=>{
      return (
        <div className ="box col-sm-4">
          <img src={movie.Poster}/>
          <h1>{movie.Title}</h1>
          <h2>{movie.Year}</h2>
        </div>
      )
    })
  return (
    <div>
  <h1>Movies</h1>
  <div className="container">
    <div className="row">
    {movies}
    </div>
  </div>
  </div>
  )
}
}

export default Movies;
