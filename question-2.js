//Question 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating" ;

const gamelistContainer = document.querySelector(".container");



    
  
setTimeout(function() {
    
async function gameInfo () {
    try {
        const response = await fetch(url);

        const result = await response.json();

        const rating = result.results;
        
        const loading = document.querySelector(".loader");

        gamelistContainer.innerHTML = `<h1>Best Games</h1>`;
    
        loading.classList.remove("loader");

            for (let i = 0; i < rating.length; i++){
            
                gamelistContainer.innerHTML += `<h4 class="header"></h4>` + `<div class="gameInfo">Name: ${rating[i].name}</div>` 
            + `<div class="gameRating">Rating: ${rating[i].rating}</div>`+ 
            `<div class="tags">Tags: ${rating[i].tags.length}</div>`;

                if (i === 8) {
                    break;
                }                    
            }
    } catch {
        
        gamelistContainer.innerHTML = errorMessage( "Something when wrong! Check your url and try again  ");
    }   
}
gameInfo();
}, 3000); 

