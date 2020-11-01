import refs from './refs';
import searchAndPaginationHomePage from './searchAndPaginationHomePage';
// './js/searchAndPaginationHomePage';
// import searchAndPaginationHomePage from './searchAndPaginationHomePage';
import updateMovieMarkUp from './updateMovieMarkUp';
import {nextBtnHandler, prevBtnHandler} from '../index';

// - создаем глобальную переменную selectFilm; 
let selectFilm = {};

// - создаем функцию activeHomePage  которая показывает домашнюю страницу 
//прячет остальные, а также вешает слушателей на кнопку вперед и назад
// из плагинации и удаляет ненужных всех слушателей
//  (таких 4 во всем проекте не нужных на этой странице); 
export function activeHomePage() {
  refs.homePage.classList.remove('is-hidden');
  refs.detailsPage.innerHTML = '';
  refs.libraryPage.classList.add('is-hidden');
  refs.moviesContainer.innerHTML = '';
  searchAndPaginationHomePage.fetchSearchMoviesList()
  .then(updateMovieMarkUp);
  refs.nextBtn.classList.remove('is-hidden');
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
  if (searchAndPaginationHomePage.pageNumber !== 1) {
    refs.prevBtn.classList.remove('is-hidden')
  };
  if (searchAndPaginationHomePage.pageNumber === 1) {
    refs.prevBtn.classList.add('is-hidden')
  };
  refs.nextBtn.addEventListener('click', nextBtnHandler);
  refs.prevBtn.addEventListener('click', prevBtnHandler);
};
// - создаем функцию activeLibraryPage которая показывает страницу
//  с библиотекой и прячет остальные, запускает функцию отрисовки 
//  фильмов из очереди drawQueueFilmList (которую сделает пятый участник) 
//  и добавляет кнопке списка очереди фильмов эффект выбранной с помощью
//   класса, а также вешает слушателей на кнопки показа очереди фильмов
//    и просмотренных фильмов и удаляет ненужных всех слушателей 
//    (таких 4 во всем проекте не нужных на этой странице); 
export function activeLibraryPage() {
    //   refs.moviesContainer.innerHTML = '';
  refs.homePage.classList.add('is-hidden');
  refs.detailsPage.innerHTML = '';
  refs.libraryPage.classList.remove('is-hidden');
//   drawQueueFilmList();
//   activeButton();
//   refs.libWatchedBtn.addEventListener('click', handlebuttonW)
//   refs.libQueueBtn.addEventListener('click', handlebuttonQ)
};

// - создаем функцию activeDetailsPage которая показывает страницу 
// детальной отрисовки фильма и прячет остальные, функция принимает 
// два параметра movieId и itsLibraryFilm (это bool), и в зависимости 
// от того это выбранный фильм с домашней страницы или из библиотеки, 
// заполняет глобальную переменную selectFilm нужным объектом и запускает
//  функцию  showDetails c параметром selectFilm который они заполнили
//   одними или другими данными (которую сделает 4й участник), 
//   вешает слушателей на кнопки добавления/удаления фильмов в очередь 
//   просмотра и добавления/удаления фильмов из просмотренных со страницы
//    detailsPage и удаляет ненужных всех слушателей 
//    (таких 4 во всем проекте не нужных на этой странице); 
export function activeDetailsPage(movieId, itsLibraryFilm) {
    refs.homePage.classList.add('is-hidden');
    refs.libraryPage.classList.add('is-hidden');
    if (itsLibraryFilm) {
            selectFilm = {
            id: movieId,
            // library: itsLibraryFilm,
        };
    }
    showDetails(selectFilm);
};

// - вешаем слушателей на переход на домашнюю страницу и страницу 
// библиотеки в хедере.

// - на логотип повесить запуск функции activeHomePage, 
// чтобы при клике туда возвращаться.

// из DOM достукивается до нужных кнопок участник 3 и вешает функции
// toggleToQueue  и toggleToWatched слушателями на страницу деталей 
// и удаляет там где не нужно.