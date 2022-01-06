import { combineReducers } from "redux";
import featuredMovie from "./featured-movie";
import popularMovies from "./popular-movies";

export default combineReducers({
    featuredMovie,
    popularMovies,
});