import {elements} from "./base.js";


export const renderWatchedShows=(show)=>{
	const markUP=`
			  <li class="watched__show" data-itemid=${show.id}>	

                    <a class="results__link results__link--active" href="" onclick="return false;">
                        <figure class="results__fig">
                            <img src="${show.image}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${show.name}</h4>
                            <p class="results__rating">Rating:<span class="results__big">${show.rating}</span></p>
                       
                        <span class="delele_tvshow">remove</span>
                        </div>
                    </a>

                </li>
	`
	elements.watchedDOM.insertAdjacentHTML("beforeend", markUP);
}


export const removeFromDom=(id)=>{
	const el=document.querySelector(`[data-itemid="${id}"]`)
	console.log(el);
	el.parentElement.removeChild(el);
}
