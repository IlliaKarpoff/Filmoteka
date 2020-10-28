import './sass/main.scss';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';

// import fetchPopularMoviesList from './js/fetchPopularMoviesList';

const searchForm = document.querySelector('.header__form');
const moviesContainer = document.querySelector('.movie-list');

// searchForm.addEventListener('submit', searchFormHandler);
// function searchFormHandler(event) {
//   event.preventDefault();
//   // console.log(event);
//   // console.dir(event.target);
//   // console.dir(event.currentTarget);
//   // console.dir(event.target.elements);
//   // console.dir(event.target.children.value);
//   const form = event.currentTarget;
//   console.dir(form);
//   fetchPopularMoviesList.query = form.elements.query.value;
//   console.dir(fetchPopularMoviesList.query);
// }

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  
  moviesContainer.innerHTML = '';
  form.reset();
  fetchPopularMoviesList(inputValue).then(updateMovieMarkUp);
}); 



