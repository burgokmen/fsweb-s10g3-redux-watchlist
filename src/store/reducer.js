import { movies } from "../movies";
import { SONRAKI_FILM, ONCEKI_FILM, FAV_EKLE, FAV_SIL } from "./actions";

const initalState = {
  movies: movies,
  sira: 0,
  favoriFilmler: [
    {
      id: 53,
      title: "Vicky Cristina in Barcelona",
      year: "2008",
      runtime: "96",
      genres: ["Drama", "Romance"],
      director: "Woody Allen",
      actors:
        "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
      plot: "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg",
    },
  ],
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SONRAKI_FILM:
      if (state.sira < state.movies.length - 1) {
        return {
          ...state,
          sira: state.sira + 1,
        };
      } else {
        return {
          ...state,
          sira: initalState.sira,
        };
      }
    case ONCEKI_FILM:
      if (state.sira > 0) {
        return {
          ...state,
          sira: state.sira - 1,
        };
      } else {
        return {
          ...state,
          sira: state.movies.length - 1,
        };
      }

    case FAV_EKLE:
      return {
        ...state,
        favoriFilmler: [...state.favoriFilmler, state.movies[state.sira]],
        movies: state.movies.filter(
          (m) => m.id !== state.movies[state.sira].id
        ),
        sira: state.sira === 0 ? 0 : state.sira - 1,
      };
    /*     case FAV_SIL:
      return {
        ...state,
        favoriFilmler: [...state.favoriFilmler, state.movies[state.sira]],
        movies: state.movies.filter(
          (m) => m.id !== state.movies[state.sira].id
        ),
        sira: state.sira === 0 ? 0 : state.sira - 1,
      }; */

    default:
      return state;
  }
};
export default reducer;
