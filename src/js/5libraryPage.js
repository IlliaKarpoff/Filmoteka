
import updateDetailsPageMarkUp from './templating';
import fetchMovieByID from './fetchMovieByID';
import refs from './refs';

const openLib = (event) =>{
  refs.sectionLib.classList.remove('hidden');
  refs.sectionLib.classList.add('visibl');
  refs.searchForm.classList.add('hidden');
  refs.main.classList.add('hidden');

  console.log("показываем кнопки");

};


export default openLib;
