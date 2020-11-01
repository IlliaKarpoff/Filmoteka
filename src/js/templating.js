import detailsPageTpl from '../templates/detailsPage.hbs';

const detailsPage = document.querySelector('#detailsPage');

function updateDetailsPageMarkUp(result) {
  const markUp = detailsPageTpl(result); 
  detailsPage.insertAdjacentHTML('beforeend', markUp);
};

export default updateDetailsPageMarkUp; 