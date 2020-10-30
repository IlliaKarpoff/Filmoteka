import './sass/main.scss';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import handleOpenDetails from './js/4filmDetailsPage';
import updateDetailsPageMarkUp from './js/templating';
// import refs from './js/refs';

// import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';

const searchForm = document.querySelector('.header__form');
const moviesContainer = document.querySelector('.movie-list');

searchForm.addEventListener('submit', fetchHomePage)

function fetchHomePage() {
  event.preventDefault();

  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  moviesContainer.innerHTML = '';
  form.reset();
  // fetchPopularMoviesList(inputValue).then(updateMovieMarkUp);
}; 

moviesContainer.addEventListener('click', handleOpenDetails);

  searchAndPaginationHomePage.resetPage();

  searchAndPaginationHomePage.fetchPopularMoviesList().then(results => {
    updateMovieMarkUp(results);
  });

const prevBtn = document.querySelector('[data-action="prev"]');
const nextBtn = document.querySelector('[data-action="next"]');

nextBtn.addEventListener('click', nextBtnHandler);
prevBtn.addEventListener('click', prevBtnHandler);

function nextBtnHandler() {
  searchAndPaginationHomePage.fetchPopularMoviesList().then(results => {
    updateMovieMarkUp(results);
    searchAndPaginationHomePage.incrementPage();
  });
};
function prevBtnHandler() {
  searchAndPaginationHomePage.fetchPopularMoviesList().then(results => {
    updateMovieMarkUp(results);
    searchAndPaginationHomePage.decrementPage();
  });
};
