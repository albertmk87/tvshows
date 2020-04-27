import Search from "./models/Search.js";
import Show from "./models/Show.js";
import Watched from "./models/Watched.js";
import Favourite from "./models/Favourite.js";
import * as searchView from "./views/searchView.js";
import * as showView from "./views/showView.js";
import * as watchedView from "./views/watchedView.js";
import * as favouriteView from "./views/favouriteView.js";
import {elements} from "./views/base.js";


const state={

};
window.state=state;



const controlSearch=async ()=>{
		let searchInputValue=searchView.getInput();
		if(searchInputValue){

		searchView.clearDOM();
		state.search=new Search(searchInputValue);

		searchView.clearInput();

		await state.search.getResults();

		console.log(state.search.tvShows);
		searchView.renderResults(state.search.tvShows);	

		}
		
}
// localStorage.clear();
const controlShow=async () =>{
	const id=window.location.hash.substring(1);
		state.show=new Show(id);

		await state.show.getShow();

		showView.clearShowDOM();

		showView.renderShow(state.show);
		// showView.renderShow(state.show);
		
}

const controlWatched=()=>{
	const id=state.show.id;
	console.log(id);
	
	if(!state.watched.checkIfIsWatched(id)){
		const show=state.watched.addShowToWatched(id,state.show.title,state.show.image,state.show.rating);
		watchedView.renderWatchedShows(show);
	}else{
		alert("You already have this show in your watched list");
	}
	
}


const controlFavourite=()=>{
	const id=state.show.id;
	if(!state.favourites.isInFavourites(id)){
		const favouriteShow=state.favourites.addFavouriteShow(id,state.show.title,state.show.image,state.show.rating);
		favouriteView.renderFavouritesShow(favouriteShow);
	}else{
		alert("You already have this show in your favourites")
	}
	favouriteView.hideMenu(state.favourites.getLength());
}


elements.searchINPUT.addEventListener("submit", e=>{
	e.preventDefault();
	controlSearch();
})


window.addEventListener("hashchange", e=>{
	controlShow();
	

})

window.addEventListener("load", e=>{

	controlShow();
	state.watched=new Watched();
	state.watched.readLocalStorage();
	state.favourites=new Favourite();
	state.favourites.readLocalStorage();

favouriteView.hideMenu(state.favourites.getLength());
	state.watched.watchedShows.forEach(show=>{
		watchedView.renderWatchedShows(show);
	})
	state.favourites.favourites.forEach(favouriteshow=>{
		favouriteView.renderFavouritesShow(favouriteshow);
	})

})

elements.showDOM.addEventListener("click", e=>{

	if(e.target.matches(`.watched, .watched *`)){

		controlWatched();
	}else if(e.target.matches(`.favourites, .favourites *`)){
		controlFavourite();
	}
})

elements.watchedDOM.addEventListener("click", e=>{
	const id=e.target.closest(".watched__show").dataset.itemid;
	console.log(id);
	if(e.target.matches(`.delele_tvshow`)){
		
		state.watched.deleteShowFromWatched(id);
		watchedView.removeFromDom(id);
	}
})

elements.favouritesDOM.addEventListener("click", e=>{
	const id=e.target.closest(".favourite__show").dataset.itemid;
	if(e.target.matches(`.delele_tvshow1`)){
		state.favourites.deleteFavourite(id);
		favouriteView.deleteFromDom(id);
		favouriteView.hideMenu(state.favourites.getLength());
	}
})