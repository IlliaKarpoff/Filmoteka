'use strict'
import './sass/main.scss';
import './js/initialHomePage';
import './js/searchAndPaginationHomePage';
import './js/navigation';
import './js/filmDetailsPage';
import './js/libraryPage';

import refs from './js/refs';
// import handleOpenDetails from './js/filmDetailsPage';
import upButtonHandler from './js/upButton';
import fetchPopularMoviesList from './js/initialHomePage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import navigationPages from './js/navigation';
import activeDetailsPage from './js/filmDetailsPage';
import openLib from './js/libraryPage';
import { myInfo } from './js/notification';

fetchPopularPage();
// localStorage.setItem('filmsWatched', JSON.stringify([]));
// localStorage.setItem('filmsQueue', JSON.stringify([]));

function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
 
  searchAndPaginationHomePage.resetPage();
  navigationPages.activeHomePage();

  refs.logoRef.addEventListener("click", function(e) {
  if (e.currentTarget === refs.logoRef) {
    form.reset();
  }
});
};

function fetchPopularPage(event) {
  if (event) event.preventDefault();
  
  fetchPopularMoviesList.resetPage();
  navigationPages.createPopularMovieList();
  myInfo()
}

refs.logoRef.addEventListener('click', fetchPopularPage);
refs.homeRef.addEventListener('click', navigationPages.activeHomePage);
refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.homePage.addEventListener('click', activeDetailsPage);
refs.upButton.addEventListener('click', upButtonHandler);
