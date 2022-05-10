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
    navigationList.classList.toggle('navigation__list-active');
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
    
    const headerContacts = document.querySelector('.contacts-header')

    for(let link of headerContacts.children){

        let aElement = document.createElement('a');
        aElement.classList.add(link.className, 'contacts-header__burger-item');
        aElement.href = link.href;
        aElement.target = link.target;
        aElement.innerHTML = link.innerHTML;

        let lastLiElement = navigationList.lastChild.children[0];
        
        if(!lastLiElement.classList.contains('contacts-header__link')){
            let liElement = document.createElement('li');
            liElement.classList.add('list-nav__item')
            navigationList.append(liElement);
            liElement.append(aElement);
        }else{
            let liElement = navigationList.lastChild;
            liElement.append(aElement);
        }
    }

}

