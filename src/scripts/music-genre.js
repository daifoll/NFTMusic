const filterCards = document.querySelectorAll('.discover-card');
const content = document.querySelector('.genre-content');


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

