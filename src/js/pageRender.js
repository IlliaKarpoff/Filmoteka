import refs from './refs';
import fetchPopularMoviesList from './fetchPopularMoviesList';
import updatePopularMovieMarkUp from './updatePopularMovieMarkUp';
import searchAndPaginationHomePage from './searchAndPaginationHomePage';
import updateMovieMarkUp from './updateMovieMarkUp';

function createPopularMovieList() {
  refs.moviesContainer.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.popularPage.innerHTML = '';
  fetchPopularMoviesList.fetchPopularMovies()
    .then(updatePopularMovieMarkUp);
  refs.btnContainer.classList.remove('is-hidden');
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = fetchPopularMoviesList.pageNumber;
  if (fetchPopularMoviesList.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden')
  };
  if (fetchPopularMoviesList.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden')
  };
}

function showHomePage() {
  refs.detailsPage.innerHTML = '';
  refs.popularPage.innerHTML = '';
  refs.moviesContainer.innerHTML = '';
  searchAndPaginationHomePage.fetchSearchMoviesList()
    .then(updateMovieMarkUp);
    refs.btnContainer.classList.remove('is-hidden');
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  if (searchAndPaginationHomePage.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden')
  };
  if (searchAndPaginationHomePage.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden')
  };
}

export default { createPopularMovieList, showHomePage };