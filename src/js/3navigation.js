import refs from './refs';
import searchAndPaginationHomePage from './searchAndPaginationHomePage';
import updateMovieMarkUp from './updateMovieMarkUp';

// - создаем глобальную переменную selectFilm; 
let selectFilm = {};

// - создаем функцию activeHomePage  которая показывает домашнюю страницу 
//прячет остальные, а также вешает слушателей на кнопку вперед и назад
// из плагинации и удаляет ненужных всех слушателей
//  (таких 4 во всем проекте не нужных на этой странице); 
export function activeHomePage() {
  homePage.classList.remove('is-hidden');
  detailsPage.innerHTML = '';
  libraryPage.classList.add('is-hidden');
  refs.moviesContainer.innerHTML = '';
  searchAndPaginationHomePage.fetchPopularMoviesList()
  .then(updateMovieMarkUp);
  refs.pageBtn.textContent = searchAndPaginationHomePage.pageNumber;
};
// - создаем функцию activeLibraryPage которая показывает страницу
//  с библиотекой и прячет остальные, запускает функцию отрисовки 
//  фильмов из очереди drawQueueFilmList (которую сделает пятый участник) 
//  и добавляет кнопке списка очереди фильмов эффект выбранной с помощью
//   класса, а также вешает слушателей на кнопки показа очереди фильмов
//    и просмотренных фильмов и удаляет ненужных всех слушателей 
//    (таких 4 во всем проекте не нужных на этой странице); 
function activeLibraryPage() {};

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
    // detailsPage.innerHTML = '';
    homePage.classList.add('is-hidden');
    // detailsPage.classList.remove('is-hidden');
    libraryPage.classList.add('is-hidden');
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




// const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

// function fetchPopularMoviesList() {
//   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`;
  
//   return fetch(url)
//   .then(response => response.json())
//     .then(({ results }) => {
//       return results;
      
//   })
//   .catch(error => console.log(error));
// }

// export default fetchPopularMoviesList;
