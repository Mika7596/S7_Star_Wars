import React from "react";
import MainHeader from "../components/header/MainHeader";
import MainNavbar from "../components/navbar/MainNavbar";
import MoviesMain from "../components/movies-main/MoviesMain";
import MoviesCast from "../components/movies-cast/MoviesCast";
import { DisplayCastContext } from "../contexts/display-actors.context";
import { useContext } from "react";

function AllMovies() {
    const {actorsAvailable} = useContext(DisplayCastContext)

  return (
    <>
      <MainHeader></MainHeader>
      <MainNavbar></MainNavbar>
      
      {actorsAvailable ? <MoviesCast></MoviesCast> : <MoviesMain></MoviesMain>}
    </>
  );
}

export default AllMovies;
