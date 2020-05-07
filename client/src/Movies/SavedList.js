import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <div className="title-clear-container">
    <h3>Saved Movies:</h3>
    <button onClick={props.clearSaved}>Clear</button>
    </div>
    {props.list.map(movie => (
      <Link to={`/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <Link style={{textDecoration: 'none'}} exact to='/'>
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
