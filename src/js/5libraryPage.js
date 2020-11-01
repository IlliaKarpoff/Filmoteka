
import libPageTempl from '../templates/libPage.hbs';
import refs from './refs';


// const openLib = (event) =>{
//   refs.sectionLib.classList.remove('hidden');
//   refs.sectionLib.classList.add('visible');
//   refs.searchForm.classList.add('hidden');
//   refs.homePage.classList.add('hidden');
//   console.log("показываем кнопки");
// };

function openLib() {
  refs.homePage.classList.remove('is-hidden');
  refs.detailsPage.classList.add('is-hidden');
  refs.moviesContainer.innerHTML = '';
  const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`;
  fetch(url)
  .then(response => response.json())
    .then(({ results }) => {
      console.log(results);

      const markUp = libPageTempl(results);
      refs.libList.innerHTML('beforeend', markUp);
    }
    ) 
    .catch(error => console.log(error));
}


export default openLib;