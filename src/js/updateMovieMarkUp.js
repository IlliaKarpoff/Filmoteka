import fetchMovieTpl from '../templates/fetchMovie.hbs';

const moviesContainer = document.querySelector('.movie-list');

function updateMovieMarkUp(results) {
  const markUp = fetchMovieTpl(results); 
  moviesContainer.insertAdjacentHTML('beforeend', markUp);
}

export default updateMovieMarkUp;