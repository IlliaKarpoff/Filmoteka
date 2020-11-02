function upButtonHandler() {
  window.scrollTo({
    top: document.documentElement.offsetTop,
    behavior: 'smooth'
  }); 
}

export default upButtonHandler;