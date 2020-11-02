
import libPageTempl from '../templates/libPage.hbs';
import refs from './refs';
import { activeHomePage, activeLibraryPage, /*activeDetailsPage*/} from './3navigation';
import activeDetailsPage from './4filmDetailsPage';
import {createPopularMovieList} from '../index';
// import activeDetailsPage from './js/4filmDetailsPage';

function openLib() {
  activeLibraryPage ();
  // refs.homePage.classList.remove('is-hidden');
  // refs.detailsPage.classList.add('is-hidden');
  refs.moviesContainer.innerHTML = '';
  refs.libraryPage.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";
  // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`;
  // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2010&sort_by=vote_average.desc`;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18&primary_release_year=2014`;

  fetch(url)
  .then(response => response.json())
    .then(({ results }) => {
      console.log(results)

      const markUp = libPageTempl(results);
      refs.libraryPage.insertAdjacentHTML('beforeend', markUp);
      // refs.sectionLib.classList.add('visible');
      refs.homePage.classList.add('is-hidden');
      // refs.searchForm.classList.add('is-hidden');
      refs.searchForm.classList.add('hidden');
    }
    ) 
    .catch(error => console.log(error));

}
refs.libraryPage.addEventListener('click', activeDetailsPage);
refs.homeRef.addEventListener('click',createPopularMovieList);

export default openLib;
// refs.libImg.addEventListener('click', activeDetailsPage);
// refs.libWatchedBtn.addEventListener('click', foo);
// refs.libQueueBtn.addEventListener('click', koo);
// function foo () {
//   alert('тыцьнули libWatchedBtn');
// }
// function koo () {
//   alert('тыцьнули libQueuedBtn');
// }



// const openLib = (event) =>{
//   refs.sectionLib.classList.remove('hidden');
//   refs.sectionLib.classList.add('visible');
//   refs.searchForm.classList.add('hidden');
//   refs.homePage.classList.add('hidden');
//   console.log("показываем кнопки");
// };