const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

export default {
  searchQuery: '',
  pageNumber: 1,
  fetchPopularMoviesList() {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${this.searchQuery}&page=${this.pageNumber}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      // this.incrementPage();
      return results;
    })
  .catch(error => console.log(error));
  },
  resetPage() {
    this.pageNumber = 1;
  },
  incrementPage() {
    this.pageNumber += 1;
  },
  decrementPage() {
    this.pageNumber -= 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};