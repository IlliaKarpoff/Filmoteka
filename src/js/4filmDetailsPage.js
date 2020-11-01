import updateDetailsPageMarkUp from './templating';
import fetchMovieByID from './fetchMovieByID';
import refs from './refs';

// const homePage = document.querySelector('#homePage');
// const detailsPage = document.querySelector('#detailsPage');
 
const handleOpenDetails = (event) => {
    if (event.target.nodeName !== 'IMG') { return }
    const id = event.target.dataset.id;
    // console.log(id);
    refs.detailsPage.innerHTML = '';
    refs.homePage.classList.add('is-hidden');
    refs.detailsPage.classList.remove('is-hidden');

    fetchMovieByID(id).then(updateDetailsPageMarkUp)
};

export default handleOpenDetails;


// const selectFilm
// const filmsQueue
// const filmsWatched
// const watchedButton = document.querySelector('addToWatchedBtn');
// const queueButton = document.querySelector('addToQueueBtn');
// // функцию monitorButtonStatusText которая следит за состоянием 
// // (значок и текст в кнопке) читает  local storage по ключу 
// // filmsQueue и  filmsWatched и меняет текст и значки в кнопках
// function monitorButtonStatusText() {
//     if (watchedButton.textContent === 'Add to watched') {
//         watchedButton.textContent = 'Delete from watched'
//     }
// // Delete from queue / Add to queue ; Delete from watched / Add to watched
// }
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