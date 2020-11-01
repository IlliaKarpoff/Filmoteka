import './sass/main.scss';
import updateMovieMarkUp from './js/updateMovieMarkUp';
import handleOpenDetails from './js/filmDetailsPage';
// import updateDetailsPageMarkUp from './js/templating';
import openLib from './js/5libraryPage';
import searchAndPaginationHomePage from './js/searchAndPaginationHomePage';
import refs from './js/refs';
import fetchPopularMoviesList from './js/fetchPopularMoviesList';
import upButtonHandler from './js/upButton';
import updatePopularMovieMarkUp from './js/updatePopularMovieMarkUp';
import pageRender from './js/pageRender';

// function createPopularMovieList() {
//   refs.popularPage.classList.remove('is-hidden');
//   refs.moviesContainer.classList.add('is-hidden');
//   refs.detailsPage.classList.add('is-hidden');
//   refs.popularPage.innerHTML = '';
//   fetchPopularMoviesList.fetchPopularMovies()
//     .then(updatePopularMovieMarkUp);
//   refs.nextBtn.classList.remove('is-hidden');
//   searchAndPaginationHomePage.pageNumber;
//   refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
// }

pageRender.createPopularMovieList();

function fetchHomePage(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  searchAndPaginationHomePage.query = form.elements.query.value;
  
  form.reset();
  searchAndPaginationHomePage.resetPage();
  pageRender.showHomePage();
};

// function showHomePage() {
//   refs.moviesContainer.classList.remove('is-hidden');
//   refs.detailsPage.classList.add('is-hidden');
//   refs.popularPage.classList.add('is-hidden');
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
// }

// function nextBtnHandler() {
//   // if (inputValue = null) {
//   //   createPopularMovieList();
//   // }
//   // searchAndPaginationHomePage.incrementPage();
//   fetchPopularMoviesList.incrementPage();
//   showHomePage();
//   createPopularMovieList();
// };

// function prevBtnHandler() {
//   // searchAndPaginationHomePage.decrementPage();
//   fetchPopularMoviesList.decrementPage();
//   showHomePage();
//   createPopularMovieList();
// };

refs.lib.addEventListener('click', openLib);
refs.searchForm.addEventListener('submit', fetchHomePage);
refs.nextBtn.addEventListener('click', searchAndPaginationHomePage.nextBtnHandler);
refs.prevBtn.addEventListener('click', searchAndPaginationHomePage.prevBtnHandler);
refs.homePage.addEventListener('click', handleOpenDetails);
refs.homeRef.addEventListener('click', pageRender.showHomePage);
refs.upButton.addEventListener('click', upButtonHandler);
refs.logoRef.addEventListener('click', pageRender.createPopularMovieList);
