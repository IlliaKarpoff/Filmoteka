
// import fetchMovieTpl from '../templates/fetchMovie.hbs';
// import fetchMovieByID from './fetchMovieByID';
// import updateDetailsPageMarkUp from './templating';
// import refs from './refs';


// const openLib = (event) =>{
//   refs.sectionLib.classList.remove('hidden');
//   refs.sectionLib.classList.add('visible');
//   refs.searchForm.classList.add('hidden');
//   // refs.main.classList.add('hidden');
//   console.log("показываем кнопки");
// };


// function openLib() {
//   const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";
//   fetchList() {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${this.searchQuery}&page=${this.pageNumber}`;
//     // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc`;
//       fetch(url)
//       .then(response => response.json())
//       .then(({ results }) => {
//         console.log(results);
//       // const markUp = fetchMovieTpl(results); 
//       // refs.libList.insertAdjacentHTML('beforeend', markUp);
//       })
//   }
//   // function updatelibery(results) {
    
//   // };

// } 
//     .catch(error => console.log(error));
//     }
//     function updateDetailsPageMarkUp(result) {
//       const markUp = detailsPageTpl(result); 
//       detailsPage.insertAdjacentHTML('beforeend', markUp);
//     };
// }

// export default openLib;
// export default openLib;

// refs.input.addEventListener('submit', event => {
//   event.preventDefault();

//   submitQuery = event.currentTarget.elements.query.value;
//   page = 1;
//   refs.galleryList.innerHTML = ''; 
//   imagesObj.fetchGallery(submitQuery, page).then(data => (data.hits))
//     // .then(updateGalleryMarkup) 
//     .then(hits => {updateGalleryMarkup(hits);
//       page += 1;
//     })
//   }
// ) 
