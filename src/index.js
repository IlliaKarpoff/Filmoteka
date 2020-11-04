import './sass/main.scss';
import './js/initialHomePage';
import './js/searchAndPaginationHomePage';
import './js/navigation';
import './js/filmDetailsPage';
import './js/libraryPage';

import refs from './js/refs';
import handleOpenDetails from './js/filmDetailsPage';
import openLib from './js/libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import navigationPages from './js/navigation';
import activeDetailsPage from './js/filmDetailsPage';
import fetchPopularMoviesList from './js/initialHomePage';
import upButtonHandler from './js/upButton';

fetchPopularPage();

function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  // form.reset();
  searchAndPaginationHomePage.resetPage();
  navigationPages.activeHomePage();
};

function fetchPopularPage() {
  fetchPopularMoviesList.resetPage();
  navigationPages.createPopularMovieList();
}

refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.moviesContainer.addEventListener('click', activeDetailsPage);
refs.homeRef.addEventListener('click', navigationPages.activeHomePage);
refs.homePage.addEventListener('click', handleOpenDetails);
refs.upButton.addEventListener('click', upButtonHandler);
refs.logoRef.addEventListener('click', fetchPopularPage);
