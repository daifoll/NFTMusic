const filterCards = document.querySelectorAll('.discover-card');
const content = document.querySelector('.genre-content');


content.addEventListener('click', toFilterGenre)


function toFilterGenre(event){
    if(event.target.tagName !== 'BUTTON') return false
    
    let filterGenre = event.target.dataset['g'];
    
    filterCards.forEach(item=>{
        if(!item.classList.contains(filterGenre)){
            item.classList.add('discover-hide')
            setTimeout(()=>{
                item.hidden = true;
            }, 1000)
        }else{
            item.classList.remove('discover-hide')
            setTimeout(()=>{
                item.hidden = false;
            }, 1000)
        }
    })
}

console.log(filterCards)
