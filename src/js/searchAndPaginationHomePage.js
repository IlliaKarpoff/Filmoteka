import refs from './refs';

const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

export default {
  fetchSearchMoviesList() {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${this.inputValue}&page=${this.pageNumber}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ results, total_pages}) => {
      if (total_pages === 1 || results <= 20) {
        refs.nextBtn.classList.add('is-hidden');
      }
      if (total_pages === 0) {
        refs.nextBtn.classList.add('is-hidden');
        refs.pageBtn.textContent = total_pages;
      }
      // if (!results.backdrop_path) {
      //   refs.colorLi.style.backgroundColor = 'yellow';
      // }
      return results;
    })
  .catch(error => console.log(error));
  },
  updateURL() {
    // if (history.pushState) {
      // var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      this.newUrl = new URL(`http://localhost:4040/?query=${this.inputValue}&page=${this.pageNumber}`);
      // history.pushState(newUrl, null);
    return this.newUrl;
    // }
  },
  resetPage() {
    this.pageNumber = 1;
    this.newUrl = new URL(`http://localhost:4040/?query=${this.inputValue}&page=${this.pageNumber}`);
  },
  incrementPage() {
    this.pageNumber += 1;
    // this.newUrl = new URL(`http://localhost:4040/?query=${this.inputValue}&page=${this.pageNumber}`);
    // console.log(this.newUrl);
    this.updateURL();
    console.log(this.newUrl);
  },
  decrementPage() {
    if (this.pageNumber === 1) return;
    this.pageNumber -= 1;
    this.updateURL();
    console.log(this.newUrl);
  },
  get query() {
    return this.inputValue;
  },
  set query(newValue) {
    this.inputValue = newValue;
  }
};