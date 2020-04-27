import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default class Watched {
	constructor(){
		this.watchedShows=[];
	}

	addShowToWatched(id,name,image,rating) {
			let show={
				id:id,
				name:name,
				image:image,
				rating:rating
			}
			this.watchedShows.push(show);
			this.saveToLocalStorage();
			return show;
	}

	deleteShowFromWatched(id){
		const index=this.watchedShows.findIndex(show=> show.id===id);
		
		this.watchedShows.splice(index,1);
	
		this.saveToLocalStorage();
	}
	checkIfIsWatched(id){
		const index=this.watchedShows.findIndex(show=> show.id===id);
		return index!==-1;
	}
	saveToLocalStorage() {
			localStorage.setItem('watched', JSON.stringify(this.watchedShows));
	}
	readLocalStorage() {
			const storage=JSON.parse(localStorage.getItem('watched'));
			if(storage){
					this.watchedShows=storage;
			}
	}
}