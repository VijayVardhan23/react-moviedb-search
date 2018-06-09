import React, { Component } from 'react';
import Movie from './Movie';

import $ from 'jquery';
import './App.css';

class App extends Component {
    
    constructor(props){
      super(props)
      this.state = {
        value:'',rows:[]
      }
      this.performSearch = this.performSearch.bind(this);
      this.onChanged = this.onChanged.bind(this);
      
      
      
    }
     onChanged(e){
      
    this.setState({
      value: e.target.value//set the value from state to the received input drom form

    })
    
  }


    //fetches the data from api
  performSearch(e){
     e.preventDefault();
     this.onChanged(e)
    const urlstring = "https://api.themoviedb.org/3/search/movie?api_key=402f8d48746ef8b587bfb2cca6089593&query=" + this.state.value ;
    $.ajax({
      
      url: urlstring,
      success: (searchresults)=>{
         const movies = searchresults.results;
         var movieRows = []
         movies.forEach((movie) => {
       const id = movie.id
       const title = movie.title
       const overview = movie.overview
       const image = "https://image.tmdb.org/t/p/w300" + movie.poster_path
       
       movieRows.push({title,overview,image,id})
              
     })
      this.setState({rows: movieRows})
      console.log(this.state.rows)
      },
      error(xhr,status,err){
        console.log(err);
      }
    })
  }

 
  render() {
    return (
      <div className="App">
        <div className="bg-dark">
           <table className="d-block bg-primary">
          <tbody>
            <tr>
              <td>
                <img src="green_app_icon.svg" alt = "movie wallpaper" className="w-50" />
              </td>
              <td >
                <h3 className="display-4 text-dark ">MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <form  className="form-group px-5 mt-5 ">
          <input type="text" className="form-control" placeholder="Search Movie" value={this.state.value} onChange = {this.onChanged}  />
          <button className="btn btn-primary" onClick = {this.performSearch} >Search</button>
          
        </form>
        {this.state.rows.map((movie)=>{
            return <Movie  key={movie.id} movieid={movie.id} movietitle = {movie.title} movieoverview = {movie.overview} movieimage={movie.image}/>
          })}
        </div>
       
      </div>
    );
  }
}

export default App;
