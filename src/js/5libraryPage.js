
import updateDetailsPageMarkUp from './templating';
import fetchMovieByID from './fetchMovieByID';
import refs from './refs';

const openLib = (event) =>{
  refs.sectionLib.classList.remove('hidden');
  refs.sectionLib.classList.add('visibl');
  refs.searchForm.classList.add('hidden');
  refs.main.classList.add('hidden');

  console.log("показываем кнопки");
  // const homePage = document.querySelector('#homePage');
  // homePage.classList.add('is-hidden');

// const openLib = (event) => {
//     if (event.target.nodeName !== 'IMG') { return }
//     const id = event.target.dataset.id;
//     console.log(id);
//     homePage.classList.add('is-hidden');
//     fetchMovieByID(id).then(updateDetailsPageMarkUp)
};

export default openLib;