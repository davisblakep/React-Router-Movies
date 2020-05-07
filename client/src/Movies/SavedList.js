import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <div className="title-clear-container">
    <h3>Saved Movies:</h3>
    <button onClick={props.clearSaved}>Clear</button>
    </div>
    {props.list.map(movie => (
      <NavLink to={`/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <NavLink style={{textDecoration: 'none'}} exact to='/'>
    <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
