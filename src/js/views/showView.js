import {elements} from "./base.js";


export const clearShowDOM=() =>{
	elements.showDOM.innerHTML="";
}

const showGenres=(genre)=>{
	return `
	 	<span class="recipe__info-data recipe__info-data--minutes">${genre}</span>
	`
}


export const renderShow=(show)=>{
	const markUP=
	`
		  <figure class="recipe__fig">
                <img src="${show.image}" alt="Tomato" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${show.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                   
                    <span class="recipe__info-data recipe__info-data--minutes">runtime:${show.runtime}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                   
                    <span class="recipe__info-data recipe__info-data--people">IMDB rating:</span>
                    <span class="recipe__info-text"><strong>${show.rating}</strong></span>
                  
                </div>
         	   <div class="recipe__info">
                   
                  
                    ${show.genres.map(genre=>showGenres(genre)).join("")}
                   
                   
                </div>
            </div>
            <div class="recipe__ingredients">
                <p>${show.summary}</p>
                <button class="btn-small recipe__btn favourites">
                    
                    <span>Add to favourite tv shows</span>
                </button>
                  <button class="btn-small recipe__btn watched">
                   
                    <span>Add to watched tv shows</span>
                </button>
            </div>
            <div class="recipe__directions">
                <h2 class="heading-2">Other informations</h2>
                <p class="recipe__directions-text">
                    This tv show was/is on the tv network
                    <span class="recipe__by">${show.network}</span>.Visit the official website on the following link.
                </p>
                <a class="btn-small recipe__btn" href="${show.url}">
                    <span>Official website</span>
                   
                </a>
            </div>
	`
	elements.showDOM.insertAdjacentHTML("beforeend", markUP);
}