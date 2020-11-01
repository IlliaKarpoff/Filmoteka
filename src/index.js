import './sass/main.scss';
import './js/1initialHomePage';
import './js/searchAndPaginationHomePage';
import './js/3navigation';
import './js/4filmDetailsPage';
import './js/5libraryPage';

import refs from './js/refs';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import activeDetailsPage from './js/4filmDetailsPage';
import updateDetailsPageMarkUp from './js/templating';
import openLib from './js/5libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import {activeHomePage} from './js/3navigation';

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
  activeHomePage();
  // homePage.classList.remove('is-hidden');
  // detailsPage.classList.add('is-hidden');
  // moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchPopularMoviesList()
  // .then(updateMovieMarkUp);
};

// function activeHomePage() {
//   homePage.classList.remove('is-hidden');
//     detailsPage.innerHTML = '';
//   // detailsPage.classList.add('is-hidden');
//   moviesContainer.innerHTML = '';
//   searchAndPaginationHomePage.fetchPopularMoviesList()
//   .then(updateMovieMarkUp);
//   pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
// }
function nextBtnHandler() {
  searchAndPaginationHomePage.incrementPage();
  activeHomePage();
  // moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchPopularMoviesList()
  // .then(updateMovieMarkUp);
  // pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
};
function prevBtnHandler() {
  searchAndPaginationHomePage.decrementPage();
  activeHomePage();
  // moviesContainer.innerHTML = '';
  // searchAndPaginationHomePage.fetchPopularMoviesList()
  // .then(updateMovieMarkUp);
  // pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
};

refs.lib.addEventListener('click', openLib);
searchForm.addEventListener('submit', fetchHomePage);
nextBtn.addEventListener('click', nextBtnHandler);
prevBtn.addEventListener('click', prevBtnHandler);
moviesContainer.addEventListener('click', activeDetailsPage);
homeRef.addEventListener('click', activeHomePage);
