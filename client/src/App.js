import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
 
import SavedList from './Movies/SavedList';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  console.log("Saved movie list", savedList)

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const clearSaved = () => {
    setSavedList([]);
  }

  return (
    <div>
      <SavedList clearSaved={clearSaved} list={savedList} />
      <div>
        <Route exact path='/'>
          <MovieList movies={movieList} />
        </Route>
        <Route path='/:id'>
          <Movie addToSavedList={addToSavedList} />
        </Route>
      </div>
    </div>
  );
};

export default App;
