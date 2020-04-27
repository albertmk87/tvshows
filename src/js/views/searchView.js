import {elements} from "./base.js";



export const getInput=()=>{
	return elements.searchINPUTValue.value;
}

export const clearInput=()=>{
	elements.searchINPUTValue.value="";
}

export const clearDOM=()=>{
	elements.resultsDOM.innerHTML="";
}


const renderShow=(show)=>{
	const markUP=`
			  <li>
                    <a class="results__link results__link--active" href="#${show.show.id}">
                        <figure class="results__fig">
                            <img src="${show.show.image.medium}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${show.show.name}</h4>
                            <p class="results__rating">Rating:<span class="results__big">${show.show.rating.average}</span></p>
                        </div>
                    </a>
                </li>
	`
	elements.resultsDOM.insertAdjacentHTML("beforeend", markUP);
	
}

export const renderResults=(tvshows)=>{
	tvshows.forEach(show=>{
		renderShow(show);
	})
}