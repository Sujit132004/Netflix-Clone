import React from 'react';
import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({ movieId }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  // Call the custom hook to fetch movie by ID
  useMovieById(movieId); // Pass movieId directly

  return (
    <div className='w-screen'>
      {trailerMovie && trailerMovie.key ? (
        <iframe
          width="560"
          className='w-screen aspect-video'
          src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available.</p> // Fallback if no trailer is found
      )}
    </div>
  );
};

export default VideoBackground;
