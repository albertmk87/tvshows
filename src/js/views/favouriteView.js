import {elements} from "./base.js";


export const renderFavouritesShow=(show)=>{
	const markUP=`
		<li class="favourite__show" data-itemid=${show.id}>	
                <a class="likes__link" href="#${show.id}">
                   <figure class="likes__fig">
                       <img src="${show.image}" alt="Test">
                          </figure>
                        <div class="likes__data">
                           <h4 class="likes__name">${show.title}</h4>
                               <p class="likes__author">Rating: ${show.rating}</p>
                                <span class="delele_tvshow1">DELETE</span>
                            </div>
                         </a>
         </li>

	`



	elements.favouritesDOM.insertAdjacentHTML("beforeend", markUP);

}


export const deleteFromDom=(id)=>{
	const el=document.querySelector(`.likes__link[href="#${id}"]`);
	el.parentElement.removeChild(el);
}

export const hideMenu=(favouritesLength)=>{
		elements.favouritesMENU.style.visibility=favouritesLength>0 ? "visible" : "hidden";
	}