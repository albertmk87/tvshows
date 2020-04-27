import axios from "axios";

export default class Search {
	constructor(searchInput){
			this.searchInput=searchInput;
	}

	async getResults(){
	const res = await axios(`https://api.tvmaze.com/search/shows?q=${this.searchInput}`);
	this.tvShows=res.data;
	}


}