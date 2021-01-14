import React, { useState, useEffect } from 'react';
import axios from 'axios';

//imported Router, Route, and Link
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//Imported Components 
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
          console.log(movieList)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      


      
        <Router>
        <SavedList list={[ /* This is stretch */]} />
            <Route path='/movies/:id'>
              <Movie/>
            </Route>
          
            <Route exact path='/' >
              <MovieList movies={movieList}/>
            </Route>

      
        </Router>
      
    </div>
  );
}
