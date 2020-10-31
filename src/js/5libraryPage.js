
// import fetchMovieTpl from '../templates/fetchMovie.hbs';
// import fetchMovieByID from './fetchMovieByID';
// import updateDetailsPageMarkUp from './templating';
import refs from './refs';

// function openLib(hits) {
//   const libMarkup =  fetchMovieTpl(hits)
//   refs.galleryList.innerHTML = libMarkup
// }

// export default openLib;







const openLib = (event) =>{
  refs.sectionLib.classList.remove('hidden');
  refs.sectionLib.classList.add('visibl');
  refs.searchForm.classList.add('hidden');
  refs.main.classList.add('hidden');
  console.log("показываем кнопки");
};
export default openLib;