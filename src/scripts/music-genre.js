const content = document.querySelector('.genre-content');
const DATA_SONGS = [
    {
        name: 'Heart & Sol',
        image: `heart & sol.png`,
        genre: 'rock'
    },

    {
        name: 'Witch',
        image: `witch.png`,
        genre: 'k-pop',
    },

    {
        name: 'Eliminate',
        image: `eliminate.png`,
        genre: 'pop',
    },

    {
        name: 'Surgeon',
        image: `surgeon.png`,
        genre: 'k-pop',
    },

    {
        name: 'Wine Feel',
        image: `wine feel.png`,
        genre: 'jazz',
    },

    {
        name: 'Unfortunate',
        image: `unfortunate.png`,
        genre: 'jazz',
    },

    {
        name: 'LiL BIG',
        image: `lil big.png`,
        genre: 'pop',
    },

    {
        name: 'Intensify',
        image: `intensify.png`,
        genre: 'pop',
    },

    {
        name: 'Fresh Flesh',
        image: `fresh flesh.png`,
        genre: 'rock',
    },

    {
        name: 'Finally Death',
        image: `finally death.png`,
        genre: 'funk',
    },

    {
        name: 'Fate',
        image: `fate.png`,
        genre: 'pop',
    },

    {
        name: 'Injury',
        image: `injury.png`,
        genre: 'funk',
    },
]

// Генерируем карточки музыкантов
generateCards()
const filterCards = document.querySelectorAll('.discover-card');

// Фукнция генерации карточек из объекта
function generateCards(){
    for(let i = 0; i < DATA_SONGS.length; i++){
        // Основаня секция
        let card = document.createElement('div');
        card.classList.add('discover-content__card', 'discover-card')
        card.classList.add(`${DATA_SONGS[i].genre}`)
        
        // Подсекции
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('discover-card__header', 'header-genre-card');
        
        
        let cardButtons = document.createElement('div');
        cardButtons.classList.add('discover-card__buttons', 'buttons-genre-card');

        // Кнопки
        let cardPlayBtn = document.createElement('a');
        cardPlayBtn.classList.add('buttons-genre-card__play');
        cardPlayBtn.innerText = 'Play now';
        cardPlayBtn.href = 'https://app.airnfts.com/';
        cardPlayBtn.target = '_blank';
        
        let cardBuyBtn = document.createElement('a');
        cardBuyBtn.classList.add('buttons-genre-card__buy');
        cardBuyBtn.innerText = 'BUY NFT'
        cardBuyBtn.href = 'https://app.airnfts.com/';
        cardBuyBtn.target = '_blank';

        cardButtons.append(cardPlayBtn, cardBuyBtn)

        // Заголовок
        let cardName = document.createElement('span');
        cardName.classList.add('header-genre-card__item');
        cardName.innerText = DATA_SONGS[i].name;
        
        cardHeader.append(cardName);

        // Картинка
        let cardImage = document.createElement('img');
        cardImage.classList.add('discover-card__img');
        cardImage.src = require(`../images/discover/${DATA_SONGS[i].image}`);

        
        card.append(cardImage, cardHeader, cardButtons)
        
        document.querySelector('.discover-content').append(card)
    }

}

content.addEventListener('click', toFilterGenre)


function toFilterGenre(event){
    if(event.target.tagName !== 'BUTTON') return false
    
    let filterGenre = event.target.dataset['g'];
    
    if(filterGenre == 'all'){
        filterCards.forEach(item => {
            if(item.classList.contains('discover-hide')){
                item.classList.remove('discover-hide')
                item.hidden = false;
            }
        })

        return false
    }


    filterCards.forEach(item=>{
        if(!item.classList.contains(filterGenre)){
            item.classList.add('discover-hide')
            item.hidden = true;
        }else{
            item.classList.remove('discover-hide')
            item.hidden = false;
        }
    })

}

