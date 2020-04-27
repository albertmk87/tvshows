import axios from "axios";


export default class Show {
	constructor(id){
		this.id=id;
	}

	async getShow(){
	const res = await axios(`https://api.tvmaze.com/shows/${this.id}`);
	this.title=res.data.name;
	this.genres=res.data.genres;
	this.url=res.data.officialSite;
	this.rating=res.data.rating.average;
	this.image=res.data.image.original;
	this.runtime=res.data.runtime;
	this.summary=res.data.summary;
	this.network=res.data.network.name;
	
	}



	}