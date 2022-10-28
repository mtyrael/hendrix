const openModal = document.querySelector('.main_cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('modal_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    
});

closeModal.addEventListener('click', (e)=>{
    
    modal.classList.remove('modal--show');
});