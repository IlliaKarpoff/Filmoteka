'use strict'
import './sass/main.scss';
import './js/initialHomePage';
import './js/searchAndPaginationHomePage';
import './js/navigation';
import './js/filmDetailsPage';
import './js/libraryPage';

import refs from './js/refs';
import upButtonHandler from './js/upButton';
import fetchPopularMoviesList from './js/initialHomePage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import navigationPages from './js/navigation';
import activeDetailsPage from './js/filmDetailsPage';
import openLib from './js/libraryPage';
// import {movieId} from '.js/filmDetailsPage';

fetchPopularPage();

function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  // form.reset();
  searchAndPaginationHomePage.resetPage();
  navigationPages.activeHomePage();
};

function fetchPopularPage(event) {
  if (event) event.preventDefault();
  fetchPopularMoviesList.resetPage();
  navigationPages.createPopularMovieList();
}

refs.logoRef.addEventListener('click', fetchPopularPage);
refs.homeRef.addEventListener('click', navigationPages.activeHomePage);
refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.homePage.addEventListener('click', activeDetailsPage);
refs.upButton.addEventListener('click', upButtonHandler);


// console.log('в индекс вне ф-ии:',movieId);
console.log(refs.libWatchedBtn);