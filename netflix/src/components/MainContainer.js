import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  
  if (!movie) {
    return; // Early return in React
  }

  const selectedMovie = movie[4];
  
  if (!selectedMovie) {
    return null; // Or render some fallback UI
  }

  const { overview, id, title } = selectedMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
