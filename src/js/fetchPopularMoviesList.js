import searchAndPaginationHomePage from './searchAndPaginationHomePage';
import pageRender from './pageRender';

const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

export default {
  // pageNumber: 1,
  fetchPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`;
  
  return fetch(url)
  .then(response => response.json())
    .then(({ results, page }) => {
      page = searchAndPaginationHomePage.pageNumber;
      return results;    
  })
  .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  nextBtnHandler() {
  // if (inputValue = null) {
  //   createPopularMovieList();
  // }
  this.incrementPage();
  pageRender.createPopularMovieList();
  },
  decrementPage() {
    if (this.page === 1) return;
    this.page -= 1;
  },
//   prevBtnHandler() {
//   decrementPage();
//   pageRender.createPopularMovieList();
// }
}


// export default fetchPopularMoviesList;
