const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

export default {
  pageNumber: 1,
  fetchPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`;
  
  return fetch(url)
  .then(response => response.json())
    .then(({ results }) => {
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
    if (this.pageNumber === 1) return;
    this.pageNumber -= 1;
  },
}
