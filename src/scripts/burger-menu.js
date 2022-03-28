/* СКРИПТ БУРГЕР-МЕНЮ */
"use strict"

const navigation = document.querySelector('.navigation');
const navigationList = document.querySelector('.navigation__list');
const navigationBtn = document.querySelector('.nav-btn');
const navigationBtnItem = document.querySelector('.nav-btn__item');

// События
navigationBtn.addEventListener('click', openMenu);
navigation.onload = navigationLoad();


// Функции
function openMenu(event){
    navigation.classList.toggle('navigation-active');
    navigationBtnItem.classList.toggle('nav-btn__active');
}

function navigationLoad(event){
    const headerNav = document.querySelector('.nav-header__list');

    for(let li of headerNav.children){
        const aMain = li.children[0];

        let liElement = document.createElement('li');
        liElement.classList.add('list-nav__item')
        navigationList.append(liElement);

        let aElement = document.createElement('a');
        aElement.classList.add(aMain.className);
        aElement.href = aMain.href;
        aElement.target = aMain.target;
        aElement.textContent = li.textContent;
        liElement.append(aElement);
    } 

}

