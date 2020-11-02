import './sass/main.scss';
import handleOpenDetails from './js/filmDetailsPage';
import openLib from './js/5libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import refs from './js/refs';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import upButtonHandler from './js/upButton';
import pageRender from './js/pageRender';

fetchPopularPage();

function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  form.reset();
  searchAndPaginationHomePage.resetPage();
  pageRender.showHomePage();
};

function fetchPopularPage() {
  fetchPopularMoviesList.resetPage();
  pageRender.createPopularMovieList();
}

function nextBtnHandler() {
  if (fetchHomePage) {
    searchAndPaginationHomePage.incrementPage();
    return pageRender.showHomePage();
  } else {
    fetchPopularMoviesList.incrementPage();
    return pageRender.createPopularMovieList();
  }
};

function prevBtnHandler() {
  if (fetchHomePage) {
    searchAndPaginationHomePage.decrementPage();
    return pageRender.showHomePage();
  }
  else {
    fetchPopularMoviesList.decrementPage();
    return pageRender.createPopularMovieList();
  }
};

refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.nextBtn.addEventListener('click', nextBtnHandler);
refs.prevBtn.addEventListener('click', prevBtnHandler);
refs.homePage.addEventListener('click', handleOpenDetails);
refs.homeRef.addEventListener('click', pageRender.showHomePage);
refs.upButton.addEventListener('click', upButtonHandler);
refs.logoRef.addEventListener('click', fetchPopularPage);
