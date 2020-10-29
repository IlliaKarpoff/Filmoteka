import filmDetailsPageTemplate from '../templates/detailsPage.hbs';


const templating = (results) => {
  const detailsPage = document.querySelector('#detailsPage');
  detailsPage.insertAdjacentHTML('beforeend', filmDetailsPageTemplate(results));
};

export default templating;