import './sass/main.scss';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import handleOpenDetails from './js/4filmDetailsPage';
import updateDetailsPageMarkUp from './js/templating';
import openLib from './js/5libraryPage';
// import refs from './js/refs';
// import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import refs from './js/refs';

const homePage = document.querySelector('#homePage');
const detailsPage = document.querySelector('#detailsPage');
const searchForm = document.querySelector('.header__form');
const moviesContainer = document.querySelector('.movie-list');
const prevBtn = document.querySelector('[data-action="prev"]');
const nextBtn = document.querySelector('[data-action="next"]');
const pageBtn = document.querySelector('.btn-number');
const homeRef = document.querySelector('.header__home-link');


function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  form.reset();
  searchAndPaginationHomePage.resetPage();
  dublyazhKoda();
  // homePage.classList.remove('is-hidden');
  // detailsPage.classList.add('is-hidden');
  // moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchPopularMoviesList()
  // .then(updateMovieMarkUp);
};

function dublyazhKoda() {
  homePage.classList.remove('is-hidden');
  detailsPage.classList.add('is-hidden');
  moviesContainer.innerHTML = '';
  searchAndPaginationHomePage.fetchPopularMoviesList()
  .then(updateMovieMarkUp);
  pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
}
function nextBtnHandler() {
  searchAndPaginationHomePage.incrementPage();
  dublyazhKoda();
  // moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchPopularMoviesList()
  // .then(updateMovieMarkUp);
  // pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
};
function prevBtnHandler() {
  searchAndPaginationHomePage.decrementPage();
  dublyazhKoda();
  // moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchPopularMoviesList()
  // .then(updateMovieMarkUp);
  // pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
};

refs.lib.addEventListener('click', openLib);
searchForm.addEventListener('submit', fetchHomePage);
nextBtn.addEventListener('click', nextBtnHandler);
prevBtn.addEventListener('click', prevBtnHandler);
moviesContainer.addEventListener('click', handleOpenDetails);
homeRef.addEventListener('click', dublyazhKoda);
