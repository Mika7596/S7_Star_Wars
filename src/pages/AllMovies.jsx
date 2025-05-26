import React from "react";
import MainHeader from "../components/header/MainHeader";
import MainNavbar from "../components/navbar/MainNavbar";
import MoviesMain from "../components/movies-main/MoviesMain";

function AllMovies() {
  return (
    <>
      <MainHeader></MainHeader>
      <MainNavbar></MainNavbar>
      <MoviesMain></MoviesMain>
    </>
  );
}

export default AllMovies;
