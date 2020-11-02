import updateDetailsPageMarkUp from './templating';
import fetchMovieByID from './fetchMovieByID';
import refs from './refs';
 
const handleOpenDetails = (event) => {
    if (event.target.nodeName !== 'IMG') { return }
    const id = event.target.dataset.id;
    // console.log(id);
    // refs.detailsPage.innerHTML = '';
    refs.moviesContainer.innerHTML = '';
    refs.popularPage.innerHTML = '';
    refs.btnContainer.classList.add('is-hidden');

    fetchMovieByID(movieId).then(updateDetailsPageMarkUp)
};

export default activeDetailsPage;

// - пишем функцию monitorButtonStatusText которая следит за состоянием (значок и текст в кнопке) читает  local storage по ключу filmsQueue и  filmsWatched и меняет текст и значки в кнопках: Delete from queue / Add to queue ; Delete from watched / Add to watched.
// - пишем функцию toggleToQueue (будет добавлять или удалять фильмы из очереди просмотра), которая создает переменную массива в очереди, читает local storage по ключу filmsQueue если результат не пустой то пушит элементы в нашу переменную, ! также функция вплотную работает с глобальной переменной selectFilm, и если selectFilm содержиться в нашей переменной то убираем его оттуда иначе добавляем selectFilm в нашу переменную, потом эта функция кладет нашу переменную в  local storage, запускает в конце себя функцию monitorButtonStatusText;
// - пишем функцию toggleToWatched (будет добавлять или удалять фильмы из просмотренных), суть ее работы один в один как toggleToQueue  только работает с local storage по ключу filmsWatched.
// - пишем функцию showDetails которая принимает параметром selectFilm (глобальная переменная - объект, которая создана в задаче номер три) и рендерит всю разметку согласно макета, в этой функции запускается функция monitorButtonStatusText.

// * из DOM достукивается до нужных кнопок участник 3 и вешает функции  toggleToQueue  и toggleToWatched слушателями на страницу деталей и удаляет там где не нужно.


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