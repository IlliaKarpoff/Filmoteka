import fetchMovieTpl from '../templates/fetchMovie.hbs';
import refs from './refs';

// const moviesContainer = document.querySelector('.movie-list');

function updateMovieMarkUp(results) {
  const markUp = fetchMovieTpl(results); 
  refs.moviesContainer.insertAdjacentHTML('beforeend', markUp);
}

export default updateMovieMarkUp;