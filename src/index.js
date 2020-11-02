import './sass/main.scss';
import './js/1initialHomePage';
import './js/searchAndPaginationHomePage';
import './js/3navigation';
import './js/4filmDetailsPage';
import './js/5libraryPage';

import refs from './js/refs';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import openLib from './js/5libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import { activeHomePage, activeLibraryPage/*, activeDetailsPage*/ } from './js/3navigation';
import activeDetailsPage from './js/4filmDetailsPage';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import upButtonHandler from './js/upButton';

console.dir(window);

export function createPopularMovieList() {
  
  refs.searchForm.classList.remove('is-hidden');
  refs.homePage.classList.remove('is-hidden');
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
  activeHomePage();
};
/* перенес в навігейшн.жс
// function activeHomePage() {
//   refs.homePage.classList.remove('is-hidden');
//   refs.detailsPage.classList.add('is-hidden');
//   refs.moviesContainer.innerHTML = '';
//   searchAndPaginationHomePage.fetchSearchMoviesList() 
//     .then(updateMovieMarkUp);
//   refs.nextBtn.classList.remove('is-hidden');
//   refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
//   if (searchAndPaginationHomePage.pageNumber !== 1) {
//     refs.prevBtn.classList.remove('is-hidden')
//   };
//   if (searchAndPaginationHomePage.pageNumber === 1) {
//     refs.prevBtn.classList.add('is-hidden')
//   };
// }*/

export function nextBtnHandler() {
  searchAndPaginationHomePage.incrementPage();
  activeHomePage();
};

export function prevBtnHandler() {
  searchAndPaginationHomePage.decrementPage();
  activeHomePage();
};

refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
/* перенес в навігейшн.жс
// refs.nextBtn.addEventListener('click', nextBtnHandler);
// refs.prevBtn.addEventListener('click', prevBtnHandler); */
refs.moviesContainer.addEventListener('click', activeDetailsPage);
refs.homeRef.addEventListener('click', activeHomePage);
refs.upButton.addEventListener('click', upButtonHandler);
refs.logoRef.addEventListener('click', createPopularMovieList);
