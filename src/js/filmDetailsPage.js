import { updateDetailsPageMarkUp } from './templating';
import detailsPageTpl from '../templates/detailsPage.hbs';
import fetchMovieByID from './fetchMovieByID';
import refs from './refs';
import { selectFilm } from './navigation'

function selectMovie(event) {
    selectFilm.imgPath = event.target.src;
    selectFilm.title = event.target.alt;
    selectFilm.id = event.target.dataset.id;
    selectFilm.year = event.target.dataset.date.split('-')[0];
    console.log('Selected movie:', selectFilm);

    // if (activeDetailsPage) {
    //     refs.addToQueueBtn.addEventListener('click', activeDetailsPage);
    // }

};

let movieId;
const activeDetailsPage = (event) => {
    if (event.target.nodeName !== 'IMG') { return }
    refs.detailsPage.innerHTML = '';
    refs.searchForm.classList.add('is-hidden');
    refs.homePage.classList.add('is-hidden');
    refs.libraryPage.classList.add('is-hidden');
    movieId = event.target.dataset.id;

    selectMovie(event);

    fetchMovieByID(movieId).
    then(updateDetailsPageMarkUp);
    refs.detailsPage.addEventListener('click', onclick);
    //     updateDetailsPageMarkUp(obj);
    //     // selectMovie(event)
    // selectFilm.imgPath = obj.poster_path;
    // selectFilm.genres = obj.genres;
    // selectFilm.title = obj.title;
    // selectFilm.id = obj.id;
    // selectFilm.year = obj.release_date.split('-')[0];    
};
const watchedMovies = [];
const moviesQueue = [];
const selectedMovie = {};

function onclick(event) {
    if (event.target.classList.contains('addToWatchedBtn')) {
        console.log('Додаємо в переглянуті!');
        watchedMovies.push(selectedMovie);
        console.log(watchedMovies);
    }
    if (event.target.classList.contains('addToQueueBtn')) {
        console.log('Цей подивимось на вихідних ;)');
        moviesQueue.push(selectedMovie);
        console.log(moviesQueue);
    }

function selectMovie(event) {
    selectedMovie.id = event.target.dataset.id;
    selectedMovie.imgPath = event.target.src;
    selectedMovie.title = event.target.alt;
    selectedMovie.year = event.target.dataset.date.split('-')[0];
    selectedMovie.vote = event.target.dataset.vote;
    console.log('Selected movie:', selectedMovie);
 } };

// function onclick(event) {
//     if (event.target.classList.contains('addToWatchedBtn')) {
//         console.log('Додаємо в переглянуті!');
//     }
//     if (event.target.classList.contains('addToQueueBtn')) {
//         console.log('Цей подивимось на вихідних ;)');
//     }
// }
// export 
// function activeDetailsPage(event, movieId, itsLibraryFilm) {
//     console.log('selectFilm', selectFilm);
//     if (event.target.nodeName !== 'IMG') { return }
//     refs.searchForm.classList.add('is-hidden');
//     refs.homePage.classList.add('is-hidden');
//     refs.detailsPage.classList.remove('is-hidden');
//     refs.libraryPage.innerHTML = '';
//     refs.detailsPage.innerHTML = '';
//     refs.moviesContainer.innerHTML = '';
//     refs.popularPage.innerHTML = '';
//     refs.btnContainer.classList.add('is-hidden');
    
//     // console.log(event.target.src);
//     // console.log(event.target.alt);
//     // console.log(event.target.dataset.id);
//     // console.log(event.target.dataset.date.split('-')[0]);
    
//     movieId = event.target.dataset.id;  
//     console.log('selectFilm.id', selectFilm.id);
//     // if (itsLibraryFilm) {
//         if (true) {
//             selectFilm.id = movieId;
//             selectFilm.library = true
//     };
//         console.log(selectFilm);
//     fetchMovieByID(movieId).then(showDetails)
//     .catch(fuckup => console.log(fuckup));
// };
// function cb() {
//     console.log('click!');
// }
// function listen() {
//     refs.addToWatchedBtn.addEventListener('click', cb);
//     refs.addToQueueBtn.addEventListener('click', cb);
// }
// function foo() {
//     // activeDetailsPage();
//     // listen();
// }


//    

// export selectMovie;
export default activeDetailsPage;

//- пишем функцию monitorButtonStatusText которая следит за состоянием 
// (значок и текст в кнопке) читает  local storage по ключу filmsQueue
//  и  filmsWatched и меняет текст и значки в кнопках: 
// Delete from queue / Add to queue 
// ; Delete from watched / Add to watched.
function monitorButtonStatusText() {
    const filmsWatched = localStorage.getItem('filmsWatched');
    // addToWatchedBtn.textContent = 'Delete from watched';
    // addToWatchedBtn.textContent = 'Add to watched';
    const filmsQueue = localStorage.getItem('filmsQueue');
    // addToQueueBtn.textContent = 'Delete from queue';
    // addToQueueBtn.textContent = 'Add to queue';
    // console.log(filmsWatched);
    
}

//- пишем функцию toggleToQueue (будет добавлять или удалять фильмы 
// из очереди просмотра), которая создает переменную массива в очереди,
//  читает local storage по ключу filmsQueue если результат не пустой
//  то пушит элементы в нашу переменную, 
// ! также функция вплотную работает с глобальной переменной selectFilm,
//  и если selectFilm содержиться в нашей переменной то убираем его 
// оттуда иначе добавляем selectFilm в нашу переменную, 
// потом эта функция кладет нашу переменную в  local storage, 
// запускает в конце себя функцию monitorButtonStatusText;

// // функцию toggleToQueue (будет добавлять или удалять фильмы из очереди просмотра)
// function toggleToQueue() {
//     const arr = []
// }
// filmsQueue 
// f toggleToWatched 
// filmsWatched

// const filmsQueue = {
//   id: movieId,
//   title: original_title,
//   year: release_date,
//   img: backdrop_path,
// };

// localStorage.setItem('filmsQueue', JSON.stringify(settings));

// const savedQueue = localStorage.getItem('filmsQueue');
// const parsedQueue = JSON.parse(savedQueue);

// console.log(parsedQueue);

// function showDetails(selectFilm) {

// }
//- пишем функцию toggleToWatched (будет добавлять или удалять фильмы 
// из просмотренных), суть ее работы один в один как toggleToQueue
//   только работает с local storage по ключу filmsWatched.

//- пишем функцию showDetails которая принимает параметром selectFilm
//  (глобальная переменная - объект, которая создана в задаче номер 3)
//  и рендерит всю разметку согласно макета, 
//  в этой функции запускается функция monitorButtonStatusText.
function showDetails(selectFilm) {
//   const markUp = detailsPageTpl(result); 
  refs.detailsPage.insertAdjacentHTML('beforeend', detailsPageTpl(selectFilm));
  monitorButtonStatusText();
}
// * из DOM достукивается до нужных кнопок участник 3 и вешает функции  toggleToQueue  и toggleToWatched слушателями на страницу деталей и удаляет там где не нужно.
