/* СКРИПТ КНОПКИ НА ВЕРХ */

let btn = document.querySelector('.top-button-footer__btn')

// События
btn.addEventListener('click', toTopMove);

// Функции
function toTopMove(event){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

