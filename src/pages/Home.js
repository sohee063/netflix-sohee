import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
