const hotelLink = document.querySelector('.hotel-search-link');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

hotelLink.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.add('modal--show');
});

modalCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.remove('modal--show');
});