import refs from './refs';

const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

export default {
  // inputValue: '',
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
  get query() {
    return this.inputValue;
  },
  set query(newValue) {
    this.inputValue = newValue;
  }
};