// const upButton = document.querySelector('.up-btn');
function upButtonHandler() {
  //  if (document.documentElement.offsetHeight > document.documentElement.clientHeight) {
  //   upButton.classList.remove('is-hidden');
  // }
  window.scrollTo({
    top: document.documentElement.offsetTop,
    behavior: 'smooth'
  }); 
}

export default upButtonHandler;