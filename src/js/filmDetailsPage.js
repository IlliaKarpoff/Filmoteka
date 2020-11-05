import { updateDetailsPageMarkUp } from './templating';
import detailsPageTpl from '../templates/detailsPage.hbs';
import fetchMovieByID from './fetchMovieByID';
import refs from './refs';
import { notice } from './notification';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
// import { selectedMovie } from './navigation'

const selectedMovie = {};

function selectMovie(event) {
    selectedMovie.id = event.target.dataset.id;
    selectedMovie.imgPath = event.target.src;
    selectedMovie.title = event.target.alt;
    selectedMovie.year = event.target.dataset.date.split('-')[0];
    selectedMovie.vote = event.target.dataset.vote;
    console.log('Selected movie:', selectedMovie);
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

    fetchMovieByID(movieId).then(updateDetailsPageMarkUp);
    refs.detailsPage.addEventListener('click', onclick);
};
// function lightBox(event) {
//     if (event.target.classList.contains('film-poster')) {
//       console.log(event.target.src);
//         const instance = basicLightbox.create(
//         `<img src=${event.target.src} width="800" height="600">`,
//         );
//         instance.show();
//     }
// };
const watchedMovies = [];
const moviesQueue = [];

function onclick(event) {
    if (event.target.classList.contains('film-poster')) {
        const instance = basicLightbox.create(
        `<img src=${event.target.src} width="800" height="600">`,
        );
        instance.show();
        console.log(event.target.src);
    };
    if (event.target.classList.contains('addToWatchedBtn')) {
        console.log('Додаємо в переглянуті!');
        watchedMovies = JSON.parse(localStorage.getItem('filmsWatched'));
        // const parsedWatched = JSON.parse(localStorage.getItem('filmsWatched'));
        // parsedWatched.push({...selectedMovie});
        watchedMovies.push({...selectedMovie});
        // console.log(watchedMovies);
        notice({
        text: 'Movie added to Watched',
        delay: 1500,
        });
        watchedMovies.push(obj);
        console.log(watchedMovies);
        localStorage.setItem('filmsWatched', JSON.stringify(watchedMovies));
        console.log('Готовий масив для шаблонізатора:', parsedWatched);
    }
    if (event.target.classList.contains('addToQueueBtn')) {
        console.log('Цей подивимось на вихідних ;)');
        // moviesQueue = JSON.parse(localStorage.getItem('filmsQueue'));
        // // const parsedQueue = JSON.parse(localStorage.getItem('filmsQueue'));
        // // parsedQueue.push({...selectedMovie});
        // parsedQueue.push({...selectedMovie});
        // // console.log(moviesQueue);
        // localStorage.setItem('filmsQueue', JSON.stringify(parsedQueue));
        notice({
        text: 'Movie added to Queue',
        delay: 1500,
        });
        moviesQueue.push(selectedMovie);
        console.log(moviesQueue);
        localStorage.setItem('filmsQueue', JSON.stringify(moviesQueue));
        const parsedQueue = JSON.parse(localStorage.getItem('filmsQueue'));
        console.log('Готовий масив для шаблонізатора:', parsedQueue);
    }
}
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


 // selectedMovie.imgPath = obj.poster_path;
        // selectedMovie.title = obj.title;
        // selectedMovie.id = obj.id;
        // selectedMovie.vote = obj.vote_average;
        // selectedMovie.year = obj.release_date.split('-')[0];
    // console.log('Selected movie:', selectedMovie);

    
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

