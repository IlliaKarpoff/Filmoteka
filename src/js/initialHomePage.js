const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

export default {
  inputValue: '',
  pageNumber: 1,
  newUrl: null,
  fetchPopularMovies() {
  // const newUrl = new URL(`http://localhost:4040/?page=${this.pageNumber}`);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=${this.pageNumber}`;

  return fetch(url)
  .then(response => response.json())
    .then(({ results }) => {
      return results;    
  })
  .catch(error => console.log(error));
  },
  updateURL() {
    // if (history.pushState) {
      // var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      this.newUrl = new URL(`http://localhost:4040/?page=${this.pageNumber}`);
      // history.pushState(newUrl, null);
    return this.newUrl;
    // }
  },

  resetPage() {
    this.pageNumber = 1;
    // this.newUrl = new URL(`http://localhost:4040/?page=${this.pageNumber}`);
    // this.updateURL();
    console.log(this.newUrl);
  },
  incrementPage() {
    this.pageNumber += 1;
    // this.newUrl = new URL(`http://localhost:4040/?page=${this.pageNumber}`);
    this.updateURL();
    console.log(this.newUrl);
  },
  decrementPage() {
    if (this.pageNumber === 1) return;
    this.pageNumber -= 1;
    this.updateURL();
  },
} 