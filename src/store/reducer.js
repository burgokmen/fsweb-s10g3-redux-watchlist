import { movies } from "../movies";
const initalState = {
  movies: movies,
  favoriFilmler: [
    {
      id: 116,
      title: "Interstellar",
      year: "2014",
      runtime: "169",
      genres: ["Adventure", "Drama", "Sci-Fi"],
      director: "Christopher Nolan",
      actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    },
  ],
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
