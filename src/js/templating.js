import detailsPageTpl from '../templates/detailsPage.hbs';
import refs from './refs';

function updateDetailsPageMarkUp(result) {
  const markUp = detailsPageTpl(result); 
  refs.detailsPage.insertAdjacentHTML('beforeend', markUp);
};

export default updateDetailsPageMarkUp;