import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default class Favourites {
	constructor(){
		this.favourites=[];
	}

	addFavouriteShow(id,title,image,rating){
		let favouriteShow={
			id:id,
			title:title,
			image:image,
			rating:rating
		}
		this.favourites.push(favouriteShow);
		this.saveToLocalStorage();
		return favouriteShow;
	}

	saveToLocalStorage() {
			localStorage.setItem('favourites', JSON.stringify(this.favourites));
	}
	readLocalStorage() {
			const storage=JSON.parse(localStorage.getItem('favourites'));
			if(storage){
					this.favourites=storage;
			}
	}

	isInFavourites(id){
		const index=this.favourites.findIndex(el=>el.id===id);
		return index!==-1;
	}

	deleteFavourite(id){
		const index=this.favourites.findIndex(el2=>el2.id===id);
		this.favourites.splice(index,1);
		this.saveToLocalStorage();
	}

	getLength(){
		return this.favourites.length;
	}
}