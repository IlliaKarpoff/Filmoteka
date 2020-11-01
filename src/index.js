import './sass/main.scss';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import handleOpenDetails from './js/4filmDetailsPage';
import updateDetailsPageMarkUp from './js/templating';
import openLib from './js/5libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import refs from './js/refs';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import upButtonHandler from './js/upButton';

console.dir(window);
function createPopularMovieList() {
  refs.homePage.classList.remove('is-hidden');
  refs.detailsPage.classList.add('is-hidden');
  refs.moviesContainer.innerHTML = '';
  fetchPopularMoviesList()
    .then(updateMovieMarkUp);
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
}

createPopularMovieList();

function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  form.reset();
  searchAndPaginationHomePage.resetPage();
  showHomePage();
};

function showHomePage() {
  refs.homePage.classList.remove('is-hidden');
  refs.detailsPage.classList.add('is-hidden');
  refs.moviesContainer.innerHTML = '';
  searchAndPaginationHomePage.fetchSearchMoviesList() 
    .then(updateMovieMarkUp);
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  if (searchAndPaginationHomePage.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden')
  };
  if (searchAndPaginationHomePage.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden')
  };
}

function nextBtnHandler() {
  searchAndPaginationHomePage.incrementPage();
  showHomePage();
  createPopularMovieList();
};

function prevBtnHandler() {
  searchAndPaginationHomePage.decrementPage();
  showHomePage();
  createPopularMovieList();
};

refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.nextBtn.addEventListener('click', nextBtnHandler);
refs.prevBtn.addEventListener('click', prevBtnHandler);
refs.moviesContainer.addEventListener('click', handleOpenDetails);
refs.homeRef.addEventListener('click', showHomePage);
refs.upButton.addEventListener('click', upButtonHandler);
refs.logoRef.addEventListener('click', createPopularMovieList);
