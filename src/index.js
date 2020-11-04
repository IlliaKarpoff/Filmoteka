import './sass/main.scss';
import './js/1initialHomePage';
import './js/searchAndPaginationHomePage';
import './js/3navigation';
import './js/4filmDetailsPage';
import './js/5libraryPage';

import refs from './js/refs';
import handleOpenDetails from './js/4filmDetailsPage';
import openLib from './js/5libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import navigationPages from './js/3navigation';
import activeDetailsPage from './js/4filmDetailsPage';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import upButtonHandler from './js/upButton';

fetchPopularPage();

function fetchHomePage(event) {
  // event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  form.reset();
  // searchAndPaginationHomePage.resetPage();
  navigationPages.activeHomePage();
};

function fetchPopularPage() {
  fetchPopularMoviesList.resetPage();
  navigationPages.createPopularMovieList();
}

export function nextBtnHandler() {
  if (refs.moviesContainer) {
    searchAndPaginationHomePage.incrementPage();
    return navigationPages.activeHomePage();
  } else {
    fetchPopularMoviesList.incrementPage();
    return navigationPages.createPopularMovieList();
  }
};

export function prevBtnHandler() {
  if (refs.moviesContainer) {
    searchAndPaginationHomePage.decrementPage();
    return navigationPages.activeHomePage();
  }
  else {
    fetchPopularMoviesList.decrementPage();
    return navigationPages.createPopularMovieList();
  }
};

refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.moviesContainer.addEventListener('click', activeDetailsPage);
refs.homeRef.addEventListener('click', navigationPages.activeHomePage);
refs.homePage.addEventListener('click', handleOpenDetails);
refs.upButton.addEventListener('click', upButtonHandler);
refs.logoRef.addEventListener('click', fetchPopularPage);
