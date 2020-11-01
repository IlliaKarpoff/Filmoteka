const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

function fetchPopularMoviesList() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en&page=1`;
  
  return fetch(url)
  .then(response => response.json())
    .then(({ results }) => {
      return results;
      
  })
  .catch(error => console.log(error));
}

export default fetchPopularMoviesList;
