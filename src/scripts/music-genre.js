const content = document.querySelector('.genre-content');
const DATA_SONGS = [
    {
        name: 'Heart & Sol',
        image: `../images/discover/heart & sol.png`,
        genre: 'rock'
    },

    {
        name: 'Witch',
        image: `../images/discover/witch.png`,
        genre: 'k-pop',
    },

    {
        name: 'Eliminate',
        image: `../images/discover/eliminate.png`,
        genre: 'pop',
    },

    {
        name: 'Surgeon',
        image: `../images/discover/surgeon.png`,
        genre: 'k-pop',
    },

    {
        name: 'Wine Feel',
        image: `../images/discover/wine feel.png`,
        genre: 'jazz',
    },

    {
        name: 'Unfortunate',
        image: `../images/discover/unfortunate.png`,
        genre: 'jazz',
    },

    {
        name: 'LiL BIG',
        image: `../images/discover/lil big.png`,
        genre: 'pop',
    },

    {
        name: 'Intensify',
        image: `../images/discover/intensify.png`,
        genre: 'pop',
    },

    {
        name: 'Fresh Flesh',
        image: `../images/discover/fresh flesh.png`,
        genre: 'rock',
    },

    {
        name: 'Finally Death',
        image: `../images/discover/finally death.png`,
        genre: 'funk',
    },

    {
        name: 'Fate',
        image: `../images/discover/fate.png`,
        genre: 'pop',
    },

    {
        name: 'Injury',
        image: `../images/discover/injury.png`,
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
        let cardPlayBtn = document.createElement('button');
        cardPlayBtn.classList.add('buttons-genre-card__play');
        cardPlayBtn.innerText = 'Play now'
        
        let cardBuyBtn = document.createElement('button');
        cardBuyBtn.classList.add('buttons-genre-card__buy');
        cardBuyBtn.innerText = 'BUY NFT'

        cardButtons.append(cardPlayBtn, cardBuyBtn)

        // Заголовок
        let cardName = document.createElement('span');
        cardName.classList.add('header-genre-card__item');
        cardName.innerText = DATA_SONGS[i].name;
        
        cardHeader.append(cardName);

        // Картинка
        let cardImage = document.createElement('img');
        cardImage.classList.add('discover-card__img');
        cardImage.src = `${DATA_SONGS[i].image}`;

        
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
