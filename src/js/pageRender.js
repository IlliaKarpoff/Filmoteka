import refs from './refs';
import fetchPopularMoviesList from './fetchPopularMoviesList';
import updatePopularMovieMarkUp from './updatePopularMovieMarkUp';
import searchAndPaginationHomePage from './searchAndPaginationHomePage';
import updateMovieMarkUp from './updateMovieMarkUp';

function createPopularMovieList() {
  // refs.popularPage.classList.remove('is-hidden');
  refs.moviesContainer.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.popularPage.innerHTML = '';
  fetchPopularMoviesList.fetchPopularMovies()
    .then(updatePopularMovieMarkUp);
  refs.btnContainer.classList.remove('is-hidden');
  refs.nextBtn.classList.remove('is-hidden');
  searchAndPaginationHomePage.pageNumber;
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  // fetchPopularMoviesList.prevBtnHandler();
  fetchPopularMoviesList.nextBtnHandler();
}

function showHomePage() {
  // refs.moviesContainer.classList.remove('is-hidden');
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
  // searchAndPaginationHomePage.prevBtnHandler();
  // searchAndPaginationHomePage.nextBtnHandler();
}

export default { createPopularMovieList, showHomePage };