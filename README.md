Making tv shows search app similar to the recipe app. Made by using the tvmaze tv show api. Used 4 models(Search.js, Show.js, Watched.js and Favourite.js)
and 4 views (searchView,showView,watchedView and favouriteView). After entering a word in the search input example the word "bad"
all tv shows including the word bad(in this API) will be displayed on the left side(Search.js and searchView.js). Every show has an image,title and rating.
After clicking on a single show an event listener on hash change is called and more details for the show are then displayed in the middle
(Show.js and showView.js). Here a show object is made with title,image,runtime,an array of genres of the show,summary, tv name and official url.
All of this information are displayed in the middle plus two buttons where we can select the show to the watched list or to the favourite list.
After clicking add to watched list the show is then displayed in the watched shows. Watched shows is another model where we make the object 
by adding every object show to a list. Every object contains id,name,image and rating(Watched.js and watchedView.js). We have a delete function
to delete a certaing show from the watched list and a check function to check if the show is already in the list.
Similar to the wathched list is the favourite list.


NOTE IN ORDER FOR THIS APP TO WORK YOU MUST PULL THE PROJECT AND THEN CHANGE THE APIs URL IN SEARCH.js and SHOW.js
from (`https://api.tvmaze.com/search/shows?q=${this.searchInput}`) to (`http://api.tvmaze.com/search/shows?q=${this.searchInput}`) in Search
from (`https://api.tvmaze.com/shows/${this.id}`) to (`http://api.tvmaze.com/shows/${this.id}`) in Show.js

http api doesnt seem to work with github.
